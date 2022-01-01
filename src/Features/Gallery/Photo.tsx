/** @jsx jsx */
import { FC } from 'react'
import { jsx, css } from '@emotion/core'
import { colors, Flex, Button } from '../theme'
import type { TPhoto } from '../../StateManager/definitions/TPhoto'

const Wrapper = ({ onClick, ...rest }) => {
  return (
    <Button
      ninja
      onClick={onClick}
      css={css`
        color: ${colors.grayLight};
        margin: 0 0 24px;
        border-radius: 4px;
        line-height: 14px;
        position: relative;
        height: min-content;

        @media (min-width: 768px) {
          padding: 0 8px;
          margin: 0 0 48px;
        }

        @media (min-width: 1024px) {
          width: 33.333%;
          margin: 0 0 20px;
        }
      `}  {...rest} />
  )
}

export type Props = {
  item: TPhoto
  onClick(): void
  style: object
}

export const Photo: FC<Props> = ({
  item,
  onClick,
  style,
}) => {
  const { url, title } = item
  const { maxHeight, ...wrapperStyle } = style
  return (
    <Wrapper {...{ onClick, style: wrapperStyle }}>
      <img src={url} alt={title} css={css`
        width: 100%;
        background: ${colors.gray};
        border-radius: 4px;
        min-height: 64px;
        height: auto;
        object-fit: cover;
        box-shadow: 0 0 3px 1px ${colors.black}88;

        @media (min-width: 768px) {
          max-height: ${maxHeight};
        }
       `} />
    </Wrapper>
  )
}
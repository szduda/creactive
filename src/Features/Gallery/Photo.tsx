/** @jsx jsx */
import { FC } from 'react'
import { jsx, css, } from '@emotion/core'
import { colors, Flex, Button } from '../theme'
import type { TPhoto } from '../../StateManager/definitions/TPhoto'

const Wrapper = ({ onClick, ...rest }) => {
  return (
    <Button ninja onClick={onClick}>
      <Flex.Col
        valign="space-between"
        css={css`
          background: ${colors.gray};
          color: ${colors.grayLight};
          margin: 0 0 16px;
          border-radius: 4px;
          line-height: 14px;
          box-shadow: 0 2px 4px 0 ${colors.grayDark}44;
          position: relative;
          min-height: 64px;
          overflow: hidden;
          width: 100%;
    `} {...rest} />
    </Button>
  )
}

export type Props = {
  item: TPhoto
  onClick(): void
}

export const Photo: FC<Props> = ({
  item,
  onClick,
}) => {
  const { url, title } = item
  return (
    <Wrapper {...{ onClick }}>
      <img src={url} alt={title} css={css`width: 100%;`} />
    </Wrapper>
  )
}
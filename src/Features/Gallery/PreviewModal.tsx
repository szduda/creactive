
/** @jsx jsx */
import { FC } from 'react'
import { jsx, css, } from '@emotion/core'
import { colors, Flex, Button } from '../theme'
import type { TPhoto } from '../../StateManager/definitions/TPhoto'

const Wrapper = ({ onClick, ...rest }) => {
  return (
    <Button ninja onClick={onClick}>
      <Flex.Col
        valign='center'
        css={css`
          background: ${colors.grayDark};
          color: ${colors.black};
          padding: 0;
          margin: 0;
          font-size: 12px;
          line-height: 14px;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 100vh;
          z-index: 1000;
          display: flex;

          @media (orientation: landscape) {
            align-items: flex-end;
            flex-direction: row;
          }
    `} {...rest} />
    </Button>
  )
}

const Title = ({ title }) => (
  <h2 css={css`
    margin: 0;
    padding: 16px 12px 0;
    font-size: 32px;
    line-height: 1.5;
    color: ${colors.white};
    font-variant: all-small-caps;
  `}>
    {title}
  </h2>
)

const Description = ({ description }) => (
  <p css={css`
    color: ${colors.grayLighter} !important;
    padding: 16px 12px;
    text-align: left;
  `}>
    {description}
  </p>
)

export type Props = {
  item: TPhoto
  onClick(): void
}

export const PreviewModal: FC<Props> = ({
  onClick,
  item,
}) => {
  const { url, title, description } = item
  return (
    <Wrapper {...{ onClick }}>
      <img src={url} alt={title} css={css`
        width: 100%;

        @media (orientation: landscape) {
          width: auto;
          height: 100%;
        }
      `} />
      <Flex.Col>
        <Title {...{ title }} />
        <Description {...{ description }} />
      </Flex.Col>
    </Wrapper>
  )
}
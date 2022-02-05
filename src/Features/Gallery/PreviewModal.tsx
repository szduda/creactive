/** @jsx jsx */
import { FC } from 'react'
import { jsx, css } from '@emotion/react'
import { colors, Flex, Button } from '../theme'
import type { TPhoto } from '../../StateManager'

const Wrapper = ({ onClick, ...rest }) => {
  return (
    <Button ninja onClick={onClick}>
      <Flex.Col
        valign="center"
        css={css`
          background: ${colors.gray};
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
          flex-wrap: wrap;
          flex-direction: row;
          align-items: center;
          overflow: auto;
        `}
        {...rest}
      />
    </Button>
  )
}

const Title = ({ title }) =>
  title ? (
    <h2
      css={css`
        margin: 0;
        padding: 16px 12px 0;
        font-size: 32px;
        line-height: 1.5;
        color: ${colors.white};
        font-variant: all-small-caps;
      `}
    >
      {title}
    </h2>
  ) : null

const Description = ({ description }) =>
  description ? (
    <p
      css={css`
        color: ${colors.grayLighter} !important;
        padding: 16px 12px;
        text-align: left;
      `}
    >
      {description}
    </p>
  ) : null

export type Props = {
  item: TPhoto
  onClick(): void
}

export const PreviewModal: FC<Props> = ({ onClick, item }) => {
  const { url, title, description } = item
  return (
    <Wrapper {...{ onClick }}>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          max-height: 100%;
          justify-content: center;
        `}
      >
        <img
          src={url}
          alt={title}
          css={css`
            width: 100%;

            @media (orientation: landscape), (min-width: 768px) {
              width: auto;
              height: auto;
              max-width: min(100%, 1200px);
              max-height: 100vh;
              box-shadow: 0 0 3px 1px ${colors.black}88;
            }
          `}
        />
        <Flex.Col
          css={css`
            height: 100%;
            max-width: 300px;
            justify-content: flex-end;
            align-self: flex-end;

            @media (max-width: 1423px) {
              width: min(1200px, 100%);
              max-width: unset;
            }
          `}
        >
          <Title {...{ title }} />
          <Description {...{ description }} />
        </Flex.Col>
      </div>
    </Wrapper>
  )
}

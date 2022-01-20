/** @jsx jsx */
import { FC } from 'react'
import { jsx, css } from '@emotion/core'
import { colors, Flex, Button, Icons } from '../theme'
import { TDrumSnippet } from '../../StateManager'
import { Tags } from './Tags'

import { GroovyPlayer } from './GroovyPlayer'

export type Props = {
  item: TDrumSnippet
  onClick(): void
}

export const SnippetDetails: FC<Props> = ({
  onClick,
  item: { title, description, tags, patterns },
}) => (
  <Wrapper>
    <BackButton onClick={onClick} />
    <Tags tags={tags} />
    <Title {...{ title }} />
    <Description {...{ description }} />
    <Patterns {...{ patterns }} />
  </Wrapper>
)

const Patterns: FC = ({ patterns }) => (
  <div>
    <h3
      css={css`
        color: ${colors.grayLight};
        text-transform: uppercase;
        letter-spacing: 1.5px;
        font-size: 24px;
        line-height: 48px;
        margin: 24px 0;
      `}
    >
      Patterns
    </h3>
    <GroovyPlayer tracks={patterns} />
  </div>
)

const Wrapper: FC = ({ children, ...props }) => {
  return (
    <Flex.Col
      valign="center"
      css={css`
        color: ${colors.black};
        padding: 0;
        margin: 0 16px;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        width: 100%;
      `}
      {...props}
    >
      <Flex.Col
        css={css`
          background: ${colors.grayDark};
          width: 100%;

          @media (max-width: 767px) {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            padding: 24px 12px;
            overflow-y: auto;
          }
        `}
      >
        {children}
      </Flex.Col>
    </Flex.Col>
  )
}

const Title = ({ title }) =>
  title ? (
    <h2
      css={css`
        margin: 0;
        padding: 0;
        font-size: 40px;
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
        text-align: left;
        margin-bottom: 24px !important;
      `}
    >
      {description}
    </p>
  ) : null

const BackButton = (props) => (
  <Button
    ninja
    css={css`
      color: ${colors.grayLighter};
      margin: 0 0 24px;
      padding: 12px 0;
      display: flex;
      align-items: center;
      font-family: Consolas;
      font-weight: 700;

      @media (min-width: 768px) {
        display: none;
      }
    `}
    {...props}
  >
    <Icons.Arrow
      right
      color={colors.grayLighter}
      css={css`
        margin-right: 8px;
      `}
    />
    <span
      css={css`
        text-transform: uppercase;
      `}
    >
      back to list
    </span>
  </Button>
)

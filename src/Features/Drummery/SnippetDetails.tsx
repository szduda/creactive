/** @jsx jsx */
import { FC } from 'react'
import { jsx, css } from '@emotion/react'
import { colors, Flex, Button, Icons } from '../theme'
import { TDrumSnippet } from '../../StateManager'
import { Tags } from './Tags'

import { GroovyPlayer } from './GroovyPlayer'

export type Props = {
  item: TDrumSnippet
  onClose(): void
  onTagClick(tag: string): void
}

export const SnippetDetails: FC<Props> = ({
  onTagClick,
  onClose,
  item: { title, description, tags, patterns, tempo, swingStyle },
}) => (
  <Wrapper>
    <BackButton onClick={onClose} />
    <Tags tags={tags} onClick={onTagClick} />
    <Title {...{ title }} />
    <Description {...{ description }} />
    <Patterns {...{ patterns, tempo, swingStyle }} />
  </Wrapper>
)

const Patterns: FC = ({ patterns, tempo, swingStyle }) => (
  <div>
    <h3
      css={css`
        color: ${colors.gray};
        text-transform: uppercase;
        letter-spacing: 1.5px;
        font-size: 24px;
        line-height: 48px;
        margin: 12px 0 0;
      `}
    >
      Patterns
    </h3>
    <GroovyPlayer tracks={patterns} tempo={tempo} swingStyle={swingStyle} />
  </div>
)

const Wrapper: FC = ({ children, ...props }) => (
  <Flex.Col
    css={css`
      width: 100%;

      @media (max-width: 767px) {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        padding: 88px 12px 92px;
        overflow-y: auto;
      }

      @media (min-width: 768px) {
        padding: 0 16px;
      }

      @media (min-width: 1024px) {
        padding: 0 16px 0 24px;
      }

      @media (min-width: 1440px) {
        padding: 0 16px 0 64px;
      }
    `}
  >
    {children}
  </Flex.Col>
)

const Title = ({ title }) =>
  title ? (
    <h2
      css={css`
        margin: 0;
        padding: 0;
        font-size: 32px;
        line-height: 1.5;
        color: ${colors.white};
        text-transform: uppercase;
        letter-spacing: 0.8px;
        text-shadow: 0 0 4px ${colors.black}88;

        @media (min-width: 768px) {
          font-size: 40px;
          letter-spacing: 1.4px;
        }
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

const BackButton = props => (
  <Button
    ninja
    css={css`
      color: ${colors.grayLighter};
      margin: 0 0 24px;
      padding: 12px 0;
      display: flex;
      align-items: center;
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

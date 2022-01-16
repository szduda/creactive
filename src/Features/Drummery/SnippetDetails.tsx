/** @jsx jsx */
import { FC, Fragment } from 'react'
import { jsx, css } from '@emotion/core'
import { colors, Flex, Button, Icons } from '../theme'
import { TDrumSnippet } from '../../StateManager'
import { Tags } from './Tags'

const Wrapper: FC = ({ children, ...props }) => {
  return (
    <Flex.Col
      valign="center"
      css={css`
        color: ${colors.black};
        padding: 0;
        margin: 0 0 0 16px;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
      `}
      {...props}
    >
      <Flex.Col
        css={css`
          background: ${colors.grayDark};

          @media (max-width: 767px) {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            padding: 24px 12px;
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

const Attachments = ({ files }) => files?.length ? (
  <Fragment>
    <h3
      css={css`
        color: ${colors.grayLight};
        text-transform: uppercase;
        letter-spacing: 1.5px;
      `}
    >
      Attachments
    </h3>
    <ul
      css={css`
        margin: 0;
        padding: 0;
        display: flex;
        margin: 0 -4px;
      `}
    >
      {files.map(({ title, type }) => (
        <li
          key={`${title}-${type}`}
          css={css`
            cursor: pointer;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 12px;
            background: ${colors.grayLight};
            border-radius: 4px;
            margin: 0 4px;
            text-transform: uppercase;
            font-weight: 700;
            font-size: 14px;
            line-height: 16px;

            :hover {
              background: ${colors.grayLight}cc;
            }
          `}
        >
          <div
            css={css`
              background: ${colors.gray}44;
              color: ${colors.white};
              padding: 12px;
              margin: 0 0 12px;
              border-radius: 4px;
            `}
          >
            {type}
          </div>
          <span>{title}</span>
        </li>
      ))}
    </ul>
  </Fragment>
) : null

export type Props = {
  item: TDrumSnippet
  onClick(): void
}

export const SnippetDetails: FC<Props> = ({
  onClick,
  item: { title, description, tags, files },
}) => (
  <Wrapper>
    <BackButton onClick={onClick} />
    <Tags tags={tags} />
    <Title {...{ title }} />
    <Description {...{ description }} />
    <Attachments files={files} />
  </Wrapper>
)

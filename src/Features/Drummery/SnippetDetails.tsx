
/** @jsx jsx */
import { FC } from 'react'
import { jsx, css, } from '@emotion/core'
import { colors, Flex, Button } from '../theme'
import { TDrumSnippet } from '../../StateManager'

const Wrapper = props => {
  return (
    <Flex.Col
      valign='center'
      css={css`
        background: ${colors.gray};
        color: ${colors.black};
        padding: 0;
        margin: 0 0 0 8px;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    `} {...props} />
  )
}

const Title = ({ title }) => title ? (
  <h2 css={css`
    margin: 0 0 24px;
    padding: 0;
    font-size: 32px;
    line-height: 1;
    color: ${colors.white};
    font-variant: all-small-caps;
  `}>
    {title}
  </h2>
) : null

const Description = ({ description }) => description ? (
  <p css={css`
    text-align: left;
  `}>
    {description}
  </p>
) : null

export type Props = {
  item: TDrumSnippet
  onClick(): void
}

export const SnippetDetails: FC<Props> = ({
  onClick,
  item: {
    title,
    description,
  },
}) => (
  <Wrapper {...{ onClick }}>
    <Flex.Col css={css`
    background: ${colors.gray};

    @media (max-width: 767px) {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      padding: 24px 12px;
    }
    `}>
      <Button ninja
        onClick={onclick}
        css={css`
          color: ${colors.grayLight};
          margin: 0 0 24px;

          @media (min-width: 768px) {
            display: none;
          }
      `}>
        &lt;&lt; back to list
      </Button>
      <Title {...{ title }} />
      <Description {...{ description }} />
    </Flex.Col>
  </Wrapper>
)
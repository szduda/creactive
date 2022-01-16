/** @jsx jsx */
import { FC } from 'react'
import { jsx, css } from '@emotion/core'
import { colors, Button, Flex } from '../theme'
import type { TDrumSnippet } from '../../StateManager'
import { Tags } from './Tags'

const Wrapper = ({ onClick, selected, ...rest }) => {
  return (
    <Button
      ninja
      onClick={onClick}
      css={css`
        color: ${colors.grayLighter};
        margin: 0 0 12px;
        border-radius: 4px;
        line-height: 14px;
        position: relative;
        height: min-content;
        width: 100%;
        background: ${colors.gray};
        padding: 12px 8px;
        border: 2px solid ${colors.gray};

        :hover {
          background: ${colors.gray}cc;
        }

        ${selected && `border-color: ${colors.grayLight}`}66;
      `}
      {...rest}
    />
  )
}

const Title = (props) => (
  <h4
    css={css`
      margin: 8px 0 0;
      font-size: 18px;
      line-height: 24px;
    `}
    {...props}
  />
)

export type Props = {
  item: TDrumSnippet
  onClick(): void
  selected?: boolean
}

export const ListItem: FC<Props> = ({
  item: { title, tags },
  onClick,
  selected = false,
}) => (
  <Wrapper {...{ onClick, selected }}>
    <Flex.Col>
      <Tags dimmed tags={tags} />
      <Title>{title}</Title>
    </Flex.Col>
  </Wrapper>
)

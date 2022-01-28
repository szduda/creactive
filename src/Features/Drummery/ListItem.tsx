/** @jsx jsx */
import { FC } from 'react'
import { jsx, css } from '@emotion/core'
import { colors, Button, Flex } from '../theme'
import type { TDrumSnippet } from '../../StateManager'
import { Tags } from './Tags'

const Wrapper = ({ onClick, selected, loading, ...rest }) => {
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
        min-width: 240px;
        ${loading && 'pointer-events: none;'}
        background: ${loading
          ? colors.gray + '22'
          : selected
          ? colors.gray
          : colors.gray + '44'};
        padding: 12px 8px;
        border: 2px solid ${loading ? colors.gray + '44' : colors.gray + '66'};

        :hover {
          background: ${colors.gray}cc;
        }
      `}
      {...rest}
    />
  )
}

const Title = props => (
  // eslint-disable-next-line jsx-a11y/heading-has-content
  <h4
    css={css`
      margin: 8px 8px 0;
      font-size: 18px;
      line-height: 24px;
      text-align: left;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    `}
    {...props}
  />
)

const Placeholder = () => (
  <div
    css={css`
      height: 90px;
      width: 100%;
    `}
  />
)

export type Props = {
  item: TDrumSnippet
  loading?: boolean
  onClick?(): void
  selected?: boolean
}

export const ListItem: FC<Props> = ({
  item: { title, tags },
  loading = false,
  onClick,
  selected = false,
}) => (
  <Wrapper {...{ onClick, loading, selected }}>
    {loading ? (
      <Placeholder />
    ) : (
      <Flex.Col>
        <Tags dimmed tags={tags} />
        <Title>{title}</Title>
      </Flex.Col>
    )}
  </Wrapper>
)

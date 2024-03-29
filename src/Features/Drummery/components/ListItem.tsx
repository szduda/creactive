/** @jsx jsx */
import { FC } from 'react'
import { jsx, css } from '@emotion/react'
import { colors, Button, Flex } from '../../theme'
import type { TDrumSnippet } from '../../../StateManager'
import { Tags } from './Tags'

const Wrapper = ({ onClick, selected, loading, featured, dimmed, ...rest }) => {
  return (
    <Button
      ninja
      onClick={onClick}
      css={css`
        color: ${dimmed ? colors.grayLight : colors.grayLighter}ee;
        margin: 0 0 12px;
        border-radius: 4px;
        position: relative;
        height: min-content;
        width: 100%;
        min-width: 200px;
        ${loading && 'pointer-events: none;'}
        background: ${featured
          ? colors.yellow + '0B'
          : loading
          ? colors.gray + '22'
          : selected
          ? colors.gray
          : colors.gray + '44'};
        ${featured && `box-shadow: 0 0 3px ${colors.yellow}BB;`}
        padding: 12px 8px;
        border: 2px solid ${loading ? colors.gray + '44' : colors.gray + '66'};
        transition: transform 150ms ease-out;

        ${selected && `transform: scale(1.03);`}

        :hover {
          background: ${featured ? colors.yellow + '14' : colors.gray + 'cc'};
          color: ${colors.grayLighter};
        }

        :active {
          background: ${featured ? colors.yellow + '19' : colors.gray + 'df'};
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
      font-size: 22px;
      line-height: 24px;
      text-align: left;
      text-transform: uppercase;
      letter-spacing: 0.6px;
      text-shadow: 0 0 4px ${colors.black}88;
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
  featured?: boolean
}

export const ListItem: FC<Props> = ({
  featured = false,
  item: { title, tags },
  loading = false,
  onClick,
  selected = false,
  dimmed = false,
}) => (
  <Wrapper {...{ onClick, loading, selected, dimmed, featured }}>
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

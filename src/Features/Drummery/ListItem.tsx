/** @jsx jsx */
import { FC } from 'react'
import { jsx, css } from '@emotion/core'
import { colors, Button } from '../theme'
import type { TDrumSnippet } from '../../StateManager'

const Wrapper = ({ onClick, ...rest }) => {
  return (
    <Button
      ninja
      onClick={onClick}
      css={css`
        color: ${colors.grayLight};
        margin: 0 0 12px;
        border-radius: 4px;
        line-height: 14px;
        position: relative;
        height: min-content;
        width: 100%;
        background: ${colors.grayDark};
        padding: 12px 8px;

        @media (min-width: 1024px) {
          margin: 0 0 24px;
        }

        :hover {
          background: ${colors.grayDark}cc;
        }
      `}
      {...rest}
    />
  )
}

export type Props = {
  item: TDrumSnippet
  onClick(): void
}

export const ListItem: FC<Props> = ({ item: { title }, onClick }) => (
  <Wrapper {...{ onClick }}>{title}</Wrapper>
)

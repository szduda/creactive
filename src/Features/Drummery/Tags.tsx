/** @jsx jsx */
import { FC } from 'react'
import { jsx, css } from '@emotion/core'
import { colors, Button } from '../theme'

export type Props = {
  tags: string[]
  dimmed?: boolean
}

export const Tags: FC<Props> = ({ tags, dimmed }) => tags?.length ? (
  <ul
    css={css`
      list-style: none;
      margin: 0 -4px;
      padding: 0;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    `}
  >
    {tags.map((tag) => (
      <li
        key={tag}
        css={css`
          ${!dimmed && 'cursor: pointer'};
          margin: 0 4px 8px;
          color: ${dimmed ? colors.grayLight : colors.black};
          padding: 3px 6px;
          background: ${dimmed ? 'transparent' : colors.yellowLight};
          border: 1px solid ${dimmed ? colors.grayDark : colors.yellowLight}66;
          ${!dimmed && 'font-weight: 700'};
          text-shadow: 0 0 1px ${colors.gray}44;
          border-radius: 4px;
          font-size: 14px;
          line-height: 14px;

          ${!dimmed &&
          `:hover {
            background: ${colors.yellow};
          }`}
        `}
      >
        {tag}
      </li>
    ))}
  </ul>
) : null

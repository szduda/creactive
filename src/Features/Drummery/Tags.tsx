/** @jsx jsx */
import { FC } from 'react'
import { jsx, css } from '@emotion/react'
import { colors } from '../theme'

export type Props = {
  tags: string[]
  dimmed?: boolean
  onClick(tag: string): void
}

export const Tags: FC<Props> = ({ tags, dimmed, onClick }) =>
  tags?.length ? (
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
      {tags.map(tag => (
        <li
          role="button"
          aria-label={tag}
          onClick={() => onClick(tag)}
          key={tag}
          css={css`
            ${!dimmed && 'cursor: pointer'};
            margin: 0 4px 8px;
            color: ${dimmed ? colors.grayLight : colors.black};
            padding: 3px 6px;
            background: ${dimmed ? 'transparent' : colors.yellowLight};
            border: 1px solid ${dimmed ? colors.grayDark : colors.yellowLight}66;
            ${!dimmed && 'font-weight: 700'};
            text-shadow: 0 0 4px ${colors.gray}44;
            box-shadow: 0 0 4px 0 ${colors.gray}44;
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

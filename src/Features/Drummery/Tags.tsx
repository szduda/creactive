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

        ${dimmed &&
        `
        height: 30px;
        overflow: hidden;
      `}
      `}
    >
      {tags.map((tag, index) => (
        <li
          role={dimmed ? 'list-item' : 'button'}
          tabIndex={dimmed ? -1 : 0}
          aria-label={tag}
          onClick={() => (dimmed ? null : onClick(tag))}
          onKeyUp={e => (e.key === 'Enter' && !dimmed ? onClick(tag) : null)}
          key={tag}
          css={css`
            ${!dimmed && 'cursor: pointer'};
            margin: 0 4px 8px;
            color: ${dimmed ? colors.grayLight : colors.black};
            padding: 3px 6px;
            background: ${dimmed ? 'transparent' : colors.yellowLight};
            border: 1px solid ${dimmed ? colors.grayDark : colors.yellowLight}66;
            ${!dimmed && 'font-weight: 700'};
            text-shadow: 0 0 4px ${colors.gray}22;
            box-shadow: 0 0 4px 0 ${colors.gray}44;
            border-radius: 4px;
            font-size: 14px;
            line-height: 14px;

            ${!dimmed &&
            `:hover {
              background: ${colors.yellow}dd;
              border-color: ${colors.white}66;
            }
            
            :active {
              background: ${colors.yellow}cc;
              border-color: ${colors.white}66;
            }
            `}
          `}
        >
          {tag}
        </li>
      ))}
    </ul>
  ) : null

/** @jsx jsx */
import { FC } from 'react'
import { jsx, css } from '@emotion/react'
import { colors } from '../../theme'

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
      {tags.map(tag => (
        <li
          role={dimmed ? 'list-item' : 'button'}
          tabIndex={dimmed ? -1 : 0}
          aria-label={tag}
          onClick={() => (dimmed ? null : onClick(tag))}
          onMouseDown={e => e.preventDefault()}
          onKeyUp={e => (e.key === 'Enter' && !dimmed ? onClick(tag) : null)}
          key={tag}
          css={css`
            ${!dimmed && 'cursor: pointer'};
            margin: 0 4px 8px;
            color: ${dimmed ? colors.grayLight : colors.black};
            padding: 4px 6px 2px;
            background: ${dimmed ? 'transparent' : colors.yellowLight};
            border: 2px solid
              ${dimmed ? colors.greenDarker + '1A' : colors.yellowLight + '66'};
            ${!dimmed && 'font-weight: 700'};
            text-shadow: 0 0 4px ${colors.gray}22;
            box-shadow: 0 0 4px 0 ${colors.gray}44;
            border-radius: 4px;
            font-size: 14px;
            line-height: 14px;
            transform: translateY(2px);
            transition: transform 150ms ease-out;

            ${!dimmed &&
            `:hover {
                background: ${colors.yellow}dd;
                border-color: ${colors.yellowLight};
              }
              
              :active {
                background: ${colors.yellow}cc;
                transform: translateY(2px) scale(0.97);
              }
            `}
          `}
        >
          {tag}
        </li>
      ))}
    </ul>
  ) : null

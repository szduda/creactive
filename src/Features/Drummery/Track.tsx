/** @jsx jsx */
import { FC } from 'react'
import { jsx, css } from '@emotion/core'
import { colors, Flex, Button, Icons } from '../theme'

export const Track: FC = ({ title, pattern, muted, setMuted }) => (
  <div
    css={css`
      padding: 8px 16px 24px;
      border-bottom: 2px solid ${colors.grayLight}44;
      margin: 6px 0;
      @media (min-width: 768px) {
        padding: 8px 32px 24px;
      }
    `}
  >
    <Flex.Row
      align="flex-start"
      valign="center"
      css={css`
        margin-bottom: 8px;
      `}
    >
      <div>
        <input
          type="checkbox"
          checked={!muted}
          onChange={(e) => setMuted(!e.target.checked)}
        />
      </div>
      <div
        css={css`
          color: ${colors.gray};
        `}
      >
        {title}
      </div>
    </Flex.Row>
    <div
      css={css`
        font-size: 24px;
        line-height: 36px;
        max-width: 252px;

        @media (min-width: 768px) {
          font-size: 22px;
          max-width: 452px;
          line-height: 48px;
        }

        @media (min-width: 1440px) {
          font-size: 40px;
          line-height: 48px;
          max-width: 816px;
        }
      `}
    >
      |{pattern?.match(/.{1,8}/g)?.join('|')}|
    </div>
  </div>
)

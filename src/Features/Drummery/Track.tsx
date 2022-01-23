/** @jsx jsx */
import { FC } from 'react'
import { jsx, css } from '@emotion/core'
import { colors, Flex, Checkbox, Icons } from '../theme'

export const Track: FC = ({ title, pattern, muted, setMuted }) => (
  <div
    css={css`
      padding: 18px 16px 24px;
      border-bottom: 2px solid ${colors.grayLight}44;
      width: 100%;

      @media (min-width: 768px) {
        padding: 24px 32px;
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
      <Checkbox
        ariaLabel={`${title} track ${muted ? 'off' : 'on'}`}
        onClick={() => setMuted(!muted)}
        checked={!muted}
      />
      <div
        css={css`
          color: ${colors.gray};
        `}
      >
        {title}
      </div>
    </Flex.Row>
    {pattern && <Pattern pattern={pattern} />}
  </div>
)

const Pattern = ({ pattern }) => {
  let barSize = pattern.length
  if (pattern.length % 9 === 0) barSize = 9
  else if (pattern.length % 8 === 0) barSize = 8
  else if (pattern.length % 6 === 0) barSize = 6

  const bars = `|${pattern?.match(RegExp(`.{1,${barSize}}`, 'g'))?.join('|')}|`

  return (
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
      {bars}
    </div>
  )
}

/** @jsx jsx */
import { FC } from 'react'
import { jsx, css } from '@emotion/react'
import { colors, Flex, Checkbox } from '../theme'

export const Track: FC = ({ title, pattern, muted, setMuted }) => (
  <div
    css={css`
      padding: 18px 16px 24px;
      border-bottom: 2px solid ${colors.grayLight}1a;
      width: 100%;

      @media (min-width: 1024px) {
        padding: 24px 16px;
      }

      @media (min-width: 1024px) {
        padding: 24px;
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
        disabled={!pattern}
      />
      <div
        css={css`
          color: ${colors.gray};
          transform: translateY(1px);
        `}
      >
        {title}
      </div>
    </Flex.Row>
    {pattern ? (
      <Pattern pattern={pattern} />
    ) : (
      <div
        css={css`
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${colors.gray};
          @media (min-width: 768px) {
            height: 48px;
          }
        `}
      >
        ...
      </div>
    )}
  </div>
)

const Pattern = ({ pattern }) => {
  let barSize = pattern.length
  if (pattern.length % 6 === 0) barSize = 6
  else if (pattern.length % 8 === 0) barSize = 8
  else if (pattern.length % 9 === 0) barSize = 9

  const bars = `|${pattern?.match(RegExp(`.{1,${barSize}}`, 'g'))?.join('|')}|`

  return (
    <div
      css={css`
        height: 48px;
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

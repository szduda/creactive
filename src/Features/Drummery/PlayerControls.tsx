/** @jsx jsx */
import { FC } from 'react'
import { jsx, css } from '@emotion/core'
import { colors, Flex, Button, Icons } from '../theme'

export const PlayerControls: FC = ({
  playLoop,
  stopLoop,
  metronome,
  setMetronome,
  tempo,
  setTempo,
}) => (
  <Flex.Row
    align="flex-start"
    wrap
    css={css`
      margin: 24px 32px 0;

      @media (min-width: 768px) {
        margin-bottom: 24px;
      }

      > * {
        margin: 0 8px 24px 0;
      }
    `}
  >
    <Button filled onClick={playLoop}>
      Play
    </Button>
    <Button
      filled
      onClick={stopLoop}
      css={css`
        margin-right: 64px;
      `}
    >
      Stop
    </Button>

    <input
      type="text"
      size="2"
      maxLength={3}
      value={tempo}
      onChange={(e) => {
        const value = Number(e.target.value)
        if (value === NaN) return

        setTempo(value)
      }}
    />
    <span
      css={css`
        align-self: flex-end;
        font-size: 24px;
        line-height: 44px;
      `}
    >
      BPM
    </span>

    <input
      type="checkbox"
      id="metronome_checkbox"
      checked={metronome}
      onChange={(e) => setMetronome(e.target.checked)}
      css={css`
        margin-left: 24px !important;
      `}
    />
    <label
      htmlFor="metronome_checkbox"
      css={css`
        align-self: flex-end;
        font-size: 24px;
        line-height: 44px;
        margin-right: 0 !important;
      `}
    >
      metronome
    </label>
  </Flex.Row>
)

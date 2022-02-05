/** @jsx jsx */
import { FC } from 'react'
import { jsx, css } from '@emotion/react'
import { Flex, Button, Checkbox } from '../theme'

export const PlayerControls: FC = ({
  playLoop,
  stopLoop,
  metronome,
  setMetronome,
  tempo,
  setTempo,
  disabled,
}) => (
  <Flex.Row
    align="flex-start"
    wrap
    css={css`
      margin: 24px 16px 0;

      @media (min-width: 768px) {
        margin: 24px 32px 0;
        justify-content: space-between;
      }

      > * {
        margin-bottom: 24px;
      }
    `}
  >
    <Flex.Row>
      <Button filled onClick={playLoop} disabled={disabled}>
        Play
      </Button>
      <Button
        filled
        onClick={stopLoop}
        css={css`
          margin: 0 64px 0 8px;
        `}
        disabled={disabled}
      >
        Stop
      </Button>
    </Flex.Row>

    <Flex.Row>
      <input
        type="text"
        maxLength={3}
        value={tempo}
        disabled={disabled}
        css={css`
          width: 44px;
        `}
        onChange={e => {
          const value = Number(e.target.value)
          if (isNaN(value)) return

          setTempo(value)
        }}
      />
      <span
        css={css`
          align-self: flex-end;
          font-size: 24px;
          line-height: 44px;
          margin-left: 8px;
        `}
      >
        BPM
      </span>
    </Flex.Row>

    <Checkbox
      checked={metronome}
      disabled={disabled}
      onClick={() => setMetronome(!metronome)}
      css={css`
        margin: 0 8px 0 16px;
      `}
    >
      <label
        css={css`
          align-self: flex-end;
          font-size: 24px;
          line-height: 44px;
          margin-right: 0 !important;
        `}
      >
        metronome
      </label>
    </Checkbox>
  </Flex.Row>
)

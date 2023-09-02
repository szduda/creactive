/** @jsx jsx */
import { FC } from 'react'
import { jsx, css } from '@emotion/react'
import { Flex, Button, Icons, colors } from '../../theme'
import { SwingStyle } from '../../../StateManager'

export type Props = {
  playLoop(): void
  stopLoop(): void
  playing: boolean
  metronome: boolean
  setMetronome(arg: boolean): void
  tempo: number
  setTempo(arg: number): void
  disabled: boolean
  swing: boolean
  setSwing(arg: boolean): void
  swingStyle: SwingStyle
  hasSignal: boolean
  signalActive: boolean
  playSignal(): void
}

export const PlayerControls: FC<Props> = ({
  playLoop,
  stopLoop,
  playing,
  metronome,
  setMetronome,
  tempo,
  setTempo,
  disabled,
  swing,
  setSwing,
  swingStyle,
  hasSignal,
  signalActive,
  playSignal,
}) => (
  <Wrapper>
    <Flex.Row css={css(bigRow)}>
      <Flex.Row
        css={css`
          flex: 0;
        `}
        align="flex-start"
      >
        <Button
          ninja
          aria-label={playing ? 'Restart' : 'Play'}
          onClick={playLoop}
          disabled={disabled}
          css={css(playbackButton())}
        >
          {playing ? <Icons.Restart /> : <Icons.Play />}
        </Button>
        <Button
          ninja
          aria-label="Stop"
          onClick={stopLoop}
          css={css(playbackButton('stop', 20))}
          disabled={disabled}
        >
          <Icons.Stop />
        </Button>
      </Flex.Row>

      <Flex.Row align="flex-start" css={css`padding: 2px 0;`}>
        <input
          type="text"
          maxLength={3}
          value={tempo}
          disabled={disabled}
          css={css`
            width: 40px;
            background: ${colors.grayLight}22 !important;
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
            line-height: 40px;
            margin: 0 8px;
            color: ${colors.gray};
          `}
        >
          BPM
        </span>
      </Flex.Row>
    </Flex.Row>

    <Flex.Row css={css(bigRow)}>
      <Flex.Row align="center" css={css(rowWithBorder)}>
        <Button
          ninja
          aria-label="Stop"
          onClick={playSignal}
          css={css`
          margin-right: 8px;
          ${round}
          ${signalActive && orangeFill}
          ${(!hasSignal || disabled) && disabledFill}
        `}
          disabled={disabled}
        >
          <Icons.Signal />
        </Button>
      </Flex.Row>

      <Flex.Row align="flex-end">
        <Button
          ninja
          disabled={disabled}
          aria-label={`turn metronome ${metronome ? 'off' : 'on'}`}
          onClick={() => setMetronome(!metronome)}
          css={css`
            ${round}
            margin-right: 8px;
            ${(!metronome || disabled) && disabledFill}
          `}
        >
          <Icons.Shaker />
        </Button>

        <Button
          ninja
          disabled={disabled || !swingStyle}
          aria-label={`turn swing ${swing ? 'off' : 'on'}`}
          onClick={() => setSwing(!swing)}
          css={css`
            ${round}
            ${(!swing || disabled) && disabledFillPepper}
          `}
        >
          <Icons.Pepper />
        </Button>
      </Flex.Row>
    </Flex.Row>
  </Wrapper>
)

const Wrapper = props => (
  <Flex.Row
    align="space-between"
    valign="center"
    wrap
    css={css`
      width: 100%;
      padding: 24px 16px 0;

      @media (min-width: 768px) {
        padding: 24px 24px 0;
      }

      > * {
        padding-bottom: 24px;
      }
    `}
    {...props}
  />
)

const transition = `
  transition: transform 100ms ease-out;
  :active {
    transform: scale(0.95);
  }
`

const grayBgOnHover = `
  :hover {
    background: ${colors.grayLight}44;
  }
`

const grayFill = `
  fill: ${colors.grayLight};
`

const round = `
  padding: 4px;
  border-radius: 50%;
  ${grayBgOnHover}
  ${transition}
`

const disabledFill = `
  svg g {
    path:first-of-type, 
    path:nth-of-type(2) {
      ${grayFill}
  }
`

const disabledFillPepper = `
  svg path {
    ${grayFill}
    &:first-of-type {
      stroke: ${colors.grayLight};
    }
  }
`

const orangeFill = `
  svg path {
    fill: ${colors.orangeLight};
  }
`

const playbackButton = (variant = 'play', margin = 8) => `
  ${transition}
  padding: 4px;
  margin-right: ${margin}px;
  :hover svg ${variant === 'play' ? 'path' : 'svg'} {
    ${grayFill}
  }
`

const rowWithBorder = `
  @media (min-width: 1024px) {
    border-right: 2px solid ${colors.grayLight}33;
    margin-right: 20px;
    padding-right: 12px;
  }
`

const bigRow = `
  @media (max-width: 1023px) {
    width: 100%;
    justify-content: space-between;
  }
`

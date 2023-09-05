/** @jsx jsx */
import { createContext, useContext, useRef, useEffect, FC } from 'react'
import { jsx, css } from '@emotion/react'

import MIDISounds from './midi-sounds-react'

const bell = 227
const sangbanClosed = 3311
const sangban = 3310
const shaker = 173
const dundunbaOpen = 3312
const dundunbaClosed = 3313
const kenkeniOpen = 3314
const kenkeniClosed = 3315
const kenkeniOpen2 = 3316
const kenkeniClosed2 = 3317
const djembeOpenBass = 3321
const djembeOpenTone = 3318
const djembeOpenSlap = 3320
const djembeMuteTone = 3322
const djembeMuteSlap = 3322
const djembeFlamTone = 3319
const djembeFlamSlap = 3319

export const drums = [
  bell,
  sangban,
  sangbanClosed,
  shaker,
  dundunbaOpen,
  dundunbaClosed,
  kenkeniOpen,
  kenkeniClosed,
  kenkeniOpen2,
  kenkeniClosed2,
  djembeOpenBass,
  djembeOpenTone,
  djembeOpenSlap,
  djembeMuteTone,
  djembeMuteSlap,
  djembeFlamTone,
  djembeFlamSlap,
]

const MidiSoundsContext = createContext(null)

export const useMidiSounds = () => useContext(MidiSoundsContext)

export const MidiSoundsContextProvider: FC = ({ children }) => {
  const midiSounds = useRef(null)

  useEffect(() => () => midiSounds.current?.stopPlayLoop, [])

  return (
    <MidiSoundsContext.Provider value={midiSounds}>
      {children}
      <div
        css={css`
          text-align: right;
          margin: 0 16px;
          pointer-events: none;
          position: fixed;
          right: 0;
          bottom: 0;
          z-index: -1;
          opacity: 0.4;
        `}
      >
        <MIDISounds ref={midiSounds} appElementName="root" drums={drums} />
      </div>
    </MidiSoundsContext.Provider>
  )
}

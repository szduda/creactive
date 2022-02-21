/** @jsx jsx */
import { createContext, useContext, useRef, useEffect, FC } from 'react'
import { jsx, css } from '@emotion/react'

import MIDISounds from 'midi-sounds-react'

export const bell = 227
export const sangbanClosed = 3311
export const sangban = 3310
export const shaker = 173
export const dundunbaOpen = 3312
export const dundunbaClosed = 3313
export const kenkeniOpen = 3314
export const kenkeniClosed = 3315
export const kenkeniOpen2 = 3316
export const kenkeniClosed2 = 3317

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
        <MIDISounds
          ref={midiSounds}
          appElementName="root"
          drums={[bell, sangbanClosed, sangban, shaker]}
        />
      </div>
    </MidiSoundsContext.Provider>
  )
}

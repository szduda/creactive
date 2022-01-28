/** @jsx jsx */
import { createContext, useContext, useRef, useEffect, FC } from 'react'
import { jsx, css } from '@emotion/core'

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
          margin: 32px 16px 0;
          pointer-events: none;

          @media (min-width: 768px) {
            position: fixed;
            bottom: 0;
            right: 16px;
            margin: 0;
          }
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

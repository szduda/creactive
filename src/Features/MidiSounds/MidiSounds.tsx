/** @jsx jsx */
import { createContext, useContext, useRef, FC } from 'react'
import { jsx, css } from '@emotion/core'

import MIDISounds from 'midi-sounds-react'

export const bell = 227
export const sangbanClosed = 3311
export const sangban = 3310
export const shaker = 173

const MidiSoundsContext = createContext(null)

export const useMidiSounds = () => useContext(MidiSoundsContext)

export const MidiSoundsContextProvider: FC = ({ children }) => {
  const midiSounds = useRef(null)

  return (
    <MidiSoundsContext.Provider value={midiSounds}>
      {children}
      <div
        css={css`
        text-align: right;
        margin: 32px 16px 0;

        @media(min-width: 768px) {
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

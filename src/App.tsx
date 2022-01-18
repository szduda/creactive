import React from 'react'
import { StateManager } from './StateManager/Store'
import { Router } from './Router'
import { Theme } from './Features/theme'

import { MidiSoundsContextProvider } from './Features/MidiSounds/MidiSounds'

export default () => (
  <MidiSoundsContextProvider>
    <StateManager>
      <Theme>
        <Router />
      </Theme>
    </StateManager>
  </MidiSoundsContextProvider>
)

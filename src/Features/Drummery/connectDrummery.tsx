import React, { FC, useState, useEffect } from 'react'

import { MidiSoundsContextProvider } from '../MidiSounds/MidiSounds'

import { useStore } from '../../StateManager/Store'
import { Drummery, TDrummery } from '.'

export const connectDrummery: FC<TDrummery> = ({ DataService }) => {
  const useDrummeryContext = () => {
    const {
      state: {
        drummery: { items, previewId },
      },
      actions: {
        drummery: { setItems, setPreviewId },
      },
    } = useStore()

    const [loading, setLoading] = useState(true)

    useEffect(() => {
      let cancelled = false
      const asyncEffect = async () => {
        try {
          const fetched = await DataService.fetchDrumSnippets()
          fetched.forEach(async (snippet) => {
            snippet.patterns = await DataService.fetchPatterns(snippet.patterns)
          })

          if (!cancelled) {
            setItems(fetched)
            setLoading(false)
          }
        } catch (err) {
          console.error('Failed to fetch data.\n', err)
          if (!cancelled) {
            setLoading(false)
          }
        }
      }
      asyncEffect()
      return () => {
        cancelled = true
      }
    }, [])

    return {
      items,
      previewId,
      setPreviewId,
      meta: { loading },
    }
  }

  return () => (
    <MidiSoundsContextProvider>
      <Drummery {...{ useDrummeryContext }} />
    </MidiSoundsContextProvider>
  )
}

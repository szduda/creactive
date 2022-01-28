import React, { FC, useState, useEffect } from 'react'

import { MidiSoundsContextProvider } from '../MidiSounds/MidiSounds'

import { useStore } from '../../StateManager/Store'
import { Drummery, TDrummery } from '.'

const useDrummeryContext = DataService => {
  const {
    state: {
      drummery: { items, previewId, searchTerm },
    },
    actions: {
      drummery: { setItems, setPreviewId, setSearchTerm },
    },
  } = useStore()

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    const asyncEffect = async () => {
      try {
        const fetched = await DataService.fetchDrumSnippets(searchTerm)
        fetched.forEach(async snippet => {
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
    // eslint-disable-next-line
  }, [searchTerm])

  return {
    items: items.sort(byTitle),
    previewId,
    setPreviewId,
    setSearchTerm,
    meta: { loading },
  }
}

export const connectDrummery: FC<TDrummery> = ({ DataService }) => () => (
  <MidiSoundsContextProvider>
    <Drummery
      {...{ useDrummeryContext: () => useDrummeryContext(DataService) }}
    />
  </MidiSoundsContextProvider>
)

const byTitle = (o1, o2) =>
  o1.title.toLowerCase() === o2.title.toLowerCase()
    ? 0
    : o1.title.toLowerCase() < o2.title.toLowerCase()
    ? -1
    : 1

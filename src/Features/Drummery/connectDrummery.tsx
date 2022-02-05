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
    setLoading(true)
    setPreviewId(null)
    asyncEffect()
    return () => {
      cancelled = true
    }
    // eslint-disable-next-line
  }, [searchTerm])

  useEffect(() => {
    let cancelled = false
    const asyncEffect = async () => {
      if (previewId) {
        const newItems = [...items]
        const i = newItems.map(i => i.id).indexOf(previewId)

        // already fetched
        if (newItems[i].patterns.length) return

        const patterns = await DataService.fetchPatterns(newItems[i])
        if (cancelled) return

        newItems[i].patterns = patterns
        setItems(newItems)
      }
    }
    asyncEffect()
    return () => {
      cancelled = true
    }
  }, [previewId])

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

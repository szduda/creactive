import React, { FC, useState, useEffect } from 'react'

import { MidiSoundsContextProvider } from '../MidiSounds/MidiSounds'

import { useStore } from '../../StateManager/Store'
import { Drummery, TDrummery } from '.'
import { useParams, useHistory } from 'react-router-dom'

const useDrummeryContext = DataService => {
  const {
    state: {
      drummery: { items, previewId, searchTerm },
    },
    actions: {
      drummery: { setItems, setPreviewId, setSearchTerm },
    },
  } = useStore()

  const { slug } = useParams()

  const history = useHistory()

  const [loading, setLoading] = useState(true)
  const [filteredItems, setFilteredItems] = useState(items)

  const featuredItem = items?.sort((a, b) => b.createdAt - a.createdAt)?.[0]

  const navigateToSnippet = slug => history.push(`/drums/${slug ?? ''}`)

  // initial data load
  // eslint-disable-next-line
  useEffect(() => {
    let cancelled = false
    const asyncEffect = async () => {
      try {
        const fetched = await DataService.fetchDrumSnippets()

        if (!cancelled) {
          setItems(fetched)
          setFilteredItems(fetched)
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
    asyncEffect()
    return () => {
      cancelled = true
    }
  }, [])

  // update previewId on route param (slug) change
  useEffect(() => {
    if (loading) return

    if (!slug) {
      setPreviewId(null)
      return
    }

    const newPreview = items.find(item => item.slug === slug)

    if (!newPreview) {
      setPreviewId(null)
    } else if (newPreview.id !== previewId) {
      if (
        searchTerm &&
        !filteredItems.find(item => item.id === newPreview.id)
      ) {
        setSearchTerm('')
        setFilteredItems(items)
      }


      setPreviewId(newPreview.id)
    }
  }, [slug, loading])

  // handle search
  useEffect(() => {
    if (!searchTerm) setFilteredItems(items)

    const termParts = searchTerm
      .toLowerCase()
      .split(' ')
      .filter(term => term !== ' ')

    setFilteredItems([
      ...items.filter(({ tags, slug }) => {
        for (let term of termParts) {
          if (tags?.includes(term) || slug.includes(term)) return true
        }
        return false
      }),
    ])
  }, [searchTerm])

  // update patterns on preview change
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
    // eslint-disable-next-line
  }, [previewId])

  return {
    items: filteredItems.sort(bySlug),
    featuredItem,
    slug,
    navigateToSnippet,
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

const bySlug = (o1, o2) =>
  o1.slug.toLowerCase() === o2.slug.toLowerCase()
    ? 0
    : o1.slug.toLowerCase() < o2.slug.toLowerCase()
    ? -1
    : 1

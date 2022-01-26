import React, { useEffect, useState } from 'react'
import { Header } from '.'
import { useStore } from '../../StateManager/Store'

import { useTimeout } from '../../helpers'

const useHeaderContext = () => {
  const {
    state: {
      drummery: { searchTerm },
    },
    actions: {
      drummery: { setSearchTerm },
    },
  } = useStore()

  const [timeout, setTimeout] = useTimeout(500)
  const [cachedTerm, cacheTerm] = useState(searchTerm)

  const debouncedSearch = (term: string) => {
    cacheTerm(term)
    if (timeout) clearTimeout(timeout)
    setTimeout(() => setSearchTerm(term))
  }

  useEffect(() => cacheTerm(searchTerm), [searchTerm])

  return {
    searchTerm: cachedTerm,
    search: debouncedSearch,
    reset: () => setSearchTerm(''),
  }
}

export const connectHeader = () => () => <Header {...{ useHeaderContext }} />

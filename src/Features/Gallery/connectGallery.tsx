import React, { useEffect } from 'react'
import { useStore } from '../../StateManager/Store'
import { Gallery } from '.'

export const connectGallery = ({ DataService }) => {
  const useGalleryContext = () => {
    const {
      state: {
        gallery: {
          items,
          previewId,
        }
      },
      actions: {
        gallery: {
          setItems,
          setPreviewId,
        }
      }
    } = useStore()

    const { fetchItems } = DataService

    useEffect(() => {
      const asyncEffect = async () => {
        const items = await fetchItems()
        setItems(items)
      }
      asyncEffect()
    }, [])


    return { items, previewId, setPreviewId }
  }

  return () => <Gallery {...{ useGalleryContext }} />
}
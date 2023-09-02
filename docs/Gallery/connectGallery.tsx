import React, { FC, useState, useEffect } from 'react'
import { useStore } from '../../StateManager/Store'
import { Gallery, TGallery } from '.'

export const connectGallery: FC<TGallery> = ({ DataService }) => {
  const useGalleryContext = () => {
    const {
      state: {
        gallery: { items, previewId },
      },
      actions: {
        gallery: { setItems, setPreviewId },
      },
    } = useStore()

    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const asyncEffect = async () => {
        try {
          const items = await DataService.fetchPhotos()
          setItems(items)
          setLoading(false)
        } catch (err) {
          console.error('Failed to fetch data.\n', err)
          setLoading(false)
        }
      }
      asyncEffect()
      // eslint-disable-next-line
    }, [])

    return {
      items,
      previewId,
      setPreviewId,
      meta: { loading },
    }
  }

  return () => <Gallery {...{ useGalleryContext }} />
}

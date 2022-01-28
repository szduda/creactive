import { TPhoto } from './TPhoto'

export type GalleryState = {
  items: TPhoto[]
  previewId: string | null
  filters: {
    tag?: string | null
  }
}

export const defaultState: GalleryState = {
  items: [],
  previewId: null,
  filters: {
    tag: null,
  },
}

export const galleryReducer = (state: GalleryState, action: GalleryAction) => {
  const { payload, type } = action

  switch (type) {
    case 'setItems':
      return {
        ...state,
        items: payload,
      }

    case 'setFilters':
      return {
        ...state,
        filters: payload,
      }

    case 'setPreviewId':
      return {
        ...state,
        previewId: payload,
      }

    default:
      return state
  }
}

export type GalleryAction = ReturnType<
  typeof galleryActions[keyof typeof galleryActions]
>

export const galleryActions = {
  setItems: (payload: GalleryState['items']) => ({
    type: 'setItems',
    payload,
  }),
  setFilter: (payload: GalleryState['filters']) => ({
    type: 'setFilters',
    payload,
  }),
  setPreviewId: (payload: GalleryState['previewId']) => ({
    type: 'setPreviewId',
    payload,
  }),
}

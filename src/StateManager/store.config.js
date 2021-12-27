import { useActions } from "./useActions";
import {
  defaultState as galleryDefault,
  galleryReducer,
  galleryActions,
} from './definitions/gallery.store'

export const initialState = {
  gallery: galleryDefault,
}

export const reducer = ({ gallery }, action) => {
  return {
    gallery: galleryReducer(gallery, action),
  }
}

export const useMyGetters = state => ({
})

const useGalleryActions = dispatch => useActions(dispatch, galleryActions)

export const useMyActions = dispatch => ({
  gallery: useGalleryActions(dispatch),
})
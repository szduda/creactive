import { useActions } from "./useActions";
import {
  defaultState as galleryDefault,
  galleryReducer,
  galleryActions,
} from './definitions/gallery.store'
import {
  defaultState as drummeryDefault,
  drummeryReducer,
  drummeryActions,
} from './definitions/drummery.store'

export const initialState = {
  gallery: galleryDefault,
  drummery: drummeryDefault,
}

export const reducer = (state, action) => {
  return {
    gallery: galleryReducer(state.gallery, action),
    drummery: drummeryReducer(state.drummery, action),
  }
}

export const useMyGetters = state => ({
})

export const useMyActions = dispatch => ({
  gallery: useActions(dispatch, galleryActions),
  drummery: useActions(dispatch, drummeryActions),
})

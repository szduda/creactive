import { TDrumSnippet } from './TDrumSnippet'

export type DrummeryState = {
  items: TDrumSnippet[]
  previewId: string | null
  searchTerm: string
}

export const defaultState: DrummeryState = {
  items: [],
  previewId: null,
  searchTerm: ''
}

export const drummeryReducer = (state: DrummeryState, action: DrummeryAction) => {
  const { payload, type } = action

  switch (type) {
    case 'setItems':
      return {
        ...state,
        items: payload
      }

    case 'setSearchTerm':
      return {
        ...state,
        searchTerm: payload
      }

    case 'setPreviewId':
      return {
        ...state,
        previewId: payload
      }

    default:
      return state
  }
}

export type DrummeryAction = ReturnType<typeof drummeryActions[keyof typeof drummeryActions]>

export const drummeryActions = {
  setItems: (payload: DrummeryState['items']) => ({
    type: 'setItems',
    payload,
  }),
  setSearchTerm: (payload: DrummeryState['searchTerm']) => ({
    type: 'setSearchTerm',
    payload,
  }),
  setPreviewId: (payload: DrummeryState['previewId']) => ({
    type: 'setPreviewId',
    payload,
  }),
}

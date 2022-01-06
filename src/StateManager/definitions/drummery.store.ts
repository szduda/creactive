import { TDrumSnippet } from './TDrumSnippet'

export type DrummeryState = {
  items: TDrumSnippet[]
  previewId: string | null
  filters: {
    tag?: string | null
  }
}

export const defaultState: DrummeryState = {
  items: [],
  previewId: 'y',
  filters: {
    tag: null
  }
}

export const drummeryReducer = (state: DrummeryState, action: DrummeryAction) => {
  const { payload, type } = action

  switch (type) {
    case 'setItems':
      return {
        ...state,
        items: payload
      }

    case 'setFilters':
      return {
        ...state,
        filters: payload
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
  setFilter: (payload: DrummeryState['filters']) => ({
    type: 'setFilters',
    payload,
  }),
  setPreviewId: (payload: DrummeryState['previewId']) => ({
    type: 'setPreviewId',
    payload,
  }),
}

import { ActionTypes } from './types'

const initialState = {
  repositories: []
}

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.saveRepositories:
      return {
        ...state,
        repositories: [...action.payload]
      }
    default:
      return state
  }
}
import { ActionTypes } from './types'

const initialState = {
  repositoriesList: [],
  searchQuery: ''
}

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.fetchRepositories:
      return {
        ...state,
        searchQuery: action.payload
      }

    case ActionTypes.saveRepositories:
      return {
        ...state,
        repositoriesList: [...action.payload]
      }
    default:
      console.log('case default')
      return state
  }
}
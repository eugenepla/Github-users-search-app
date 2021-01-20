import { ActionTypes } from './types'

export const fetchRepositories = (payload) => ({
  type: ActionTypes.fetchRepositories,
  payload
})

export const saveRepositories = (payload) => ({
  type: ActionTypes.saveRepositories,
  payload
})

import { ActionTypes } from './types'
import { SearchService } from '../../services/index'

export const saveRepositories = (payload) => ({
  type: ActionTypes.saveRepositories,
  payload
})

export const actions = {
  fetchRepositories: (params) => async (dispatch) => {
    try {
      const { data } = await SearchService.getRepositories(params)
      dispatch({ type: ActionTypes.saveRepositories, payload: data })
    } catch {
      dispatch(actions.saveSmth(data)) //TODO
    }
  }
}

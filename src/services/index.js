import { API_URL } from '../constants/env'
import { fetchWrapper } from "../helpers/fetchWrapper"

export const SearchService = {
  getRepositories
}

function getRepositories() {
  return fetchWrapper.get(`${API_URL}/repositories?q=`)
}
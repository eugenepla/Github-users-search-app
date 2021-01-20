import { API_URL } from './../../constants/env'

async function fetchRepositories(query) {
  const response = await fetch(`${API_URL}${query}&per_page=5`)

  console.log('response', response)
  //return await response.json()
  //const data = jsonResponse.results.map((item, index) => ({ ...item, id: index }))
  //return {
  //data
  //}
}

export const search = {
  fetchRepositories
}


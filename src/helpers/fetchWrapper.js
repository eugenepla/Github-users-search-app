export const fetchWrapper = {
  get,
  post,
  put,
  delete: _delete,
  handleResponse
}

function get(url) {
  const requestOptions = {
    method: 'GET'
    //headers: authHeader(url)
  }
  return fetch(url, requestOptions).then(handleResponse)
}

function post(url, body) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }
  return fetch(url, requestOptions).then(handleResponse)
}

function put(url, body) {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }
  return fetch(url, requestOptions).then(handleResponse)
}

function _delete(url) {
  const requestOptions = {
    method: 'DELETE'
    //headers: authHeader(url)
  }
  return fetch(url, requestOptions).then(handleResponse)
}

function handleResponse(response, error) {
  return response.text().then(text => {
    let data
    if (isJsonString(text)) {
      data = text && JSON.parse(text)
    } else {
      data = text
    }

    if (!response.ok) {
      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }

    return data
  })
}

const apiRequest = async (method = 'GET', action = '', body = {}) => {
 
  const apiEndpoint = 'https://help.franses.app/api/index.php'

  body = {action, ...body}

  const headers = new Headers({
    'Content-Type': 'application/json'
  })

  let requestParams = {
    method,
    headers,
    body: JSON.stringify(body),
    credentials:'include'
  }

  const request = new Request(`${apiEndpoint}`, requestParams )

  const response = await fetch(request)

  const json = await response.json()

  if (response.status > 201) {
    throw json.error
  }

  return json
}

export default apiRequest

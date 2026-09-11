const API_BASE_URL = 'http://localhost:5000/api'

function buildHeaders(headers = {}) {
  const authHeaders = new Headers(headers)

  if (!authHeaders.has('Accept')) {
    authHeaders.set('Accept', 'application/json')
  }

  const token = localStorage.getItem('token')

  if (token && !authHeaders.has('Authorization')) {
    authHeaders.set('Authorization', `Bearer ${token}`)
  }

  return authHeaders
}

async function parseJsonResponse(response) {
  const contentType = response.headers.get('content-type') || ''

  if (contentType.includes('application/json')) {
    const payload = await response.json()

    if (!response.ok) {
      const message = payload?.message || 'Request failed'
      throw new Error(message)
    }

    return payload
  }

  const text = await response.text()

  if (!response.ok) {
    throw new Error(text || 'Request failed')
  }

  return text
}

export async function apiRequest(path, options = {}) {
  const headers = buildHeaders(options.headers || {})

  if (options.body && !(options.body instanceof FormData)) {
    headers.set('Content-Type', 'application/json')
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers,
    body: options.body && !(options.body instanceof FormData)
      ? JSON.stringify(options.body)
      : options.body,
  })

  return parseJsonResponse(response)
}

export const api = {
  get(path, options = {}) {
    return apiRequest(path, { ...options, method: 'GET' })
  },
  post(path, body, options = {}) {
    return apiRequest(path, { ...options, method: 'POST', body })
  },
  put(path, body, options = {}) {
    return apiRequest(path, { ...options, method: 'PUT', body })
  },
  patch(path, body, options = {}) {
    return apiRequest(path, { ...options, method: 'PATCH', body })
  },
  delete(path, options = {}) {
    return apiRequest(path, { ...options, method: 'DELETE' })
  },
}

export default api

import { useCallback, useEffect, useMemo, useState } from 'react'
import RoleContext from './role-context.js'
import { api } from '../services/api.js'

export function RoleProvider({ children }) {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(() => localStorage.getItem('token') || '')
  const [loading, setLoading] = useState(Boolean(token))

  const login = useCallback((nextUser, nextToken) => {
    setUser(nextUser)
    setToken(nextToken)
    localStorage.setItem('token', nextToken)
  }, [])

  const logout = useCallback(() => {
    setUser(null)
    setToken('')
    localStorage.removeItem('token')
  }, [])

  useEffect(() => {
    const bootstrap = async () => {
      if (!token) {
        setLoading(false)
        return
      }

      try {
        const payload = await api.get('/auth/me')
        setUser(payload.user)
        setLoading(false)
      } catch (error) {
        console.error('Failed to load current user:', error)
        localStorage.removeItem('token')
        setToken('')
        setUser(null)
        setLoading(false)
      }
    }

    bootstrap()
  }, [token])

  const value = useMemo(() => ({
    user,
    token,
    loading,
    login,
    logout,
  }), [user, token, loading, login, logout])

  return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>
}


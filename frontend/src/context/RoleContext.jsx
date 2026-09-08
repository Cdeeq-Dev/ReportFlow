import { useMemo, useState } from 'react'
import RoleContext from './role-context.js'

export function RoleProvider({ children }) {
  const [role, setRole] = useState('Manager')

  const value = useMemo(() => ({ role, setRole }), [role])

  return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>
}


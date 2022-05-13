import { useAuth } from '@/hooks/useAuth'
import React, { createContext } from 'react'

export const AuthContext = createContext()

export const AuthProvider = () => {
    const authed = useAuth()
  return (
    <AuthContext.Provider value={authed}>{children}</AuthContext.Provider>
  )
}

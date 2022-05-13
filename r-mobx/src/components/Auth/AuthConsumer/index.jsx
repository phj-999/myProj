import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'

export const AuthConsumer = () => {
  return useContext(AuthContext)
}

export const RequireAuth = ({childern}) => {
const {authed} = AuthConsumer()
return authed === true ? (childern):(
    <Navigate to="/home" replace />
)
}
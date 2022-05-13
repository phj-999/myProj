import React, {useState } from 'react'

export const useAuth = () => {
  const [authed,setAuthed] = useState(false)

  return {
    authed
  }
}


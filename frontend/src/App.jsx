import { useState } from 'react'
import Player from './Player.jsx'
import './App.css'
import AuthContext from './AuthContext.jsx' 

function App() {
  const {isAuthenticated} = AuthContext{}
  return (
    <AuthContext>
      <Player />
    </AuthContext>
  )
}

export default App

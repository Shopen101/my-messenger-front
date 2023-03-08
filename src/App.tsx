import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Error, Messenger } from './pages'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<Messenger />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App

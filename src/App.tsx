import React, { useContext, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { Auth, Error, Messenger, Registration } from './pages'
import { Context } from './index'
import { observer } from 'mobx-react-lite'

function App() {
  const { store } = useContext(Context)
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth()
    }
  }, [])

  useEffect(() => {
    if (!store.isAuth) {
      navigate('/auth')
    } else {
      navigate('/')
    }
  }, [navigate, store.isAuth])

  if (store.isLoading) {
    return <div>Загрузка...</div>
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<Messenger />} />
        <Route path="/registration" index element={<Registration />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default observer(App)

import React, { useContext, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Auth, Error, Messenger, Registration } from './pages'
import { Context } from './index'
import { observer } from 'mobx-react-lite'

function App() {
  const { store } = useContext(Context)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth()
    }
  }, [])

  if (store.isLoading) {
    return <div>Загрузка...</div>
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={store.isAuth ? <Messenger /> : <Auth />} />
        <Route path="/registration" index element={<Registration />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default observer(App)

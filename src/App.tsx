import React, { useState, useContext, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { Auth, Error, Messenger, Registration } from './pages'
import { Context } from './index'
import { observer } from 'mobx-react-lite'
import { IUser } from './models/IUser'
import UserService from './services/UserService'

function App() {
  const { store } = useContext(Context)
  const navigate = useNavigate()
  const [users, setUsers] = useState<IUser[]>([])

  async function getUsers() {
    try {
      const response = await UserService.fetchUsers()
      setUsers(response.data)
    } catch (error) {
      console.log(error)
    }
  }

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
  }, [store.isAuth])

  if (store.isLoading) {
    return <div>Загрузка...</div>
  }

  return (
    <div className="App">
      <h1>{store.isAuth ? 'авторизован' : 'не авторизован'}</h1>
      <button onClick={() => store.logout()}>Выйти</button>
      <button onClick={getUsers}>Получить юзверей с бд</button>
      <h1>{store.user.isActivated ? 'активен' : 'не активен'}</h1>
      <div>
        {users.map(user => (
          <div>{user.email}</div>
        ))}
      </div>
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

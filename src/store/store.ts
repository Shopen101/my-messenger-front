import axios from 'axios'
import { makeAutoObservable } from 'mobx'
import AuthService from '../services/AuthService'
import UserService from '../services/UserService'
import { IUser } from '../models/IUser'
import { AuthResponse } from '../models/response/AuthResponse'
import { API_URL } from '../http'

export default class Store {
  user = {} as IUser
  isAuth = false
  isLoading = false
  allUsers: IUser[] = []
  currentDialog = {
    userId: null,
    roomId: null,
    messages: [],
  } as CurrentDialog

  constructor() {
    makeAutoObservable(this)
  }

  setAuth(bool: boolean) {
    this.isAuth = bool
  }

  setUser(user: IUser) {
    this.user = user
  }

  setLoading(bool: boolean) {
    this.isLoading = bool
  }

  setAllUsers(users: IUser[]) {
    this.allUsers = users
  }

  setCurrentDialogParams(id: string, messages: Message[], roomId: string) {
    this.currentDialog.userId = id
    this.currentDialog.messages = messages
    this.currentDialog.roomId = roomId
  }

  setCurrentDialogRoomId(roomId: string) {
    this.currentDialog.roomId = roomId
  }

  async login(email: string, password: string) {
    try {
      const response = await AuthService.login(email, password)

      localStorage.setItem('token', response.data.accessToken)
      this.setAuth(true)
      this.setUser(response.data.user)
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.log(error?.response?.data?.message)
      }
    }
  }

  async registration(data: UserData) {
    try {
      const { email, password, firstName, lastName } = data
      const response = await AuthService.registration(email, password, firstName, lastName)

      localStorage.setItem('token', response.data.accessToken)
      this.setAuth(true)
      this.setUser(response.data.user)
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.log(error?.response?.data?.message)
      }
    }
  }

  async logout() {
    try {
      await AuthService.logout()
      localStorage.removeItem('token')
      this.setAuth(false)
      this.setUser({} as IUser)
      this.currentDialog.userId = null
      this.currentDialog.messages = []
      this.currentDialog.roomId = null
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.log(error?.response?.data?.message)
      }
    }
  }

  async checkAuth() {
    this.setLoading(true)
    try {
      const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, { withCredentials: true })
      localStorage.setItem('token', response.data.accessToken)
      this.setAuth(true)
      this.setUser(response.data.user)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error?.response?.data?.message)
      }
    } finally {
      this.setLoading(false)
    }
  }

  async getAllusers() {
    try {
      const response = await UserService.getAllUsers()
      this.setAllUsers(response.data)
      console.log('users', response.data)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error?.response?.data?.message)
      }
    }
  }
}

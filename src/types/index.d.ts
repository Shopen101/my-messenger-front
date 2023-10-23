declare module '*.jpg'
declare module '*.png'
declare module '*.svg'

type UserData = {
  firstName: string
  lastName: string
  email: string
  password: string
}

type UserMessage = {
  roomId: string | null
  authorFirstName: string
  authorLastName: string
  authorId: string
  message: string
  time: string
}

type CurrentDialog = {
  userId: null | string
  roomId: null | string
  messages: message[]
}

type Message = {
  authorFirstName: string
  authorLastName: string
  authorId: string
  message: string
  _id: string
}

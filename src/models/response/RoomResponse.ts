export interface RoomResponse {
  _id: string
  user1: string
  user2: string
  messages: Message[]
}

export interface MessageResponse {
  roomId: string
}

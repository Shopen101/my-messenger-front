export interface RoomResponse {
  dialog: {
    _id: string
    user1: string
    user2: string
    messages: Message[]
  }
  isMessageEnd: boolean
}

export interface MessageResponse {
  roomId: string
}

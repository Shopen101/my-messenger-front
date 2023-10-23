import $api from '../http'
import { AxiosResponse } from 'axios'
import { MessageResponse, RoomResponse } from '../models/response/RoomResponse'

interface IMessageParams {
  roomId: string | null
  user1: string
  user2: string
  authorFirstName: string
  authorLastName: string
  authorId: string
  message: string
  time: string
}

export default class RoomService {
  static async getDialogMessages(
    currentUserId: string,
    companionUserId: string,
    messagesCount: number,
  ): Promise<AxiosResponse<RoomResponse>> {
    return $api.get<RoomResponse>(
      `/getDialogMessages?currentUserId=${currentUserId}&companionUserId=${companionUserId}&messagesCount=${messagesCount}`,
    )
  }

  static async sendNewMessage(messageParams: IMessageParams): Promise<AxiosResponse<MessageResponse>> {
    const { roomId, user1, user2, authorFirstName, authorLastName, authorId, message, time } = messageParams
    return $api.post<MessageResponse>(`/sendNewMessage`, {
      roomId,
      user1,
      user2,
      authorFirstName,
      authorLastName,
      authorId,
      message,
      time,
    })
  }
}

import React, { useEffect } from 'react'
import Peer from 'simple-peer'

interface IcallProps {
  currentUser: {
    id: string
  }
  targetUser: string | null
  roomId: string | null
  startCalling: boolean
  socket: any
  isAnswered: boolean
}

export const useCall = ({ currentUser, targetUser, roomId, startCalling, socket, isAnswered }: IcallProps) => {
  useEffect(() => {
    if (startCalling && typeof window !== 'undefined') {
      navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
        // if (isAnswered) {
        socket.on('CONNECTED', () => {
          console.log('render was')
          const peerIncome = new Peer({
            initiator: true,
            trickle: false,
            stream,
          })

          peerIncome.on('signal', inComeSignal => {
            console.log('signal', inComeSignal)
            // TODO: сделать проверку кто звонит, чтобы не показывать в двух юзерах диалоговое окно
            // setTimeout(() => {
            socket.emit('CLIENT@ROOMS:CALL', {
              roomId,
              inComeSignal,
            })
            // }, 2000 + Math.random() * 1000)
          })

          socket.on('SERVER@ROOMS:CALL', ({ inComeSignal }: { inComeSignal: any }) => {
            console.log('SERVER@ROOMS:CALL', inComeSignal)

            const peerOutcome = new Peer({
              initiator: false,
              trickle: false,
              stream,
            })

            peerOutcome.signal(inComeSignal)
            console.log('inComeSignal', inComeSignal)

            peerOutcome
              .on('signal', outComeSignal => {
                console.log('outComeSignal', outComeSignal)
                socket.emit('CLIENT@ROOMS:ANSWER', {
                  roomId,
                  outComeSignal,
                })
              })
              .on('stream', stream2 => {
                document.querySelector('audio')!.srcObject = stream2
                document.querySelector('audio')!.play()
                console.log('STREAM пошёл')
              })
          })

          socket.on('SERVER@ROOMS:ANSWER', ({ outComeSignal }: { outComeSignal: any }) => {
            console.log('SERVER@ROOMS:ANSWER', outComeSignal)
            peerIncome.signal(outComeSignal)
          })
        })
      })
    }
  }, [currentUser, targetUser, roomId, startCalling, socket, isAnswered])
}

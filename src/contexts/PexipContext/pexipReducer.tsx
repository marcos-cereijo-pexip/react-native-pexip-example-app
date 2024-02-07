import { type PexipAction, PexipActionType } from './PexipAction'
import type { PexipState } from './PexipState'

export const pexipReducer = (prevState: PexipState, action: PexipAction): PexipState => {
  switch (action.type) {
    case PexipActionType.Connect: {
      const localStream = action.body.localStream
      return {
        ...prevState,
        localStream
      }
    }
    case PexipActionType.RemoteStream: {
      const remoteStream = action.body.remoteStream
      return {
        ...prevState,
        remoteStream
      }
    }
    default:
      return prevState
  }
}

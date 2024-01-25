import { PexipAction, PexipActionType } from './PexipAction'
import { PexipState } from './PexipState'

export const pexipReducer = (prevState: PexipState, action: PexipAction): PexipState => {
  switch (action.type) {
    case PexipActionType.Connect: {
      const localStream = action.body.localStream
      console.log(localStream)
      return {
        ...prevState,
        localStream
      }
    }
    default:
      return prevState
  }
}

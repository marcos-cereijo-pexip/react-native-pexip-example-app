import React, { useContext, useMemo, useReducer } from 'react'
import { PexipState } from './PexipState'
import { pexipReducer } from './pexipReducer'
import { PexipActionType } from './PexipAction'
import { ConnectionState } from '../../types/ConnectionState'
import { connect } from './methods/connect'
import { ConnectionRequest } from '../../types/ConnectionRequest'

interface ContextType {
  connect: (request: ConnectionRequest) => Promise<void>
  disconnect: () => Promise<void>
  state: PexipState
}

const Context = React.createContext<ContextType | null>(null)

const initialState: PexipState = {
  localStream: null,
  remoteStream: null,
  connectionState: ConnectionState.Disconnected
}

const PexipContextProvider = (props: any): JSX.Element => {
  const [state, dispatch] = useReducer(pexipReducer, initialState)

  const value = useMemo(
    () => ({
      connect: async (request: ConnectionRequest) => {
        const localStream = await connect(request)
        dispatch({
          type: PexipActionType.Connect,
          body: {
            localStream
          }
        })
      },
      disconnect: async () => {},
      state
    }),
    [state]
  )

  return <Context.Provider value={value}>{props.children}</Context.Provider>
}

const usePexipContext = (): ContextType => {
  const context = useContext(Context)
  if (context == null) {
    throw new Error('usePexipContext has to be used within <PexipContextProvider')
  }
  return context
}

export { PexipContextProvider, usePexipContext }

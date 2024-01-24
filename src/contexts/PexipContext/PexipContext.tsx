import React, {useContext, useMemo, useReducer} from 'react';
import {PexipState} from './PexipState';
import {pexipReducer} from './pexipReducer';
import {PexipActionType} from './PexipAction';
import {mediaDevices} from 'react-native-webrtc';
import {ConnectionState} from '../../types/ConnectionState';

interface ContextType {
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
  state: PexipState;
}

const Context = React.createContext<ContextType | null>(null);

const initialState: PexipState = {
  localStream: null,
  remoteStream: null,
  connectionState: ConnectionState.Disconnected,
};

const PexipContextProvider = (props: any): JSX.Element => {
  const [state, dispatch] = useReducer(pexipReducer, initialState);

  const value = useMemo(
    () => ({
      connect: async () => {
        const mediaStream = await mediaDevices.getUserMedia({
          audio: true,
          video: {
            frameRate: 30,
            facingMode: 'user',
          },
        });
        dispatch({
          type: PexipActionType.Connect,
          body: {
            localStream: mediaStream,
          },
        });
      },
      disconnect: async () => {},
      state,
    }),
    [state],
  );

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

const usePexipContext = (): ContextType => {
  const context = useContext(Context);
  if (context == null) {
    throw new Error(
      'usePexipContext has to be used within <PexipContextProvider',
    );
  }
  return context;
};

export {PexipContextProvider, usePexipContext};

import {MediaStream} from 'react-native-webrtc';
import {ConnectionState} from '../../types/ConnectionState';

interface PexipState {
  localStream: MediaStream | null;
  remoteStream: MediaStream | null;
  connectionState: ConnectionState;
}

export type {PexipState};

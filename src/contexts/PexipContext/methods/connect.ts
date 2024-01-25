import { MediaStream, RTCPeerConnection, mediaDevices } from 'react-native-webrtc'
import { ConnectionRequest } from '../../../types/ConnectionRequest'

export const connect = async (request: ConnectionRequest): Promise<any> => {
  const localStream = await mediaDevices.getUserMedia({
    audio: true,
    video: {
      frameRate: 30,
      facingMode: 'user'
    }
  })
  console.log(request)

  // Create peer connection
  const peerConnection = await createPeerConnection(localStream)
  negotiateConnection(peerConnection)

  return localStream
}

const createPeerConnection = async (localStream: MediaStream) => {
  const peerConstraints = {
    iceServers: [
      {
        urls: 'stun:stun.l.google.com:19302'
      }
    ]
  }

  const peerConnection = new RTCPeerConnection(peerConstraints)
  localStream.getTracks().forEach(track => {
    peerConnection.addTrack(track)
  })

  return peerConnection
}

const negotiateConnection = async (peerConnection: RTCPeerConnection) => {
  const sessionConstraints = {
    mandatory: {
      OfferToReceiveAudio: true,
      OfferToReceiveVideo: true,
      VoiceActivityDetection: true
    }
  }

  const offerDescription = await peerConnection.createOffer(sessionConstraints)
  peerConnection.setLocalDescription(offerDescription)

  // SEND THE OFFER TO INFINITY

  // SET THE REMOTE DESCRIPTOR
}

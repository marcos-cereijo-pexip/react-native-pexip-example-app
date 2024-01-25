import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { usePexipContext } from '../../contexts/PexipContext/PexipContext'
import { RTCView } from 'react-native-webrtc'

const nodeUrl = 'https://pexipdemo.com'
const conferenceAlias = 'meet.marcoscereijo'
const displayName = 'Marcos'
const pin = '1234'

export const Conference = () => {
  const { connect, state } = usePexipContext()

  useEffect(() => {
    connect({ nodeUrl, conferenceAlias, displayName, pin })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <View>
      <Text>Connecting with the following parameters:</Text>
      <Text>Node URL: {nodeUrl}</Text>
      <Text>Conference Alias: {conferenceAlias}</Text>
      <Text>Display Name: {displayName}</Text>
      <Text>PIN: ****</Text>
      <RTCView
        streamURL={state.localStream?.toURL()}
        mirror={true}
        objectFit="cover"
        zOrder={0}
        style={styles.selfView}
      />
      <RTCView streamURL={state.remoteStream?.toURL()} objectFit="cover" style={styles.remoteView} />
    </View>
  )
}

const styles = StyleSheet.create({
  selfView: {
    width: 300,
    height: 300,
    backgroundColor: 'black',
    marginBottom: 8
  },
  remoteView: {
    width: 300,
    height: 300,
    backgroundColor: 'black'
  }
})

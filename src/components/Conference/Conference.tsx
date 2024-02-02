import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { RemoteVideo, SelfView, usePexipContext } from '@pexip/react-native-infinity'

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
    <View style={styles.container}>
      <RemoteVideo mediaStream={state.remoteStream} objectFit="cover" style={styles.selfView} />
      <SelfView mediaStream={state.localStream} objectFit="cover" style={styles.remoteView} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'green'
  },
  selfView: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    width: 150,
    height: 250,
    backgroundColor: 'black',
    borderRadius: 8
  },
  remoteView: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'black'
  }
})

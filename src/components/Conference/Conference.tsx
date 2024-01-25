import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { usePexipContext } from '../../contexts/PexipContext/PexipContext'
import { RTCView } from 'react-native-webrtc'

export const Conference = () => {
  const { connect, state } = usePexipContext()

  useEffect(() => {
    const nodeUrl = 'https://pexipdemo.com'
    connect({
      nodeUrl
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <View>
      <Text>Conference 3</Text>
      <RTCView
        streamURL={state.localStream?.toURL()}
        mirror={true}
        objectFit="cover"
        zOrder={0}
        style={styles.selfView}
      />
      <RTCView streamURL={state.remoteStream?.toURL()} objectFit="cover" />
    </View>
  )
}

const styles = StyleSheet.create({
  selfView: {
    width: 600,
    height: 600
  }
})

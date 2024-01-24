import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {usePexipContext} from '../../contexts/PexipContext/PexipContext';
import {RTCView} from 'react-native-webrtc';

export const Conference = () => {
  const {connect, state} = usePexipContext();

  useEffect(() => {
    connect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log('Printing URL');
  console.log(state.localStream?.toURL());
  return (
    <View>
      <Text>Conference 3</Text>
      <RTCView
        mirror={true}
        objectFit="cover"
        streamURL={state.localStream?.toURL()}
        zOrder={0}
        style={{height: 600, width: 600}}
      />
    </View>
  );
};

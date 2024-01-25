import React from 'react'
import { SafeAreaView } from 'react-native'
import { PexipContextProvider } from './contexts/PexipContext/PexipContext'
import { Conference } from './components/Conference/Conference'

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <PexipContextProvider>
        <Conference />
      </PexipContextProvider>
    </SafeAreaView>
  )
}

export default App

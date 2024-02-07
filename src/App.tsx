import React from 'react'

import { Conference } from './components/Conference/Conference'
import { PexipContextProvider } from './contexts/PexipContext/PexipContext'

function App(): React.JSX.Element {
  return (
    <PexipContextProvider>
      <Conference />
    </PexipContextProvider>
  )
}

export default App

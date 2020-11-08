// @flow

import React from 'react'
import './App.css'
import AppRouter from './AppConfig/AppRouter'
import MessageToaster from './AppConfig/MessageToaster'

function App() {
  return (
    <React.Fragment>
      <MessageToaster />
      <AppRouter />
    </React.Fragment>
  )
}

export default App

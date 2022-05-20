import React, { useState } from 'react'
import AppPage from './AppPage'
import LocalizationProvider from '@contexts/Translations'
import { persistor, store } from './redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import EmitterProvider from '@contexts/Emitter'
import { LogBox } from 'react-native'

LogBox.ignoreAllLogs()

export default function App() {
  const [parameters] = useState({
    store: store
  })

  return <Provider store={parameters.store}>
    <PersistGate loading={null} persistor={persistor}>
      <EmitterProvider>
        <LocalizationProvider>
          <AppPage />
        </LocalizationProvider>
      </EmitterProvider>
    </PersistGate>
  </Provider>
}
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App'
import GadjetsContext from './context/gadjets-context.js'
import GadjetsContextProvider from './context/GadjetsContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GadjetsContextProvider>
    <App />
  </GadjetsContextProvider>
)

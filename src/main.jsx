import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from "@nextui-org/react";
import App from './App.jsx'
import '../dist/output.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider style={{ height: "100vh"}}>
     <App />
    </NextUIProvider>
  </React.StrictMode>,
)

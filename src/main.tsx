/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import WebApp from '@twa-dev/sdk'
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import './index.css'

WebApp.ready();

WebApp.expand();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TonConnectUIProvider manifestUrl="https://saeedpoureshghi.github.io/telegram-mini-app-numberspuzzle/tonconnect-manifest.json">
      <App />
    </TonConnectUIProvider>
  </React.StrictMode>,
)

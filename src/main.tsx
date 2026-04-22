import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter } from 'react-router-dom'
import { AudioProvider } from './components/audioContext'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AudioProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AudioProvider>
  </StrictMode>
)
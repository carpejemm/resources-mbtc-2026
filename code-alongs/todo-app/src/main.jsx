import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // StrictMode is a tool for highlighting potential problems in an application. It activates additional checks and warnings for its descendants. It does not render any visible UI and does not affect the production build.
  <StrictMode>
    <App />
  </StrictMode>,
)

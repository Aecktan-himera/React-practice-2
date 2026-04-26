import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'sanitize.css'          // ← ядро санитизации
import 'sanitize.css/forms.css' // ← стили для форм (опционально)
import 'sanitize.css/assets.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'   // 🔥 이 줄 반드시 있어야 함
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

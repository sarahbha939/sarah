import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { THEME } from './data.ts'
import { applyTheme } from './lib/theme.ts'

// Your accent colours and font come from THEME in data.ts
applyTheme(THEME)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

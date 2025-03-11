import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App color='red' />
    <br />
    <App color='Green' />
    <br />
    <App color='Blue' />
  </StrictMode>,
)

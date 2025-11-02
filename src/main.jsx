import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './context/StoreContext.jsx'

createRoot(document.getElementById('root')).render(
  // This is for gh pages
  // <BrowserRouter basename='/Food-order-React'>

  // this is for vercel app
  <BrowserRouter basename='/'>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </BrowserRouter>

)

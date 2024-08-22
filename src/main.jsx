import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {Toaster} from 'react-hot-toast'
import './index.css'

import { BrowserRouter } from 'react-router-dom'
import './i18n.js'
createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/my-project'>
  <Toaster/>
  <App />
  </BrowserRouter>
 
)

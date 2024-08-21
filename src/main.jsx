import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {ToastContainer} from 'react-toastify'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter } from 'react-router-dom'
import './i18n.js'
createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/my-project'>
  <ToastContainer/>
  <App />
  </BrowserRouter>
 
)

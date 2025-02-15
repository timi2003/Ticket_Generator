import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/Conference_Ticket_Generator'>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
    </BrowserRouter>
    <App />
  </StrictMode>

)
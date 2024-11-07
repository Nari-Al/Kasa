import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './main.css';
import Layout from './components/Layout/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Logement from './pages/Logement.jsx'
import Error from './pages/Error.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/logement/:logement_id" element={<Layout><Logement /></Layout>} />
        <Route path="*" element={<Layout><Error /></Layout>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

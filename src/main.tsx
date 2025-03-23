import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Home from './components/home.tsx'
import Box from '@mui/material/Box';
import Training from './components/training.tsx'
import Coaching from './components/coaching.tsx'
import News from './components/news.tsx'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/navbar.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <Box>
        <App />
        <Box
          sx={{
            marginTop: { xs: "2rem", md: "0" },
          }}
        >
          <Home />
          <Training />
          <Coaching />
          <News />
          
        </Box>
      </Box>
    </StrictMode>
  </BrowserRouter>
)

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
import Footer from './components/footer.tsx'
import Categories from './components/Categories.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <Box>
        <App />
        <Box>
          <Home />
          <Training />
          <Coaching />
          <Categories />
          <News />
          <Footer />
        </Box>
      </Box>
    </StrictMode>
  </BrowserRouter>
)

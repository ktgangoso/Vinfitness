import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Home from './components/home.tsx'
import Box from '@mui/material/Box';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Box>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
          backgroundColor: "#595959",
        }}
      >
        <App />
      </Box>

      <Box
        sx={{
          marginTop: { xs: "4rem", md: "5rem" },
        }}
      >
        <Home />
      </Box>
    </Box>
  </StrictMode>

)

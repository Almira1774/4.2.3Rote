import '@fontsource/open-sans/400.css';
import '@fontsource/inter/index.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { MantineProvider } from '@mantine/core';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
      <MantineProvider>
        <App />
      </MantineProvider>
  </StrictMode>,
)

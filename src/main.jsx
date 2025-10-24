import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from '@/App';
import { BrowserRouter } from 'react-router-dom';
import AppProvider from '@/providers/App/AppProvider.jsx';
import GameProvider from '@/providers/Game/GameProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppProvider>
        <GameProvider>
          <App />
        </GameProvider>
      </AppProvider>
    </BrowserRouter>
  </StrictMode>
);

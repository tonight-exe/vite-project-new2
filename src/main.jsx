import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import WrappedApp from './app.jsx';
import "/src/index.css";
import { App } from './app.jsx';

// Obtén el elemento root
const rootElement = document.getElementById('root');

// Crea root usando createRoot
const root = createRoot(rootElement);

// Renderiza la aplicación
root.render(
  <StrictMode>
    <BrowserRouter basename="/rect-vite/vite-project/">
    <App />
    </BrowserRouter>
  </StrictMode>
);
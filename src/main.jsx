import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
//import './css/slate/bootstrap.css';
//import './css/bootstrap.js';
import 'bootswatch/dist/slate/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import { ThemeProvider } from './contexts/ThemeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)

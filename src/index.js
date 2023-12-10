import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './components/App/App';
import { BrowserRouter as Router } from 'react-router-dom';
import './fonts.css'; // Импортируем файл с подключением шрифтов


const root = ReactDOM.createRoot(document.getElementById('root'));
if (!window.location.pathname.includes('/ins')) {
  window.history.replaceState(
    '',
    '',
    '/ins' + window.location.pathname
  );
};
root.render(
  <React.StrictMode>
    <Router basename='/ins'>
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();

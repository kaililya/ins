import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './components/App/App';
import { BrowserRouter  as Router } from 'react-router-dom';
import './fonts.css'; 

import { Provider } from "react-redux";
import { setupStore } from './services/store';

const root = ReactDOM.createRoot(document.getElementById('root'));


const store = setupStore();

// "homepage": "https://kaililya.github.io/ins/",
// basename="/ins/"
root.render(
  <React.StrictMode>
    <Router >
      <Provider store={store}>
        <App />
      </Provider>
    </Router> 
  </React.StrictMode>
);

reportWebVitals();

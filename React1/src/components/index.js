import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // if you have any styles
import App from './App'; // Assuming you have an App component
import reportWebVitals from './reportWebVitals'; // optional

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

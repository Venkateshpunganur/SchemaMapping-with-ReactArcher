import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import App from './App';
import reportWebVitals from './reportWebVitals';
import Schema_mapping from './Schema_mapping'
import Dynamicsm from './Dynamicsm'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Schema_mapping/> */}
    <Dynamicsm/>
  </React.StrictMode>
);

reportWebVitals();
reportWebVitals(console.log);

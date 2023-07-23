import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.scss';


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename='/resume'>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

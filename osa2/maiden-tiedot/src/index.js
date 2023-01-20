import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import axios from 'axios';

const promise = axios.get('https://restcountries.com/v3.1/all')
console.log(promise)

ReactDOM.createRoot(document.getElementById('root')).render(<App />)


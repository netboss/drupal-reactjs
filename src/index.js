import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import '../node_modules/foundation-sites/dist/css/foundation.css';
import './index.css';
import App from './App';

render((
  <BrowserRouter>
  	<HashRouter>
    	<App />
    </HashRouter>
  </BrowserRouter>
), document.getElementById('root'));

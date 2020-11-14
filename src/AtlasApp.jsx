import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRouter } from './routers/AppRouter';
import ScrollToToTop from './helper/ScrollToTop';

function AtlasApp() {
  return (
    <div className='App'>
      <Router>
        <ScrollToToTop />
        <AppRouter />
      </Router>
    </div>
  );
}

export default AtlasApp;

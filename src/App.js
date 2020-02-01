import React from 'react';
import Navigation from './components/00-Navigation';
import './App.css';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        {/* <Navigation /> */}
        <Router />
      </BrowserRouter>
  );
}

export default App;
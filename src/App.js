import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Router from './Router'

function App() {
  return (
    <div>
      <Header />
      <Router />
    </div>
  );
}

export default App;

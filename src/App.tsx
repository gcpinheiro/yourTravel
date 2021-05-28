import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Search} from  './components/Search/Search';
import {Tickets} from  './pages/tickets/tickets';

function App() {
  return (
    <div className="App">
      <Tickets />
    </div>
  );
}

export default App;

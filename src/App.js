import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Forms} from './components/forms/forms';
import {UseStatePractice} from './components/useState/useState01'

function App() {
  return (
    <div className="App">
      {/* <UseStatePractice /> */}
      <header className="App-header">
        <Forms text='Tax Calculation'></Forms>
      </header>
    </div>
  );
} 

export default App;

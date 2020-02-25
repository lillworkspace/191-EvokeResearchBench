import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard/Dashboard';
import EvokeHeader from './EvokeHeader/EvokeHeader'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <EvokeHeader></EvokeHeader>
      </header>
      <div className="Dashboard-container">
        <Dashboard></Dashboard>
      </div>
    </div>
  );
}



export default App;

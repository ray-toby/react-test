import React from 'react';
// import logo from './logo.svg';
import './App.css';
import HookTest from './components/HookTest';


function App() {
  const name = 'tom'
  return (
    <div className="App">
      {/* Hook */}
      <HookTest></HookTest>
    </div>
  );
}

export default App;

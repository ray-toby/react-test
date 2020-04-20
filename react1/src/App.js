import React from 'react';
// import logo from './logo.svg';
import './App.css';
import HookTest from './components/HookTest';
import ContextTest from './components/ContextTest';


function App() {
  const name = 'tom'
  return (
    <div className="App">
      {/* Hook使用 */}
      {/* <HookTest></HookTest> */}

      {/* context使用 */}
      <ContextTest></ContextTest>
    </div>
  );
}

export default App;

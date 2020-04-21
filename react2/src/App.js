import React from 'react';
import './App.css';
import ReduxTest from './components/ReduxTest'
import ReactReduxTest from './components/ReactReduxTest';
import { Provider } from  'react-redux'
import store from './store/store';

function App() {
  return (
    <div className="App">
      {/* redux的使用 */}
        <ReduxTest></ReduxTest>
        {/* react-redux的使用 */}
      <Provider store={store}>
        <ReactReduxTest></ReactReduxTest>
      </Provider>
    </div>
  );
}

export default App;

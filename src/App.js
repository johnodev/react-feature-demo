import React from 'react';
import { Provider } from 'react-redux';
import Routes from 'components/Routes';
import store from 'redux/store';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes />
      </div>
    </Provider>
  );
}

export default App;

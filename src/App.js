import React from 'react';
import {Provider} from 'react-redux';
import Home from './screens/Home';
import store from './redux/store';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Home />
      </Provider>

      <Toast />
    </>
  );
};

export default App;

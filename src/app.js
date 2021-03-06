import React, { Component } from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
        apiKey: 'AIzaSyAtqVaNeNyfwdiOOtug_TrvKIRPlXm-p7Q',
        authDomain: 'manager-d9dfd.firebaseapp.com',
        databaseURL: 'https://manager-d9dfd.firebaseio.com',
        storageBucket: 'manager-d9dfd.appspot.com',
        messagingSenderId: '110738232252'
      };

      firebase.initializeApp(config);
    }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;

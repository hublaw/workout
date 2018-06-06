import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import reducers from './reducers';

export default class App extends Component {
  componentWillMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyCDhZHl1tOSePHF6A0C8Eujswe_rzeT_5A',
      authDomain: 'workout-feac1.firebaseapp.com',
      databaseURL: 'https://workout-feac1.firebaseio.com',
      projectId: 'workout-feac1',
      storageBucket: 'workout-feac1.appspot.com',
      messagingSenderId: '1039341053213'
    };
    firebase.initializeApp(firebaseConfig);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
//import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component{
  componentWillMount(){
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyBwH4II-6FpWQRyeqfgA4nc42xNWv87AKo",
      authDomain: "navigation-manager.firebaseapp.com",
      databaseURL: "https://navigation-manager.firebaseio.com",
      projectId: "navigation-manager",
      storageBucket: "navigation-manager.appspot.com",
      messagingSenderId: "11831616426"
    };
      firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return(
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

exxport default App;

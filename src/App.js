import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

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
    return(
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

exxport default App;

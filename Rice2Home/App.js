import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { NavigationActions } from 'react-navigation';


import Login from './src/Login/Login';
import Home from './src/Home/Home';
import Signup from './src/Signup/Signup';
import Records from './src/Records/Records'

export default class App extends React.Component {
  render() {
    return (
      <Routes />
    );
  }
}

const Routes = createStackNavigator({
  Login: { screen: Login },
  Home: { screen: Home },
  Signup:{screen:Signup},
  Records:{screen:Records}
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

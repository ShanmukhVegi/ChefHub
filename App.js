import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {Component} from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/screens/auth/login/Login';
import SignUp from './src/screens/auth/signup/SignUp';
import Home from './src/screens/auth/signup/Home';

const Stack = createStackNavigator();


class App extends React.Component {


  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
<<<<<<< HEAD
=======
            name="SignUp"
            component={Login}
          />
        <Stack.Screen
>>>>>>> 1c4b789a76bb714d90f924afb200db5daacfa500
            name="Home"
            component={Home}
          />
        <Stack.Screen
            name="SignUp"
            component={SignUp}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
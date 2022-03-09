import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {Component} from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/screens/auth/login/Login';
import SignUp from './src/screens/auth/signup/SignUp';

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="Login"
            options={{ headerShown: false }}
            component={Login}
          />
        <Stack.Screen
            name="SignUp"
            options={{ headerShown: true }}
            component={SignUp}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
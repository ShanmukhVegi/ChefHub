import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { Component } from "react";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./src/screens/auth/login/Login";
import SignUp from "./src/screens/auth/signup/SignUp";
import Home from "./src/screens/user/Home";
import ChefDetail from "./src/screens/user/ChefDetail";
import NavigationBar from "./src/components/user/NavigationBar";
import UserNavigationBar from "./src/components/user/UserNavigationBar";
import BookChef from "./src/screens/user/BookChef";

import ChefHome from "./src/screens/chef/ChefHome";
import ChefInfo from "./src/screens/chef/ChefInfo";

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ChefHome">
          <Stack.Screen
            name="Home"
            options={{ headerShown: false }}
            component={Home}
          />

          <Stack.Screen
            name="ChefHome"
            options={{ headerShown: false }}
            component={ChefHome}
          />

          <Stack.Screen
            name="ChefInfo"
            options={{ headerShown: false }}
            component={ChefInfo}
          />

          <Stack.Screen
            name="SignUp"
            options={{ headerShown: true }}
            component={SignUp}
          />

          <Stack.Screen
            name="ChefDetail"
            component={ChefDetail}
            options={(navigation) => ({
              headerShown: false,
              headerBackTitleVisible: false,
              cardStyleInterpolator: ({ current: { progress } }) => {
                return {
                  cardStyle: {
                    opacity: progress,
                  },
                };
              },
            })}
            sharedElementsConfig={(route) => {
              const { item } = route.params;
              return [
                {
                  id: `item.${item.id}.image`,
                  animation: "move",
                  resize: "clip",
                  align: "center-top",
                },
                {
                  id: `item.${data.id}.text`,
                  animation: "fade",
                  resize: "clip",
                  align: "left-center",
                },
              ];
            }}
          />

          <Stack.Screen
            name="Navbar"
            options={{ headerShown: false }}
            component={NavigationBar}
          />

          <Stack.Screen
            name="UserNavBar"
            options={{ headerShown: false }}
            component={UserNavigationBar}
          />

          <Stack.Screen
            name="Login"
            options={{ headerShown: false }}
            component={Login}
          />

          <Stack.Screen
            name="BookChef"
            options={{ headerShown: true }}
            component={BookChef}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;

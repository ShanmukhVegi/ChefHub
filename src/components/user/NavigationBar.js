import React from "react";
import { Text, SafeAreaView, View, StyleSheet, Alert } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    console.log("===========****");
    console.log(props);

    this.state = {
      currentSection: "",
      userType: "chef",
    };

    console.log(this.state);
  }

  setSection(section) {
    this.setState({
      currentSection: section,
    });
  }

  render() {
    return (
      <View style={styles.navContainer}>
        <AntDesign
          onPress={() => {
            this.props.navigation.navigation.navigate("ChefHome");
          }}
          style={
            this.state.currentSection == "ChefHome"
              ? styles.highLightIcon
              : styles.icon
          }
          name="home"
          size={24}
        />
        <Feather
          onPress={() => {
            this.props.navigation.navigation.navigate("ChefInfo");
          }}
          style={
            this.state.currentSection == "ChefInfo"
              ? styles.highLightIcon
              : styles.icon
          }
          name="shopping-bag"
          size={24}
          color="black"
        />
        <AntDesign
          onPress={() => {
            Alert.alert("Are your sure?", "Are you sure you want to Logout", [
              // The "Yes" button
              {
                text: "Yes",
                onPress: async () => {
                  this.removeItemValue("JsonToken");
                  this.props.navigation.navigation.navigate("Login");
                },
              },
              // The "No" button
              // Does nothing but dismiss the dialog when tapped
              {
                text: "No",
              },
            ]);
          }}
          style={
            this.state.currentSection == "chefprofile"
              ? styles.highLightIcon
              : styles.icon
          }
          name="user"
          size={24}
          color="black"
        />
      </View>
    );
  }

  async removeItemValue(key) {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (exception) {
      return false;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navContainer: {
    backgroundColor: "white",
    height: 60,
    marginBottom: -30,
    paddingBottom: 5,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  icon: {
    color: "black",
  },
  highLightIcon: {
    color: "#24a0ed",
  },
});

module.exports = NavigationBar;

import React from "react";
import { Text, SafeAreaView, View, StyleSheet } from "react-native";

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
          onPress={() => this.setSection("chefprofile")}
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

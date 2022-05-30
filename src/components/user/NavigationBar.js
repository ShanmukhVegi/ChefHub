import React from "react";
import { Text, SafeAreaView, View, StyleSheet } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

class NavigationBar extends React.Component {
    constructor(props) {
        super();
        this.state = {
            currentSection: "home",
            userType: "chef",
        };
    }

    setSection(section) {
        this.setState({
            currentSection: section,
        });
    }

    render() {
        if (this.state.userType == "nonchef") {
            return (
                <View style={styles.navContainer}>
                    <AntDesign
                        onPress={() => this.setSection("home")}
                        style={
                            this.state.currentSection == "home"
                                ? styles.highLightIcon
                                : styles.icon
                        }
                        name="home"
                        size={24}
                    />
                    <Feather
                        onPress={() => this.setSection("orders")}
                        style={
                            this.state.currentSection == "orders"
                                ? styles.highLightIcon
                                : styles.icon
                        }
                        name="shopping-bag"
                        size={24}
                        color="black"
                    />
                    <Ionicons
                        onPress={() => this.setSection("chat")}
                        style={
                            this.state.currentSection == "chat"
                                ? styles.highLightIcon
                                : styles.icon
                        }
                        name="chatbubbles-outline"
                        size={24}
                        color="black"
                    />
                    <AntDesign
                        onPress={() => this.setSection("profile")}
                        style={
                            this.state.currentSection == "profile"
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

        //Else
        return (
            <View style={styles.navContainer}>
                <AntDesign
                    onPress={() => this.setSection("home")}
                    style={
                        this.state.currentSection == "home"
                            ? styles.highLightIcon
                            : styles.icon
                    }
                    name="home"
                    size={24}
                />
                <Feather
                    onPress={() => this.setSection("orders")}
                    style={
                        this.state.currentSection == "orders"
                            ? styles.highLightIcon
                            : styles.icon
                    }
                    name="shopping-bag"
                    size={24}
                    color="black"
                />
                {/* <Ionicons
                    onPress={() => this.setSection("chat")}
                    style={
                        this.state.currentSection == "chat"
                            ? styles.highLightIcon
                            : styles.icon
                    }
                    name="chatbubbles-outline"
                    size={24}
                    color="black"
                /> */}
                <AntDesign
                    onPress={() => this.setSection("profile")}
                    style={
                        this.state.currentSection == "profile"
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

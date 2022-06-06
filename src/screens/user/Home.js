import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  Image,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";

import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import NavigationBar from "../../components/user/NavigationBar";
import TouchableScale from "react-native-touchable-scale";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SharedElement } from "react-navigation-shared-element";
import AsyncStorage from "@react-native-async-storage/async-storage";

class Home extends React.Component {
  constructor(props) {
    super(props);
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("JsonToken");
        if (value !== null) {
          return value;
        }
      } catch (e) {
        console.log("ERROR");
      }
    };
    console.log("RETRIEVED TOKEN");
    getData().then((res) => {
      console.log(res);
    });

    this.state = {
      search: "",
      currentFilter: "all",
      data: [
        {
          id: 1,
          name: "Hrithik",
          image: require("../../../assets/images/demoChefIcons/kid.jpg"),
          rating: "4.5",
          mobile: "1234567890",
        },
        {
          id: 2,
          name: "Shanmukh",
          image: require("../../../assets/images/demoChefIcons/girl2.jpg"),
          rating: "4.0",
          mobile: "1234167890",
        },
        {
          id: 3,
          name: "Akshay",
          image: require("../../../assets/images/demoChefIcons/uncle.jpg"),
          rating: "4.5",
          mobile: "2334167890",
        },
        {
          id: 4,
          name: "Tiger",
          image: require("../../../assets/images/demoChefIcons/boy1.jpg"),
          rating: "3.2",
          mobile: "1234169890",
        },
      ],
    };
    this.idVal = 10;
  }

  setFilterState(filter) {
    this.setState({
      currentFilter: filter,
    });
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  loadData = async () => {
    if (this.state.isLoading == true) {
      /// Avoid make another request is there's happening a request right now
      return;
    }
    this.setState({ isLoading: true });
    console.log("######## THE END  0000000");

    await this.sleep(5000);
    data = [];

    for (var i = 0; i < 5; i++) {
      data.push({
        name: "Motu Bhai",
        image: require("../../../assets/images/demoChefIcons/uncle.jpg"),
        rating: "5.0",
        id: this.idVal,
        mobile: "309390349039403" + this.idVal,
      });
      this.idVal += 100;
    }

    this.setState({
      data: [...this.state.data, ...data],
    });

    console.log("END COMPLETED");
    this.setState({ isLoading: false });
  };

  Render_Footer = () => {
    return <ActivityIndicator size="large" color="#b2ebf2" />;
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 9, padding: 30 }}>
          <View style={styles.rowFlex}>
            <View style={styles.rowFlex}>
              <View>{/* User Icon Here */}</View>
              <View>
                <Text
                  style={{
                    color: "#969696",
                    fontWeight: "600",
                  }}
                >
                  Welcome 👋
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    marginTop: 3,
                    fontWeight: "600",
                  }}
                >
                  {" "}
                  Hrithik Manda
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.rowFlex,
                { justifyContent: "space-around" },
                styles.notification,
              ]}
            >
              <Feather name="bell" size={24} color="#3c99dc" />
            </View>
          </View>

          {/*Heading container */}
          <View style={{ marginTop: 30 }}>
            <Text
              style={{
                paddingRight: 40,
                fontSize: 30,
                fontWeight: "600",
              }}
            >
              {" "}
              Find a Good Chef, Stay Healthy{" "}
            </Text>
          </View>

          {/*Search container */}

          <View
            style={[
              styles.searchBox,
              { display: "flex", flexDirection: "row" },
            ]}
          >
            <Feather
              name="search"
              size={20}
              color="black"
              style={{ marginRight: 5 }}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Search for a chef"
            ></TextInput>
          </View>

          {/* Filter Section */}

          <View style={[{ marginTop: 10, padding: 20 }, styles.rowFlex]}>
            <View
              style={
                this.state.currentFilter == "all" ? styles.filterHighLight : {}
              }
            >
              <Text
                onPress={() => this.setFilterState("all")}
                style={[
                  styles.filterText,
                  this.state.currentFilter == "all" ? { color: "#24a0ed" } : {},
                ]}
              >
                All
              </Text>
            </View>

            <View
              style={
                this.state.currentFilter == "nearby"
                  ? styles.filterHighLight
                  : {}
              }
            >
              <Text
                onPress={() => this.setFilterState("nearby")}
                style={[
                  styles.filterText,
                  this.state.currentFilter == "nearby"
                    ? { color: "#24a0ed" }
                    : {},
                ]}
              >
                Near By
              </Text>
            </View>

            <View
              style={
                this.state.currentFilter == "popular"
                  ? styles.filterHighLight
                  : {}
              }
            >
              <Text
                onPress={() => this.setFilterState("popular")}
                style={[
                  styles.filterText,
                  this.state.currentFilter == "popular"
                    ? { color: "#24a0ed" }
                    : {},
                ]}
              >
                Popular
              </Text>
            </View>

            <View
              style={
                this.state.currentFilter == "lowprice"
                  ? styles.filterHighLight
                  : {}
              }
            >
              <Text
                onPress={() => this.setFilterState("lowprice")}
                style={[
                  styles.filterText,
                  this.state.currentFilter == "lowprice"
                    ? { color: "#24a0ed" }
                    : {},
                ]}
              >
                Low Price
              </Text>
            </View>
          </View>

          {/* List of Chefs */}

          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <View key={item.id} style={styles.chefContainer}>
                <View style={styles.chefDetailsContainer}>
                  <TouchableScale
                    activeOpacity={0.8}
                    style={{ width: "100%" }}
                    onPress={() =>
                      this.props.navigation.navigate("ChefDetail", { item })
                    }
                  >
                    <SharedElement id={`item.${item.mobile}.image`}>
                      <View style={[styles.rowFlex]}>
                        <Image
                          source={item.image}
                          resizeMode={"stretch"}
                          style={{
                            maxWidth: "100%",
                            height: 120,
                            borderRadius: 10,
                          }}
                        />
                      </View>
                    </SharedElement>

                    <View
                      style={[
                        styles.rowFlex,
                        {
                          padding: "5%",
                          width: "100%",
                        },
                      ]}
                    >
                      <SharedElement id={`item.${item.mobile}.text`}>
                        <View>
                          <Text style={styles.chefName}> {item.name} </Text>
                          <View
                            style={{
                              marginTop: 1,
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                          >
                            <FontAwesome
                              name="star"
                              size={16}
                              color="#fff600"
                            />
                            <Text
                              style={{
                                marginLeft: 5,
                                fontWeight: "600",
                                fontSize: 14,
                              }}
                            >
                              {item.rating}{" "}
                            </Text>
                          </View>
                        </View>
                      </SharedElement>

                      <View style={{ marginTop: "5%" }}>
                        <TouchableOpacity>
                          <AntDesign
                            name="arrowright"
                            size={20}
                            color="#24a0ed"
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </TouchableScale>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id}
            numColumns={2}
            onEndReachedThreshold={0.0}
            onEndReached={() => this.loadData().catch(function () {})}
            ListFooterComponent={this.Render_Footer}
          />
        </View>
        <NavigationBar sytle={{ flex: 1 }}></NavigationBar>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  rowFlex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  notification: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: "#b2ebf2",
  },
  searchBox: {
    marginTop: 20,
    height: 40,
    backgroundColor: "#e4e4e4",
    borderRadius: 10,
    padding: 8,
  },
  searchInput: {
    marginLeft: 10,
    fontWeight: "500",
    flex: 1,
  },
  filterText: {
    color: "#969696",
    fontWeight: "600",
    textAlign: "center",
    paddingTop: 6,
    paddingBottom: 6,
    paddingRight: 15,
    paddingLeft: 15,
  },
  filterHighLight: {
    color: "#24a0ed",
    borderRadius: 16,
    backgroundColor: "#b2ebf2",
  },
  chefContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    flex: 1,
  },
  chefDetailsContainer: {
    width: "100%",
    borderRadius: 6,
    padding: 5,
    flexWrap: "wrap",
    backgroundColor: "white",
    marginBottom: 10,
  },
  chefName: {
    fontWeight: "600",
    fontSize: 14,
    marginTop: 6,
    width: "100%",
  },
});

module.exports = Home;

import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SharedElement } from "react-navigation-shared-element";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from "accordion-collapse-react-native";

class ChefDetail extends React.Component {
  chefData = {};

  chefReviews = [
    {
      id: 1,
      name: "John Doe",
      image:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/02/chicken-biryani-recipe.jpg",
      rating: "4.5",
      comment: "Good Food ! ",
    },
    {
      id: 2,
      name: "John Doe",
      image:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/02/chicken-biryani-recipe.jpg",
      rating: "4.5",
      comment: "Good Food ! ",
    },
    {
      id: 3,
      name: "John Doe",
      image:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/02/chicken-biryani-recipe.jpg",
      rating: "4.5",
      comment: "Good Food ! ",
    },
  ];

  chefSpecials = [
    {
      id: 1,
      name: "Chicken",
      image:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/02/chicken-biryani-recipe.jpg",
    },
    {
      id: 2,
      name: "Roti",
      image:
        "https://media.istockphoto.com/photos/traditional-indian-roti-ready-to-serve-picture-id526846282?k=20&m=526846282&s=612x612&w=0&h=H8iikcm6552wIy62TYBmPHn_aiARx9sayRc8r0Fk2Vw=",
    },
    {
      id: 3,
      name: "Egg",
      image:
        "https://media.istockphoto.com/photos/boiled-eggs-cooked-in-spicy-curry-sauce-closeup-in-a-plate-horizontal-picture-id1185235352?k=20&m=1185235352&s=612x612&w=0&h=eO24YrWqcZSc9_y7-W9Z7uoZEnU38RPj_-Hw8Eg3trw=",
    },
    {
      id: 4,
      name: "Paneer",
      image:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/paneer-butter-masala.jpg",
    },
  ];

  constructor(props) {
    super(props);
    this.chefData = this.props.route.params.item;

    console.log(this.chefData);

    this.state = {
      currentFilter: "reviews",
    };
  }

  toggledCollapse() {
    console.log("Called this method");
  }

  setFilterState(filter) {
    this.setState({
      currentFilter: filter,
    });
  }

  render() {
    return (
      <SafeAreaView>
        <View style={{ width: "100%" }}>
          <SharedElement id={`item.${this.chefData.mobile}.image`}>
            <View style={{ position: "relative" }}>
              <Image
                resizeMode="cover"
                style={styles.coverImage}
                source={this.chefData.image}
              ></Image>
            </View>
          </SharedElement>

          <View style={{ position: "absolute", top: 20, left: 10 }}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
          </View>

          <View
            style={{
              position: "absolute",
              bottom: 30,
              left: 20,
            }}
          >
            <Text style={[styles.textShadow, styles.nameHeading]}>
              {this.chefData.name}
            </Text>
          </View>
        </View>

        <View style={[styles.container, { height: "50%" }]}>
          {/* Filters Section  */}

          <View style={[{ padding: 10 }, styles.rowFlex]}>
            <View
              style={
                this.state.currentFilter == "about"
                  ? styles.filterHighLight
                  : {}
              }
            >
              <Text
                onPress={() => this.setFilterState("about")}
                style={[
                  styles.filterText,
                  this.state.currentFilter == "about"
                    ? { color: "#24a0ed" }
                    : {},
                ]}
              >
                About
              </Text>
            </View>

            <View
              style={
                this.state.currentFilter == "specials"
                  ? styles.filterHighLight
                  : {}
              }
            >
              <Text
                onPress={() => this.setFilterState("specials")}
                style={[
                  styles.filterText,
                  this.state.currentFilter == "specials"
                    ? { color: "#24a0ed" }
                    : {},
                ]}
              >
                Specials
              </Text>
            </View>

            <View
              style={
                this.state.currentFilter == "reviews"
                  ? styles.filterHighLight
                  : {}
              }
            >
              <Text
                onPress={() => this.setFilterState("reviews")}
                style={[
                  styles.filterText,
                  this.state.currentFilter == "reviews"
                    ? { color: "#24a0ed" }
                    : {},
                ]}
              >
                Reviews
              </Text>
            </View>
          </View>

          {/* About */}
          {this.state.currentFilter == "about" && (
            <View style={{ mv: 1 }}>
              <Text style={styles.description}>
                {" "}
                Lorem Ipsum is simply unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containing Lorem Ipsum
                passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum.{" "}
              </Text>
            </View>
          )}

          {/* Speciality */}

          {this.state.currentFilter == "specials" && (
            <View style={styles.mv1}>
              <FlatList
                numColumns={2}
                data={this.chefSpecials}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={(item) => (
                  <TouchableOpacity>
                    <View style={styles.card}>
                      <View style={styles.cardContent}>
                        <Image
                          style={styles.cardImage}
                          source={{
                            uri: item.item.image,
                          }}
                        ></Image>
                        <View>
                          <Text style={styles.cardTitle}>{item.item.name}</Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
          )}

          {/* Reviews */}

          {this.state.currentFilter == "reviews" && (
            <View style={styles.card}>
              <View style={styles.cardContent}>
                <Collapse onToggle={() => this.toggledCollapse()}>
                  <CollapseHeader>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        source={this.chefData.image}
                        style={styles.userProfileIcon}
                      ></Image>
                      <View>
                        <Text style={styles.cardTitle}>Abcd</Text>
                        <Text style={{ fontSize: 14 }}>
                          Rated : 4.5{" "}
                          <AntDesign name="star" size={16} color="#ffaa1d" />
                        </Text>
                      </View>
                    </View>
                  </CollapseHeader>
                  <CollapseBody>
                    <View
                      style={{
                        marginLeft: 75,
                      }}
                    >
                      <Text
                        style={{
                          textAlign: "justify",
                          paddingRight: 5,
                        }}
                      >
                        afdas feoie f9owef fefoiwef fweinfew eoifwe foeiwf
                        fepwofe fpoew hfe fieowfew fwoepeif feopwifje fweifjewo{" "}
                      </Text>
                    </View>
                  </CollapseBody>
                </Collapse>
              </View>
            </View>
          )}
        </View>

        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("BookChef", {
                mobilenumber: this.chefData.mobile,
              });
            }}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}> Book Now </Text>
              <AntDesign name="arrowright" size={24} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: "6%",
    paddingVertical: "4%",
  },
  coverImage: {
    width: "100%",
    maxWidth: "100%",
    height: 300,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  nameHeading: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },
  description: {
    fontWeight: "600",
    paddingHorizontal: 4,
    textAlign: "justify",
    color: "#969696",
  },
  textShadow: {
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
  },
  highlightText: {
    fontWeight: "600",
    color: "#24a0ed",
    fontSize: 13,
  },
  mv1: {
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#24a0ed",
    width: "100%",
    textAlign: "center",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 15,
    marginRight: 5,
  },
  rowFlex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  card: {
    minWidth: "45%",
    marginRight: 10,
    borderWidth: 0.3,
    borderRadius: 10,
    borderColor: "#969696",
    marginVertical: 5,
  },
  cardImage: {
    height: 60,
    width: 60,
    borderRadius: 15,
    marginRight: 10,
  },
  cardContent: {
    width: "100%",
    padding: "2%",
    flexDirection: "row",
    alignItems: "center",
  },
  cardTitle: {
    color: "#333333",
    fontWeight: "bold",
    fontSize: 16,
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
  userProfileIcon: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: "5%",
  },
});

module.exports = ChefDetail;

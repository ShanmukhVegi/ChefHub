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
  Button,
  Alert
} from "react-native";

import { Entypo } from "@expo/vector-icons";

import NavigationBar from "../../components/user/NavigationBar";
import TouchableScale from "react-native-touchable-scale";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SharedElement } from "react-navigation-shared-element";
import CustomModal from "../UI/customModal";

class ChefInfo extends React.Component {
  constructor(props) {
    //props.navigation.setParams({ pageName: "ChefInfo" });
    super(props);
    console.log(props);

    console.log("PROPS= ", props);
    this.state = {
      chefInfo: {
        about: "Hi, I'm a chef",
      },
      modalVisible: {
        visible: false,
      },
      fieldsEditable: {
        about: false,
      },
      chefSpecials: [
        {
          itemId: 1,
          name: "Chicken Tikka",
          image:
            "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/paneer-butter-masala.jpg",
        },
        {
          itemId: 2,
          name: "Chiken Tikka",
          image:
            "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/paneer-butter-masala.jpg",
        },
        {
          itemId: 3,
          name: "Chiken Tikka",
          image:
            "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/paneer-butter-masala.jpg",
        },
        {
          itemId: 4,
          name: "Chiken Tikka",
          image:
            "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/paneer-butter-masala.jpg",
        },
        {
          itemId: 5,
          name: "Chiken Tikka",
          image:
            "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/paneer-butter-masala.jpg",
        },
        {
          itemId: 6,
          name: "Chiken Tikka",
          image:
            "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/paneer-butter-masala.jpg",
        },
      ],
    };
    this.colors = {
      colorGreen: "#6FD25A",
      colorOrange: "#F9842C",
      colorBlue: "#3c99dc",
      colorRed: "#ff2400",
    };
    this.originalAboutText = this.state.chefInfo.about;
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  setAboutText(text) {
    this.setState({
      chefInfo: {
        about: text,
      },
    });
  }

  // Function to toggle about field editability
  toggleEditStatus() {
    this.setState({
      fieldsEditable: {
        about: !this.state.fieldsEditable.about,
      },
    });
  }

  // Function to save changes to about field
  saveAboutChanges() {
    this.originalAboutText = this.state.chefInfo.about;
    //Toggling edit status
    this.toggleEditStatus();
  }

  // Function to discard changes to about field
  discardAboutChanges() {
    this.setState({
      chefInfo: {
        about: this.originalAboutText,
      },
    });
    this.toggleEditStatus();
  }

  //Function to remove item from chef's specials list and update state
  removeSpecialFromList(itemId) {
    this.setState({
      chefSpecials: this.state.chefSpecials.filter(
        (item) => item.itemId != itemId
      ),
    });
  }

  Render_Footer = () => {
    return <ActivityIndicator size="large" color="#b2ebf2" />;
  };
  closeHandlerFunction = () => {
    Alert.alert("Are you sure?", "unsaved changes will be lost", [
      { text: "NO", style: "default" },
      {
        text: "ok",
        style: "default",
        onPress: () => {
          this.setState({
            modalVisible: {
              visible: false,
            },
          });
        },
      },
    ]);
  };
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 9, padding: 30 }}>
          <View>
            <Text style={styles.bigHeading}> Your Details </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={[styles.smallHeading]}>About</Text>
              <View>
                {/* If editable is false, show edit icon */}
                {!this.state.fieldsEditable.about && (
                  <TouchableOpacity onPress={() => this.toggleEditStatus()}>
                    <Entypo
                      name="edit"
                      size={20}
                      color={this.colors.colorBlue}
                    />
                  </TouchableOpacity>
                )}
                {/* Else show save and discard option  */}
                {this.state.fieldsEditable.about && (
                  <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity
                      style={{ paddingRight: 15 }}
                      onPress={() => this.saveAboutChanges()}
                    >
                      <Entypo
                        name="save"
                        size={20}
                        color={this.colors.colorBlue}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => this.discardAboutChanges()}
                    >
                      <Entypo
                        name="circle-with-cross"
                        size={20}
                        color={this.colors.colorRed}
                      />
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </View>
            <TextInput
              onChangeText={(text) => this.setAboutText(text)}
              placeholder="About"
              value={this.state.chefInfo.about}
              multiline={true}
              numberOfLines={4}
              editable={this.state.fieldsEditable.about}
              style={[styles.input, { height: 100, textAlignVertical: "top" }]}
            />
          </View>
          <View>
            <Text style={[styles.smallHeading]}>Your Special's</Text>
            <FlatList
              style={{ maxHeight: 300, marginBottom: 20 }}
              numColumns={1}
              data={this.state.chefSpecials}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item.itemId}
              renderItem={(item) => (
                <>
                  <View style={styles.card}>
                    <TouchableOpacity>
                      <View style={styles.cardContent}>
                        <Image
                          style={styles.cardImage}
                          source={{
                            uri: item.item.image,
                          }}
                        ></Image>
                        <View style={{ flexShrink: 1 }}>
                          <Text style={styles.cardTitle}>{item.item.name}</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.cardCloseIcon}>
                    <TouchableOpacity
                      onPress={() =>
                        this.removeSpecialFromList(item.item.itemId)
                      }
                    >
                      <Entypo
                        name="circle-with-cross"
                        size={20}
                        color={this.colors.colorRed}
                      />
                    </TouchableOpacity>
                  </View>
                  <CustomModal
                    isModalVisible={this.state.modalVisible.visible}
                    closeHandler={this.closeHandlerFunction}
                  />
                </>
              )}
            />
            <Button
              style={{ marginTop: 20 }}
              title="Add a new special"
              onPress={() => {
                this.setState({
                  modalVisible: {
                    visible: true,
                  },
                });
              }}
            >
              {" "}
            </Button>
          </View>
        </View>
        <NavigationBar
          style={{ flex: 1 }}
          navigation={this.props}
        ></NavigationBar>
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
  input: {
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderRadius: 10,
  },
  bigHeading: {
    fontSize: 30,
    fontWeight: "600",
  },
  smallHeading: {
    fontSize: 24,
    fontWeight: "600",
    paddingVertical: 20,
  },
  card: {
    width: "100%",
    borderWidth: 0.3,
    borderRadius: 10,
    borderColor: "#969696",
    marginVertical: 8,
    backgroundColor: "white",
    position: "relative",
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
  cardCloseIcon: {
    position: "absolute",
    top: 0,
    right: 0,
  },
});

module.exports = ChefInfo;

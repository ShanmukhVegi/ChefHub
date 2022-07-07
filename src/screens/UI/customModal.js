import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Modal,
  Image,
  Button,
  TextInput,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
const CustomModal = (props) => {
  const [image, setImage] = useState(null);
  const [dishName, setDishName] = useState(null);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log("Image selected");
    if (!result.cancelled) {
      console.log("passed");
      setImage(result.uri);
    }
  };
  useEffect(() => {
    return () => {
      // this should destory the component,but not working!!!
      setImage(null);
      setDishName(null);
    };
  }, []);
  function addSpecialHandler() {
    // imgae url in the form of png and dish name will be availbale in this function
    // just a work around, these values should be availble at chefInfo component
    // for the time being, you can send them to api from here...
    console.log(image);
    console.log(dishName);
  }
  return (
    <View style={styles.centerContainer}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.isModalVisible}
      >
        <View style={styles.centerContainer}>
          <View style={styles.modalView}>
            <View style={styles.closeIcon}>
              <Ionicons
                name="close"
                size={23}
                onPress={props.closeHandler}
              ></Ionicons>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Button
                title={!image ? "Pick an image" : "Select another?"}
                onPress={pickImage}
              />
              <View>
                {image && (
                  <Image
                    source={{ uri: image }}
                    style={{ width: 80, height: 80 }}
                  />
                )}
              </View>
            </View>
            <View style={{ color: "black" }}>
              <TextInput
                placeholder="Enter your Name"
                style={styles.nameInput}
                onChangeText={(modifiedText) => setDishName(modifiedText)}
              />
            </View>
            <Button title="Add" onPress={addSpecialHandler}></Button>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    width: "60%",
    height: "50%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeIcon: {
    position: "absolute",
    right: 2,
    top: 2,
  },
  nameInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "black",
  },
});

export default CustomModal;

import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableHighlight,
  Alert,
} from "react-native";

import { callPostApi, callGetApi } from "../../Helper";

import styles from "../auth/Styles";
import constants from "../../constants/constants";

class BookChef extends React.Component {
  constructor(props) {
    super(props);
    this.chefMobilenumber = this.props.route.params.mobilenumber;
    this.userMobileNumber = "8328180760";
    this.state = {
      bookingDate: "",
      bookingTime: "",
      message: "",
      location: "",
      numberOfPeople: "",
      bookingDateError: "",
      bookingTimeError: "",
      messageError: "",
      locationError: "",
      numberOfPeopleError: "",
    };
  }

  signUpUser() {
    if (
      this.state.bookingDateError.length > 0 ||
      this.state.bookingTimeError.length > 0 ||
      this.state.locationError.length > 0 ||
      this.state.numberOfPeopleError.length > 0
    ) {
      return false;
    }
    this.hasAnEmptyField = false;
    if (this.state.bookingDate.length == 0) {
      this.setState({ bookingDateError: "Please enter a date" });
      this.hasAnEmptyField = true;
    }
    if (this.state.bookingTime.length == 0) {
      this.setState({ bookingTimeError: "Please enter a time" });
      this.hasAnEmptyField = true;
    }
    if (this.state.location.length == 0) {
      this.setState({ locationError: "Please enter a valid location" });
      this.hasAnEmptyField = true;
    }
    if (this.state.numberOfPeople.length == 0) {
      this.setState({
        numberOfPeopleError: "Please enter a valid number of people",
      });
      this.hasAnEmptyField = true;
    }
    if (this.hasAnEmptyField) {
      return false;
    }

    Alert.alert("Are your sure?", "Are you sure you want to book this chef", [
      // The "Yes" button
      {
        text: "Yes",
        onPress: async () => {
          var today = new Date();
          var date =
            today.getFullYear() +
            "-" +
            (today.getMonth() + 1) +
            "-" +
            today.getDate();
          var time =
            today.getHours() +
            ":" +
            today.getMinutes() +
            ":" +
            today.getSeconds();
          var dateTime = date + " " + time;
          var data = {
            bookingDate: this.state.bookingDate,
            bookingTime: this.state.bookingTime,
            orderedDateTime: dateTime,
            message: this.state.message,
            numberOfPeople: this.state.numberOfPeople,
            location: this.state.location,
            orderedBy: this.userMobileNumber,
            orderedTo: this.chefMobilenumber,
          };

          await callPostApi(constants.baseUrl, "addOrder", data)
            .then((result) => {
              if (result == "FAILURE") {
                constants.showAlert(
                  "Failure",
                  "There is some internal problem, please try again!"
                );
              } else {
                if (result.success) {
                  constants.showAlert(
                    "Success",
                    "Booking for chef have been confirmed"
                  );
                } else {
                  constants.showAlert("Failure", result.message);
                }
              }
            })
            .catch(() => {
              console.log("error");
            });
        },
      },
      // The "No" button
      // Does nothing but dismiss the dialog when tapped
      {
        text: "No",
      },
    ]);

    return true;
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.detailsContainer}>
            <Text style={styles.inputText}>BookingDate</Text>
            <TextInput
              onChangeText={(value) => {
                this.setState({ bookingDate: value.trim() });
                this.setState({ bookingDateError: "" });
              }}
              style={[
                this.state.bookingDateError.length > 0
                  ? { borderColor: "red" }
                  : { borderColor: "#e0e0e0" },
                styles.input,
              ]}
              placeholder="Enter Booking Date(DD/MM/YYYY)"
            ></TextInput>
            {this.state.bookingDateError.length > 0 && (
              <Text style={styles.validation}>
                {" "}
                {this.state.bookingDateError}{" "}
              </Text>
            )}

            <Text style={styles.inputText}>BookingTime</Text>
            <TextInput
              onChangeText={(value) => {
                this.setState({ bookingTime: value.trim() });
                this.setState({ bookingTimeError: "" });
              }}
              style={[
                this.state.bookingTimeError.length > 0
                  ? { borderColor: "red" }
                  : { borderColor: "#e0e0e0" },
                styles.input,
              ]}
              placeholder="Enter Booking Time"
            ></TextInput>
            {this.state.bookingTimeError.length > 0 && (
              <Text style={styles.validation}>
                {" "}
                {this.state.bookingTimeError}{" "}
              </Text>
            )}

            <Text style={styles.inputText}>
              Enter a message if you want to send
            </Text>
            <TextInput
              onChangeText={(value) => this.setState({ message: value.trim() })}
              style={[
                this.state.messageError.length > 0
                  ? { borderColor: "red" }
                  : { borderColor: "#e0e0e0" },
                styles.input,
              ]}
              placeholder="Enter a message if you want to send"
            ></TextInput>

            <Text style={styles.inputText}>Number Of People:</Text>
            <TextInput
              onChangeText={(value) => {
                this.setState({ numberOfPeople: value.trim() });
                this.setState({ numberOfPeopleError: "" });
              }}
              style={[
                this.state.numberOfPeopleError.length > 0
                  ? { borderColor: "red" }
                  : { borderColor: "#e0e0e0" },
                styles.input,
              ]}
              placeholder="Enter number of people"
            ></TextInput>
            {this.state.numberOfPeopleError.length > 0 && (
              <Text style={styles.validation}>
                {" "}
                {this.state.numberOfPeopleError}{" "}
              </Text>
            )}

            <Text style={styles.inputText}>Adress:</Text>
            <TextInput
              onChangeText={(value) => {
                this.setState({ location: value.trim() });
                this.setState({ locationError: "" });
              }}
              style={[
                this.state.locationError.length > 0
                  ? { borderColor: "red" }
                  : { borderColor: "#e0e0e0" },
                styles.input,
              ]}
              placeholder="Address"
            ></TextInput>
            {this.state.locationError.length > 0 && (
              <Text style={styles.validation}>
                {" "}
                {this.state.locationError}{" "}
              </Text>
            )}

            <View style={[styles.centerItems, { marginTop: 20 }]}>
              <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => this.signUpUser()}
              >
                <View style={[styles.button]}>
                  <Text
                    style={{
                      color: "white",
                      padding: 15,
                      fontWeight: "600",
                      fontSize: 20,
                      textAlign: "center",
                    }}
                  >
                    Book Chef
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

module.exports = BookChef;

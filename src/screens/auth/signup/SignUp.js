import React from "react";
import {
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableHighlight,
  Alert,
} from "react-native";

import styles from "../Styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import constants from "../../../constants/constants";
import { callPostApi, callGetApi } from "../../../Helper";
import { ThemeProvider } from "@react-navigation/native";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      mobile: "",
      password: "",
      confirmPassword: "",
      country: "India",
      state: "",
      userType: "User",
      addressLine1: "",
      addressLine2: "",
      nameError: "",
      mobileError: "",
      passwordError: "",
      confirmPasswordError: "",
      countryError: "",
      stateError: "",
      addressLine1Error: "",
      addressLine2Error: "",
    };

    this.loading = false;
  }

  hasAnEmptyField = false;

  goLogin() {
    this.props.navigation.navigate("Login");
  }

  setNameState(state) {
    const namePattern = constants.name;
    if (!namePattern.test(state.name)) {
      this.setState({
        nameError: "Please enter a valid name",
      });
    } else {
      this.setState({
        nameError: "",
        name: state.name,
      });
    }
  }

  setMobileState(state) {
    const mobilePattern = constants.mobile;
    console.log(mobilePattern.test(state.mobile));
    if (!mobilePattern.test(state.mobile)) {
      this.setState({
        mobileError: "Please enter a valid mobile",
      });
    } else {
      this.setState({
        mobileError: "",
        mobile: state.mobile,
      });
    }
  }

  setPasswordState(state) {
    const passwordPattern = constants.password;
    if (!passwordPattern.test(state.password)) {
      this.setState({
        passwordError: "Password must contain atleast 6 characters",
      });
    } else {
      this.setState({
        passwordError: "",
        password: state.password,
      });
    }
  }

  setConfirmPasswordState(state) {
    if (state.confirmPassword !== this.state.password) {
      this.setState({
        confirmPasswordError: "Password does not match",
      });
    } else {
      this.setState({
        confirmPasswordError: "",
        confirmPassword: state.confirmPassword,
      });
    }
  }

  setUserType(type) {
    this.setState({
      userType: type,
    });
  }

  // setCountryState(state){
  // 	const namePattern = constants.constants.name;
  // 	if(!namePattern.test(state.country)){
  // 		this.setState({
  // 			countryError : "Enter valid state"
  // 		});
  // 	}
  // 	else{
  // 		this.setState({
  // 			countryError : "",
  // 			country : state.country
  // 		});
  // 	}
  // }

  setStateState(state) {
    const namePattern = constants.name;
    if (!namePattern.test(state.state)) {
      this.setState({
        stateError: "Enter valid state",
      });
    } else {
      this.setState({
        stateError: "",
        state: state.state,
      });
    }
  }

  setAddressLine1State(state) {
    const adPattern = constants.address;
    if (!adPattern.test(state.addressLine1)) {
      this.setState({
        addressLine1Error: "Enter valid address Line",
      });
    } else {
      this.setState({
        addressLine1: state.addressLine1,
        addressLine1Error: "",
      });
    }
  }

  setAddressLine2State(state) {
    const adPattern = constants.address;
    if (!adPattern.test(state.addressLine2)) {
      this.setState({
        addressLine2Error: "Enter valid address Line",
      });
    } else {
      this.setState({
        addressLine2: state.addressLine2,
        addressLine2Error: "",
      });
    }
  }

  isFormValid(state) {
    // If any of the Error is active then return false
    if (
      state.nameError.length > 0 ||
      state.mobileError.length > 0 ||
      state.passwordError.length > 0 ||
      state.confirmPasswordError.length > 0 ||
      state.countryError.length > 0 ||
      state.stateError.length > 0 ||
      state.addressLine1Error.length > 0 ||
      state.addressLine2Error.length > 0
    ) {
      return false;
    }
    this.hasAnEmptyField = false;
    if (this.state.name.length === 0) {
      this.setState({ nameError: "Name is Required" });
      this.hasAnEmptyField = true;
    }
    if (this.state.mobile.length === 0) {
      this.setState({ mobileError: "Mobile is Required" });
      this.hasAnEmptyField = true;
    }
    if (this.state.password.length === 0) {
      this.setState({ passwordError: "Password is Required" });
      this.hasAnEmptyField = true;
    }
    if (this.state.confirmPassword.length === 0) {
      this.setState({
        confirmPasswordError: "Confirm Password is Required",
      });
      this.hasAnEmptyField = true;
    }
    if (this.state.state.length === 0) {
      this.setState({ stateError: "State is Required" });
      this.hasAnEmptyField = true;
    }
    if (this.state.addressLine1.length === 0) {
      this.setState({ addressLine1Error: "Address Line 1 is Required" });
      this.hasAnEmptyField = true;
    }
    if (this.state.addressLine2.length === 0) {
      this.setState({ addressLine2Error: "Address Line 2 is Required" });
      this.hasAnEmptyField = true;
    }

    if (this.hasAnEmptyField) {
      return false;
    }

    return true;
  }

  async signUpUser() {
    if (this.isFormValid(this.state)) {
      var data = {
        name: this.state.name,
        mobilenumber: this.state.mobile,
        password: this.state.password,
        type: this.state.userType,
        country: this.state.country,
        state: this.state.country,
        addressLane1: this.state.addressLine1,
        addressLane2: this.state.addressLine2,
      };
      await callPostApi(constants.baseUrl, "signup", data).then((result) => {
        console.log(result);
      });
    } else {
      constants.showAlert("Fields Error", "Please check all the input fields");
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.loading && (
          <View style={styles.loading}>
            <ActivityIndicator size="large" />
          </View>
        )}
        <ScrollView>
          {/* <View style = { styles.socialLoginContainer }>
					<View style={ styles.socialLogin }>
					</View>
					<View style={ styles.socialLogin }>
					</View>
				</View> */}

          <View style={styles.detailsContainer}>
            <Text style={styles.inputText}>Name</Text>
            <TextInput
              onChangeText={(value) =>
                this.setNameState({ name: value.trim() })
              }
              style={[
                this.state.nameError.length > 0
                  ? { borderColor: "red" }
                  : { borderColor: "#e0e0e0" },
                styles.input,
              ]}
              placeholder="Enter Name"
            ></TextInput>
            {this.state.nameError.length > 0 && (
              <Text style={styles.validation}> {this.state.nameError} </Text>
            )}

            <Text style={styles.inputText}>Mobile Number</Text>
            <TextInput
              onChangeText={(value) =>
                this.setMobileState({ mobile: value.trim() })
              }
              style={[
                this.state.mobileError.length > 0
                  ? { borderColor: "red" }
                  : { borderColor: "#e0e0e0" },
                styles.input,
              ]}
              placeholder="Enter mobile"
            ></TextInput>
            {this.state.mobileError.length > 0 && (
              <Text style={styles.validation}> {this.state.mobileError} </Text>
            )}

            <Text style={styles.inputText}>Password</Text>
            <TextInput
              onChangeText={(value) =>
                this.setPasswordState({
                  password: value.trim(),
                })
              }
              style={[
                this.state.passwordError.length > 0
                  ? { borderColor: "red" }
                  : { borderColor: "#e0e0e0" },
                styles.input,
              ]}
              placeholder="Enter Password"
              secureTextEntry={true}
            ></TextInput>
            {this.state.passwordError.length > 0 && (
              <Text style={styles.validation}>
                {" "}
                {this.state.passwordError}{" "}
              </Text>
            )}

            <Text style={styles.inputText}>Confirm Password</Text>
            <TextInput
              onChangeText={(value) =>
                this.setConfirmPasswordState({
                  confirmPassword: value.trim(),
                })
              }
              style={styles.input}
              placeholder="Re-Enter Password"
              secureTextEntry={true}
            ></TextInput>
            {this.state.confirmPasswordError.length > 0 && (
              <Text style={styles.validation}>
                {" "}
                {this.state.confirmPasswordError}{" "}
              </Text>
            )}

            <Text style={styles.inputText}>You are ? </Text>
            <View style={[styles.flexRow, styles.justifyContentAround]}>
              <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => this.setUserType("Chef")}
                style={{ width: "40%" }}
              >
                <View
                  style={[
                    styles.box,
                    this.state.userType == "Chef"
                      ? {
                          borderWidth: 1,
                          borderColor: "#24a0ed",
                        }
                      : {},
                  ]}
                >
                  <View
                    style={{
                      alignItems: "center",
                      padding: 10,
                    }}
                  >
                    <MaterialCommunityIcons
                      name="chef-hat"
                      size={24}
                      color={
                        this.state.userType == "Chef" ? "#24a0ed" : "black"
                      }
                    />
                    <Text
                      style={[
                        this.state.userType == "Chef"
                          ? { color: "#24a0ed" }
                          : {},
                        {
                          textAlign: "center",
                          paddingTop: 4,
                          fontSize: 16,
                          fontWeight: "600",
                        },
                      ]}
                    >
                      Chef
                    </Text>
                  </View>
                </View>
              </TouchableHighlight>

              <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => this.setUserType("User")}
                style={{ width: "40%" }}
              >
                <View
                  style={[
                    styles.box,
                    this.state.userType == "User"
                      ? {
                          borderWidth: 1,
                          borderColor: "#24a0ed",
                        }
                      : {},
                  ]}
                >
                  <View
                    style={{
                      alignItems: "center",
                      padding: 10,
                    }}
                  >
                    <FontAwesome5
                      name="user-alt"
                      size={22}
                      color={
                        this.state.userType == "User" ? "#24a0ed" : "black"
                      }
                    />
                    <Text
                      style={[
                        this.state.userType == "User"
                          ? { color: "#24a0ed" }
                          : {},
                        {
                          textAlign: "center",
                          paddingTop: 4,
                          fontSize: 16,
                          fontWeight: "600",
                        },
                      ]}
                    >
                      User
                    </Text>
                  </View>
                </View>
              </TouchableHighlight>
            </View>

            <Text style={styles.inputText}>Country</Text>
            <TextInput
              editable={false}
              value={this.state.country}
              style={styles.input}
            ></TextInput>

            <Text style={styles.inputText}>State</Text>
            <TextInput
              onChangeText={(value) =>
                this.setStateState({ state: value.trim() })
              }
              style={styles.input}
              placeholder="Enter State"
            ></TextInput>
            {this.state.stateError.length > 0 && (
              <Text style={styles.validation}> {this.state.stateError} </Text>
            )}

            <Text style={styles.inputText}>Address Lane 1</Text>
            <TextInput
              onChangeText={(value) =>
                this.setAddressLine1State({
                  addressLine1: value.trim(),
                })
              }
              style={styles.input}
              placeholder="Enter Address Lane 1"
            ></TextInput>
            {this.state.addressLine1Error.length > 0 && (
              <Text style={styles.validation}>
                {" "}
                {this.state.addressLine1Error}{" "}
              </Text>
            )}

            <Text style={styles.inputText}>Address Lane 2</Text>
            <TextInput
              onChangeText={(value) =>
                this.setAddressLine2State({
                  addressLine2: value.trim(),
                })
              }
              style={styles.input}
              placeholder="Enter Address Lane 2"
            ></TextInput>
            {this.state.addressLine2Error.length > 0 && (
              <Text style={styles.validation}>
                {" "}
                {this.state.addressLine2Error}{" "}
              </Text>
            )}
          </View>
        </ScrollView>

        <View style={[styles.centerItems, { marginTop: 20 }]}>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => this.signUpUser()}
          >
            <View style={styles.button}>
              <Text
                style={{
                  color: "white",
                  padding: 15,
                  fontWeight: "600",
                  fontSize: 20,
                  textAlign: "center",
                }}
              >
                Sign Up
              </Text>
            </View>
          </TouchableHighlight>
          <Text
            onPress={() => this.goLogin()}
            style={{
              marginTop: 10,
              fontWeight: "500",
              fontSize: 16,
              marginBottom: 7,
            }}
          >
            Already have an account ? Login
          </Text>
        </View>
      </View>
    );
  }
}

export default SignUp;

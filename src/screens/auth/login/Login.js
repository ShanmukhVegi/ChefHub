import React from "react";
// import { AsyncStorage } from 'react-native';
import baseUrl from "../../../../Environment";
import { Text, View, TextInput, TouchableHighlight } from "react-native";
import styles from "../Styles";

import constants from "../../../constants/constants";
import { callPostApi, callGetApi } from "../../../Helper";
import AsyncStorage from "@react-native-async-storage/async-storage";

class Login extends React.Component {
  constructor(props) {
    super();
    this.state = {
      mobile: "",
      password: "",
      mobileError: "",
      passwordError: "",
      isLoading: false,
      isMobileValid: true,
      isPasswordValid: true,
    };
  }

  setMobileNumber(value) {
    const mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(value)) {
      this.setState({
        isMobileValid: false,
      });
    } else {
      this.setState({
        mobile: value,
        isMobileValid: true,
      });
    }
  }

  setPasswordNumber(value) {
    const passwordPattern = /^.{6,}$/;
    if (!passwordPattern.test(value)) {
      this.setState({
        isPasswordValid: false,
      });
    } else {
      this.setState({
        password: value,
        isPasswordValid: true,
      });
    }
  }

  async loginUser() {
    if (!this.state.isMobileValid || !this.state.isPasswordValid) {
      constants.showAlert(
        "Failed",
        "Please Enter a valid Mobile-Number and Password"
      );
      return;
    }
    if (this.state.mobile.length == 0) {
      this.setState({
        isMobileValid: false,
      });
      constants.showAlert("Failed", "Please Enter a valid Mobile-Number");
      return;
    }
    if (this.state.password.length == 0) {
      this.setState({
        isPasswordValid: false,
      });
      constants.showAlert("Failed", "Please Enter password");
      return;
    }
    var data = {
      mobilenumber: this.state.mobile,
      password: this.state.password,
    };
    await callPostApi(constants.baseUrl, "login", data).then((result) => {
      console.log(result);

      if (result == "FAILURE") {
        constants.showAlert(
          "Failure",
          "There is some internal problem, please try again!"
        );
      } else {
        if (result.success) {
          const storeToken = async (value) => {
            try {
              await AsyncStorage.setItem("JsonToken", result.token);
            } catch (e) {
              console.log("ERROR");
            }
          };
          storeToken().then(this.props.navigation.navigate("Home"));
        } else {
          constants.showAlert("Failure", result.message);
        }
      }
    });
  }

  signup() {
    this.props.navigation.navigate("SignUp");
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text
            style={[
              styles.fontSize30,
              styles.marginBottom,
              { textAlign: "center", fontWeight: "700" },
            ]}
          >
            LOGIN
          </Text>
          {/* <View style = { styles.socialLoginContainer }>
					<View style={ styles.socialLogin }>
					</View>
					<View style={ styles.socialLogin }>
					</View>
				</View>  */}
          <View style={styles.detailsContainer}>
            <Text style={styles.inputText}>Mobile Number</Text>
            <TextInput
              onChangeText={(value) => this.setMobileNumber(value)}
              style={[
                { borderColor: !this.state.isMobileValid ? "red" : "#e0e0e0" },
                styles.input,
              ]}
              placeholder="Enter Mobile Number"
            ></TextInput>
            {!this.state.isMobileValid && (
              <Text style={styles.validation}>
                Please enter a valid mobile number
              </Text>
            )}

            <Text style={styles.inputText}>Password</Text>
            <TextInput
              onChangeText={(value) => this.setPasswordNumber(value)}
              style={[
                {
                  borderColor: !this.state.isPasswordValid ? "red" : "#e0e0e0",
                },
                styles.input,
              ]}
              placeholder="Enter Password"
              secureTextEntry={true}
            ></TextInput>
            {!this.state.isPasswordValid && (
              <Text style={styles.validation}>Invalid password</Text>
            )}
          </View>
        </View>
        <View style={[styles.centerItems, { marginTop: 10 }]}>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => this.loginUser()}
          >
            <View style={styles.button}>
              <Text
                style={{
                  color: "white",
                  padding: 15,
                  fontWeight: "600",
                  fontSize: 17,
                  textAlign: "center",
                }}
              >
                Login
              </Text>
            </View>
          </TouchableHighlight>
          <Text
            onPress={() => this.signup()}
            style={{ marginTop: 10, fontWeight: "500", fontSize: 20 }}
          >
            Don't have an account ? SignUp
          </Text>
        </View>
      </View>
    );
  }
}

export default Login;

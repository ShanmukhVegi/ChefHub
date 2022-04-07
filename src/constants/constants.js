import { Alert } from "react-native";

export const constants = {
  //Regex patterns
  //Min 6 Length
  password: new RegExp(/^.{6,}$/),
  mobile: new RegExp(/^[0-9]{10}$/),
  //Allows only alphabets
  name: new RegExp(/^[A-Za-z ]+$/),

  address: new RegExp(/^[ A-Za-z0-9_@./#&+-]*$/),

  baseUrl: "https://chef-hub.herokuapp.com/",

  showAlert: (title, message) =>
    Alert.alert(
      title,
      message,
      [
        {
          text: "Ok",
          style: "cancel",
        },
      ],
      {
        cancelable: true,
      }
    ),
};

module.exports = constants;

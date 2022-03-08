import React from 'react';
import { Text, View, TextInput, Image, Button, ScrollView } from 'react-native';

import styles from '../Styles';

class Login extends React.Component {
  render() {
    return (
      <View style = {styles.container} >
		  <View >
			<Text style={ [styles.fontSize20, styles.marginBottom]} >Login</Text>
			<View style = { styles.socialLoginContainer }>
				<View style={ styles.socialLogin }>
				</View>
				<View style={ styles.socialLogin }>
				</View>
			</View>
			<View style = {styles.detailsContainer}>

				<Text style={styles.inputText}>Mobile Number</Text>
				<TextInput style = { styles.input } placeholder = "Enter Mobile Number"></TextInput>

				<Text style={styles.inputText}>Password</Text>
				<TextInput style = { styles.input } placeholder = "Enter Password" secureTextEntry={true}></TextInput>
				

			</View>
		   </View>

		<View style = {[styles.centerItems, {marginTop : 20}]}>
			<View style= {styles.button}>
				<Text style = {{color : 'white', padding : 15,fontWeight : "600",fontSize : 15, textAlign : 'center'}}>Sign Up</Text>
			</View>
			<Text style={{marginTop : 10, fontWeight : "500", fontSize : 16}}>Don't have an account ? SignUp</Text>
		</View>
		</View>
    );
  }
}

export default Login;
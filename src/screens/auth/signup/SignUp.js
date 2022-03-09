import React from 'react';
<<<<<<< HEAD
import { StyleSheet, Text, View, Button } from 'react-native';
import styles from './styles';
=======
import { Text, View, TextInput,Button, ScrollView } from 'react-native';

import styles from '../Styles';
>>>>>>> 1c4b789a76bb714d90f924afb200db5daacfa500

class SignUp extends React.Component {
<<<<<<< HEAD
	goLogin(){
		this.props.navigation.navigate("Login");
	}
	
	render() {
		return (
		<View style = {styles.container} >
			<ScrollView >
				{/* <View style = { styles.socialLoginContainer }>
					<View style={ styles.socialLogin }>
					</View>
					<View style={ styles.socialLogin }>
					</View>
				</View> */}
				<View style = {styles.detailsContainer}>
					<Text style={styles.inputText}>Name</Text>
					<TextInput style = { styles.input } placeholder = "Enter Name"></TextInput>
=======
  render() {
    return (
<<<<<<< HEAD
      <View style={styles.container}>
        <Text>You have come to signup.</Text>

        <Button
          title="Go Home ra pilla bach"
          onPress={() =>
            this.props.navigation.navigate('Home')
          }
        />
      </View>
=======
      <View style = {styles.container} >
		  <ScrollView >
			<Text style={ [styles.fontSize20, styles.marginBottom]} >Sign Up</Text>
			<View style = { styles.socialLoginContainer }>
				<View style={ styles.socialLogin }>
				</View>
				<View style={ styles.socialLogin }>
				</View>
			</View>
			<View style = {styles.detailsContainer}>
				<Text style={styles.inputText}>Name</Text>
				<TextInput style = { styles.input } placeholder = "Enter Name"></TextInput>
>>>>>>> origin/feature/shanmukh

					<Text style={styles.inputText}>Mobile Number</Text>
					<TextInput style = { styles.input } placeholder = "Enter Email"></TextInput>

					<Text style={styles.inputText}>Password</Text>
					<TextInput style = { styles.input } placeholder = "Enter Password" secureTextEntry={true}></TextInput>
					
					<Text style={styles.inputText}>Confirm Password</Text>
					<TextInput style = { styles.input } placeholder = "Re-Enter Password" secureTextEntry={true}></TextInput>
					

					<Text style={styles.inputText}>You are ? </Text>
					<View style ={[styles.flex, styles.flexRow, styles.justifyContentAround]}>

						<View style={styles.box}>
						<Text style={{textAlign : 'center',padding : 15, fontSize : 17,fontWeight : "600"}}>Chef</Text>
						</View>

						<View style={styles.box}>
							<Text style={{textAlign : 'center',padding : 15, fontSize : 17,fontWeight : "600"}}>User</Text>
						</View>

					</View>
					
					<Text style={styles.inputText}>Country</Text>
					<TextInput style = { styles.input } placeholder = "Enter Address"></TextInput>
					<Text style={styles.inputText}>State</Text>
					<TextInput style = { styles.input } placeholder = "Enter Address"></TextInput>
					<Text style={styles.inputText}>Address Lane 1</Text>
					<TextInput style = { styles.input } placeholder = "Enter Address"></TextInput>
					<Text style={styles.inputText}>Address Lane 2</Text>
					<TextInput style = { styles.input } placeholder = "Enter Address"></TextInput>
					
				</View>
			</ScrollView>

			<View style = {[styles.centerItems, {marginTop : 20}]}>
				<View style= {styles.button}>
					<Text style = {{color : 'white', padding : 15,fontWeight : "600",fontSize : 20, textAlign : 'center'}}>Sign Up</Text>
				</View>
				<Text onTouchStart={()=>this.goLogin()} style={{marginTop : 10, fontWeight : "500", fontSize : 16, marginBottom:7}}>Already have an account ? Login</Text>
			</View>
			</View>
<<<<<<< HEAD
		);
	}
=======
			<Text style={{marginTop : 10, fontWeight : "500", fontSize : 16}}>Already have an account ? Login</Text>
		</View>
		</View>
>>>>>>> 1c4b789a76bb714d90f924afb200db5daacfa500
    );
  }
>>>>>>> origin/feature/shanmukh
}

export default SignUp;
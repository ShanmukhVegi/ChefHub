import React from 'react';
import { Text, View, TextInput, Image, Button, ScrollView, TouchableHighlight } from 'react-native';
import styles from '../Styles';

class Login extends React.Component {
	login(){
		console.log("Tapped on login")
	}

	signup(){
		this.props.navigation.navigate('SignUp')
	}

	render() {
		return (
		<View style = {styles.container} >
			<View >
				<Text style={ [styles.fontSize30, styles.marginBottom,{textAlign:"center",fontWeight:"700"}]}>LOGIN</Text>
				{/* <View style = { styles.socialLoginContainer }>
					<View style={ styles.socialLogin }>
					</View>
					<View style={ styles.socialLogin }>
					</View>
				</View>  */}
				<View style = {styles.detailsContainer}>

					<Text style={styles.inputText}>Mobile Number</Text>
					<TextInput style = { styles.input } placeholder = "Enter Mobile Number"></TextInput>

					<Text style={styles.inputText}>Password</Text>
					<TextInput style = { styles.input } placeholder = "Enter Password" secureTextEntry={true}></TextInput>
					

				</View>
			</View>
			<View style = {[styles.centerItems, {marginTop : 10}]}>
				<View style= {styles.button} onTouchStart={()=>this.login()}> 
					<Text style = {{color : 'white', padding : 15,fontWeight : "600",fontSize : 17, textAlign : 'center'}}>Login</Text>
				</View>
				<Text onTouchStart={()=>this.signup()} style={{marginTop : 10, fontWeight : "500", fontSize : 20}}>Don't have an account ? SignUp</Text>
			</View>
		</View>
		);
	}
}

export default Login;
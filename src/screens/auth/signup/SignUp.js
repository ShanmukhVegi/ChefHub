import React from 'react';
import { Text, View, TextInput,Button, ScrollView } from 'react-native';
import { isValidElement } from 'react/cjs/react.production.min';

import styles from '../Styles';

import patterns from '../../../constants/constants';

class SignUp extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			name : '',
			mobile: '',
			password : '',
			confirmPassword : '',
			country : '',
			state : '',
			userType : '',
			addressLine1 : '',
			addressLine2 : '',
			nameError : 'got this',
			mobileError: '',
			passwordError: '',
			confirmPasswordErorr : '',
			countryError : '',
			stateErorr : ''
		};
	}

	goLogin(){
		this.props.navigation.navigate("Login");
	}

	setNameState(state){
		this.state.name = state.name;
		const namePattern = patterns.name;
		if(!namePattern.test(this.state.name)){
			this.state.nameError = "Enter valid name";
		}
		else{
			this.state.nameError = '';
		}
	}

	setmobileState(state){
		this.state.mobile = state.mobile;
		const mobilePattern =  constants.mobile;
		if(!mobilePattern.test(this.state.mobile)){
			this.state.mobileError = 'Please enter a valid mobile';
		}
		else{
			this.state.mobileError = '';
		}
	}

	setPasswordState(state){
		this.state.password = state.password;
		const passwordPattern = constants.password;
		if(!passwrodPattern.test(this.state.password)){
			this.state.passwordError = 'Password must contain atleast 8 characters including 1 digit';
		}
		else{
			this.state.passwordError = '';
		}
	}

	setConfirmPasswordState(state){
		this.state.confirmPassword = state.confirmPassword;
		if(this.state.confirmPassword !== this.state.password){
			this.state.confirmPasswordErorr = 'Password does not match';
		}
		else{
			this.state.confirmPasswordErorr = '';
		}
	}

	setCountryState(state){
		this.state.country = state.country;
		const namePattern = constants.patterns.name;
		if(!namePattern.test(this.state.country)){
			this.state.countryError = "Enter valid name";
		}
		else{
			this.state.countryError = '';
		}
	}

	setStateState(state){
		this.state.state = state.state;
		const namePattern = constants.patterns.name;
		if(!namePattern.test(this.state.state)){
			this.state.stateError = "Enter valid state";
		}
		else{
			this.state.stateError = '';
		}
	}

	setAddressLine1State(state){
	 	this.state.addressLine1 = state.addressLine1;
		 const adPattern = constants.patterns.address;
		 if(!adPattern.test(this.state.addressLine1)){
			this.state.addressLine1Error = 'Enter valid address Line';
		 }
		 else{
			this.state.addressLine2Error = '';
		 }
	}

	setAddressLine2State(state){
		this.state.addressLine2 = state.addressLine2;
		const adPattern = constants.patterns.address;
		 if(!adPattern.test(this.state.addressLine2)){
			this.state.addressLine2Error = 'Enter valid address Line';
		 }
		 else{
			this.state.addressLine2Error = '';
		 }
   }


   	signUpUser(){	
		if(isValidState(this.state)){
			
		}
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
					<TextInput onChangeText={value => this.setNameState({ name : value.trim()})} style = { styles.input } placeholder = "Enter Name"></TextInput>
					
					
					<Text style = { styles.validation }> { this.state.nameError } </Text>
					

					<Text style={styles.inputText}>Mobile Number</Text>
					<TextInput  onChangeText={value => this.setMobileState({mobile: value.trim()})}  style = { styles.input } placeholder = "Enter mobile"></TextInput>

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
				<View onTouchStart={()=> this.signUpUser()}  style= {styles.button}>
					<Text style = {{color : 'white', padding : 15,fontWeight : "600",fontSize : 20, textAlign : 'center'}}>Sign Up</Text>
				</View>
				<Text onTouchStart={()=>this.goLogin()} style={{marginTop : 10, fontWeight : "500", fontSize : 16, marginBottom:7}}>Already have an account ? Login</Text>
			</View>
			</View>
		);
	}
}

export default SignUp;
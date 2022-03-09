import React from 'react';
<<<<<<< HEAD
import { StyleSheet, Text, View, Button } from 'react-native';
import styles from './styles';
=======
import { Text, View, TextInput,Button, ScrollView } from 'react-native';

import styles from '../Styles';
>>>>>>> 1c4b789a76bb714d90f924afb200db5daacfa500

class SignUp extends React.Component {
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

				<Text style={styles.inputText}>Email</Text>
				<TextInput style = { styles.input } placeholder = "Enter Email"></TextInput>

				<Text style={styles.inputText}>Password</Text>
				<TextInput style = { styles.input } placeholder = "Enter Password" secureTextEntry={true}></TextInput>
				
				<Text style={styles.inputText}>Confirm Password</Text>
				<TextInput style = { styles.input } placeholder = "Re-Enter Password" secureTextEntry={true}></TextInput>
				

				<Text style={styles.inputText}>You are ? </Text>
				<View style ={[styles.flex, styles.flexRow, styles.justifyContentAround]}>

					<View style={styles.box}>
					<Text style={{textAlign : 'center',padding : 15, fontSize : 15,fontWeight : "600"}}>Chef</Text>
					</View>

					<View style={styles.box}>
						<Text style={{textAlign : 'center',padding : 15, fontSize : 15,fontWeight : "600"}}>User</Text>
					</View>

				</View>
				
				
				<Text style={styles.inputText}>Address</Text>
				<TextInput style = { styles.input } placeholder = "Enter Address"></TextInput>
			</View>
		   </ScrollView>

		<View style = {[styles.centerItems, {marginTop : 20}]}>
			<View style= {styles.button}>
				<Text style = {{color : 'white', padding : 15,fontWeight : "600",fontSize : 15, textAlign : 'center'}}>Sign Up</Text>
			</View>
			<Text style={{marginTop : 10, fontWeight : "500", fontSize : 16}}>Already have an account ? Login</Text>
		</View>
		</View>
>>>>>>> 1c4b789a76bb714d90f924afb200db5daacfa500
    );
  }
}



export default SignUp;
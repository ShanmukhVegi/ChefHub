import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

class SignUp extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
        <Text style={ [styles.fontSize20, styles.marginBottom]} >Sign Up</Text>
		<View style = { styles.socialLoginContainer }>
			<View style={ styles.socialLogin }>
			</View>
			<View style={ styles.socialLogin }>
			</View>
		</View>
		<View>
			<Text>Name</Text>
		</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container : {
	padding : 30
	},
	fontSize20 : {
		fontSize : 25,
		fontWeight : "500",
	},
	marginBottom : {
		marginBottom : 30,
	},
	socialLoginContainer : {
		display : 'flex',
		flexDirection : 'row',
		justifyContent : 'space-between',
		marginBottom : 40,
	},
	socialLogin : {
		padding : 30,
		flex : 0.4,
		display : 'flex',
		justifyContent : 'center',
		alignItems : 'center',
		backgroundColor : '#e0e0e0',
		borderRadius : 10,
		color : '#f1f1f1'
	},
	socialImage : {
		color : 'red',
	}
});

export default SignUp;
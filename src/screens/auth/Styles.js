import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

	flex : {
		display : 'flex',
	},
	flexRow : {
		flexDirection : 'row',
	},

	justifyContentAround : {
		justifyContent : 'space-around',
	},

	justifyContentBetween : {
		justifyContent : 'space-around',
	},

	container : {
		padding : 20,
		display : 'flex',
		justifyContent : 'center',
		flex : 1,
	},
	centerItems : {
		display : 'flex',
		justifyContent : 'center',
		alignItems : 'center'
	},
	fontSize30 : {
		fontSize : 30,
		fontWeight : "500",
	},
	fontSize20 : {
		fontSize : 20,
		fontWeight : "500",
	},
	marginBottom : {
		marginBottom : 20,
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
	},
	inputText : {
		marginLeft : 5,
		marginTop : 15,
		fontSize : 15,
		fontWeight : "500",
	},
	input : {
		marginTop : 10,
		marginBottom : 10,
		fontSize : 15,
		padding : 15,
		fontWeight : "700",
		borderRadius : 10,
		backgroundColor : '#e0e0e0',
		borderWidth : 1
	},
	button : {
		fontWeight : '800',
		backgroundColor : '#363636',
		borderRadius : 10,
		width : 300,
		marginBottom : 10,
	},
	detailsContainer : {
		marginBottom : 20,
	},
	box : {
		backgroundColor : '#e0e0e0',
		borderRadius : 10,
		flex : 0.4,
		marginTop : 10,
		alignItems: 'center',
		borderWidth : 1,
		borderColor : '#e0e0e0'
	},
	validation : {
		paddingLeft : 6,
		marginTop : -5,
		color : 'red',
		fontSize : 12
	}
});

module.exports = styles;
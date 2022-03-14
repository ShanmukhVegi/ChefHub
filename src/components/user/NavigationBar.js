import React from 'react';
import { Text,SafeAreaView,View,StyleSheet } from 'react-native';

import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';

class NavigationBar extends React.Component{
    render(){
        return (
                <View style={styles.navContainer}>
                    <AntDesign style={[styles.highLightIcon]} name="home" size={24}  />
                    <Feather style={[styles.icon]} name="shopping-bag" size={24} color="black" />
                    <Ionicons style={[styles.icon]}  name="chatbubbles-outline" size={24} color="black" />
                    <AntDesign style={[styles.icon]} name="user" size={24} color="black" />
                </View>
        )
    }
}

const styles  = StyleSheet.create({
    container : {
        flex : 1
    },
    navContainer : {
        backgroundColor : "white",
        height : 60,
        marginBottom : -30,
        paddingBottom : 5,
        width : '100%',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-around',
        borderTopLeftRadius : 30,
        borderTopRightRadius : 30
    },
    icon : {
        color : 'black'
    },
    highLightIcon : {
        color : '#24a0ed'
    }
})

module.exports = NavigationBar;
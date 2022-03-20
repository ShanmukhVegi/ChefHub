import React from 'react';
import { Text, View,SafeAreaView, TextInput,Button, Image, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { SharedElement } from 'react-navigation-shared-element';
import { TouchableOpacity } from 'react-native-gesture-handler';

class ChefDetail extends React.Component {
    chefData = {};

    constructor(props){
        super(props);
        this.chefData = this.props.route.params.item;
    }


    render(){
        return (
            <SafeAreaView>            
                <View style={{width : "100%"}}>
                    
                    <SharedElement  id={`item.${this.chefData.mobile}.image`}>
                        <View style={{ position :  "relative"}}>
                            <Image resizeMode='stretch' style={styles.coverImage} source={this.chefData.image}></Image>
                        </View>
                    </SharedElement>

                    <View style={{position : "absolute", top : 20, left : 10}}>
                        <TouchableOpacity onPress={()=> this.props.navigation.goBack()}>
                            <Ionicons  name="arrow-back" size={24} color="white"  />
                        </TouchableOpacity>
                    </View>
                </View>
                
                <View style = {styles.container}>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        padding : "10%"
    },
    coverImage : {
        width : "100%",
        maxWidth : "100%",
        height : 300,
        borderBottomLeftRadius : 30,
        borderBottomRightRadius : 30
    },
    backIcon : {
        top : 20, 
        left : 15
    }  
})

module.exports = ChefDetail;
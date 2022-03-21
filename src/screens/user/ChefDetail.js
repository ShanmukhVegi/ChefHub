import React from 'react';
import { Text, View,SafeAreaView,FlatList,Image, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { SharedElement } from 'react-navigation-shared-element';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons'; 

class ChefDetail extends React.Component {
    chefData = {};

    chefSpecials = [
        {
            id : 1,
            name : "Chicken",
            image : "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/02/chicken-biryani-recipe.jpg",
        },
        {
            id : 2,
            name : "Roti",
            image : "https://media.istockphoto.com/photos/traditional-indian-roti-ready-to-serve-picture-id526846282?k=20&m=526846282&s=612x612&w=0&h=H8iikcm6552wIy62TYBmPHn_aiARx9sayRc8r0Fk2Vw=",
        },
        {
            id : 3,
            name : "Egg",
            image : "https://media.istockphoto.com/photos/boiled-eggs-cooked-in-spicy-curry-sauce-closeup-in-a-plate-horizontal-picture-id1185235352?k=20&m=1185235352&s=612x612&w=0&h=eO24YrWqcZSc9_y7-W9Z7uoZEnU38RPj_-Hw8Eg3trw="
        },
        {
            id : 4,
            name : "Paneer",
            image : "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/paneer-butter-masala.jpg"
        }
    ]

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
                            <Image resizeMode='cover' style={styles.coverImage} source={this.chefData.image}></Image>
                        </View>
                    </SharedElement>

                    <View style={{position : "absolute", top : 20, left : 10}}>
                        <TouchableOpacity onPress={()=> this.props.navigation.goBack()}>
                            <Ionicons  name="arrow-back" size={24} color="white"  />
                        </TouchableOpacity>
                    </View>

                    <View style={{position : "absolute", bottom : 30,left : 20}}>
                        <Text style={[styles.textShadow, styles.nameHeading]}>{ this.chefData.name}</Text>
                    </View>
                </View>

                <ScrollView style={styles.container}>
                    {/* About */}

                    <View style={styles.mb1}>
                        <Text style={styles.sideHeading}>About</Text>
                        <Text style={styles.description}> Lorem Ipsum is simply unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </Text>
                    </View>

                    {/* Speciality */}

                    <View style={styles.mb1}>
                        
                        <View style={{flexDirection : 'row', justifyContent : 'space-between', alignItems : 'center'}}>
                            <Text style={styles.sideHeading}> Specials </Text>
                            <TouchableOpacity>
                                <Text style={styles.highlightText}> Show All <AntDesign name="rightcircle" size={12} color="#24a0ed" /></Text> 
                            </TouchableOpacity>
                        </View>

                        <FlatList data={ this.chefSpecials }
                            keyExtractor={(item) => item.id} horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem = { item => (
                                <TouchableOpacity>
                                    <View style={{marginRight : 20,alignItems: "center"}}>
                                        <Image style={styles.specialImage} source={{uri : item.item.image}}></Image>
                                        <Text style={styles.specialDesc}> {item.item.name} </Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                            
                            />
                    </View>

                </ScrollView>

                <View style={styles.container}>
                    <TouchableOpacity>
                        <View style={styles.button}> 
                            <Text style={styles.buttonText}> Book Now </Text>
                            <AntDesign name="arrowright" size={24} color="white" />
                        </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        paddingHorizontal : "6%",
        paddingVertical : "4%"
    },
    coverImage : {
        width : "100%",
        maxWidth : "100%",
        height : 300,
        borderBottomLeftRadius : 30,
        borderBottomRightRadius : 30
    },
    nameHeading : {
        color : "white",
        fontWeight : "bold",
        fontSize : 30
    },
    sideHeading : {
        color : "#333333",
        fontSize : 20,
        fontWeight : "600",
        marginBottom : 10
    },
    description : {
        fontWeight : "600",
        paddingHorizontal : 4,
        textAlign : 'justify',
        color : "#969696"
    },
    textShadow : {
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 5
    },
    specialImage : {
        height : 80,
        width : 80,
        borderRadius : 20,
        marginBottom : 10
    },
    specialDesc : {
        fontWeight : "600",
        fontSize : 16
    },
    highlightText : {
        fontWeight : "600",
        color : "#24a0ed",
        fontSize : 13
    },
    mb1 : {
        marginBottom : 10
    },
    button : {
        backgroundColor : "#24a0ed",
        width : "100%",
        textAlign : "center",
        borderRadius : 12,
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center'
    },
    buttonText : {
        textAlign : "center",
        color : "white",
        fontSize : 20,
        fontWeight : "bold",
        paddingVertical : 15,
        marginRight : 5
    }
})

module.exports = ChefDetail;
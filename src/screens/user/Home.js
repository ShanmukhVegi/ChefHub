import React from 'react';
import { Text, View,SafeAreaView, TextInput,Button, Image, ScrollView, StyleSheet } from 'react-native';

import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';

class Home extends React.Component {
    render() {
        return (
            <SafeAreaView >
                <View style = {{padding: 30} }>
                    <View style= {styles.rowFlex} >
                        <View style={styles.rowFlex}>
                            <View> 
                                {/* User Icon Here */}
                            </View>
                            <View>
                                <Text style={{ color : '#969696' ,fontWeight : "600"}}>Welcome 👋</Text>
                                <Text style={{ fontSize : 16, marginTop : 3,fontWeight : "600"}}> Hrithik Manda</Text>
                            </View>
                        </View>
                        <View style = { [styles.rowFlex,{justifyContent: 'space-around'},styles.notification] }>
                            <Feather name="bell" size={24} color="#3c99dc" />
                        </View>
                    </View>

                    {/*Heading container */}
                    <View style= {{marginTop : 30}}>
                        <Text style = {{ paddingRight : 40, fontSize : 30 ,fontWeight : "600"}}> Find a Good Chef, Stay Healthy </Text>
                    </View>

                    {/*Search container */}

                    <View style = { [styles.searchBox, {display : 'flex', flexDirection : 'row'}]}>
                        <Feather name="search" size={20} color="black" style = {{marginRight : 5} } />
                        <TextInput style = { styles.searchInput } placeholder = "Search for a chef"></TextInput>
                    </View>

                    {/* Filter Section */}

                    <View style= {[{marginTop : 20,padding : 20 },styles.rowFlex]}>
                        <Text style={styles.filterText}>All</Text>
                        <Text style={styles.filterText}>Near By</Text>
                        <Text style={styles.filterText}>Popular</Text>
                        <Text style={styles.filterText}>Low Price</Text>
                    </View>

                    {/* List of Chefs */}
                    <ScrollView>
                        <View style ={styles.chefContainer}>
                            <View style ={ styles.chefDetailsContainer}>
                                <View style = {styles.rowFlex}>
                                    <Image source= {require("../../../assets/images/demoChefIcons/kid.jpg")} style={{width : 120,height : 140,borderRadius : 10}}/>
                                </View>
                                <Text style = { styles.chefName }>Gadwal Bidda</Text>
                                <View style ={{marginTop : 1,display : 'flex',flexDirection:'row',alignItems : 'center'}}>
                                    <AntDesign name="star" size={14} color="#76ff03" />
                                    <AntDesign name="star" size={14} color="#76ff03" />
                                    <AntDesign name="star" size={14} color="#76ff03" />
                                    <AntDesign name="staro" size={14} color="#76ff03" />
                                    <AntDesign name="staro" size={14} color="#76ff03" />
                                </View>

                            </View>
                            
                            <View style ={ styles.chefDetailsContainer}>
                                <View style = {styles.rowFlex}>
                                    <Image source= {require("../../../assets/images/demoChefIcons/girl1.webp")} style={{width : 120,height : 140,borderRadius : 10}}/>
                                </View>
                                <Text style = { styles.chefName }>Pooja Hackde</Text>
                                <View style ={{marginTop : 1,display : 'flex',flexDirection:'row',alignItems : 'center'}}>
                                    <AntDesign name="star" size={14} color="#76ff03" />
                                    <AntDesign name="star" size={14} color="#76ff03" />
                                    <AntDesign name="staro" size={14} color="#76ff03" />
                                    <AntDesign name="staro" size={14} color="#76ff03" />
                                    <AntDesign name="staro" size={14} color="#76ff03" />
                                </View>

                            </View>

                            <View style ={ styles.chefDetailsContainer}>
                                <View style = {styles.rowFlex}>
                                    <Image source= {require("../../../assets/images/demoChefIcons/girl2.jpg")} style={{width : 120,height : 140,borderRadius : 10}}/>
                                </View>
                                <Text style = { styles.chefName }>Samantha</Text>
                                <View style ={{marginTop : 1,display : 'flex',flexDirection:'row',alignItems : 'center'}}>
                                    <AntDesign name="star" size={14} color="#76ff03" />
                                    <AntDesign name="star" size={14} color="#76ff03" />
                                    <AntDesign name="star" size={14} color="#76ff03" />
                                    <AntDesign name="star" size={14} color="#76ff03" />
                                    <AntDesign name="staro" size={14} color="#76ff03" />
                                </View>

                            </View>

                            <View style ={ styles.chefDetailsContainer}>
                                <View style = {styles.rowFlex}>
                                    <Image source= {require("../../../assets/images/demoChefIcons/kid.jpg")} style={{width : 120,height : 140,borderRadius : 10}}/>
                                </View>
                                <Text style = { styles.chefName }>Testing</Text>
                                <View style ={{marginTop : 1,display : 'flex',flexDirection:'row',alignItems : 'center'}}>
                                    <AntDesign name="star" size={14} color="#76ff03" />
                                    <AntDesign name="star" size={14} color="#76ff03" />
                                    <AntDesign name="star" size={14} color="#76ff03" />
                                    <AntDesign name="star" size={14} color="#76ff03" />
                                    <AntDesign name="staro" size={14} color="#76ff03" />
                                </View>

                            </View>

                            <View style ={ styles.chefDetailsContainer}>
                                <View style = {styles.rowFlex}>
                                    <Image source= {require("../../../assets/images/demoChefIcons/boy1.jpg")} style={{width : 120,height : 140,borderRadius : 10}}/>
                                </View>
                                <Text style = { styles.chefName }>Gadwal Bidda</Text>
                                <View style ={{marginTop : 1,display : 'flex',flexDirection:'row',alignItems : 'center'}}>
                                    <AntDesign name="star" size={14} color="#76ff03" />
                                    <AntDesign name="star" size={14} color="#76ff03" />
                                    <AntDesign name="star" size={14} color="#76ff03" />
                                    <AntDesign name="staro" size={14} color="#76ff03" />
                                    <AntDesign name="staro" size={14} color="#76ff03" />
                                </View>

                            </View>

                            <View style ={ styles.chefDetailsContainer}>
                                <View style = {styles.rowFlex}>
                                    <Image source= {require("../../../assets/images/demoChefIcons/kid.jpg")} style={{width : 120,height : 140,borderRadius : 10}}/>
                                </View>
                                <Text style = { styles.chefName }>Gadwal Bidda</Text>
                                <View style ={{marginTop : 1,display : 'flex',flexDirection:'row',alignItems : 'center'}}>
                                    <AntDesign name="star" size={14} color="#76ff03" />
                                    <AntDesign name="star" size={14} color="#76ff03" />
                                    <AntDesign name="star" size={14} color="#76ff03" />
                                    <AntDesign name="staro" size={14} color="#76ff03" />
                                    <AntDesign name="staro" size={14} color="#76ff03" />
                                </View>

                            </View>
                        </View>

                    </ScrollView>

                </View>

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    rowFlex : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
    },
    notification : {
        width : 50,
        height : 50,
        borderRadius : 12,
        backgroundColor : '#b2ebf2'
    },
    searchBox : {
        marginTop : 20,
        height : 40,
        backgroundColor : "#e4e4e4",
        borderRadius : 10,
        padding : 8
    },
    searchInput : {
        marginLeft : 10,
        fontWeight : "500",
        flex : 1
    },
    filterText : {
        color : '#66defa',
        fontWeight : "600"
    },
    chefContainer : {
        display : "flex",
        flexDirection : "row",
        flexWrap : "wrap",
        justifyContent : "space-between",
        flex : 1,
    },
    chefDetailsContainer : {
        width : "45%",
        borderRadius : 6,
        padding : 10,
        height : 200,
        flexWrap : "wrap",
        backgroundColor : "white",
        marginBottom : 10
    },
    chefName : {
        fontWeight : "600",
        fontSize : 14,
        marginTop : 6,
        width : "100%"
    }
})

module.exports = Home;
import React from 'react';
import { Text, View,SafeAreaView, TextInput,Button, Image, ScrollView, StyleSheet } from 'react-native';

import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


import NavigationBar from '../../components/user/NavigationBar';

class Home extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            search : '',
            currentFilter : 'all',
            data : [{
                name : "Hrithik",
                image : "../../../assets/images/demoChefIcons/kid.jpg",
                rating : "4.5"
            },
            {
                name : "Shanmukh",
                image: "../../../assets/images/demoChefIcons/girl2.jpg",
                rating : "4.0"
            },
            {
                name : "Akshay",
                image : "../../../assets/images/demoChefIcons/uncle.jpg",
                rating : "4.5"
            },
            {
                name : "Tiger",
                image : "../../../assets/images/demoChefIcons/boy1.jpg",
                rating : "3.2"
            }
        ],
        }
    }


    setFilterState(filter){
        this.setState({
            currentFilter : filter
        })
    }


    render() {
        return (
            <SafeAreaView style={{flex : 1}}>
                <View style = {{flex : 9,padding: 30} }>
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

                    <View style= {[{marginTop : 10,padding : 20 },styles.rowFlex]}>
                        
                        <View style={ this.state.currentFilter=='all' ?  styles.filterHighLight : {}}>
                            <Text onPress={ ()=> this.setFilterState('all') } style={[styles.filterText,this.state.currentFilter=='all' ?  {color : '#24a0ed'} : {} ]}>All</Text>
                        </View>

                        <View   style={ this.state.currentFilter=='nearby' ?  styles.filterHighLight : {}}>
                            <Text onPress={ () => this.setFilterState('nearby') } style={[styles.filterText,this.state.currentFilter=='nearby' ?  {color : '#24a0ed'} : {} ]}>Near By</Text>
                        </View>

                        <View style={ this.state.currentFilter=='popular' ?  styles.filterHighLight : {}}>
                            <Text onPress={ () => this.setFilterState('popular') } style={[styles.filterText,this.state.currentFilter=='popular' ?  {color : '#24a0ed'} : {} ]}>Popular</Text>
                        </View>

                        <View style={ this.state.currentFilter=='lowprice' ?  styles.filterHighLight : {}}>
                            <Text onPress={ () => this.setFilterState('lowprice') } style={[styles.filterText,this.state.currentFilter=='lowprice' ?  {color : '#24a0ed'} : {} ]}>Low Price</Text>
                        </View>
                    </View>

                    {/* List of Chefs */}
                    <ScrollView >
                        <View style ={styles.chefContainer}>

                            {
                                this.state.data.map((item,index) =>{
                                    return (
                                        <View style ={ styles.chefDetailsContainer}>
                                            <View style = {[styles.rowFlex]}>
                                                <Image source= {require("../../../assets/images/demoChefIcons/kid.jpg") }  resizeMode={'stretch'}  style={{width : "100%",height : 120,borderRadius : 10}}/>
                                            </View>
                                                <View style={[styles.rowFlex,{width : "100%"}]}>
                                                    <View>
                                                        <Text style = { styles.chefName }> { item.name } </Text>
                                                        <View style ={{marginTop : 1,display : 'flex',flexDirection:'row',alignItems : 'center'}}>
                                                            <FontAwesome name="star" size={16} color="#fff600" />
                                                            <Text style={{marginLeft : 5,fontWeight:"600",fontSize: 14}}>{item.rating} </Text>
                                                        </View>
                                                    </View>
                                                    <View style={{marginRight : "5%",marginTop : "5%"}}>
                                                        <AntDesign name="arrowright" size={20} color="#24a0ed"/>
                                                    </View>
                                            </View>
                                        </View>
                                    );
                                })
                            }
                            
                            <View style ={ styles.chefDetailsContainer}>
                                <View style = {[styles.rowFlex]}>
                                    <Image source= {require("../../../assets/images/demoChefIcons/girl1.webp")}  resizeMode={'stretch'}  style={{width : "100%",height : 120,borderRadius : 10}}/>
                                </View>
                                    <View style={[styles.rowFlex,{width : "100%"}]}>
                                        <View>
                                            <Text style = { styles.chefName }>Gadwal Bidda</Text>
                                            <View style ={{marginTop : 1,display : 'flex',flexDirection:'row',alignItems : 'center'}}>
                                                <FontAwesome name="star" size={16} color="#fff600" />
                                                <Text style={{marginLeft : 5,fontWeight:"600",fontSize: 14}}>4.5</Text>
                                            </View>
                                        </View>
                                        <View style={{marginRight : "5%",marginTop : "5%"}}>
                                            <AntDesign name="arrowright" size={20} color="#24a0ed"/>
                                        </View>
                                </View>
                            </View>

                            <View style ={ styles.chefDetailsContainer}>
                                <View style = {[styles.rowFlex]}>
                                    <Image source= {require("../../../assets/images/demoChefIcons/girl2.jpg")}  resizeMode={'stretch'}  style={{width : "100%",height : 120,borderRadius : 10}}/>
                                </View>
                                    <View style={[styles.rowFlex,{width : "100%"}]}>
                                        <View>
                                            <Text style = { styles.chefName }>Gadwal Bidda</Text>
                                            <View style ={{marginTop : 1,display : 'flex',flexDirection:'row',alignItems : 'center'}}>
                                                <FontAwesome name="star" size={16} color="#fff600" />
                                                <Text style={{marginLeft : 5,fontWeight:"600",fontSize: 14}}>4.5</Text>
                                            </View>
                                        </View>
                                        <View style={{marginRight : "5%",marginTop : "5%"}}>
                                            <AntDesign name="arrowright" size={20} color="#24a0ed"/>
                                        </View>
                                </View>
                            </View>

                            <View style ={ styles.chefDetailsContainer}>
                                <View style = {[styles.rowFlex]}>
                                    <Image source= {require("../../../assets/images/demoChefIcons/boy1.jpg")}  resizeMode={'stretch'}  style={{width : "100%",height : 120,borderRadius : 10}}/>
                                </View>
                                    <View style={[styles.rowFlex,{width : "100%"}]}>
                                        <View>
                                            <Text style = { styles.chefName }>Gadwal Bidda</Text>
                                            <View style ={{marginTop : 1,display : 'flex',flexDirection:'row',alignItems : 'center'}}>
                                                <FontAwesome name="star" size={16} color="#fff600" />
                                                <Text style={{marginLeft : 5,fontWeight:"600",fontSize: 14}}>4.5</Text>
                                            </View>
                                        </View>
                                        <View style={{marginRight : "5%",marginTop : "5%"}}>
                                            <AntDesign name="arrowright" size={20} color="#24a0ed"/>
                                        </View>
                                </View>
                            </View>

                            <View style ={ styles.chefDetailsContainer}>
                                <View style = {[styles.rowFlex]}>
                                    <Image source= {require("../../../assets/images/demoChefIcons/boy2.jpg")}  resizeMode={'stretch'}  style={{width : "100%",height : 120,borderRadius : 10}}/>
                                </View>
                                    <View style={[styles.rowFlex,{width : "100%"}]}>
                                        <View>
                                            <Text style = { styles.chefName }>Gadwal Bidda</Text>
                                            <View style ={{marginTop : 1,display : 'flex',flexDirection:'row',alignItems : 'center'}}>
                                                <FontAwesome name="star" size={16} color="#fff600" />
                                                <Text style={{marginLeft : 5,fontWeight:"600",fontSize: 14}}>4.5</Text>
                                            </View>
                                        </View>
                                        <View style={{marginRight : "5%",marginTop : "5%"}}>
                                            <AntDesign name="arrowright" size={20} color="#24a0ed"/>
                                        </View>
                                </View>
                            </View>

                            <View style ={ styles.chefDetailsContainer}>
                                <View style = {[styles.rowFlex]}>
                                    <Image source= {require("../../../assets/images/demoChefIcons/uncle.jpg")}  resizeMode={'stretch'}  style={{width : "100%",height : 120,borderRadius : 10}}/>
                                </View>
                                    <View style={[styles.rowFlex,{width : "100%"}]}>
                                        <View>
                                            <Text style = { styles.chefName }>Gadwal Bidda</Text>
                                            <View style ={{marginTop : 1,display : 'flex',flexDirection:'row',alignItems : 'center'}}>
                                                <FontAwesome name="star" size={16} color="#fff600" />
                                                <Text style={{marginLeft : 5,fontWeight:"600",fontSize: 14}}>4.5</Text>
                                            </View>
                                        </View>
                                        <View style={{marginRight : "5%",marginTop : "5%"}}>
                                            <AntDesign name="arrowright" size={20} color="#24a0ed"/>
                                        </View>
                                </View>
                            </View>
                            
                        </View>
                    </ScrollView>
                </View>
                <NavigationBar sytle={{flex : 1}}></NavigationBar>
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
        color : '#969696',
        fontWeight : "600",
        textAlign : 'center',
        paddingTop:6,
        paddingBottom:6,
        paddingRight:15,
        paddingLeft:15
    },
    filterHighLight : {
        color : "#24a0ed",
        borderRadius : 16,
        backgroundColor : '#b2ebf2'
    },
    chefContainer : {
        paddingLeft : 10,
        paddingRight : 10,
        display : "flex",
        flexDirection : "row",
        flexWrap : "wrap",
        justifyContent : "space-between",
        flex : 1,
    },
    chefDetailsContainer : {
        width : "48%",
        borderRadius : 6,
        padding : 5,
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
import React from "react";
import {
    Text,
    View,
    SafeAreaView,
    TextInput,
    Image,
    FlatList,
    ActivityIndicator,
    StyleSheet,
} from "react-native";

import { Feather, MaterialIcons, AntDesign } from "@expo/vector-icons";

import NavigationBar from "../../components/user/NavigationBar";
import TouchableScale from "react-native-touchable-scale";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SharedElement } from "react-navigation-shared-element";

class ChefHome extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: "",
            currentFilter: "all",
            previousOrders: [
                {
                    orderId: 1,
                    orderedBy: "Hrithik Manda",
                    orderedOn: "12/12/2022",
                    rated: "4.5",
                    userImage: "https://i.pravatar.cc/300?img=1",
                    status: "Completed",
                    location: "Kolkota",
                },
                {
                    orderId: 3,
                    orderedBy: "Hrithik Manda",
                    orderedOn: "13/12/2022",
                    rated: "4.5",
                    userImage: "https://i.pravatar.cc/300?img=1",
                    status: "Completed",
                    location: "Hyderabad",
                },
            ],
            currentOrders: [
                {
                    orderId: 1,
                    orderedBy: "Abc Def",
                    orderedFor: "12/12/2022",
                    userImage: "https://i.pravatar.cc/300?img=1",
                    status: "Completed",
                    location: "Kolkota",
                },
                {
                    orderId: 3,
                    orderedBy: "Ghi Jkl",
                    orderedFor: "13/12/2022",
                    userImage: "https://i.pravatar.cc/300?img=1",
                    status: "Completed",
                    location: "Hyderabad",
                },
            ],
        };
        this.idVal = 10;
    }

    setFilterState(filter) {
        this.setState({
            currentFilter: filter,
        });
    }

    sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    loadData = async () => {
        if (this.state.isLoading == true) {
            /// Avoid make another request is there's happening a request right now
            return;
        }
        this.setState({ isLoading: true });
        console.log("######## THE END  0000000");

        await this.sleep(5000);
        data = [];

        for (var i = 0; i < 5; i++) {
            data.push({
                name: "Motu Bhai",
                image: require("../../../assets/images/demoChefIcons/uncle.jpg"),
                rating: "5.0",
                id: this.idVal,
                mobile: "309390349039403" + this.idVal,
            });
            this.idVal += 100;
        }

        this.setState({
            data: [...this.state.data, ...data],
        });

        console.log("END COMPLETED");
        this.setState({ isLoading: false });
    };

    Render_Footer = () => {
        return <ActivityIndicator size="large" color="#b2ebf2" />;
    };

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 9, padding: 30 }}>
                    <View style={styles.rowFlex}>
                        <View style={styles.rowFlex}>
                            <View>{/* User Icon Here */}</View>
                            <View>
                                <Text
                                    style={{
                                        color: "#969696",
                                        fontWeight: "600",
                                    }}
                                >
                                    Welcome 👋
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        marginTop: 3,
                                        fontWeight: "600",
                                    }}
                                >
                                    {" "}
                                    Hrithik Manda
                                </Text>
                            </View>
                        </View>
                        <View
                            style={[
                                styles.rowFlex,
                                { justifyContent: "space-around" },
                                styles.notification,
                            ]}
                        >
                            <Feather name="bell" size={24} color="#3c99dc" />
                        </View>
                    </View>

                    <View style={{ paddingTop: 30 }}>
                        <Text style={styles.bigHeading}> Current Orders</Text>
                        <FlatList
                            numColumns={1}
                            data={this.state.currentOrders}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(item) => item.orderId}
                            renderItem={(item) => (
                                <TouchableOpacity>
                                    <View style={styles.card}>
                                        <View style={styles.cardContent}>
                                            <Image
                                                style={styles.cardImage}
                                                source={{
                                                    uri: item.item.userImage,
                                                }}
                                            ></Image>
                                            <View>
                                                <Text
                                                    style={[
                                                        styles.cardTitle,
                                                        styles.colorOrange,
                                                    ]}
                                                >
                                                    {item.item.orderedBy}
                                                </Text>
                                                <View
                                                    style={{
                                                        flexDirection: "row",
                                                        alignContent: "center",
                                                        paddingTop: 2,
                                                    }}
                                                >
                                                    <Text
                                                        style={{
                                                            paddingRight: 4,
                                                        }}
                                                    >
                                                        Date :{" "}
                                                        {item.item.orderedFor}
                                                    </Text>
                                                    <MaterialIcons
                                                        name="date-range"
                                                        size={15}
                                                        color={
                                                            styles.colorBlue
                                                                .color
                                                        }
                                                    />
                                                </View>
                                                <View
                                                    style={{
                                                        paddingTop: 2,
                                                        flexDirection: "row",
                                                    }}
                                                >
                                                    <Text
                                                        style={{
                                                            paddingRight: 4,
                                                        }}
                                                    >
                                                        Location :{" "}
                                                        {item.item.location}
                                                    </Text>
                                                    <MaterialIcons
                                                        name="location-on"
                                                        size={15}
                                                        color={
                                                            styles.colorBlue
                                                                .color
                                                        }
                                                    />
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    </View>

                    <View style={{ paddingTop: 20 }}>
                        <Text style={styles.bigHeading}> Previous Orders</Text>
                        <FlatList
                            numColumns={1}
                            data={this.state.previousOrders}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(item) => item.orderId}
                            renderItem={(item) => (
                                <TouchableOpacity>
                                    <View style={[styles.card]}>
                                        <View style={styles.cardContent}>
                                            <Image
                                                style={styles.cardImage}
                                                source={{
                                                    uri: item.item.userImage,
                                                }}
                                            ></Image>
                                            <View>
                                                <Text
                                                    style={[
                                                        styles.cardTitle,
                                                        styles.colorGreen,
                                                    ]}
                                                >
                                                    {item.item.orderedBy}
                                                </Text>
                                                <View
                                                    style={{
                                                        flexDirection: "row",
                                                        alignContent: "center",
                                                        paddingTop: 2,
                                                    }}
                                                >
                                                    <Text
                                                        style={{
                                                            paddingRight: 4,
                                                        }}
                                                    >
                                                        Date :{" "}
                                                        {item.item.orderedOn}
                                                    </Text>
                                                    <MaterialIcons
                                                        name="date-range"
                                                        size={15}
                                                        color={
                                                            styles.colorBlue
                                                                .color
                                                        }
                                                    />
                                                </View>
                                                <View
                                                    style={{
                                                        paddingTop: 2,
                                                        flexDirection: "row",
                                                    }}
                                                >
                                                    <Text
                                                        style={{
                                                            paddingRight: 4,
                                                        }}
                                                    >
                                                        Rated :{" "}
                                                        {item.item.rated}
                                                    </Text>
                                                    <AntDesign
                                                        name="star"
                                                        size={15}
                                                        color="#ffaa1d"
                                                    />
                                                </View>
                                                <View
                                                    style={{
                                                        paddingTop: 2,
                                                        flexDirection: "row",
                                                    }}
                                                >
                                                    <Text
                                                        style={{
                                                            paddingRight: 4,
                                                        }}
                                                    >
                                                        Location :{" "}
                                                        {item.item.location}
                                                    </Text>
                                                    <MaterialIcons
                                                        name="location-on"
                                                        size={15}
                                                        color={
                                                            styles.colorBlue
                                                                .color
                                                        }
                                                    />
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </View>
                <NavigationBar style={{ flex: 1 }}></NavigationBar>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    rowFlex: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    notification: {
        width: 50,
        height: 50,
        borderRadius: 12,
        backgroundColor: "#b2ebf2",
    },
    bigHeading: {
        fontSize: 24,
        fontWeight: "600",
    },
    card: {
        minWidth: "45%",
        marginRight: 10,
        borderWidth: 0.3,
        borderRadius: 10,
        borderColor: "#969696",
        marginVertical: 8,
    },
    cardImage: {
        height: 60,
        width: 60,
        borderRadius: 15,
        marginRight: 10,
    },
    cardContent: {
        width: "100%",
        padding: "2%",
        flexDirection: "row",
        alignItems: "center",
    },
    cardTitle: {
        color: "#333333",
        fontWeight: "bold",
        fontSize: 16,
    },
    colorGreen: {
        color: "#6FD25A",
    },
    colorOrange: {
        color: "#F9842C",
    },
    colorBlue: {
        color: "#3c99dc",
    },
});

module.exports = ChefHome;

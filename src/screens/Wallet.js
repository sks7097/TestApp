import React, { Component } from "react";
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    AsyncStorage,
    ToastAndroid,
    FlatList,

} from "react-native";
import CardView from 'react-native-cardview';
class Wallet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            humidity: "humidity",
            temp: "temprature",
            cityname: "cityname",
            tasklist: []
        };
    }

    fetchcity(text) {
        console.log(text);
        this.setState({ text });

        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=72611b8c7d9a5ced3956b6aa6e4dd8fd`
        )
            .then((response) => {
                if (response.status === 200) {
                    console.log("SUCCESSS");
                    return response.json();
                } else {
                    console.log("SOMETHING WENT WRONG");
                }
            })

            .then((city) => {
                this.setState({
                    humidity: city.main.humidity,
                    temp: city.main.temp,
                    cityname: city.name
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    saveData = async () => {

        try {
            let taskObj = {
                cityName: this.state.cityname,
                cityTemp: this.state.temp,
                cityHumidity: this.state.humidity
            };

            this.state.tasklist.push(taskObj);
            console.log("===========", JSON.stringify(this.state.tasklist))

            AsyncStorage.setItem("user", JSON.stringify(this.state.tasklist));
            ToastAndroid.show("task added", ToastAndroid.SHORT);



        } catch (error) { }
    };

    getData = async () => {
        let user = await AsyncStorage.getItem("user");
        let parsed = JSON.parse(user);

        this.setState({
            tasklist: parsed
        })
    }



    componentDidMount() {
        this.getData()

    }
    render() {

        return (
            <View style={{ width: "100%", height: "100%", padding: 10 }}>
                <TextInput
                    style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
                    onChangeText={(text) => this.fetchcity(text)}
                    value={this.state.text}
                    placeholder={"Search City"}
                />

                <View style={{ marginTop: 20 }}>
                    <View
                        style={{
                            width: "100%",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            padding: 10
                        }}
                    >
                        <Text>{this.state.cityname}</Text>
                        <Text>{this.state.temp}</Text>
                        <Text>{this.state.humidity}</Text>
                        {this.state.cityname !== "cityname" ? (
                            <TouchableOpacity
                                style={{
                                    backgroundColor: "green",
                                    paddingHorizontal: 10,
                                    paddingVertical: 3
                                }}
                                onPress={() => this.saveData()}
                            >
                                <Text style={{ color: "white" }}>add</Text>
                            </TouchableOpacity>
                        ) : null}
                    </View>
                </View>

                {/* /ncsdjkbcjhdsjhcvdhvhdvhvcdhvhvd */}
                <View style={{ width: "100%" }}>
                    <CardView
                        style={{ backgroundColor: '#42f59e' }}
                        cardElevation={5}
                        cardMaxElevation={0}
                        cornerRadius={10}>
                        <View
                            style={{
                                width: "100%",
                                flexDirection: "row",
                                padding: 10
                            }}
                        >
                            <Text style={{ textAlign: "left", flex: 1, color: "white" }}>CityName</Text>
                            <Text style={{ textAlign: "center", flex: 1, color: "white" }}>CityTemp</Text>
                            <Text style={{ textAlign: "center", flex: 1, color: "white" }}>CityHumidity</Text>
                        </View>
                        <FlatList
                            data={this.state.tasklist}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(item, index) => index}
                            renderItem={({ item }) => {
                                return (

                                    <View style={{ marginTop: 10 }}>

                                        <View
                                            style={{
                                                width: "100%",
                                                flexDirection: "row",
                                                padding: 10
                                            }}
                                        >
                                            <Text style={{ textAlign: "left", flex: 1, color: "white" }}>{item.cityName}</Text>
                                            <Text style={{ textAlign: "center", flex: 1, color: "white" }}>{item.cityTemp}</Text>
                                            <Text style={{ textAlign: "center", flex: 1, color: "white" }}>{item.cityHumidity}</Text>
                                        </View>
                                        <View style={{ width: "100%", height: 1, backgroundColor: "black" }}></View>
                                    </View>
                                );
                            }}
                        />
                        <View style={{ height: 10 }}></View>

                    </CardView>
                </View>


                <TouchableOpacity
                    style={{

                        width: "100%", alignItems: "center", marginTop: 30
                    }}
                    onPress={() => this.props.navigation.navigate('QrScanner')}
                >
                    <View style={{
                        backgroundColor: "#42f59e", paddingHorizontal: 10,
                        paddingVertical: 3
                    }}>
                        <Text style={{ color: "white" }}>open Qrscanner</Text>
                    </View>
                </TouchableOpacity>


            </View>
        );
    }
}

export default Wallet;

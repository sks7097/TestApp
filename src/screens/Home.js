import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, TextInput } from 'react-native';

import BottomTab from '../components/BottomTab';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userEmail: '',
            userPassword: ''
        };
    }

    render() {
        return (
            <View style={{ width: "100%", height: "100%" }}>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Text>Logo</Text>
                </View>
                <View style={{ flex: 1.5, }}>
                    <View style={{ width: "100%", alignItems: "center", }}>
                        <Text style={{ marginBottom: 20, color: "#78909c", fontWeight: "bold", fontSize: 18 }}>Home</Text>
                        <TextInput
                            placeholder="Email"
                            keyboardType={'email-address'}
                            maxLength={30}
                            underlineColorAndroid='transparent'
                            style={{// Setting up Hint Align center.
                                textAlign: 'left',
                                width: Dimensions.get("window").width / 1.2,
                                height: 50,
                                borderWidth: 1,
                                borderColor: '#78909c',
                                paddingStart: 10,
                                fontWeight: "bold",
                                color: "#000000",
                                borderRadius: 5
                            }}
                            value={this.state.userEmail}
                            onChangeText={text => this.setState({ userEmail: text })}
                        />

                        <TextInput
                            placeholder="Password"
                            maxLength={10}
                            keyboardType={'numeric'}
                            underlineColorAndroid='transparent'
                            style={{// Setting up Hint Align center.
                                textAlign: 'left',
                                width: Dimensions.get("window").width / 1.2,
                                height: 50,
                                borderWidth: 1,
                                borderColor: '#78909c',
                                paddingStart: 10,
                                fontWeight: "bold",
                                color: "#000000",
                                marginTop: 15,
                                borderRadius: 5
                            }}
                            value={this.state.userPassword}
                            onChangeText={text => this.setState({ userPassword: text })}
                        />

                        <View style={{ width: "100%", flexDirection: "row", marginTop: 20 }}>
                            <View style={{ flex: 1, alignItems: "center", marginStart: 8 }}>
                                <Text style={{ color: "#78909c", fontWeight: "bold", fontSize: 15 }}>Remember me</Text>
                            </View>
                            <View style={{ flex: 0.7, }}></View>
                            <View style={{ flex: 1, }}>
                                <Text style={{ color: "#78909c", fontWeight: "bold", fontSize: 15 }}>Forgot Password ?</Text>
                            </View>
                        </View>

                        <View style={{ width: "100%", alignItems: "center" }}>
                            <TouchableOpacity
                                onPress={() => { console.log(" sign in pressed.") }}
                                style={{// Setting up Hint Align center.
                                    width: Dimensions.get("window").width / 1.2,
                                    height: 50,
                                    marginTop: 15,
                                    borderRadius: 5,
                                    backgroundColor: "#fbc02d",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                <Text style={{ color: "black", fontWeight: "bold", fontSize: 14 }}>SIGN IN</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ width: "100%", alignItems: "center", marginTop: 10 }}>
                            <View
                                style={{// Setting up Hint Align center.
                                    width: Dimensions.get("window").width / 1.2,
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                <Text style={{ color: "black", fontSize: 14, textAlign: "center" }}>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>
                    <BottomTab navigation={this.props.navigation} />
                </View>
            </View>
        );
    }
}

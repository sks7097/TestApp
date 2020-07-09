import React, { Component } from 'react';
import { View, Text, Picker, TextInput, Dimensions, TouchableOpacity, Image } from 'react-native';
import CardView from 'react-native-cardview';


export default class ApplyLeaves extends Component {
    constructor(props) {
        super(props);
        this.state = {
            PickerValueHolder: '',
            text: ""
        };
    }

    render() {
        return (
            <View style={{ width: "100%", height: "100%", padding: 15 }}>
                <View style={{ flex: 3 }}>
                    <CardView
                        cardElevation={2}
                        cardMaxElevation={15}
                        cornerRadius={5}>

                        <View style={{ width: "100%", padding: 8, }}>
                            <Text style={{ color: "#16529a", fontWeight: "bold", marginHorizontal: 10, marginTop: 5 }}>From</Text>
                            <View style={{ width: '100%', flexDirection: 'row' }}>
                                <View style={{ flex: 2.5, flexDirection: 'row' }}>
                                    <Text style={{ color: "#16529a", fontWeight: "bold", marginHorizontal: 10, marginTop: 5 }}>21/01/2020</Text>
                                    <Text style={{ color: "#16529a", fontWeight: "bold", marginHorizontal: 10, marginTop: 5 }}>to</Text>
                                    <Text style={{ color: "#16529a", fontWeight: "bold", marginHorizontal: 10, marginTop: 5 }}>30/01/2020</Text>
                                </View>

                                <View>
                                    <Image
                                        source={require('../../assets/calender.png')}
                                        style={{ width: 25, height: 25, tintColor: '#f7c441' }}
                                    />
                                </View>
                            </View>

                            <View style={{ height: 1, width: '85%', backgroundColor: '#16529a' }} />

                            <Text style={{ color: "#16529a", fontWeight: "bold", marginHorizontal: 10, marginTop: 5 }}>Leave Type</Text>
                            <View style={{ borderBottomWidth: 1, borderBottomColor: "#16529a" }}>
                                <Picker
                                    selectedValue={this.state.PickerValueHolder}
                                    onValueChange={(itemValue, itemIndex) => this.setState({ PickerValueHolder: itemValue })} >
                                    <Picker.Item label="Casual Leave" value="Casual Leave" />
                                    <Picker.Item label="Sick Leave" value="Sick Leave" />
                                    <Picker.Item label="Emergency Leave" value="Emergency Leave" />
                                </Picker>
                            </View>

                            <View style={{ width: "100%", marginTop: 15 }}>
                                <Text style={{ color: "#16529a", fontWeight: "bold", margin: 0 }}>Reason</Text>
                                <TextInput
                                    placeholder='Suffering From High Fever'
                                    style={{
                                        textAlign: "left",
                                        width: "100%",
                                        height: 100,
                                        borderColor: 'gray',
                                        borderWidth: 1,
                                        padding: 2,
                                        borderRadius: 5,
                                        marginTop: 10
                                    }}
                                    multiline
                                    onChangeText={text => this.setState({ text })}
                                    value={this.state.text}
                                />
                            </View>

                            <View style={{ width: "100%", marginTop: 15 }}>
                                <Text style={{ color: "#16529a", fontWeight: "bold", margin: 0 }}>Supporting Documents</Text>
                                <View style={{ width: "100%", flexDirection: 'row', paddingVertical: 8, alignItems: 'center' }}>
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <Image
                                            source={require('../../assets/imageplaceholder.jpg')}
                                            style={{ width: 50, height: 50, marginRight: 15 }}
                                        />
                                        <Image
                                            source={require('../../assets/imageplaceholder.jpg')}
                                            style={{ width: 50, height: 50 }}
                                        />
                                    </View>

                                    <View style={{ flex: 1, flexDirection: 'row', marginLeft: '40%' }}>
                                        <Image
                                            resizeMode="contain"
                                            source={require('../../assets/pin.png')}
                                            style={{ width: 20, height: 20, marginRight: 5 }}
                                        />
                                        <Text>Attach file</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </CardView>
                </View>


                <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-end" }}>
                    <TouchableOpacity
                        style={{
                            width: Dimensions.get("window").width / 1.2,
                            height: 50,
                            marginTop: 15,
                            borderRadius: 5,
                            backgroundColor: "#fbc02d",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                        onPress={() => {this.props.navigation.navigate('ShowVacations')}}
                        >
                        <Text style={{ color: "black", fontWeight: "bold", fontSize: 14 }}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

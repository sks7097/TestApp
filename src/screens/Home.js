import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, ToastAndroid, AsyncStorage } from 'react-native';
import styles from '../styles/tabScreenStyle'
import CardView from 'react-native-cardview';
import { CheckBox } from 'react-native-elements';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            empId: "",
            name: "",
            checked: false
        };
    }

    handleFormSubmit = async () => {
        if (this.state.empId === "" || this.state.name === "") {
            ToastAndroid.show("Enter the mandetory fields", ToastAndroid.SHORT);
        }
        else {
            if (this.state.checked) {
                this.props.navigation.navigate('Chat')
            }
            else {

                let user = await AsyncStorage.getItem('user');
                let parsed = JSON.parse(user);
                this.props.navigation.navigate('Notes', { alltask: parsed, ScreenName: "Home" })
            }

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <CardView
                    style={styles.cardStyles}
                    cardElevation={3}
                    cornerRadius={15}>
                    <View>
                        <TextInput
                            style={{ fontWeight: "bold" }}
                            value={this.state.name}
                            onChangeText={text => this.setState({ name: text })}
                            placeholder={"EMployee NAME"}
                            maxLength={20} />
                    </View>
                </CardView>

                <CardView
                    style={styles.cardStyles}
                    cardElevation={3}
                    cornerRadius={15}>
                    <View>
                        <TextInput
                            style={{ fontWeight: "bold" }}
                            value={this.state.empId}
                            onChangeText={text => this.setState({ empId: text })}
                            placeholder={"Employee ID"}
                            maxLength={20} />
                    </View>
                </CardView>

                <TouchableOpacity style={{ flexDirection: "row" }} >

                    <CheckBox
                        checkedIcon='check-square'
                        checked={this.state.checked}
                        checkedColor={"rgba(3, 147, 141,0.6)"}
                        onPress={() => {
                            this.setState({ checked: true })
                        }}
                    />
                    <Text style={{ alignSelf: "center", fontWeight: "bold", color: "rgba(3, 147, 141,0.9)" }}>Check it If Admin</Text>
                </TouchableOpacity>

                <View>
                    <TouchableOpacity style={styles.submitButton} onPress={() => { this.handleFormSubmit() }}>
                        <Text style={styles.submiText}>Submit</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

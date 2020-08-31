import React, { Component } from 'react';
import {
    Platform, StyleSheet, Text,
    View, TouchableOpacity, AsyncStorage,
} from 'react-native';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TaskName: "",
            taskdec: "",
            fromdate: "",
            todate: "",
            status: "To Start",
            tasklist: []


        };

    }
    saveData() {
        /*let user = "Michal";*/
        let obj = {
            name: 'Michal',
            email: 'michal@gmail.com',
            city: 'New York',
        }
        /*AsyncStorage.setItem('user',user);*/
        AsyncStorage.setItem('user', JSON.stringify(obj));

        this.props.navigation.navigate('Notes')
    }
    displayData = async () => {
        try {
            let user = await AsyncStorage.getItem('user');
            let parsed = JSON.parse(user);
            alert(parsed.email);
        }
        catch (error) {
            alert(error)
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.saveData}>
                    <Text>Click to save data</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.displayData}>
                    <Text>Click to display data</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
}); 
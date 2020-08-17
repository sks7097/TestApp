import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import styles from '../styles/tabScreenStyle'
import BottomTab from '../components/BottomTab';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Home</Text>
                <View style={styles.bottomTab}>
                    <BottomTab navigation={this.props.navigation} />
                </View>
            </View>
        );
    }
}

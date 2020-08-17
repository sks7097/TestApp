import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/tabScreenStyle'

import BottomTab from '../components/BottomTab';

export default class Notes extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Note</Text>
                <View style={styles.bottomTab}>
                    <BottomTab navigation={this.props.navigation} />
                </View>
            </View>
        );
    }
}

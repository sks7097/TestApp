import React, { Component } from 'react';
import { View, Text } from 'react-native';

import BottomTab from '../components/BottomTab';

export default class Wallet extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Wallet screen</Text>

                <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>
                    <BottomTab navigation={this.props.navigation} />
                </View>
            </View>
        );
    }
}

import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Home from 'react-native-vector-icons/Feather';
import Note from 'react-native-vector-icons/Foundation';
import Chat from 'react-native-vector-icons/Fontisto';
import Wallet from 'react-native-vector-icons/FontAwesome';
import Profile from 'react-native-vector-icons/AntDesign';

import styles from '../styles/bottomtab';

export default class BottomTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <TouchableOpacity style={styles.leftitemView} onPress={() => {
                        this.props.navigation.navigate('Home')
                    }}>
                        <Home
                            name='home'
                            color='black'
                            size={28} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.leftitemView} onPress={() => {
                        this.props.navigation.navigate('Notes')
                    }}>
                        <Note
                            name='clipboard-notes'
                            color='black'
                            size={28} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.leftitemView} onPress={() => {
                        this.props.navigation.navigate('Chat')
                    }}>
                        <Chat
                            name='hipchat'
                            color='black'
                            size={28} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.leftitemView} onPress={() => {
                        this.props.navigation.navigate('Wallet')
                    }}>
                        <Wallet
                            name='dollar'
                            color='black'
                            size={28} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.leftitemView} onPress={() => {
                        this.props.navigation.navigate('Profile')
                    }}>
                        <Profile
                            name='user'
                            color='black'
                            size={28} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
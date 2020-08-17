import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import styles from '../styles/tabScreenStyle'
import CardView from 'react-native-cardview';
import Search from 'react-native-vector-icons/MaterialIcons';
import CardItem from '../components/cardItem'

import BottomTab from '../components/BottomTab';


const dataArray = [
    {
        "name": "Sushil",
        "time": "1:30pm",
        "description": "Great day ..........",
        "img_url": "https://homepages.cae.wisc.edu/~ece533/images/serrano.png"
    },
    {
        "name": "Haj",
        "time": "5am",
        "description": "I will sent by mail ...",
        "img_url": "https://homepages.cae.wisc.edu/~ece533/images/zelda.png"
    },
    {
        "name": "Krishna",
        "time": "Yesterday",
        "description": "Lot's of fun ..",
        "img_url": "https://homepages.cae.wisc.edu/~ece533/images/watch.png"
    },
    {
        "name": "Ramesh",
        "time": "4pm",
        "description": "Good To go ..",
        "img_url": "https://homepages.cae.wisc.edu/~ece533/images/sails.png"
    },
    {
        "name": "Suresh",
        "time": "2pm",
        "description": "Last Choice ..",
        "img_url": "https://homepages.cae.wisc.edu/~ece533/images/fruits.png"
    },
    {
        "name": "Arron",
        "time": "5pm",
        "description": "Ms Dhoni (7) Retires Cricket ..",
        "img_url": "https://homepages.cae.wisc.edu/~ece533/images/sails.png"
    },

    {
        "name": "Test Name",
        "time": "6pm",
        "description": "Ipl on Septmber ..",
        "img_url": "https://homepages.cae.wisc.edu/~ece533/images/serrano.png"
    },
    {
        "name": "Gita",
        "time": "10:45am",
        "description": "Raina (3) Retires Cricket ..",
        "img_url": "https://homepages.cae.wisc.edu/~ece533/images/watch.png"
    },
    {
        "name": "Arron",
        "time": "5pm",
        "description": "God is one for all ..",
        "img_url": "https://homepages.cae.wisc.edu/~ece533/images/zelda.png"
    },

    {
        "name": "Test Name",
        "time": "6pm",
        "description": "Have nice Day ..",
        "img_url": "https://homepages.cae.wisc.edu/~ece533/images/serrano.png"
    },
    {
        "name": "Gita Test",
        "time": "10:45am",
        "description": "Thank You React-Native ..",
        "img_url": "https://homepages.cae.wisc.edu/~ece533/images/fruits.png"
    },
];


export default class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }



    render() {
        return (
            <View style={styles.chatbg}>
                <View style={styles.flatListStyle}>
                    <Text style={{ color: "#3b4453", fontSize: 22, fontWeight: "bold", marginStart: 23, marginTop: 10 }}>Chats</Text>
                </View>

                <CardView
                    style={styles.cardStyles}
                    cornerRadius={0}>
                    <TouchableOpacity style={styles.searchView}>
                        <Search
                            name='search'
                            color='black'
                            style={styles.icon}
                            size={25} />
                        <Text style={styles.lookingforLabel}>Search</Text>
                    </TouchableOpacity>
                </CardView>

                <View style={styles.flatView}>
                    <View style={{ flex: 1 }}>
                        <FlatList
                            data={dataArray}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(item, index) => index}
                            renderItem={({ item, index }) => {
                                return (
                                    <CardItem
                                        name={item.name}
                                        time={item.time}
                                        description={item.description}
                                        img_url={item.img_url}
                                    />

                                )
                            }}
                        />
                        <View style={styles.btmView} />

                    </View>



                </View>
                <View style={styles.bottomTab}>
                    <BottomTab navigation={this.props.navigation} />
                </View>
            </View>
        );
    }
}

import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import CardView from 'react-native-cardview';

import styles from '../styles/tabScreenStyle';

const CardItem = (props) => {


    return (


        <CardView
            style={styles.cardItem}
            cardElevation={0}
        >
            <View style={styles.itembg}>

                <View style={styles.chatView}>
                    <Text style={styles.name}>Task Name : {props.name}</Text>
                    <Text style={styles.dec}>Task Description : {props.description}</Text>
                    <Text style={styles.time}>From Date : {props.fromDate} To Date {props.toDate}</Text>
                    <Text style={styles.time}>Status : {props.status}</Text>
                </View>

                <View style={{ flex: 0.6, }}>

                </View>
            </View>
        </CardView>



    )
}

export default CardItem
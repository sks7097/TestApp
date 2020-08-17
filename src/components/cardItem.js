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
                <View style={styles.imgView}>
                    <Image source={{ uri: props.img_url }}
                        style={styles.imgbg} />
                </View>
                <View style={styles.chatView}>
                    <Text style={styles.name}>{props.name}</Text>
                    <Text style={styles.dec}>{props.description}</Text>
                    <Text style={styles.time}>{props.time}</Text>
                </View>
            </View>
        </CardView>



    )
}

export default CardItem
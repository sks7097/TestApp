import React, { Component } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import CardView from 'react-native-cardview';

const dataArray = [
    {
        "title": "Annual",
        "total": 22,
        "used": 10
    },
    {
        "title": "Haj",
        "total": 5,
        "used": 2
    },
    {
        "title": "Marriage",
        "total": 19,
        "used": 13
    },
    {
        "title": "Saudi National Day",
        "total": 5,
        "used": 2
    },
    {
        "title": "Sick From 01 To 30 Days",
        "total": 22,
        "used": 18
    },
    {
        "title": "Sick From 30 To 90 Days",
        "total": 5,
        "used": 2
    },

    {
        "title": "Special",
        "total": 22,
        "used": 20
    },
    {
        "title": "UnPaid",
        "total": 5,
        "used": 2
    },
];

export default class ShowVacations extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ width: "100%", height: "100%", padding: 15, }}>
                <View style={{ flex: 4 }}>
                    <View style={{ width: "100%", flexDirection: "row" }}>
                        <Text style={{ flex: 1, color: "#1d4064", fontSize: 18, fontWeight: "bold" }}>Vacation Balance</Text>
                        <Text style={{ flex: 1, color: "#f7c441", fontSize: 18, textAlign: "right", fontWeight: 'bold' }}>View Status</Text>
                    </View>
                    <FlatList
                        data={dataArray}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item: rowData }) => {
                            return (
                                <View>
                                    <CardView
                                        cardElevation={4}
                                        cornerRadius={8}
                                        style={{ marginVertical: 5, }}>
                                        <View style={{ width: "100%", paddingVertical: 10 }}>
                                            <Text style={{ marginStart: 15, marginBottom: 5, color: "#2f598f", fontSize: 15, fontWeight: "bold" }}>{rowData.title}</Text>
                                            <View style={{ flexDirection: "row" }}>
                                                <Text style={{ flex: 0.5, }}>Total</Text>
                                                <View style={{ flex: 3, backgroundColor: "white", flexDirection: 'row' }}>
                                                    <View style={{ backgroundColor: "#2f598f", borderTopEndRadius: 8, borderBottomEndRadius: 8,width: rowData.total === 22 ? '88%' : '50%', height: 18 }} />
                                                    <Text style={{ marginLeft: 10, marginRight: 8 }}>{rowData.total}</Text>
                                                </View>
                                            </View>

                                            <View style={{ flexDirection: "row", marginTop: 5 }}>
                                                <Text style={{ flex: 0.5, }}>Used</Text>
                                                <View style={{ flex: 3, backgroundColor: "white", flexDirection: 'row' }}>
                                                    <View style={{ backgroundColor: "#fbc02d", borderTopEndRadius: 8, borderBottomEndRadius: 8, width: rowData.used / rowData.total * 100, height: 18 }} />
                                                    <Text style={{ marginLeft: 10 }}>{rowData.used}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </CardView>
                                </View>)
                        }}
                    />
                </View>

                <View style={{ flex: 1, flexDirection: "row" }}>
                    <View style={{ flex: 1.8, alignItems: 'center', justifyContent: 'center', marginVertical: 8 }}>
                        <View style={{ flexDirection: 'row', width: '100%', marginHorizontal: 10, alignItems: 'center' }}>
                            <View style={{ width: 10, height: 10, backgroundColor: '#0c4d9b', borderRadius: 50, elevation: 5, marginHorizontal: 10 }} />
                            <Text style={{ fontSize: 14, color: '#2f598f' }}>Previous Year carryForward</Text>
                        </View>

                        <View style={{ flexDirection: 'row', width: '100%', marginHorizontal: 10, alignItems: 'center' }}>
                            <View style={{ width: 10, height: 10, backgroundColor: '#fbc02d', borderRadius: 50, elevation: 5, marginHorizontal: 10 }} />
                            <Text style={{ fontSize: 14, color: '#2f591f' }}>Availed this year</Text>
                        </View>

                        <View style={{ flexDirection: 'row', width: '100%', marginHorizontal: 10, alignItems: 'center' }}>
                            <View style={{ width: 10, height: 10, backgroundColor: '#fbc02d', borderRadius: 50, elevation: 5, marginHorizontal: 10 }} />
                            <Text style={{ fontSize: 14, color: '#fbc02d' }}>Added this year</Text>
                        </View>
                    </View>

                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity>
                            <CardView
                                cardElevation={4}
                                cardMaxElevation={20}
                                cornerRadius={8} >
                                <View style={{
                                    height: 40, width: 130, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fbc02d', paddingHorizontal: 8
                                }}>
                                    <Text style={{ color: '#1d4064', fontWeight: 'bold', fontSize: 15 }}>Apply</Text>
                                </View>

                            </CardView>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

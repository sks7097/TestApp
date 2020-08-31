import React, { Component } from 'react';
import { View, Text, AsyncStorage, TouchableOpacity, FlatList, Dimensions, TextInput } from 'react-native';
import styles from '../styles/tabScreenStyle'
import CardView from 'react-native-cardview';
import RBSheet from "react-native-raw-bottom-sheet";

export default class Notes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {},
            TaskName: "",
            taskdec: "",
            fromdate: "",
            todate: "",
            status: "",
            tasklist: []
        };
    }

    editItem(item) {
        this.setState({
            item: item
        })
        this.RBSheet.open();
    }

    updateItem = async (name, status, desc) => {
        this.RBSheet.close();

        try {
            let user = await AsyncStorage.getItem('user');
            let parsed = JSON.parse(user);
            this.setState({ tasklist: parsed })

            this.state.tasklist.map((item) => {
                if (item.taskName === name) {
                    item.taskDec = desc
                    item.status = status
                    var index = this.state.tasklist.indexOf(item);
                    this.state.tasklist.splice(index, 1)
                    this.state.tasklist.push(item)
                    AsyncStorage.setItem('user', JSON.stringify(this.state.tasklist));
                }
            })
        } catch (error) {
            alert(error)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.flatView}>
                    <View style={{ flex: 1 }}>
                        <FlatList
                            data={this.props.navigation.state.params.alltask}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(item, index) => index}
                            renderItem={({ item }) => {
                                return (
                                    <View style={{ ...styles.itembg, paddingVertical: 8 }}>
                                        <View style={styles.chatView}>
                                            <Text style={styles.name}>Task Name : <Text style={{ ...styles.name, color: '#568aba' }}>{item.taskName}</Text></Text>
                                            <Text style={styles.dec}>Task Description : <Text style={{ ...styles.name, color: '#568aba' }}>{item.taskDec}</Text></Text>
                                            <Text style={{ ...styles.time, color: 'black' }}>Status : <Text style={styles.time}>{item.status}</Text></Text>
                                            <Text style={{ ...styles.time, color: 'black' }}>From Date : <Text style={{ ...styles.time, color: '#568aba' }}>{item.fromDate}</Text></Text>
                                            <Text style={{ ...styles.time, color: 'black' }}>To Date <Text style={{ ...styles.time, color: '#568aba' }}>{item.toDate}</Text></Text>
                                        </View>
                                        <View style={{ flex: 0.5, justifyContent: 'center', }}>
                                            {this.props.navigation.state.params.ScreenName === "Chat" ? <TouchableOpacity onPress={() => this.editItem(item)}>
                                                <View style={{ backgroundColor: "green", paddingVertical: 6, paddingHorizontal: 15, borderRadius: 5, alignItems: "center" }}>
                                                    <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>Edit Item</Text>
                                                </View>
                                            </TouchableOpacity> : null}
                                        </View>
                                    </View>
                                )
                            }}
                        />
                        <View style={styles.btmView} />
                    </View>
                </View>

                <RBSheet
                    ref={ref => {
                        this.RBSheet = ref;
                    }}
                    closeOnDragDown={false}
                    height={Dimensions.get("window").height / 1.8}
                    customStyles={{
                        container: {
                            alignItems: 'center',
                            borderTopEndRadius: 15,
                            borderTopStartRadius: 15,
                            padding: 10,
                        }
                    }}>
                    <View style={{ width: "100%", marginTop: 20 }}>
                        <CardView
                            style={{ ...styles.cardStyles, alignItems: "flex-start", backgroundColor: '#eeeeee' }}
                            cardElevation={5}
                            cardMaxElevation={0}
                            cornerRadius={15}>
                            <View>
                                <TextInput
                                    style={{ fontWeight: "bold", fontSize: 18 }}
                                    value={this.state.item.taskName}
                                    onChangeText={text => this.setState({ TaskName: text })}
                                    placeholder={"TaskName"}
                                    editable={false}
                                />
                            </View>

                        </CardView>

                        <CardView
                            style={{ ...styles.cardStyles, alignItems: "flex-start", }}
                            cardElevation={5}
                            cardMaxElevation={0}
                            cornerRadius={15}>
                            <View>
                                <TextInput
                                    style={{ fontWeight: "bold", fontSize: 18 }}
                                    value={this.state.taskDec}
                                    onChangeText={text => this.setState({ taskdec: text })}
                                    placeholder={this.state.item.taskDec}
                                />
                            </View>
                        </CardView>

                        <CardView
                            style={{ ...styles.cardStyles, alignItems: "flex-start" }}
                            cardElevation={5}
                            cardMaxElevation={0}
                            cornerRadius={15}>
                            <View>
                                <TextInput
                                    style={{ fontWeight: "bold", fontSize: 18 }}
                                    value={this.state.status}
                                    onChangeText={text => this.setState({ status: text })}
                                    placeholder={this.state.item.status}
                                />
                            </View>
                        </CardView>

                        <TouchableOpacity style={{ marginTop: 25, alignItems: "center" }} onPress={() => this.updateItem(this.state.item.taskName, this.state.status, this.state.taskdec)}>
                            <View style={{ backgroundColor: "green", paddingVertical: 6, paddingHorizontal: 15, borderRadius: 5 }}>
                                <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>Update Item</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </RBSheet>
            </View>
        );
    }
}

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, ToastAndroid, AsyncStorage } from 'react-native';
import styles from '../styles/tabScreenStyle'
import CardView from 'react-native-cardview';

export default class Chat extends Component {
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


    displayData = async () => {
        try {
            let user = await AsyncStorage.getItem('user');
            let parsed = JSON.parse(user);
            this.props.navigation.navigate('Notes', { alltask: parsed, ScreenName: "Chat" })
        } catch (error) {
            alert(error)
        }
    }

    addItem = async () => {
        if (this.state.TaskName === "" || this.state.taskdec === "" || this.state.fromdate === "" || this.state.todate === "") {
            ToastAndroid.show("Enter the mandetory fields", ToastAndroid.SHORT);
        } else {
            try {
                let taskObj = {
                    taskName: this.state.TaskName,
                    taskDec: this.state.taskdec,
                    fromDate: this.state.fromdate,
                    toDate: this.state.todate,
                    status: this.state.status
                }

                this.state.tasklist.push(taskObj)

                AsyncStorage.setItem('user', JSON.stringify(this.state.tasklist));
                ToastAndroid.show("task added", ToastAndroid.SHORT);

                let user = await AsyncStorage.getItem('user');
                let parsed = JSON.parse(user);
                this.props.navigation.navigate('Notes', { alltask: parsed, ScreenName: "Chat" })
            }
            catch (error) {
                alert(error)
            }
        }
    }

    render() {
        return (
            <View style={styles.chatbg}>
                <CardView
                    style={{ ...styles.cardStyles, marginBottom: 50 }}
                    cornerRadius={0}>
                    <View>
                        <TouchableOpacity style={styles.submitButton} onPress={() => { this.displayData() }}>
                            <Text style={styles.submiText}>Show All Tasks</Text>
                        </TouchableOpacity>
                    </View>
                </CardView>

                <CardView
                    style={{ ...styles.cardStyles, alignItems: "flex-start" }}
                    cardElevation={3}
                    cornerRadius={15}>
                    <View>
                        <TextInput
                            style={{ fontWeight: "bold", fontSize: 18 }}
                            value={this.state.TaskName}
                            onChangeText={text => this.setState({ TaskName: text })}
                            placeholder={" Task Name"}
                        />
                    </View>
                </CardView>

                <CardView
                    style={{ ...styles.cardStyles, alignItems: "flex-start" }}
                    cardElevation={3}
                    cornerRadius={15}>
                    <View>
                        <TextInput
                            style={{ fontWeight: "bold", fontSize: 18 }}
                            value={this.state.taskdec}
                            onChangeText={text => this.setState({ taskdec: text })}
                            placeholder={" Task Description"}
                        />
                    </View>

                </CardView>

                <View style={{ width: "95%", flexDirection: "row" }}>
                    <CardView
                        style={{ ...styles.cardStyles, alignItems: "flex-start", flex: 1, }}
                        cardElevation={3}
                        cornerRadius={15}>
                        <View>
                            <TextInput
                                style={{ fontWeight: "bold", fontSize: 18 }}
                                value={this.state.fromdate}
                                onChangeText={text => this.setState({ fromdate: text })}
                                placeholder={" from date"}
                            />
                        </View>

                    </CardView>

                    <CardView
                        style={{ ...styles.cardStyles, alignItems: "flex-start", flex: 1, }}
                        cardElevation={3}
                        cornerRadius={15}>
                        <View>
                            <TextInput
                                style={{ fontWeight: "bold", fontSize: 18 }}
                                value={this.state.todate}
                                onChangeText={text => this.setState({ todate: text })}
                                placeholder={" to date"}
                            />
                        </View>
                    </CardView>
                </View>

                <View>
                    <TouchableOpacity style={styles.submitButton} onPress={() => { this.addItem() }}>
                        <Text style={styles.submiText}>Add Task</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

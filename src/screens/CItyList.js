import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, AsyncStorage, ToastAndroid, FlatList, StatusBar } from 'react-native';
import CardView from 'react-native-cardview';

class CItyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            cityHumidity: 'Humidity',
            cityTemprature: 'Temprature',
            cityName: 'City',
            cityList: [],
        };
    }

    componentDidMount() {
        this.getLocalInformation();
    }

    fetchCityInformation(text) {
        console.log(text);
        this.setState({ text });
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=72611b8c7d9a5ced3956b6aa6e4dd8fd`)
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    console.log('getting error in getting city information.');
                }
            }).then((city) => {
                this.setState({ cityHumidity: city.main.humidity, cityTemprature: city.main.temp, cityName: city.name });
            }).catch((error) => {
                console.error(error);
            });
    }

    saveCityInformation = async () => {
        var tempArray = []
        let cityInfo = await AsyncStorage.getItem('cityInfo');
        let parsed = JSON.parse(cityInfo);
        if (parsed != null) { tempArray = parsed }
        try {
            let cityObject = { cityName: this.state.cityName, cityTemp: this.state.cityTemprature, cityHumidity: this.state.cityHumidity };
            tempArray.push(cityObject);
            this.setState({ cityList: tempArray });

            AsyncStorage.setItem('cityInfo', JSON.stringify(this.state.cityList));
            ToastAndroid.show('City Information added.', ToastAndroid.LONG);
        } catch (error) {
            console.log("Error in saving city information.", error)
        }
    };

    getLocalInformation = async () => {
        let cityInfo = await AsyncStorage.getItem('cityInfo');
        let parsed = JSON.parse(cityInfo);
        this.setState({ cityList: parsed });
    }

    render() {
        return (
            <View style={{ width: '100%', height: '100%', padding: 10 }}>
                <StatusBar translucent backgroundColor="#fcbf1e" barStyle="light-content" />
                <TextInput
                    style={{ height: 40, borderWidth: 1, borderRadius: 5, backgroundColor: this.state.text === '' ? '#eeeeee' : 'white', borderColor: this.state.text === '' ? '#393e46' : '#e84a5f', fontSize: 16, marginTop: 40 }}
                    onChangeText={(text) => this.fetchCityInformation(text)}
                    value={this.state.text}
                    placeholder={'Search City by Name'}
                />

                <View style={{ marginTop: 20 }}>
                    <View
                        style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                        <Text style={{ fontSize: 15, fontWeight: '500', color: '#382933' }}>{this.state.cityName}</Text>
                        <Text style={{ fontSize: 15, fontWeight: '500', color: '#382933' }}>{this.state.cityTemprature}</Text>
                        <Text style={{ fontSize: 15, fontWeight: '500', color: '#382933' }}>{this.state.cityHumidity}</Text>
                        {this.state.cityName !== 'City' ? (
                            <TouchableOpacity
                                style={{ backgroundColor: '#f73859', paddingHorizontal: 10, paddingVertical: 3 }}
                                onPress={() => this.saveCityInformation()}>
                                <Text style={{ color: '#f9f9f9', fontSize: 16, fontWeight: 'bold' }}>ADD</Text>
                            </TouchableOpacity>
                        ) : null}
                    </View>
                </View>

                <View style={{ width: '100%' }}>
                    <CardView
                        style={{ backgroundColor: '#364e68' }}
                        cardElevation={3}
                        cardMaxElevation={0}
                        cornerRadius={8}>
                        <View
                            style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ textAlign: 'center', flex: 1, color: 'white', fontSize: 15, fontWeight: 'bold', margin: 5 }}>City</Text>
                            <View style={{ width: 1, height: 50, backgroundColor: '#f5564e' }} />
                            <Text style={{ textAlign: 'center', flex: 1, color: 'white', fontSize: 15, fontWeight: 'bold', margin: 5 }}>Temprature</Text>
                            <View style={{ width: 1, height: '100%', backgroundColor: '#f5564e' }} />
                            <Text style={{ textAlign: 'center', flex: 1, color: 'white', fontSize: 15, fontWeight: 'bold', margin: 5 }}>Humidity</Text>
                        </View>
                    </CardView>

                    <Text style={{ textAlign: 'center', color: 'Black', fontSize: 20, fontWeight: 'bold', marginTop: 10, margin: 5 }}>---  Saved Cities   ---</Text>

                    <CardView
                        style={{ backgroundColor: '#364e68', marginTop: 10 }}
                        cardElevation={3}
                        cardMaxElevation={0}
                        cornerRadius={8}>
                        <FlatList
                            data={this.state.cityList}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(item, index) => index}
                            renderItem={({ item }) => {
                                return (
                                    <View style={{ marginTop: 10 }}>
                                        <View
                                            style={{ width: '100%', flexDirection: 'row', marginBottom: 10, alignItems: 'center', justifyContent: 'center', borderWidth: 0.5, borderColor: '#f5564e', }}>
                                            <Text style={{ textAlign: 'center', flex: 1, color: 'white', fontSize: 16, fontWeight: 'bold', margin: 5, marginTop: -5 }}>{item.cityName}</Text>
                                            <View style={{ width: 1, height: '100%', backgroundColor: '#f5564e' }} />
                                            <Text style={{ textAlign: 'center', flex: 1, color: 'white', fontSize: 15, fontWeight: 'bold', margin: 5 }}>{item.cityTemp}</Text>
                                            <View style={{ width: 1, height: '100%', backgroundColor: '#f5564e' }} />
                                            <Text style={{ textAlign: 'center', flex: 1, color: 'white', fontSize: 15, fontWeight: 'bold', margin: 5 }}>{item.cityHumidity}</Text>
                                        </View>
                                    </View>
                                );
                            }} />
                    </CardView>
                </View>

                <TouchableOpacity
                    style={{ width: '100%', justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 20, left: 10 }} onPress={() => this.props.navigation.navigate('QrScanner')}>
                    <View
                        style={{ backgroundColor: '#fcbf1e', padding: 10, width: '90%', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
                        <Text style={{ color: '#364e68', fontSize: 16, fontWeight: 'bold' }}>Qrscanner</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

export default CItyList;

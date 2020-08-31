import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({

    container: { width: "100%", height: "100%", justifyContent: "center", alignItems: "center" },

    chatbg: { width: "100%", height: "100%", alignItems: "center" },

    bottomTab: { position: 'absolute', bottom: 0, width: '100%' },

    flatListStyle: { width: '100%' },

    cardStyles: {
        paddingVertical: 8,
        width: '90%',
        marginTop: 5,
        marginHorizontal: 10,
        elevation: 0,
        alignItems: "center",
        justifyContent: 'center',
        shadowColor: 'rgba(3, 147, 141,0.6)',
        height: 70
    },

    lookingforLabel: {
        fontSize: 14,
        color: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
        marginLeft: -5
    },

    searchView: {
        flex: 1,
        height: 50,
        width: '100%',
        alignItems: 'center',
        borderRadius: 25,
        borderColor: '#bababa',
        borderWidth: 1,
    },

    flatView: { marginTop: 10, width: "100%", height: "100%", padding: 8, },

    icon: { marginLeft: 15, marginRight: 15, },

    btmView: { height: 170 },

    // card Item Styles

    cardItem: { width: "100%", paddingVertical: 8, marginVertical: 3 },

    itembg: { flexDirection: "row", width: "100%" },

    imgView: { flex: 0.7, alignItems: "center" },

    imgbg: { width: 50, height: 50, marginStart: 8, marginEnd: 8, borderRadius: 25 },

    chatView: { flex: 1, marginTop: 2 },

    name: { fontWeight: "bold", fontSize: 18, color: 'black' },

    time: { color: "#568aba", fontWeight: "bold", fontSize: 18 },

    dec: { color: 'black', fontWeight: "bold", fontSize: 18 },


    // Assignment 2

    submitButton: {
        marginTop: 25,
        backgroundColor: "#337869",
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 5,
        width: Dimensions.get('window').width / 3,
        alignItems: 'center'
    },
    submiText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    }

});

export default styles;
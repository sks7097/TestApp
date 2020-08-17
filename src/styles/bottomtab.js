import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    innerContainer: {
        width: '100%',
        height: 65,
        borderTopRightRadius: 13,
        borderTopLeftRadius: 13,
        backgroundColor: '#fafafa',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    iconStyle: {
        width: 23,
        height: 23,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    leftitemView: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5
    },
    extramarginView: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20
    },
    rightitemView: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5
    },
    labelStyle: {
        fontSize: 12
    }
});

export default styles;
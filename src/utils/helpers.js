import { Toast } from 'native-base';
import { StackActions, NavigationActions } from 'react-navigation';

export function resetAndNavigateToHome(props) {
    const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Home' })],
    });
    props.navigation.dispatch(resetAction);
}

export function resetAndNavigateToProviderHome(props) {
    const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'ProviderHome' })],
    });
    props.navigation.dispatch(resetAction);
}

export function resetAndNavigateIntroScreen(props) {
    const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Login' })],
    });
    props.navigation.dispatch(resetAction);
}

export function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true)
    }
    return (false)
}

export function validPhonenumber(inputtxt) {
    var phoneno = /^\d{10}$/;
    if ((inputtxt.match(phoneno))) {
        return true;
    } else {
        return false;
    }
}

export function isTextAndNumberOnly(text) {
    var regex = /^[a-zA-z0-9]+$/;
    if (regex.test(text)) {
        return true;
    } else {
        return false;
    }
}

export function isTextAndNumberSpaceOnly(text) {
    var regex = /^[a-zA-z0-9 ]+$/;
    if (regex.test(text)) {
        return true;
    } else {
        return false;
    }
}

export function isTextAndNumberSpaceSlashOnly(text) {
    var regex = /^[a-zA-z0-9 -//]+$/;
    if (regex.test(text)) {
        return true;
    } else {
        return false;
    }
}

export function isValidName(text) {
    var regex = /^[a-zA-Z]+((['. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (regex.test(text)) {
        return true;
    } else {
        return false;
    }
}

export function isValidEmail(text) {
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(text)) {
        return true;
    } else {
        return false;
    }
}

export function isNumberOnly(text) {
    var regex = /^[0-9]+$/;
    if (regex.test(text)) {
        return true;
    } else {
        return false;
    }
}

export function getMinutes(dateTime) {
    var h = dateTime.hours();
    var m = dateTime.minutes();
    return h + m * 60;
}

export function showErrorToastMessage(msg, btnLabel, toastType, duration) {
    Toast.show({
        text: msg, buttonText: btnLabel, type: toastType, textStyle: { color: "white", fontWeight: 'bold' }, buttonTextStyle: { color: "white", fontWeight: '700' }, buttonStyle: { backgroundColor: '#01AAEF', borderRadius: 10 }, duration: duration
    });
}

export function convertTimeFormat(time) {
    // Check correct time format and split into components
    time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) { // If time format correct
        time = time.slice(1);  // Remove full string match value
        time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
        time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(''); // return adjusted time or original string
}
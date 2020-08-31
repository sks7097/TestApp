import { createStackNavigator, createAppContainer } from 'react-navigation';

//app screens
import Home from '../screens/Home';
import Notes from '../screens/Notes';
import Chat from '../screens/Chat';
import Wallet from '../screens/Wallet';
import Profile from '../screens/Profile';

const MainNavigator = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: ({ navigation }) => ({
                title: '',
                headerTransparent: true,
                headerLeft: null,
            })
        },
        Notes: {
            screen: Notes,
            navigationOptions: ({ navigation }) => ({
                title: '',
                headerTransparent: true,
                headerLeft: null,
            })
        },
        Chat: {
            screen: Chat,
            navigationOptions: ({ navigation }) => ({
                title: '',
                headerTransparent: true,
                headerLeft: null,
            })
        },
        Wallet: {
            screen: Wallet,
            navigationOptions: ({ navigation }) => ({
                title: '',
                headerTransparent: true,
                headerLeft: null,
            })
        },
        Profile: {
            screen: Profile,
            navigationOptions: ({ navigation }) => ({
                title: '',
                headerTransparent: true,
                headerLeft: null,
            })
        },
    },
    {
        initialRouteName: 'Home'
    }
);

export default AppContainer = createAppContainer(MainNavigator);
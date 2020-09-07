import { createStackNavigator, createAppContainer } from 'react-navigation';

//app screens
import Home from '../screens/Home';
import Notes from '../screens/Notes';
import Chat from '../screens/Chat';
import CItyList from '../screens/CItyList';
import Profile from '../screens/Profile';
import QrScanner from '../screens/QrScanner'

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
        CItyList: {
            screen: CItyList,
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
        QrScanner: {
            screen: QrScanner,
            navigationOptions: ({ navigation }) => ({
                title: '',
                headerTransparent: true,
                headerLeft: null,
            })
        },
    },
    {
        initialRouteName: 'CItyList'
    }
);

export default AppContainer = createAppContainer(MainNavigator);
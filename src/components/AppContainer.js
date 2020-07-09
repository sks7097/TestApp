import { createStackNavigator, createAppContainer } from 'react-navigation';

//app screens
import Login from '../screens/Login';
import ApplyLeaves from '../screens/ApplyLeaves';
import ShowVacations from '../screens/ShowVacations';

const MainNavigator = createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: ({ navigation }) => ({
                title: '',
                headerTransparent: true,
                headerLeft: null,
            })
        },
        ApplyLeaves: {
            screen: ApplyLeaves,
            navigationOptions: ({ navigation }) => ({
                title: 'Apply Leaves',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    textAlign: 'center',
                    flex: 0.8,
                    fontSize: 15
                }
            })
        },
        ShowVacations: {
            screen: ShowVacations,
            navigationOptions: ({ navigation }) => ({
                title: 'Vacations',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    textAlign: 'center',
                    flex: 0.8,
                    fontSize: 15
                }
            })
        }
    },
    {
        initialRouteName: 'Login'
    }
);

export default AppContainer = createAppContainer(MainNavigator);
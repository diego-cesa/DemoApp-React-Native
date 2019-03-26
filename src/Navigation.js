import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import DetailsScreen from './components/DetailsScreen';
import AboutScreen from './components/AboutScreen';

const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen
    },
);

const AboutStack = createStackNavigator(
    {
        About: AboutScreen
    }
);

const MenuNavigator = createDrawerNavigator(
    {
        Home: HomeStack,
        About: AboutStack
    }
);

const AppContainer = createAppContainer(MenuNavigator);
export default AppContainer;
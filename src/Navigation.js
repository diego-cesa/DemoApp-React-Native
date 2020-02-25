import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
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
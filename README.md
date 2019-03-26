# DemoApp-React-Native

#### Before to start:
- Have the Node.js installed globally
- Have the expo-cli installed globally
- Have git installed and added to the path


#### Creating a new React Native App: 
1. $ npm i -g create-react-native-app
2. $ create-react-native-app my-project
3. Choose “blank” template
4. $ cd my-project
5. $ npm install
6. $ npm install --save redux react-redux redux-thunk
7. Create folders:
   - src/actions
   - src/components
   - src/reducers
   

8. Create src/actions/Action.js:
```javascript
export const UPDATE_KEY = "UPDATE_KEY";

export function updateKey(key, value){
   return(dispatch)=>{
       dispatch({
           type: UPDATE_KEY,
           payload:{[key]: value}
       });
   }
}
```

9. Create src/reducer/rootReducer.js:
```javascript
import { UPDATE_KEY } from '../actions/Actions';

export const initialState = {
   name: ''
};

const rootReducer = (state = initialState, action) => {
   let newState = Object.assign({}, state);
   switch(action.type){
       case UPDATE_KEY:
           let changedState = {};
           for(let key in action.payload){
               changedState = {[key]: action.payload[key]};
           }
           newState = Object.assign({}, state, changedState);
           break;
       default: return initialState;
   }
   return newState;
}
export default rootReducer;
```

10. Create src/reducer/store.js:
```javascript
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer, {initialState} from './rootReducer';

const initStates = {
   rootReducer: initialState
}
const configureStore = () => {
   return createStore(rootReducer, initilizeStates, applyMiddleware(thunk));
}
export default configureStore;
```

11. Set App.js:
```javascript
import React from 'react';
import { Provider } from 'react-redux';
import HomeScreen from './src/components/HomeScreen';
import configureStore from './src/reducers/store';

const store = configureStore();
export default class App extends React.Component {
 render() {
   return (
     <Provider store={store}>
       <HomeScreen />
     </Provider>
   );
 }
}
```


#### Adding navigation:
1. $ npm install react-navigation --save
2. Create file src/navigation:
```javascript
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
```

3. Change App.js calling the navigator instead of the home screen:
```javascript
import React from 'react';
import configureStore from './src/js/reducers/store';
import { Provider } from 'react-redux';
import AppNavigator from './navigation/AppNavigator';

const store = configureStore();

export default class App extends React.Component {
 render() {
   return (
     <Provider store={store}>
         <AppNavigator />
     </Provider>
   );
 }
}
```

To navigate to another page:
```javascript
	onPress={()=> this.props.navigation.navigate('<page name>')}
```

More about React Navigation [here](https://reactnavigation.org/docs/en/getting-started.html).

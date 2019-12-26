import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import First from './First'
import Game from './game'
import * as Font from 'expo-font';
import io from "socket.io-client"



const MainNavigator = createStackNavigator({
  First: {screen: First, navigationOptions: {header: null,} },
  Game: {screen: Game, navigationOptions: {header: null,}, params:{shai: "socket"}}
});

Font.loadAsync({ 'kaki': require('./assets/fonts/CarterOne-Regular.ttf') })

const App = createAppContainer(MainNavigator);

export default App;



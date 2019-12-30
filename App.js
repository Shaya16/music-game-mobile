import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import First from './First'
import Game from './game'
import TrainingMode from './trainingMode'
import * as Font from 'expo-font';
import io from "socket.io-client"
import { SplashScreen } from 'expo';

SplashScreen.hide()

Font.loadAsync({ 'kaki': require('./assets/fonts/CarterOne-Regular.ttf') }).then(()=>{
  
})


const MainNavigator = createStackNavigator({
  First: {screen: First, navigationOptions: {header: null,} },
  Game: {screen: Game, navigationOptions: {header: null,}, params:{shai: "socket"}},
  TrainingMode: {screen: TrainingMode, navigationOptions: {header: null,}}
});


const App = createAppContainer(MainNavigator);

export default App;



import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import First from './First'
import Game from './game'

const MainNavigator = createStackNavigator({
  First: {screen: First, navigationOptions: {header: null,} },
  Game: {screen: Game, navigationOptions: {header: null,} }
});

const App = createAppContainer(MainNavigator);

export default App;



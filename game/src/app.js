// Import components.
import home from './screens/home/home'
import Battle from './screens/battle/battle'
import Monster from './components/monster/monster'
import login from './components/login/login'

import 'jquery';
require('webpack-jquery-ui');
require('webpack-jquery-ui/css');

// Import styles.
import 'bootstrap'
import './style.scss'

login().then(newPlayer => {
	const monster = new Monster();
	const newBattle = new Battle(newPlayer, monster);
  newBattle.startBattle();
 
});



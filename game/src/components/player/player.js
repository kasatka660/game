import {START_SCORE} from './../../variables'
import './player.scss'
import {playerView} from './player.template'
import Indicator from './../indicator/indicator'

export default class Player {
  constructor(playerName) {
    this.playerName = playerName,
    this.playerScore = START_SCORE;
    this.indicator = new Indicator(this.playerScore);
  }
  renderPlayer() {
  	document.querySelector('.left-side').innerHTML = this.indicator.render() + playerView;	
  }
  updateScore() {
    this.indicator.reduceScore(); 
    this.indicator.setCurrentScore('.left-side');
  }
}
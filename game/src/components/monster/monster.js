import {START_SCORE} from './../../variables'
import {monsterView} from './monster.template'
import './monster.scss'
import Indicator from './../indicator/indicator'


export default class Monster {
	constructor() {
		this.monsterScore = START_SCORE;
		this.indicator = new Indicator(this.monsterScore);
	}
	renderMonster() {
		document.querySelector('.right-side').innerHTML = this.indicator.render() + monsterView;	
	}
	updateScore() {
		this.indicator.reduceScore();	
		this.indicator.setCurrentScore('.right-side');
	}
}
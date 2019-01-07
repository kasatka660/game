import {indicatorView} from './indicator.template'
import './indicator.scss'


export default class Indicator {
	constructor(maxHP) {
    this.maxHP = maxHP;
    this.HP = this.maxHP;
  }
  render() {
    return indicatorView;
  }
  reduceScore() {
  	this.HP -=100;
  }
  increaseScore() {
  	this.HP +=10;
  }
  getCurrentScore() {
  	return this.HP;
  }
  setCurrentScore(side) {
  	const width = $(side + ' .progress-bar').css('width', this.HP + '%');
  }
}



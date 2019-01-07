import {START_SCORE} from './../../variables'
import {monsterView} from './monster.template'
import './monster.scss'
import Indicator from './../indicator/indicator'


export default class Monster {
	constructor() {
		this.monsterScore = START_SCORE;
		this.indicator = new Indicator(this.monsterScore);
	}
	renderMonster(monsterNumb) {
		$('.right-side').append(this.indicator.render() + monsterView);	
    $('.monster-name').html(this.generateMonsterName());
    const monsterPics = ['./../src/screens/home/images/lady-monster.png', 
                  './../src/screens/home/images/fish-monster.png',
                  './../src/screens/home/images/witch-monster.png'];
    $('.monster').attr('src', monsterPics[monsterNumb]);
	}
	generateMonsterName() {
    const monsterFirstNamePart = ['mad', 'angry', 'silly', 'huge', 'selfish', 'horrible', 'fearful' ];
    const monsterSecondNamePart = ['Beast', 'Horror', 'Giant', 'Devil', 'Mutant'];
    const monsterThirdNamePart = ['Sally', 'Peggy', 'Sue', 'Jammy'];
    return monsterFirstNamePart[this.getRandomInt(monsterFirstNamePart.length)] + " " 
	    + monsterSecondNamePart[this.getRandomInt(monsterSecondNamePart.length)] + ' '
	    + monsterThirdNamePart[this.getRandomInt(monsterThirdNamePart.length)] ;
	}
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
	updateScore() {
		this.indicator.reduceScore();
		this.indicator.setCurrentScore('.right-side');
	}
  playSound() {
    var audio = new Audio('./hit-sound.wav');
    audio.play();
  }
}
import './battle.scss'
import {battleGrid} from './battle.template'
import Dialog from './../../components/dialog/dialog'
import Monster from './../../components/monster/monster'
import {monsterHitting} from './../../components/hit/hitMonster'
import {playerHitting} from './../../components/hit/hitPlayer'
import {newGameBtn} from './newGame.template.js'
import {START_SCORE, KEYS} from './../../variables'
import {scoreTable, createTableRow} from './../../components/score/score.template'

export default class Battle {
	constructor(player, monster) {
    this.player = player;
    this.monster = monster;
    this.dialog = new Dialog();
    this.roundCount = 0;
  }
  startBattle() {
    document.body.classList.add('battle');
    $('.container').append(battleGrid);
    this.player.renderPlayer();
    this.monster.renderMonster(this.roundCount);
    this.dialog.init(this);
  }
  nextRound() {
    this.dialog.nextRound();
  }
  hitTheMonster() {
    $('.middle').append(monsterHitting);
    this.monster.playSound(); 
    setTimeout( function() {
      $('.monster-hitting').hide();
      this.monster.updateScore();
      if (this.monster.indicator.getCurrentScore() <= 0) {
        this.startNextBattle();
      }    
    }.bind(this), 3000);
  }
  hitThePlayer() {
    $('.middle').append(playerHitting);
    this.player.playSound(); 
    setTimeout( function() {
      $('.player-hitting').hide();
      this.player.updateScore();
      if (this.player.indicator.getCurrentScore() <= 0) {
        this.dialog.endGame();
        this.endGame();
      }  
    }.bind(this), 3000);
  }
  startNextBattle() {
    $('.monster').addClass('monster-disappear');
    $('.monster').on('animationend', function() {
      $('.right-side').html('');
      this.roundCount++;
      if (this.roundCount < 3) {
        this.monster = new Monster();
        this.monster.renderMonster(this.roundCount);
      } else {
        this.dialog.endGame();
          fetch('http://localhost:3000/new-player', {
            method: 'post',
            body: new URLSearchParams(`name=${this.player.playerName}&score=${this.player.playerScore}`)
            })
          .then((response) => {
            this.endGame();
        });  
      }
    }.bind(this)); 
  }
  endGame() {
    this.roundCount = 0;
    $('.right-side').html('');
    $('.left-side').html('');
    $('.middle').html('');

    fetch('http://localhost:3000/result')
      .then(function(response) {
        return response.json();
       })
      .then(function(players) {
        $('.middle').append(scoreTable);
        players.map( (player) => $('.middle tbody').prepend(createTableRow(player)));

        $('.middle').append(newGameBtn);
        document.body.addEventListener('keydown', function(e) {
          if (e.keyCode === KEYS.ENTER_KEY && $('#newGameBtn').length) {
              this.player.playerScore = START_SCORE;
              $('.container').html('');
              this.startBattle();
            };
        }.bind(this));
        $('#newGameBtn').on('click', function() {
          this.player.playerScore = START_SCORE;
          $('.container').html('');
          this.startBattle();
        }.bind(this));
      })
      .catch( alert );
  }
}



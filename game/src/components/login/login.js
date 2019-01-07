import './login.scss'
import {startGameBtn, loginForm} from './login.template.js'
import Player from './../player/player'
import {KEYS} from './../../variables.js'

export default () => {
  return new Promise(function(resolve, reject) {
    document.querySelector('.container').innerHTML = loginForm;
     $('#loginForm').on('shown.bs.modal', function () {
      $('#usernameInput').trigger('focus')
    });
    const submitBtn = document.querySelector('#submit');
    submitBtn.addEventListener('click', function() {
     addNewPlayer();
    });
    const nameInput = document.querySelector('input');
    nameInput.addEventListener('keydown', function(e) {
      if (e.keyCode === KEYS.ENTER_KEY) {
        addNewPlayer();
      }
    });
    $('#loginForm').on('hidden.bs.modal', function () {
      addStartBtn();
    });

  function addNewPlayer() {
    if (nameInput.value.length == 0) {
      return;
    }
    const newPlayer = new Player(nameInput.value);
    $('#loginForm').modal('hide');
    $('#loginForm').remove();
    $('.modal-backdrop').remove();
    resolve(newPlayer);
  } 

  function addStartBtn() {
    $('.container').append(startGameBtn); 
    $('.start-game-btn').focus()
    document.querySelector('.start-game-btn').addEventListener('click', function() {
      document.querySelector('.start-game-btn').remove();
      $('#loginForm').modal('show'); 
    });
    document.body.addEventListener('keydown', function(e) {
      if (e.keyCode === KEYS.ENTER_KEY) {
        $('.start-game-btn').remove();
        $('#loginForm').modal('show');
      }
    });
  }
  addStartBtn();
  })  
}




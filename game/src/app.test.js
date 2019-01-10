import login from './components/login/login';
window.$ = require('jquery');
import 'bootstrap';

test('login form display', () => {
  document.body.innerHTML = '<div class="container"></div>';

  login().then((newPlayer) => {
  	expect(newPlayer.playerName).toBe('Test');
  });
  const startBtn = document.querySelector('.start-game-btn');

  expect(startBtn).not.toBeNull();
  startBtn.click();

  const loginBtn = document.querySelector('#submit');

  expect(loginBtn).not.toBeNull();

  document.querySelector('#usernameInput').value = 'Test';
  loginBtn.click();

});
export function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export function animate (elem) {
  return new Promise((resolve, reject) => {
    elem.addEventListener('animationend', (e) => {
      onAnimationComplete(elem, resolve)
    });
  });
}

function onAnimationComplete(elem, resolve) {
  elem.removeEventListener('transitionend', onAnimationComplete);
  resolve();
}
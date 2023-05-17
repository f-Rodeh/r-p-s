txt = '// A human? ### how foolish#.#.#.#### I am The Almighty Computer! ' +
  '######### Do you seriously think you can defeat me at rock / paper / scissors? .#.##.####'


typeCharTxt(txt, hintContinue);

function typeCharTxt(str, callback) {
  let i = 0;
  const txtOutput = document.querySelector('#charText')

  const interval = setInterval(() => {

    if (str[i] !== '#') {
      txtOutput.textContent += str[i];
    }
    i++
    if (i === str.length) {
      clearInterval(interval);
      callback();
      return;
    };

  }, 70);
}

function hintContinue() {
  const hint = document.querySelector('#hint-continue');
  hint.textContent = "Click anywhere to start";

  // Click anywhere to continue
  window.addEventListener('click', () =>
    window.location.href = './game.html'
  )
}

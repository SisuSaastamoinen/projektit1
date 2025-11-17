function playSound(animal) {
  var audio = new Audio(
    `https://keudaope.github.io/HTML-CSS-JS/JavaScript-main/projektit/p7/sounds/${animal.id}.mp3`,
  );
  audio.play();
}

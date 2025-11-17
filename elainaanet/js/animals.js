async function playSound(animal) {
  console.log(animal.id);
  const url = `https://keudaope.github.io/HTML-CSS-JS/JavaScript-main/projektit/p7/sounds/${animal.id}.mp3`;
  try {
    await fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        const audioUrl = URL.createObjectURL(blob);
        const audio = new Audio(audioUrl);
        audio.play();
      });
  } catch (error) {
    console.log(error);
  }
}

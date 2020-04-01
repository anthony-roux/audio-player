const audio = document.querySelector('.audio');
const play_pause = document.querySelector('.play-pause');
const pause = document.querySelector('.pause');
const vol_up = document.querySelector('.volume-up');
const vol_down = document.querySelector('.volume-down');


play_pause.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause()
  }
  // console.log("play");
});


vol_up.addEventListener('click', () => {
  // console.log('up');
  if (audio.volume <= 1) {
    audio.volume += 0.10
  }
  if (audio.volume <= 0) {
    audio.volume -= 0.10
  }
});

vol_down.addEventListener('click', () => {
  // console.log('down');
  if (audio.volume >= 0) {
    audio.volume -= 0.10
  }
});


audio.currentTime -= 10
audio.currentTime / 100 * audio.duration
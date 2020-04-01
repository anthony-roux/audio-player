"use strict";

var audio = document.querySelector('.audio');
var play_pause = document.querySelector('.play-pause');
var pause = document.querySelector('.pause');
var vol_up = document.querySelector('.volume-up');
var vol_down = document.querySelector('.volume-down');
play_pause.addEventListener('click', function () {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  } // console.log("play");

});
vol_up.addEventListener('click', function () {
  // console.log('up');
  if (audio.volume <= 1) {
    audio.volume += 0.10;
  }

  if (audio.volume <= 0) {
    audio.volume -= 0.10;
  }
});
vol_down.addEventListener('click', function () {
  // console.log('down');
  if (audio.volume >= 0) {
    audio.volume -= 0.10;
  }
});
audio.currentTime -= 10;
audio.currentTime / 100 * audio.duration;
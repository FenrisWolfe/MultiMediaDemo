'use strict'

var video = document.getElementById('lecture-video');
var start = document.getElementById('video-start');
var pause = document.getElementById('video-pause');

function handleStartVideoClick() {
  video.play();
}

start.addEventListener('click', handleStartVideoClick);

function handlePauseVideoClick() {
  video.pause();
}

pause.addEventListener('click', handlePauseVideoClick);

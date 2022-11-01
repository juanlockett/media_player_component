import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';
import Ads from './plugins/Ads'

const video = document.querySelector("video");
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay(), new AutoPause(), new Ads()]});


const playButton: HTMLElement = document.querySelector("#playButton");
playButton.onclick = () => player.togglePlay();

const muteButton: HTMLElement = document.querySelector("#muteButton");
muteButton.onclick = () => player.mute();




if ('serviceWorker' in navigator) {
    // Register a service worker hosted at the root of the
    // site using the default scope.
    navigator.serviceWorker.register(
      new URL('/sw.js', import.meta.url),{type: 'module'})
        .then(function(registration) {
          console.log('Service worker registration succeeded:', registration);
        }).catch(function(error) {
          console.log('Service worker registration failed:', error);
        });
  } else {
    console.log('Service workers are not supported.');
  }
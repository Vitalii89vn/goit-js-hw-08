import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {
    id: 236203659,
    width: 640
});

const onPlay = function(data) {
 };

const timeUpdate = player.on('timeupdate', throttle(onPlay, 1000));
console.log(onPlay);
    
localStorage.setItem("videoplayer-current-time", JSON.stringify(timeUpdate));
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {
    id: 236203659,
    width: 640
});
const STORAGE_KEY = 'videoplayer-current-time';

const onPlay = function (data) {
    {
    duration: data.duration;
    percent: data.percent;
    seconds: data.seconds;
    }
    localStorage.setItem(STORAGE_KEY, data.seconds);
};
player.on('timeupdate', throttle(onPlay, 1000));
 
const currentTime = localStorage.getItem(STORAGE_KEY)
player.setCurrentTime(currentTime)

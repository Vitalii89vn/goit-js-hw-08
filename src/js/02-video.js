import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {
    id: 236203659,
    width: 640
});

// const onPlay = player.on('timeupdate', function(data) {
//     // data is an object containing properties specific to that event
//  {
//      duration:  61.857;
//      percent: 0.049
//      seconds: 3.034
// }
// });
// const onPlay = function (data) {
//     duration: 0
//     percent: 0
//     seconds: 0

// };
const onPlay = function (data) {
    // {
    //     data.seconds
    // }
    {
        duration: data.duration;
        percent: data.percent;
        seconds: data.seconds;
    }
};


let timeUpdate = player.on('timeupdate', onPlay);
console.log(timeUpdate);
    
localStorage.setItem("videoplayer-current-time", timeUpdate);
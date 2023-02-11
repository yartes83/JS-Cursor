function pause(audio) {
    if (!audio) return;

    audio.setAttribute('data-isPlaying', false);
    audio.pause();
    audio.currentTime = 0;
}

function play(audio) {
    if (!audio) return;

    audio.setAttribute('data-isPlaying', true);
    audio.play();
}

function toggle(audio) {
    const playingAudio = document.querySelector('[data-isPlaying=true]');

    if (!!playingAudio) {
        pause(playingAudio);
        if (playingAudio !== audio) play(audio);
    } else play(audio);
}

function onClick(event) {
    const targetDataName = event.target.getAttribute("data-name");
    const audio = document.querySelector(`[data-${targetDataName}audio]`);

    if (!audio) return;

    toggle(audio);
}

function onEnded(event){
    event.target.setAttribute('data-isPlaying', false);
}

function setEventListeners () {
    for (const button of document.getElementsByClassName('button')) {
        button.addEventListener('click', onClick);
    }

    for (const audio of document.getElementsByClassName('audio')) {
        audio.addEventListener('ended', onEnded);
    }
}

setEventListeners();
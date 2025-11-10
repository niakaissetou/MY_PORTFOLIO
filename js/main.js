const audio = document.getElementById('tomodachi');
const play_button = document.getElementById('play_music');

play_button.addEventListener('click', function() {
    audio.play();
    this.style.display = 'none'; // on cache le bouton pendant la lecture
});

audio.addEventListener('ended', function() {
    play_button.style.display = 'inline-block'; // on le réaffiche à la fin de la chason
});

function open_pdf() {
    window.open("img/cv_bts_sio.pdf", "_blank");
}
let songIndex = 0;
let audioElement = new Audio('songs/3 Peg Sharry Mann.mp3');
let masterPlay = document.querySelector('#masterplay');
let myProgress = document.querySelector('#progressbar');
let gif = document.querySelector('#gif');
let songItem = Array.from(document.querySelectorAll('.songitem'));
let playpause = Array.from(document.querySelectorAll('.songplaypause'));
let playingName = document.querySelector('.playingName');

let songs = [
    { songname: "3 Peg Sharry Mann", filepath: "songs/3 Peg Sharry Mann.mp3", coverpath: "cover/1.jfif" },
    { songname: "Angreezi Beat Te", filepath: "songs/Angreezi Beat Te.mp3", coverpath: "cover/2.jfif" },
    { songname: "BACHALO", filepath: "songs/BACHALO.mp3", coverpath: "cover/3.jfif" },
    { songname: "Bapu Zimidar ", filepath: "songs/Bapu Zimidar .mp3", coverpath: "cover/4.jfif" },
    { songname: "Bhabi __ Mankrit Aulakh", filepath: "songs/Bhabi __ Mankrit Aulakh.mp3", coverpath: "cover/5.jfif" },
    { songname: "Cute Munda", filepath: "songs/Cute Munda.mp3", coverpath: "cover/6.jfif" },

]

songItem.forEach((ele, i) => {
    ele.getElementsByTagName('img')[0].src = songs[i].coverpath;
    ele.getElementsByClassName('songname')[0].innerText = songs[i].songname;
})


masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
        playingName.innerText = songs[songIndex].songname
        playpause[songIndex].classList.remove('fa-circle-play');
        playpause[songIndex].classList.add('fa-circle-pause');
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        playpause[songIndex].classList.remove('fa-circle-pause');
        playpause[songIndex].classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})


audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgress.value = progress;
})


myProgress.addEventListener('change', () => {
    audioElement.currentTime = myProgress.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    playpause.forEach((e) => {
        e.classList.remove('fa-circle-pause');
        e.classList.add('fa-circle-play');
    })
}

playpause.forEach((ele) => {
    ele.addEventListener('click', (e) => {
        makeAllPlays();
        if (audioElement.paused || audioElement.currentTime <= 0) {

            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            audioElement.src = songs[songIndex].filepath;
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
            playingName.innerText = songs[songIndex].songname

            gif.style.opacity = 1
        }
        else {
            audioElement.pause();
            e.target.classList.remove('fa-circle-pause');
            e.target.classList.add('fa-circle-play');
            masterPlay.classList.remove('fa-circle-pause');
            masterPlay.classList.add('fa-circle-play');
            gif.style.opacity = 0
        }
    })
})


document.querySelector('.next').addEventListener('click', () => {
    if (songIndex >= 5) {
        playpause[songIndex].classList.remove('fa-circle-pause');
        playpause[songIndex].classList.add('fa-circle-play');
        songIndex = 0
        playpause[songIndex].classList.remove('fa-circle-play');
        playpause[songIndex].classList.add('fa-circle-pause');
    
    }
    else {
        songIndex += 1;
    }
    audioElement.src = songs[songIndex].filepath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    playingName.innerText = songs[songIndex].songname
    playpause[songIndex-1].classList.remove('fa-circle-pause');
    playpause[songIndex-1].classList.add('fa-circle-play');
    playpause[songIndex].classList.remove('fa-circle-play');
    playpause[songIndex].classList.add('fa-circle-pause');
    gif.style.opacity = 1
})


document.querySelector('.previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = songs[songIndex].filepath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    playingName.innerText = songs[songIndex].songname
    playpause[songIndex+1].classList.remove('fa-circle-pause');
    playpause[songIndex+1].classList.add('fa-circle-play');
    playpause[songIndex].classList.remove('fa-circle-play');
    playpause[songIndex].classList.add('fa-circle-pause');
    gif.style.opacity = 1
})

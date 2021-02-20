let music = document.getElementById("music");
let seekBar = document.getElementById("seekBar");

//playback control functions
function play_song(){
    music.play();
}

function fast_forward(){
    music.currentTime += 15;
}

function fast_rewind(){
    music.currentTime -= 15;
}

function pause_song(){
    music.pause();

}

function stop_song(){
    music.pause();
    music.currentTime = 0;

}

//Adjusting seek bar progress according to media file elapsed time.

function update_seekBar(){
    let position = music.currentTime/music.duration;
    seekBar.setAttribute("value", position);
}

music.addEventListener('timeupdate', update_seekBar);

//Jumps to a especific position in the media file.
function jump(){
    console.log("changed song position");
}

//mute and unmute music
let presentVolume = sliderValue.innerHTML;

function mute_unmute(){

    let mute = document.getElementById("mute");
    let sliderValue = document.getElementById("sliderValue");
    let volume = document.getElementById("volumeRange");
    
    if (music.muted == false){
        music.muted = true;
        mute.setAttribute("src", "./assets/images/mute.png");
        presentVolume = sliderValue.innerHTML;
        sliderValue.innerHTML = "0";
        volume.value = 0;
        
    }
    else{
        music.muted = false;
        mute.setAttribute("src", "./assets/images/unmute.png");
        sliderValue.innerHTML = presentVolume;
        volume.value = presentVolume;
    }
}


// adjusting music volume according to slider position 
function adjust_volume(){
    let volume = document.getElementById("volumeRange");
    let sliderValue = document.getElementById("sliderValue");

    music.volume = volume.value/100;

    sliderValue.innerHTML = volume.value;

}


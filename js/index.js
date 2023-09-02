function playvid(){
    let video = document.getElementById('video');
    let icon = document.getElementById("icon");



    if(video.paused){
    video.play();
    icon.classList.remove("fa-play");
        icon.classList.add("fa-pause");
    }else{
    video.pause();
    icon.classList.remove("fa-pause");
        icon.classList.add("fa-play");
    }
}

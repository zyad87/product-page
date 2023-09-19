function playvid(){
    let video = document.getElementById('video');
    let icon = document.getElementById("icon");
    let overlay = document.getElementById("overlay");



    if(video.paused){
    video.play();
    icon.classList.remove("fa-play");
        icon.classList.add("fa-pause");
        overlay.style="background-color:transparent;"
    }else{
    video.pause();
    icon.classList.remove("fa-pause");
        icon.classList.add("fa-play");
        overlay.style="background-color: rgba(129, 77, 178, .702);"
    }
}
document.getElementById("fullyear").innerHTML= new Date().getFullYear();

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()




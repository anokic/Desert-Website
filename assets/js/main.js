window.onload = () => {

  ///
  /// CUSTOM VIDEO PLAYER CONTROLLS
  ///
  var ifFirst = true;
  var j;
  const buttonPlayPause = document.querySelector('.play-pause');
  const video = document.querySelector('.video');
  const buttons = document.querySelector('.buttons');
  const videoLength = document.querySelector('.video-bar');

    /* Get the element you want displayed in fullscreen mode (a video in this example): */
  document.querySelector('.fullscreen').addEventListener('click',openFullscreen);

  /* When the openFullscreen() function is executed, open the video in fullscreen.
  Note that we must include prefixes for different browsers, as they don't support the requestFullscreen method yet */
  function openFullscreen() {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { /* Firefox */
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { /* IE/Edge */
      video.msRequestFullscreen();
    }
  }

  video.addEventListener('click', playPause);
  buttons .addEventListener('click', playPause);

  function playPause(){
    ifFirst = false;
    // we are using ifFirst for the moment when the user for the
    // first time hovers over the video without playing it so the user controls would not dissapear
    videoLength.classList.add('show')
    buttonPlayPause.classList.toggle('pause');
    if(buttonPlayPause.classList.contains('pause')){
      video.play();
    } else {
      video.pause();
    }
    if(buttons.classList.contains('hide')){
      j == null;
      clearTimeout(j);
    } else if(!(j == null)) {
      j == null;
      clearTimeout(j);
    }
  }
  video.addEventListener('mousemove', controls);
  function controls() {
    clearTimeout(j);
    j == null;
    if(buttonPlayPause.classList.contains('pause')){
      if(!ifFirst){
        if (buttons.classList.contains('hide')) {
          buttons.classList.remove('hide');
          videoLength.classList.add('show');
        }
        j = setTimeout(hideControls, 3000);
      }
    }
  }
  function hideControls(){
    buttons.classList.add('hide');
    videoLength.classList.remove('show');
  }

  video.addEventListener('timeupdate', function(){
    var juicePos = video.currentTime / video.duration;
    document.querySelector('.white-length').style.width = juicePos * 100 + '%';
  });

  ///                                    ///
  /// END CUSTOM VIDEO PLAYER CONTROLLS  ///
  ///                                    ///


  ///                                    ///
  ///            SLIDER START            ///
  ///                                    ///
  /// STATIC SLIDER

  var counter = 0;
  const card = document.querySelectorAll('.sliderCard');
  function slider(){
      if(counter == 1){
        reset();
        card[counter - 1].classList.add('left');
        card[counter + 1].classList.add('center');
        card[counter].classList.add('behind');
        card[counter + 2].classList.add('right');
      } else if(counter == 2){
        reset();
        card[counter - 1].classList.add('right');
        card[counter + 1].classList.add('center');
        card[counter].classList.add('left');
        card[counter - 2].classList.add('behind');
      } else if (counter == 3){
        reset();
        card[counter - 1].classList.add('behind');
        card[counter - 3].classList.add('right');
        card[counter].classList.add('left');
        card[counter - 2].classList.add('center');
      } else if(counter == 0){
        reset();
      }
  }

  function reset(){
    for(cards of card){
      cards.className = 'sliderCard';
    }
  }

  document.querySelector('.arrowRight').addEventListener('click', ()=>{
    if(counter == 3){
      counter = 0;
    } else {
      counter++;
    }
    slider();
  });

  document.querySelector('.arrowLeft').addEventListener('click', ()=>{
    if(counter == 0){
      counter = 3;
    } else {
      counter--;
    }
    slider();
  });
}

///                                    ///
///            SLIDER START            ///
///                                    ///

window.onload=()=>{var e,s=!0;const t=document.querySelector(".play-pause"),c=document.querySelector(".video"),l=document.querySelector(".buttons"),a=document.querySelector(".video-bar");function d(){s=!1,a.classList.add("show"),t.classList.toggle("pause"),t.classList.contains("pause")?c.play():c.pause(),l.classList.contains("hide")?clearTimeout(e):null!=e&&clearTimeout(e)}function i(){l.classList.add("hide"),a.classList.remove("show")}document.querySelector(".fullscreen").addEventListener("click",(function(){c.requestFullscreen?c.requestFullscreen():c.mozRequestFullScreen?c.mozRequestFullScreen():c.webkitRequestFullscreen?c.webkitRequestFullscreen():c.msRequestFullscreen&&c.msRequestFullscreen()})),c.addEventListener("click",d),l.addEventListener("click",d),c.addEventListener("mousemove",(function(){clearTimeout(e),t.classList.contains("pause")&&(s||(l.classList.contains("hide")&&(l.classList.remove("hide"),a.classList.add("show")),e=setTimeout(i,3e3)))})),c.addEventListener("timeupdate",(function(){var e=c.currentTime/c.duration;document.querySelector(".white-length").style.width=100*e+"%"}));var n=0;const r=document.querySelectorAll(".sliderCard");function o(){console.log(n),1==n?(u(),r[n-1].classList.add("left"),r[n+1].classList.add("center"),r[n].classList.add("behind"),r[n+2].classList.add("right")):2==n?(u(),r[n-1].classList.add("right"),r[n+1].classList.add("center"),r[n].classList.add("left"),r[n-2].classList.add("behind")):3==n?(u(),r[n-1].classList.add("behind"),r[n-3].classList.add("right"),r[n].classList.add("left"),r[n-2].classList.add("center")):0==n&&u()}function u(){for(cards of r)cards.className="sliderCard"}document.querySelector(".arrowRight").addEventListener("click",()=>{3==n?n=0:n++,o()}),document.querySelector(".arrowLeft").addEventListener("click",()=>{0==n?n=3:n--,o()})};
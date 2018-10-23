/* Click Event To Mute Button */
function soundMuteButton(button, video) {
  button.addEventListener("click", function() {
    /* If Sound Muted */
    if (!button.classList.contains("canv-video-block__sound-mute_active")) {
      video.muted = false;
      button.classList.add("canv-video-block__sound-mute_active");
    } else {
      video.muted = true;
      button.classList.remove("canv-video-block__sound-mute_active");
    }
  });
}

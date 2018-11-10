/* Click Event To Mute Button */
function soundMuteButton(button: HTMLElement, video: HTMLVideoElement): void {
  button.addEventListener("click", function () {
    /* If Sound Muted */
    if (!button.classList.contains("CanvVideoBlock-SoundMute_active")) {
      video.muted = false;
      button.classList.add("CanvVideoBlock-SoundMute_active");
    } else {
      video.muted = true;
      button.classList.remove("CanvVideoBlock-SoundMute_active");
    }
  });
}

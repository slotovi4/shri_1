/* Get Video Sound */
function canvasVideoSound(videoId) {
  let AudioContext = window.AudioContext || window.webkitAudioContext;

  if (AudioContext) {
    let video = document.querySelector("#" + videoId), //video
      block = document.querySelector("#" + videoId + "-block"), //video block
      muteButton = block.querySelector(".canv-video-block__sound-mute"),
      canvas = block.querySelector(".canv-video-block__video"), //canvas
      soundIndicator = block.querySelector(".canv-video-block__sound-volume"), //sound indicator
      ctx = new AudioContext(), //audio
      source = ctx.createMediaElementSource(video), //get video element
      analyser = ctx.createAnalyser(), //analys sound
      processor = ctx.createScriptProcessor(2048, 1, 1), //check sound changes
      data; //frequency data from the analyzer

    let soundVolume; //current sound value
    let maxSoundVolume = 0; //max sound value

    /* Set Mute Event */
    soundMuteButton(muteButton, video);

    /* Connect Elements */
    source.connect(analyser);
    source.connect(processor);
    analyser.connect(ctx.destination);
    processor.connect(ctx.destination);

    /* Check Sound Volume(Frequency) */
    data = new Uint8Array(analyser.frequencyBinCount);
    processor.onaudioprocess = function() {
      analyser.getByteFrequencyData(data);
      soundVolume = getSoundVolumeValue(data);
      if (maxSoundVolume < soundVolume) maxSoundVolume = soundVolume;
      drawSoundVolume(soundVolume, maxSoundVolume, canvas, soundIndicator);
    };
  } else {
    alert("Ваш браузер не поддерживает Web Audio API");
  }
}

/* Get Sound Value(Frequency) */
function getSoundVolumeValue(data) {
  let result = 0;
  data.forEach(val => {
    result += val;
  });
  return result;
}

/* Draw Volume */
function drawSoundVolume(volume, maxVolume, canvas, soundIndicator) {
  let canvasHeight = canvas.offsetHeight; //canvas height
  let oneHeightVal = canvasHeight / maxVolume;
  let volumeValue = volume * oneHeightVal;

  soundIndicator.style.height = volumeValue + "px";
}

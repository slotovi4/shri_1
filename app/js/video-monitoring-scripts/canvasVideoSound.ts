/* Get Video Sound */
function canvasVideoSound(videoId: string): void {
  let AudioContext =
    (<any>window).AudioContext || (<any>window).webkitAudioContext;

  if (AudioContext) {
    let video = <HTMLVideoElement>document.querySelector("#" + videoId), //video
      block = <HTMLElement>document.querySelector("#" + videoId + "-block"), //video block
      muteButton = <HTMLElement>(
        block.querySelector(".canv-video-block__sound-mute")
      ),
      canvas = <HTMLCanvasElement>(
        block.querySelector(".canv-video-block__video")
      ), //canvas
      soundIndicator = <HTMLElement>(
        block.querySelector(".canv-video-block__sound-volume")
      ), //sound indicator
      ctx = new AudioContext(), //audio
      source = ctx.createMediaElementSource(video), //get video element
      analyser = ctx.createAnalyser(), //analys sound
      processor = ctx.createScriptProcessor(2048, 1, 1); //check sound changes

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
    let data = new Uint8Array(analyser.frequencyBinCount);
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
function getSoundVolumeValue(data: Uint8Array) {
  let result = 0;
  data.forEach(val => {
    result += val;
  });
  return result;
}

/* Draw Volume */
function drawSoundVolume(
  volume: number,
  maxVolume: number,
  canvas: HTMLCanvasElement,
  soundIndicator: HTMLElement
): void {
  let canvasHeight = canvas.offsetHeight; //canvas height
  let oneHeightVal = canvasHeight / maxVolume;
  let volumeValue = volume * oneHeightVal;

  soundIndicator.style.height = volumeValue + "px";
}

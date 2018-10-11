/* Create Canvas Video Block, Canvas, Info, Luminance */
function createCanvasVideoBlock(videoId) {
  /* Create Video Elements */
  let block = document.createElement("div"),
    canvasBlock = document.createElement("div"),
    controllsBlock = document.createElement("div"),
    soundVolume = document.createElement("div"),
    soundMute = document.createElement("div"),
    prevButton = document.createElement("span"),
    canvas = document.createElement("canvas"),
    info = document.createElement("span"),
    luminance = document.createElement("input"),
    luminanceText = document.createElement("span"),
    contrast = document.createElement("input"),
    contrastText = document.createElement("span");

  /* Set Values */
  block.classList.add("canv-video-block");
  block.id = videoId + "-block";
  canvasBlock.classList.add("canv-video-block__canvas-block");
  controllsBlock.classList.add("canv-video-block__controll-block");
  prevButton.classList.add("canv-video-block__button");
  prevButton.textContent = "Все камеры";
  canvas.classList.add("canv-video-block__video");
  soundVolume.classList.add("canv-video-block__sound-volume");
  soundMute.classList.add("canv-video-block__sound-mute");
  soundMute.textContent = "♪";
  info.classList.add("canv-video-block__info");
  luminance.classList.add("canv-video-block__luminance");
  luminance.setAttribute("type", "range");
  luminance.setAttribute("value", "5");
  luminance.setAttribute("min", "0");
  luminance.setAttribute("max", "10");
  luminanceText.classList.add("canv-video-block__text");
  luminanceText.textContent = "Яркость";
  contrast.classList.add("canv-video-block__contrast");
  contrast.setAttribute("type", "range");
  contrast.setAttribute("value", "0");
  contrast.setAttribute("min", "-5");
  contrast.setAttribute("max", "5");
  contrastText.classList.add("canv-video-block__text");
  contrastText.textContent = "Контраст";

  /* Add Elements To Block */
  controllsBlock.appendChild(luminanceText);
  controllsBlock.appendChild(luminance);
  controllsBlock.appendChild(contrastText);
  controllsBlock.appendChild(contrast);
  controllsBlock.appendChild(prevButton);
  controllsBlock.appendChild(soundMute);
  canvasBlock.appendChild(info);
  canvasBlock.appendChild(soundVolume);
  canvasBlock.appendChild(canvas);
  canvasBlock.appendChild(controllsBlock);
  block.appendChild(canvasBlock);

  document.querySelector(".container").appendChild(block);
}

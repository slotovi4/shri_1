/* Create Canvas Video Block, Canvas, Info, Luminance */
function createCanvasVideoBlock(videoId: string): void {
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
    canvMove = document.createElement("canvas"),
    contrastText = document.createElement("span");

  /* Set Values */
  canvMove.classList.add("CanvVideoBlock-CanvasMove");
  block.classList.add("CanvVideoBlock");
  block.id = videoId + "-block";
  canvasBlock.classList.add("CanvVideoBlock-CanvasBlock");
  controllsBlock.classList.add("CanvVideoBlock-ControllBlock");
  prevButton.classList.add("CanvVideoBlock-Button");
  prevButton.textContent = "Все камеры";
  canvas.classList.add("CanvVideoBlock-Cideo");
  soundVolume.classList.add("CanvVideoBlock-SoundVolume");
  soundMute.classList.add("CanvVideoBlock-SoundMute");
  soundMute.textContent = "♪";
  info.classList.add("CanvVideoBlock-Info");
  luminance.classList.add("CanvVideoBlock-Luminance");
  luminance.setAttribute("type", "range");
  luminance.setAttribute("value", "5");
  luminance.setAttribute("min", "0");
  luminance.setAttribute("max", "10");
  luminanceText.classList.add("CanvVideoBlock-Text");
  luminanceText.textContent = "Яркость";
  contrast.classList.add("CanvVideoBlock-Contrast");
  contrast.setAttribute("type", "range");
  contrast.setAttribute("value", "1");
  contrast.setAttribute("min", "1");
  contrast.setAttribute("max", "5");
  contrastText.classList.add("CanvVideoBlock-Text");
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
  canvasBlock.appendChild(canvMove);
  canvasBlock.appendChild(controllsBlock);
  block.appendChild(canvasBlock);

  let container = <HTMLElement>document.querySelector(".Container");
  container.appendChild(block);
}

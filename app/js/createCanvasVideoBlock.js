/* Create Canvas Video Block, Canvas, Info, Luminance */
function createCanvasVideoBlock(videoId) {
  let block = document.createElement("div");
  let canvas = document.createElement("canvas");
  let info = document.createElement("span");
  let luminance = document.createElement("input");
  let contrast = document.createElement("input");

  /* Set Values */
  block.classList.add("canv-video-block");
  block.id = videoId + "-block";
  canvas.classList.add("canv-video-block__video");
  info.classList.add("canv-video-block__info");
  luminance.classList.add("canv-video-block__luminance");
  luminance.setAttribute("type", "range");
  luminance.setAttribute("value", "5");
  luminance.setAttribute("min", "0");
  luminance.setAttribute("max", "10");
  contrast.classList.add("canv-video-block__contrast");
  contrast.setAttribute("type", "range");
  contrast.setAttribute("value", "0");
  contrast.setAttribute("min", "-5");
  contrast.setAttribute("max", "5");

  /* Add Elements To Block */
  block.appendChild(canvas);
  block.appendChild(info);
  block.appendChild(luminance);
  block.appendChild(contrast);

  document.querySelector(".container").appendChild(block);
}

/* Create Canvas Video Block, Canvas, Info, Range */
function createCanvasVideoBlock(videoId) {
  let block = document.createElement("div");
  let canvas = document.createElement("canvas");
  let info = document.createElement("span");
  let range = document.createElement("input");

  /* Set Values */
  block.classList.add("canv-video-block");
  block.id = videoId + "-block";
  canvas.classList.add("canv-video-block__video");
  info.classList.add("canv-video-block__info");
  range.classList.add("canv-video-block__luminance");
  range.setAttribute("type", "range");
  range.setAttribute("value", "5");
  range.setAttribute("min", "0");
  range.setAttribute("max", "10");

  /* Add Elements To Block */
  block.appendChild(canvas);
  block.appendChild(info);
  block.appendChild(range);

  document.querySelector(".container").appendChild(block);
}

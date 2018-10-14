/* Draw Canvas Video & Video Effects */
function canvasVideo(videoId) {
  createCanvasVideoBlock(videoId);

  let video = document.querySelector("#" + videoId); //video
  let block = document.querySelector("#" + videoId + "-block"); //video block
  let videoInfo = block.querySelector(".canv-video-block__info"); //video info
  let canvas = block.querySelector(".canv-video-block__video"); //canvas video result
  let lumRange = block.querySelector(".canv-video-block__luminance"); //luminance range
  let contrRange = block.querySelector(".canv-video-block__contrast"); //contrast range

  let canvasMove = block.querySelector(".canv-video-block__canvas-move");

  //let custCanvas = document.createElement("canvas");
  //let custCtx = custCanvas.getContext("2d", { alpha: false });

  let ctx = canvas.getContext("2d", { alpha: false });
  let custCtx = canvasMove.getContext("2d", { alpha: false });

  let fps = 30; //lock video fps

  /* Get Video Size*/
  let videoWidth = video.offsetWidth;
  let videoHeight = video.offsetHeight;

  video.style.display = "none";

  /* Change Range Luminance */
  let changeLum = lumRange.value;
  lumRange.addEventListener(
    "input",
    function() {
      changeLum = lumRange.value;
      //canvas.style.filter = "brightness(" + changeLum * 20 + "%)";
    },
    false
  );

  /* Change Range Contrast */
  let changeContr = contrRange.value;
  contrRange.addEventListener(
    "input",
    function() {
      changeContr = contrRange.value;
      //canvas.style.filter = "contrast(" + changeContr + ")";
    },
    false
  );

  let oldRGB;
  /*******/
  let movedPixels = 0;
  let moveBlock = [];
  let checkLayer = 0;
  /*******/

  /* Drawing */
  function loop(video, canvas, canvasMove, ctx, custCtx) {
    let luminanceBlack = 0,
      luminanceWhite = 0;

    /* Set Canvas Size*/
    canvas.width = videoWidth;
    canvas.height = videoHeight;

    canvasMove.width = videoWidth;
    canvasMove.height = videoHeight;

    /* Set Canvas Styles */
    if (!video.paused && !video.ended) {
      ctx.drawImage(video, 0, 0, videoWidth, videoHeight);

      /* Get RGB */
      let videoData = ctx.getImageData(0, 0, videoWidth, videoHeight);
      let data = videoData.data;

      let moveI = custCtx.getImageData(0, 0, videoWidth, videoHeight);
      let moveData = moveI.data;

      /* Get Contrast */
      let contrast = changeContr / 5 + 1; // [0..2]
      let intercept = 128 * (1 - contrast);
      /* 
      for (let y = 0; y < videoHeight; y++) {
        for (let x = 0; x < videoWidth; x++) {
          let pixel = (y * videoWidth + x) * 4;

          if (!(x % 36) || !(y % 36)) {
            data[pixel] = 255;
            data[pixel + 1] = 0;
            data[pixel + 2] = 0;
          }
        }
      } */

      /* Set RGB Style */
      for (let i = 0; i < data.length; i += 4) {
        let r = data[i];
        let g = data[i + 1];
        let b = data[i + 2];

        /* Change Luminance */
        if (changeLum) {
          data[i] = (changeLum / 5) * r;
          data[i + 1] = (changeLum / 5) * g;
          data[i + 2] = (changeLum / 5) * b;

          r = data[i];
          g = data[i + 1];
          b = data[i + 2];
        }

        /* Change Contrast */
        if (changeContr) {
          data[i] = data[i] * contrast + intercept;
          data[i + 1] = data[i + 1] * contrast + intercept;
          data[i + 2] = data[i + 2] * contrast + intercept;

          r = data[i];
          g = data[i + 1];
          b = data[i + 2];
        }

        /* Check RGB Values */
        if (r > 255) data[i] = 255;
        if (g > 255) data[i + 1] = 255;
        if (b > 255) data[i + 2] = 255;
        if (r < 0) data[i] = 0;
        if (g < 0) data[i + 1] = 0;
        if (b < 0) data[i + 2] = 0;

        /* ** */

        if (oldRGB) {
          /* Color Euclidean Distance */
          /* let disR = Math.pow(data[i] - oldRGB[i], 2);
          let disG = Math.pow(data[i + 1] - oldRGB[i + 1], 2);
          let disB = Math.pow(data[i + 2] - oldRGB[i + 2], 2);
          let distance = Math.sqrt(disR + disG + disB); */

          //проверить на красный
          //проверить на частоту изменений цвета по кадрам
          //вычислять оттенок цвета(темный/светлый) и елси темный то перекрашиваю в черный иначе в белый,
          //после сравниваю ч/б цвета и если цвет изменился то крашу в красный и делаю проверку на красный

          //проверка на сетку
          /* let lineGrid = false;
          if (data[i] == 255 && data[i + 1] == 0 && data[i + 2] == 0) {
            lineGrid = true;
          } */

          let rgbSumm = data[i] + data[i + 1] + data[i + 2];
          let rgboldSumm = oldRGB[i] + oldRGB[i + 1] + oldRGB[i + 2];

          if (rgbSumm - 100 > rgboldSumm || rgbSumm + 100 < rgboldSumm) {
            //movedPixels++;

            moveData[i] = 255;
            moveData[i + 1] = 0;
            moveData[i + 2] = 0;
          }

          /* if (!i % 1296) {
            //36x36px
            if (movedPixels > 10000) {
              //18x18px
              //data = moveBlock;
              //console.log(moveBlock);

              moveBlock = [];
              //alert("move!");
            }
            movedPixels = 0;
          } */
        }

        /* Get Luminance Info */
        let luminance = 0.299 * r + 0.587 * g + 0.114 * b;
        luminance < 50 ? luminanceBlack++ : luminanceWhite++;

        /* Change Info Text Color 25x25px */
        if (i == 100) {
          luminanceBlack > luminanceWhite
            ? (videoInfo.style.color = "white")
            : (videoInfo.style.color = "black");
        }
      }

      oldRGB = data;

      /* Check Luminance */
      luminanceBlack > luminanceWhite
        ? (videoInfo.textContent = "dark")
        : (videoInfo.textContent = "light");

      /* Apply Style */
      videoData.data = data;
      moveI.data = moveData;
      ctx.putImageData(videoData, 0, 0);
      custCtx.putImageData(moveI, 0, 0);
      //ctx.clearRect(0, 0, videoWidth, videoHeight);
    }

    /* Redrawing */
    setTimeout(function() {
      requestAnimationFrame(function() {
        loop(video, canvas, canvasMove, ctx, custCtx);
      });
    }, 1000 / fps);
  }

  loop(video, canvas, canvasMove, ctx, custCtx);
}

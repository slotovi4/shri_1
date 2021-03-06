/* Draw Canvas Video & Video Effects */
function canvasVideo(videoId: string): void {
  const video = <HTMLVideoElement>document.querySelector("#" + videoId), //video
    block = <HTMLDivElement>document.querySelector("#" + videoId + "-block"), //video block
    videoInfo = <HTMLSpanElement>block.querySelector(".canv-video-block__info"), //video info
    canvas = <HTMLCanvasElement>block.querySelector(".canv-video-block__video"), //canvas video result
    lumRange = <HTMLInputElement>(
      block.querySelector(".canv-video-block__luminance")
    ), //luminance range
    contrRange = <HTMLInputElement>(
      block.querySelector(".canv-video-block__contrast")
    ), //contrast range
    canvasMove = <HTMLCanvasElement>(
      block.querySelector(".canv-video-block__canvas-move")
    ); //move info canvas

  let ctx = canvas.getContext("2d", { alpha: false });
  let custCtx = canvasMove.getContext("2d", { alpha: false });

  let oldRGB: Uint8ClampedArray; //old rgb video data

  /* Get Video Size*/
  let videoWidth = video.offsetWidth;
  let videoHeight = video.offsetHeight;

  video.style.display = "none"; //hide video

  /* Change Range Luminance */
  let changeLum = lumRange.value;
  lumRange.addEventListener(
    "input",
    function() {
      changeLum = lumRange.value;
      canvas.style.filter =
        "brightness(" +
        parseInt(changeLum) * 20 +
        "%) contrast(" +
        changeContr +
        ")";
    },
    false
  );

  /* Change Range Contrast */
  let changeContr = contrRange.value;
  contrRange.addEventListener(
    "input",
    function() {
      changeContr = contrRange.value;
      canvas.style.filter =
        "brightness(" +
        parseInt(changeLum) * 20 +
        "%) contrast(" +
        changeContr +
        ")";
    },
    false
  );

  /* Drawing */
  function loop(
    video: HTMLVideoElement,
    canvas: HTMLCanvasElement,
    canvasMove: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    custCtx: CanvasRenderingContext2D
  ): void {
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
      let videoData = ctx.getImageData(0, 0, videoWidth, videoHeight); //video canvas
      let data = videoData.data;

      let moveI = custCtx.getImageData(0, 0, videoWidth, videoHeight); //move canvas
      let moveData = moveI.data;

      /* Set RGB Style */
      for (let i = 0; i < data.length; i += 4) {
        let r = data[i];
        let g = data[i + 1];
        let b = data[i + 2];

        /* Check RGB Values */
        if (r > 255) data[i] = 255;
        if (g > 255) data[i + 1] = 255;
        if (b > 255) data[i + 2] = 255;
        if (r < 0) data[i] = 0;
        if (g < 0) data[i + 1] = 0;
        if (b < 0) data[i + 2] = 0;

        /* Get Luminance Info */
        let luminance = 0.299 * r + 0.587 * g + 0.114 * b;
        luminance < 50 ? luminanceBlack++ : luminanceWhite++;

        /* Change Info Text Color 25x25px */
        if (i == 100) {
          luminanceBlack > luminanceWhite
            ? (videoInfo.style.color = "white")
            : (videoInfo.style.color = "black");
        }

        /* Move Detection */
        if (oldRGB) {
          let rgbSumm = data[i] + data[i + 1] + data[i + 2];
          let rgboldSumm = oldRGB[i] + oldRGB[i + 1] + oldRGB[i + 2];

          if (rgbSumm - 100 > rgboldSumm || rgbSumm + 100 < rgboldSumm) {
            moveData[i] = 255;
            moveData[i + 1] = 0;
            moveData[i + 2] = 0;
          }
        }
      }

      /* Check Luminance */
      luminanceBlack > luminanceWhite
        ? (videoInfo.textContent = "dark")
        : (videoInfo.textContent = "light");

      /* Apply Style */
      oldRGB = data;
      videoData.data.set(data);
      moveI.data.set(moveData);
      ctx.putImageData(videoData, 0, 0);
      custCtx.putImageData(moveI, 0, 0);
    }

    /* Redrawing */
    setTimeout(function() {
      requestAnimationFrame(function() {
        loop(video, canvas, canvasMove, ctx, custCtx);
      });
    }, 100);
  }

  if (ctx && custCtx) loop(video, canvas, canvasMove, ctx, custCtx);
}

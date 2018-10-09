/* Drawing */
function loop(video, canvas, ctx, custCtx) {
  let luminanceBlack = 0,
    luminanceWhite = 0;

  /* Set Canvas Size*/
  canvas.width = videoWidth;
  canvas.height = videoHeight;
  custCanvas.width = videoWidth;
  custCanvas.height = videoHeight;

  /* Set Canvas Styles */
  if (!video.paused && !video.ended) {
    custCtx.drawImage(video, 0, 0, videoWidth, videoHeight);

    /* Get RGB */
    let videoData = custCtx.getImageData(0, 0, videoWidth, videoHeight);
    let data = videoData.data;

    /* Set RGB Style */
    for (let i = 0; i < data.length; i += 4) {
      let r = data[i];
      let g = data[i + 1];
      let b = data[i + 2];
      //let brightness = 0.34 * r + 0.5 * g + 0.16 * b;

      /* Change Luminance */
      if (changeLum) {
        data[i] = (changeLum / 5) * r;
        data[i + 1] = (changeLum / 5) * g;
        data[i + 2] = (changeLum / 5) * b;
        r = data[i];
        g = data[i + 1];
        b = data[i + 2];
      }

      /* Get Luminance Info */
      let luminance = 0.299 * r + 0.587 * g + 0.114 * b;
      luminance < 50 ? luminanceBlack++ : luminanceWhite++;

      /* Change Info Text Color 50x50px */
      if (i < 200) {
        luminanceBlack > luminanceWhite
          ? (videoInfo.style.color = "white")
          : (videoInfo.style.color = "black");
      }
    }

    /* Check Luminance */
    luminanceBlack > luminanceWhite
      ? (videoInfo.textContent = "dark")
      : (videoInfo.textContent = "light");

    /* Apply Style */
    videoData.data = data;
    ctx.putImageData(videoData, 0, 0);
  }

  /* Redrawing */
  requestAnimationFrame(function() {
    loop(video, canvas, ctx, custCtx);
  });
}

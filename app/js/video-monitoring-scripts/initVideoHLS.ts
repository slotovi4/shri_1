/* HLS */
function initVideo(video, url) {
  if (Hls.isSupported()) {
    let hls = new Hls();
    hls.loadSource(url);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function() {
      video.play();
    });
  }
}

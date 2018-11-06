/* Zoom(Click) Event To Video */
function openVideo(): void {
  let canvasVid = document.querySelectorAll(".canv-video-block__video");
  let videoBlock = document.querySelectorAll(".canv-video-block__canvas-block");

  canvasVid.forEach(function(canvas) {
    canvas.addEventListener("click", function() {
      let parentBlock = this.parentNode;
      let controllBlock = parentBlock.querySelector(
        ".canv-video-block__controll-block"
      );
      let button = parentBlock.querySelector(".canv-video-block__button");
      let soundIndicator = parentBlock.querySelector(
        ".canv-video-block__sound-volume"
      );

      let openVideo = dataDispatcher.getActiveItems();

      /* Close Button */
      button.addEventListener("click", function() {
        parentBlock.classList.remove("canv-video-block__canvas-block_open");
        button.classList.remove("canv-video-block__button_open");
        button.classList.remove("canv-video-block__button_open");
        controllBlock.classList.remove("canv-video-block__controll-block_open");
        soundIndicator.classList.remove(
          "canv-video-block__sound-volume_active"
        );

        getActiveVideo(videoBlock, "canv-video-block__canvas-block_open");
      });

      /* Open Video */
      if (
        !parentBlock.classList.contains(
          "canv-video-block__canvas-block_open"
        ) &&
        !openVideo
      ) {
        parentBlock.classList.add("canv-video-block__canvas-block_open");
        button.classList.add("canv-video-block__button_open");
        controllBlock.classList.add("canv-video-block__controll-block_open");
        soundIndicator.classList.add("canv-video-block__sound-volume_active");
        getActiveVideo(videoBlock, "canv-video-block__canvas-block_open");
      }
    });
  });
}

function getActiveVideo(item, className) {
  dataDispatcher.dispatch([
    {
      actionType: "itemStatus",
      data: {
        dataActive: item,
        activeClass: className
      }
    }
  ]);
}

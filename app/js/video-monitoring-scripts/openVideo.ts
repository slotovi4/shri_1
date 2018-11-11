/* Zoom(Click) Event To Video */
function openVideo(): void {
  let canvasVid = document.querySelectorAll(".CanvVideoBlock-Video");
  let videoBlock = document.querySelectorAll(".CanvVideoBlock-CanvasBlock");

  canvasVid.forEach(function (canvas) {
    canvas.addEventListener("click", function () {
      let parentBlock = this.parentNode;
      let controllBlock = parentBlock.querySelector(
        ".CanvVideoBlock-ControllBlock"
      );
      let button = parentBlock.querySelector(".CanvVideoBlock-Button");
      let soundIndicator = parentBlock.querySelector(
        ".CanvVideoBlock-SoundVolume"
      );

      /* Close Button */
      button.addEventListener("click", function () {
        parentBlock.classList.remove("CanvVideoBlock-CanvasBlock_open");
        button.classList.remove("CanvVideoBlock-Button_open");
        button.classList.remove("CanvVideoBlock-Button_open");
        controllBlock.classList.remove("CanvVideoBlock-ControllBlock_open");
        soundIndicator.classList.remove(
          "CanvVideoBlock-SoundVolume_active"
        );
      });

      /* Open Video */
      if (
        !parentBlock.classList.contains(
          "CanvVideoBlock-CanvasBlock_open"
        )
      ) {
        parentBlock.classList.add("CanvVideoBlock-CanvasBlock_open");
        button.classList.add("CanvVideoBlock-Button_open");
        controllBlock.classList.add("CanvVideoBlock-ControllBlock_open");
        soundIndicator.classList.add("CanvVideoBlock-SoundVolume_active");
      }
    });
  });
}

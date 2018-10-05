/* Event Handling: Drag & Pinch & Rotate In #cam Image */
window.onload = function() {
  if ("ontouchstart" in document.documentElement) {
    let cam = document.querySelector("#cam");

    let conXstart; //start X touch position
    let imgBackPosition; //img background X position
    let imgLeft, imgRight, imgTop, imgBot; //img L/R/T/B position
    let imgCenterX, imgCenterY; //img X&Y center position
    let touchAngle; //touch rotate angle
    let touchedPoints = [];

    if (window.PointerEvent) {
      cam.addEventListener("pointerdown", startController, false);
      cam.addEventListener("pointermove", moveController, false);
      cam.addEventListener("pointerup", stopController, false);
    }

    function startController(e) {
      alert("touch");
      /* Get Position Info */
      conXstart = e.clientX;
      imgBackPosition = parseInt(this.style.backgroundPositionX);

      touchedPoints.push({
        pointerId: e.pointerId,
        x: e.clientX,
        y: e.clientY,
        move: false
      });

      /* Calculate Center Image */
      imgLeft = this.getBoundingClientRect().left;
      imgRight = this.getBoundingClientRect().right;
      imgTop = this.getBoundingClientRect().top;
      imgBot = this.getBoundingClientRect().bottom;

      imgWight = parseInt(imgRight - imgLeft);
      imgHeight = parseInt(imgBot - imgTop);

      imgCenterX = parseInt((imgLeft + imgRight) / 2);
      imgCenterY = parseInt((imgTop + imgBot) / 2);
    }

    function moveController(e) {
      if (touchedPoints.length < 2) {
        /* Left & Right Move */
        let xPos = e.clientX;
        let moveValue = parseInt(xPos - conXstart);

        !imgBackPosition
          ? (this.style.backgroundPositionX = moveValue + "px")
          : (this.style.backgroundPositionX =
              imgBackPosition + moveValue + "px");
      } else if (touchedPoints.length == 2) {
        let oneTouchMove = checkRotatePoints(e);
        /* если на панели 2 пальца... */

        if (oneTouchMove) {
          /* Rotate */
          touchAngle = parseInt(
            Math.atan2(e.clientX - imgCenterX, -(e.clientY - imgCenterY)) *
              (180 / Math.PI)
          );

          this.style.transform = "rotate(" + touchAngle + "deg)";
        } else touchedPoints = [];
      }
    }

    function stopController(e) {
      touchedPoints = [];
    }

    //проверка на то что если только один палец из двух двигается то вращаем
    function checkRotatePoints(e) {
      touchedPoints.forEach(function(point) {
        if (point.pointerId == e.pointerId) {
          //if current point move
          point.move = true;
        } else if (point.move == true) return false; //если двигается и второй
      });

      return true;
    }
  }
};

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
    let prevDiff = -1;

    let checkZoom = false;
    let checkScale = 0;

    if (window.PointerEvent) {
      cam.addEventListener("pointerdown", startController, false);
      cam.addEventListener("pointermove", moveController, false);
      cam.addEventListener("pointerup", stopController, false);
    }

    function startController(e) {
      /* Get Position Info */
      conXstart = e.clientX;
      imgBackPosition = parseInt(this.style.backgroundPositionX);

      e.move = false;
      touchedPoints.push(e);

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
      // Find this event in the cache and update its record with this event
      for (let i = 0; i < touchedPoints.length; i++) {
        if (
          touchedPoints[i].pointerId == e.pointerId &&
          Math.abs(e.clientX - touchedPoints[i].clientX) > 30
        ) {
          e.move = true;
          touchedPoints[i] = e;
          break;
        }
      }

      //if one active touch
      if (touchedPoints.length < 2) {
        /* Left & Right Move */
        let xPos = e.clientX;
        let moveValue = parseInt(xPos - conXstart);

        !imgBackPosition
          ? (this.style.backgroundPositionX = moveValue + "px")
          : (this.style.backgroundPositionX =
              imgBackPosition + moveValue + "px");
      } else if (touchedPoints.length == 2) {
        //if two active touches
        let oneTouchMove = checkВrightness(e); //check brightness status (one touch move & one stay)

        if (oneTouchMove === true && !checkZoom) {
          /* Rotate */
          touchAngle = parseInt(
            Math.atan2(e.clientX - imgCenterX, -(e.clientY - imgCenterY)) *
              (180 / Math.PI)
          );

          this.style.filter = "brightness(" + touchAngle + "%)";
        } else {
          /* Zoom */
          checkZoom = true;
          // Calculate the distance between the two pointers
          let curDiff = Math.abs(
            touchedPoints[0].clientX - touchedPoints[1].clientX
          );

          if (prevDiff > 0) {
            if (curDiff > prevDiff) {
              if (checkScale == 0) {
                checkScale = 1;
                this.style.transform = "scale(1.5)";
              }
              if (checkScale == -1) {
                checkScale = 0;
                this.style.transform = "scale(1)";
              }
            }
            if (curDiff < prevDiff) {
              if (checkScale == 0) {
                checkScale = -1;
                this.style.transform = "scale(0.5)";
              }
              if (checkScale == 1) {
                checkScale = 0;
                this.style.transform = "scale(1)";
              }
            }
          }

          // Cache the distance for the next move event
          prevDiff = curDiff;

          /* let p = cam.querySelector(".event-cam-debug");
          p.textContent =
            oneTouchMove +
            " x = " +
            touchedPoints[0].sideX +
            " y= " +
            touchedPoints[0].sideY +
            " zoom = " +
            checkedZoom; */
        }
      } /* else {
        touchedPoints = [];
      } */
    }

    //удаление тача при up-е
    function stopController(e) {
      checkZoom = false;
      for (let i = 0; i < touchedPoints.length; i++) {
        if (touchedPoints[i].pointerId == e.pointerId) {
          touchedPoints.splice(i, 1);
          break;
        }
      }
    }

    //проверка на то что если только один палец из двух двигается то вращаем
    function checkВrightness(e) {
      let status = false;
      touchedPoints.forEach(function(point) {
        //если это второй палец и он не двигается то
        if (point.pointerId != e.pointerId && point.move == false)
          status = true;
      });

      return status;
    }
  }
};

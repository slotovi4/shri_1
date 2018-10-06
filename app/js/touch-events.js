/* Event Handling: Drag & Pinch & Rotate In #cam Image */
window.onload = function() {
  if ("ontouchstart" in document.documentElement) {
    let cam = document.querySelector("#cam");
    let camParent = cam.parentElement.parentElement;
    let camInfo = camParent.querySelector(".event-cam-info");
    let camZoom = camInfo.querySelector(".event-cam-info__zoom");
    let camBright = camInfo.querySelector(".event-cam-info__bright");

    camInfo.classList.remove("event-cam-info_hide"); //if touch device show cam info block
    camZoom.textContent = "Приближение: 0%";
    camBright.textContent = "Яркость: 0%";

    let conXstart; //start X touch position
    let imgBackPosition; //img background X position
    let imgLeft, imgRight, imgTop, imgBot; //img L/R/T/B position
    let imgCenterX, imgCenterY; //img X&Y center position
    let touchAngle; //touch rotate angle
    let touchedPoints = []; //active touches
    let prevDiff = -1;

    let checkZoom = false;
    let checkScale = 0;

    /* Check Pointer Support */
    if (window.PointerEvent) {
      cam.addEventListener("pointerdown", startController, false);
      cam.addEventListener("pointermove", moveController, false);
      cam.addEventListener("pointerup", stopController, false);
    } else {
      cam.on("pointerdown", startController);
      cam.on("pointermove", moveController);
      cam.on("pointerup", stopController);
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
          Math.abs(e.clientX - touchedPoints[i].clientX) > 50
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

          if (touchAngle > 0) {
            this.style.filter = "brightness(" + touchAngle + "%)";
            camBright.textContent = "Яркость: " + touchAngle + "%";
          }
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
                camZoom.textContent = "Приближение: 50%";
              }
              if (checkScale == -1) {
                checkScale = 0;
                this.style.transform = "scale(1)";
                camZoom.textContent = "Приближение: 0%";
              }
            }
            if (curDiff < prevDiff) {
              if (checkScale == 0) {
                checkScale = -1;
                this.style.transform = "scale(0.7)";
                camZoom.textContent = "Приближение: -30%";
              }
              if (checkScale == 1) {
                checkScale = 0;
                this.style.transform = "scale(1)";
                camZoom.textContent = "Приближение: 0%";
              }
            }
          }

          // Cache the distance for the next move event
          prevDiff = curDiff;
        }
      }
    }

    //detete touch on up
    function stopController(e) {
      checkZoom = false;
      for (let i = 0; i < touchedPoints.length; i++) {
        if (touchedPoints[i].pointerId == e.pointerId) {
          touchedPoints.splice(i, 1);
          break;
        }
      }
    }

    //rotate if one touch move & one stay
    function checkВrightness(e) {
      let status = false;
      touchedPoints.forEach(function(point) {
        //if current touch move & second touch not move
        if (point.pointerId != e.pointerId && point.move == false)
          status = true;
      });

      return status;
    }
  }
};

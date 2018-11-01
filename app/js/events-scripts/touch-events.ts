/* Event Handling: Drag & Pinch & Rotate In #cam Image */
function touchEvets(): void {
  let cam = <HTMLDivElement>document.querySelector("#cam");
  let camParent = <HTMLDivElement>document.querySelector("#camParent");
  let camInfo = <HTMLDivElement>camParent.querySelector(".event-cam-info");
  let camZoom = <HTMLSpanElement>camInfo.querySelector(".event-cam-info__zoom");
  let camBright = <HTMLSpanElement>(
    camInfo.querySelector(".event-cam-info__bright")
  );

  let conXstart: number; //start X touch position
  let imgBackPosition: number; //img background X position
  let imgLeft: number, imgRight: number, imgTop: number, imgBot: number; //img L/R/T/B position
  let imgCenterX: number, imgCenterY: number; //img X&Y center position
  let touchAngle; //touch rotate angle
  let touchedPoints: Array<object> = []; //active touches
  let prevDiff = -1;

  let checkZoom = false;
  let checkScale = 0;

  interface PointEvent {
    clientX: number;
    clientY: number;
    move: boolean;
    pointerId: number;
  }

  if ("ontouchstart" in <HTMLElement>document.documentElement) {
    camInfo.classList.remove("event-cam-info_hide"); //if touch device show cam info block
    camZoom.textContent = "Приближение: 0%";
    camBright.textContent = "Яркость: 0%";

    /* Check Pointer Support */
    if ((<any>window).PointerEvent) {
      cam.addEventListener("pointerdown", startController, false);
      cam.addEventListener("pointermove", moveController, false);
      cam.addEventListener("pointerup", stopController, false);
    }
  }

  function startController(e: object): void {
    /* Get Position Info */
    let eEv = e as PointEvent;
    conXstart = eEv.clientX;
    imgBackPosition = parseInt(this.style.backgroundPositionX);

    eEv.move = false;
    touchedPoints.push(e);

    /* Calculate Center Image */
    imgLeft = this.getBoundingClientRect().left;
    imgRight = this.getBoundingClientRect().right;
    imgTop = this.getBoundingClientRect().top;
    imgBot = this.getBoundingClientRect().bottom;

    imgCenterX = Math.round((imgLeft + imgRight) / 2);
    imgCenterY = Math.round((imgTop + imgBot) / 2);
  }

  function moveController(e: object): void {
    // Find this event in the cache and update its record with this event
    let eEv = e as PointEvent;

    for (let i = 0; i < touchedPoints.length; i++) {
      let touP = touchedPoints[i] as PointEvent;
      if (
        touP.pointerId == eEv.pointerId &&
        Math.abs(eEv.clientX - touP.clientX) > 50
      ) {
        eEv.move = true;
        touchedPoints[i] = e;
        break;
      }
    }

    //if one active touch
    if (touchedPoints.length < 2) {
      /* Left & Right Move */
      let xPos = eEv.clientX;
      let moveValue = Math.round(xPos - conXstart);

      !imgBackPosition
        ? (this.style.backgroundPositionX = moveValue + "px")
        : (this.style.backgroundPositionX = imgBackPosition + moveValue + "px");
    } else if (touchedPoints.length == 2) {
      //if two active touches
      let oneTouchMove = checkВrightness(e); //check brightness status (one touch move & one stay)

      if (oneTouchMove === true && !checkZoom) {
        /* Rotate */
        touchAngle = Math.round(
          Math.atan2(eEv.clientX - imgCenterX, -(eEv.clientY - imgCenterY)) *
            (180 / Math.PI)
        );

        if (touchAngle > 0) {
          this.style.filter = "brightness(" + touchAngle + "%)";
          camBright.textContent = "Яркость: " + touchAngle + "%";
        }
      } else {
        /* Zoom */
        checkZoom = true;
        let firP = touchedPoints[0] as PointEvent;
        let secP = touchedPoints[1] as PointEvent;
        // Calculate the distance between the two pointers
        let curDiff = Math.abs(firP.clientX - secP.clientX);

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

  //rotate if one touch move & one stay
  function checkВrightness(e: object) {
    let status = false;
    touchedPoints.forEach(function(point) {
      //if current touch move & second touch not move
      let pPoint = point as PointEvent;
      let eEv = e as PointEvent;
      if (pPoint.pointerId != eEv.pointerId && pPoint.move == false)
        status = true;
    });

    return status;
  }

  //detete touch on up
  function stopController(e: object): void {
    checkZoom = false;
    for (let i = 0; i < touchedPoints.length; i++) {
      let eEv = e as PointEvent;
      let touP = touchedPoints[i] as PointEvent;
      if (touP.pointerId == eEv.pointerId) {
        touchedPoints.splice(i, 1);
        break;
      }
    }
  }
}

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

    let i;

    if (window.PointerEvent) {
      cam.addEventListener("pointerdown", startController, false);
      cam.addEventListener("pointermove", moveController, false);
      cam.addEventListener("pointerup", stopController, false);
    }

    function startController(e) {
      /* Get Position Info */
      conXstart = e.clientX;
      imgBackPosition = parseInt(this.style.backgroundPositionX);

      touchedPoints.push({
        pointerId: e.pointerId,
        x: e.clientX,
        y: e.clientY,
        move: false,
        sideX: false,
        sideY: false
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
      //debug
      let p = cam.querySelector(".event-cam-debug");

      if (touchedPoints.length < 2) {
        //if one active touch

        /* Left & Right Move */
        let xPos = e.clientX;
        let moveValue = parseInt(xPos - conXstart);

        !imgBackPosition
          ? (this.style.backgroundPositionX = moveValue + "px")
          : (this.style.backgroundPositionX =
              imgBackPosition + moveValue + "px");
      } else if (touchedPoints.length == 2) {
        //if two active touches

        let oneTouchMove = checkRotatePoints(e); //check rotate status (one touch move & one stay)

        //p.textContent = touchedPoints.length + " " + oneTouchMove;

        if (oneTouchMove === true) {
          /* Rotate */
          touchAngle = parseInt(
            Math.atan2(e.clientX - imgCenterX, -(e.clientY - imgCenterY)) *
              (180 / Math.PI)
          );

          this.style.transform = "rotate(" + touchAngle + "deg)";
        } else {
          /* Zoom */
          //определяю направление тача(рост и уменьшение осей)
          getPointMoveSige(e);

          let checkedZoom = checkZoom(e);

          p.textContent =
            oneTouchMove +
            " x = " +
            touchedPoints[0].sideX +
            " y= " +
            touchedPoints[0].sideY +
            " zoom = " +
            checkedZoom;

          checkedZoom ? i++ : i--;

          this.style.transform = "scale(" + (1 + i) + ")";
          //вызываю функцию проверки массива, будет отпределять зум картинки
          //two touches move
        }
      } else {
        touchedPoints = [];
      }
    }

    function stopController(e) {
      touchedPoints = [];
    }

    //проверка на то что если только один палец из двух двигается то вращаем
    function checkRotatePoints(e) {
      let status = false;
      touchedPoints.forEach(function(point) {
        if (point.pointerId == e.pointerId) {
          //if current point move
          point.move = true;
        } else {
          //если не двигается второй
          if (point.move == false) status = true;
        }
      });

      return status;
    }

    //определяю направление тача(рост и уменьшение осей) & записываю данные
    function getPointMoveSige(e) {
      touchedPoints.forEach(function(point) {
        if (point.pointerId == e.pointerId) {
          //если рост по оси
          point.x < e.clientX ? (point.sideX = true) : (point.sideX = false);
          point.y < e.clientY ? (point.sideY = true) : (point.sideY = false);
        }
      });
    }

    //проверка на зум(отдаление и приближение координат touch)
    function checkZoom(e) {
      let zoom;
      if (
        (touchedPoints[0].sideX == true && touchedPoints[1].sideX == false) ||
        (touchedPoints[0].sideY == true && touchedPoints[1].sideY == false)
      )
        zoom = true;
      else zoom = false;
      return zoom;
    }
  }
};

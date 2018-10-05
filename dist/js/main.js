/* Event handling "click" on the button ".header-mobile-btn": animate button & show/hide mobile menu */

const menu = document.querySelector(".header__menu");
const menuBtn = document.querySelector(".header-mobile-btn");
const menuBtnLine = document.querySelectorAll(".header-mobile-btn__line");

/* Set Initial State Of Menu */
var showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menu.classList.add("header__menu_show");
    menuBtn.classList.add("header-mobile-btn_close");
    menuBtnLine.forEach(item =>
      item.classList.add("header-mobile-btn__line_close")
    );

    /* Set Menu State */
    showMenu = true;
  } else {
    menu.classList.remove("header__menu_show");
    menuBtn.classList.remove("header-mobile-btn_close");
    menuBtnLine.forEach(item =>
      item.classList.remove("header-mobile-btn__line_close")
    );

    /* Set Menu State */
    showMenu = false;
  }
}

function templateEngine(jsonData) {
  let request = new XMLHttpRequest();
  request.open("GET", jsonData, true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      let data = JSON.parse(request.responseText);
      let events = data.events;

      events.forEach(function(el) {
        /* Get Data */
        let type = el.type,
          title = el.title,
          source = el.source,
          time = el.time,
          description = el.description,
          icon = el.icon,
          size = el.size,
          data = el.data;

        /* Template */
        let content = document.querySelector("template").content,
          block = content.querySelector("#event"),
          blockIcon = content.querySelector(".event__icon"),
          blockTitle = content.querySelector(".event__title"),
          blockSource = content.querySelector(".event__source"),
          blockTime = content.querySelector(".event__time"),
          blockDesc = content.querySelector(".event__desc"),
          blockClose = content.querySelector(".event__close"),
          blockImage = content.querySelector(".event__image"),
          blockTemp = content.querySelector(".event__temperature"),
          blockHumi = content.querySelector(".event__humidity"),
          blockClimate = content.querySelector(".event-climate"),
          blockMusic = content.querySelector(".event-music"),
          blockMusImg = content.querySelector(".event-music__image"),
          blockMusName = content.querySelector(".event-music__name"),
          blockMusTime = content.querySelector(".event-music__time"),
          blockMusVolume = content.querySelector(
            ".event-music-controlls__volume-value"
          ),
          blockButt = content.querySelector(".event-buttons"),
          blockButtAct = content.querySelector(".event-buttons__button_active"),
          blockButtIna = content.querySelector(
            ".event-buttons__button_inactive"
          ),
          blockCam = content.querySelector(".event-cam__image"),
          blockInfo = content.querySelector(".event-info");

        /* Custom Data */
        //hide blocks
        blockImage.classList.add("event__image_hide");
        blockClimate.classList.add("event-climate_hide");
        blockMusic.classList.add("event-music_hide");
        blockButt.classList.add("event-buttons_hide");
        blockCam.classList.add("event-cam__image_hide");

        if (data) {
          let dType = data.type,
            dTemp = data.temperature,
            dHumi = data.humidity,
            dAlbum = data.albumcover,
            dArtist = data.artist,
            dTrack = data.track,
            dVolume = data.volume,
            dButton = data.buttons,
            dImage = data.image;

          /* Temporary Solution */
          //Image
          if (dType == "graph") {
            blockImage.setAttribute("src", "img/graph.png");
            blockImage.setAttribute("alt", "graph");
            blockImage.classList.remove("event__image_hide");
          } else if (dImage == "get_it_from_mocks_:3.jpg") {
            blockCam.id = "cam"; //add cam
            blockCam.style.backgroundImage = "url(img/image.jpg)";
            blockCam.classList.remove("event-cam__image_hide");
          }

          //Climate
          if (dTemp)
            blockTemp.innerHTML = "Температура: <b>" + dTemp + " C</b>";
          if (dHumi) blockHumi.innerHTML = "Влажность: <b>" + dHumi + "%</b>";
          if (dTemp || dHumi)
            blockClimate.classList.remove("event-climate_hide"); //show event climate block

          //Music
          if (dTrack) {
            let dLength = data.track.length,
              dName = data.track.name;

            if (dAlbum)
              blockMusImg.style.backgroundImage = "url(" + dAlbum + ")";
            if (dName) blockMusName.textContent = dArtist + " - " + dName;
            if (dLength) blockMusTime.textContent = dLength;
            if (dVolume) blockMusVolume.textContent = dVolume + "%";

            blockMusic.classList.remove("event-music_hide"); //show event music block
          }

          //Buttons
          if (dButton) {
            if (dButton[0]) blockButtAct.textContent = dButton[0];
            if (dButton[1]) blockButtIna.textContent = dButton[1];

            blockButt.classList.remove("event-buttons_hide"); //show event buttons block
          }
        }

        /* Fill Template */
        block.className = "event event_size-" + size + " event_type-" + type;
        blockIcon.setAttribute("src", "img/" + icon + ".svg");
        blockIcon.setAttribute("alt", icon);
        blockClose.className = "event__close event__close_type-" + type;
        blockTitle.textContent = title;
        blockSource.textContent = source;
        blockTime.textContent = time;
        blockDesc.textContent = description;

        //hide event info block if empry data
        !description
          ? blockInfo.classList.add("event-info_hide")
          : blockInfo.classList.remove("event-info_hide");

        document
          .querySelector(".container")
          .appendChild(content.cloneNode(true));
      });
    } else {
      throw "Error: data not received";
    }
  };

  request.send();
}

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

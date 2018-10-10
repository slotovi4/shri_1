function canvasVideo(videoId) {
  createCanvasVideoBlock(videoId);

  let video = document.querySelector("#" + videoId); //video
  let block = document.querySelector("#" + videoId + "-block"); //video block
  let videoInfo = block.querySelector(".canv-video-block__info"); //video info
  let canvas = block.querySelector(".canv-video-block__video"); //canvas video result
  let lumRange = block.querySelector(".canv-video-block__luminance"); //luminance range
  let contrRange = block.querySelector(".canv-video-block__contrast"); //contrast range

  let ctx = canvas.getContext("2d", { alpha: false });
  let fps = 30; //lock video fps

  /* Get Video Size*/
  let videoWidth = video.offsetWidth;
  let videoHeight = video.offsetHeight;

  video.style.display = "none";

  /* Change Range Luminance */
  let changeLum = lumRange.value;
  lumRange.addEventListener(
    "input",
    function() {
      changeLum = lumRange.value;
      //canvas.style.filter = "brightness(" + changeLum * 20 + "%)";
    },
    false
  );

  /* Change Range Contrast */
  let changeContr = contrRange.value;
  contrRange.addEventListener(
    "input",
    function() {
      changeContr = contrRange.value;
      //canvas.style.filter = "contrast(" + changeContr + ")";
    },
    false
  );

  /* Drawing */
  function loop(video, canvas, ctx) {
    let luminanceBlack = 0,
      luminanceWhite = 0;

    /* Set Canvas Size*/
    canvas.width = videoWidth;
    canvas.height = videoHeight;

    /* Set Canvas Styles */
    if (!video.paused && !video.ended) {
      ctx.drawImage(video, 0, 0, videoWidth, videoHeight);

      /* Get RGB */
      let videoData = ctx.getImageData(0, 0, videoWidth, videoHeight);
      let data = videoData.data;

      /* Get Contrast */
      let contrast = changeContr / 5 + 1; // [0..2]
      let intercept = 128 * (1 - contrast);

      /* Set RGB Style */
      for (let i = 0; i < data.length; i += 4) {
        let r = data[i];
        let g = data[i + 1];
        let b = data[i + 2];

        /* Change Luminance */
        if (changeLum) {
          data[i] = (changeLum / 5) * r;
          data[i + 1] = (changeLum / 5) * g;
          data[i + 2] = (changeLum / 5) * b;
          r = data[i];
          g = data[i + 1];
          b = data[i + 2];
        }

        /* Change Contrast */
        if (changeContr) {
          data[i] = data[i] * contrast + intercept;
          data[i + 1] = data[i + 1] * contrast + intercept;
          data[i + 2] = data[i + 2] * contrast + intercept;
          r = data[i];
          g = data[i + 1];
          b = data[i + 2];
        }

        /* Check RGB Values */
        if (r > 255) data[i] = 255;
        if (g > 255) data[i + 1] = 255;
        if (b > 255) data[i + 2] = 255;
        if (r < 0) data[i] = 0;
        if (g < 0) data[i + 1] = 0;
        if (b < 0) data[i + 2] = 0;

        /* Get Luminance Info */
        let luminance = 0.299 * r + 0.587 * g + 0.114 * b;
        luminance < 50 ? luminanceBlack++ : luminanceWhite++;

        /* Change Info Text Color 50x50px */
        if (i == 200) {
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
    setTimeout(function() {
      requestAnimationFrame(function() {
        loop(video, canvas, ctx);
      });
    }, 1000 / fps);
  }

  loop(video, canvas, ctx);
}

/* Create Canvas Video Block, Canvas, Info, Luminance */
function createCanvasVideoBlock(videoId) {
  let block = document.createElement("div");
  let canvas = document.createElement("canvas");
  let info = document.createElement("span");
  let luminance = document.createElement("input");
  let contrast = document.createElement("input");

  /* Set Values */
  block.classList.add("canv-video-block");
  block.id = videoId + "-block";
  canvas.classList.add("canv-video-block__video");
  info.classList.add("canv-video-block__info");
  luminance.classList.add("canv-video-block__luminance");
  luminance.setAttribute("type", "range");
  luminance.setAttribute("value", "5");
  luminance.setAttribute("min", "0");
  luminance.setAttribute("max", "10");
  contrast.classList.add("canv-video-block__contrast");
  contrast.setAttribute("type", "range");
  contrast.setAttribute("value", "0");
  contrast.setAttribute("min", "-5");
  contrast.setAttribute("max", "5");

  /* Add Elements To Block */
  block.appendChild(canvas);
  block.appendChild(info);
  block.appendChild(luminance);
  block.appendChild(contrast);

  document.querySelector(".container").appendChild(block);
}

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

function templateEngine(jsonData) {
  let request = new XMLHttpRequest();
  request.open("GET", jsonData, false);

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
          blockCamInfo = content.querySelector(".event-cam-info"),
          blockCamImage = content.querySelector(".event-cam__image"),
          blockInfo = content.querySelector(".event-info");

        /* Custom Data */
        //hide blocks
        blockImage.classList.add("event__image_hide");
        blockClimate.classList.add("event-climate_hide");
        blockMusic.classList.add("event-music_hide");
        blockButt.classList.add("event-buttons_hide");
        blockCamImage.classList.add("event-cam__image_hide");
        blockCamImage.removeAttribute("id");
        blockCamInfo.classList.add("event-cam-info_hide");

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
            blockCamImage.id = "cam"; //add cam
            blockCamImage.style.backgroundImage = "url(img/image.jpg)";
            blockCamImage.classList.remove("event-cam__image_hide");
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

  if (request.status != 200) {
    alert(request.status + ": " + request.statusText);
  } else {
    touchEvets();
  }
}

/* Event Handling: Drag & Pinch & Rotate In #cam Image */
function touchEvets() {
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
}

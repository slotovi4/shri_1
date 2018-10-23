/* Event handling "click" on the button ".header-mobile-btn": animate button & show/hide mobile menu */
const menu = document.querySelector(".header__menu");
const menuBtn = document.querySelector(".header-mobile-btn");
const menuBtnLine = document.querySelectorAll(".header-mobile-btn__line");
/* Set Initial State Of Menu */
let showMenu = false;
menuBtn && menuBtn.addEventListener("click", toggleMenu);
function toggleMenu() {
    if (!showMenu) {
        menu && menu.classList.add("header__menu_show");
        menuBtn && menuBtn.classList.add("header-mobile-btn_close");
        menuBtnLine.forEach(item => item.classList.add("header-mobile-btn__line_close"));
        /* Set Menu State */
        showMenu = true;
    }
    else {
        menu && menu.classList.remove("header__menu_show");
        menuBtn && menuBtn.classList.remove("header-mobile-btn_close");
        menuBtnLine.forEach(item => item.classList.remove("header-mobile-btn__line_close"));
        /* Set Menu State */
        showMenu = false;
    }
}
function templateEngine(jsonData) {
    let request = new XMLHttpRequest();
    request.open("GET", jsonData, false);
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            let data = JSON.parse(request.responseText);
            let ev = data;
            let events = ev.events;
            events.forEach(function (el) {
                let elts = el;
                /* Get Data */
                let type = elts.type, title = elts.title, source = elts.source, time = elts.time, description = elts.description, icon = elts.icon, size = elts.size, data = elts.data;
                /* Template */
                let template = document.querySelector("template");
                let content = template.content, block = content.querySelector("#event"), blockIcon = content.querySelector(".event__icon"), blockTitle = content.querySelector(".event__title"), blockSource = content.querySelector(".event__source"), blockTime = content.querySelector(".event__time"), blockDesc = content.querySelector(".event__desc"), blockClose = content.querySelector(".event__close"), blockImage = content.querySelector(".event__image"), blockTemp = content.querySelector(".event__temperature"), blockHumi = content.querySelector(".event__humidity"), blockClimate = content.querySelector(".event-climate"), blockMusic = content.querySelector(".event-music"), blockMusImg = (content.querySelector(".event-music__image")), blockMusName = (content.querySelector(".event-music__name")), blockMusTime = (content.querySelector(".event-music__time")), blockMusVolume = (content.querySelector(".event-music-controlls__volume-value")), blockButt = content.querySelector(".event-buttons"), blockButtAct = (content.querySelector(".event-buttons__button_active")), blockButtIna = (content.querySelector(".event-buttons__button_inactive")), blockCamInfo = content.querySelector(".event-cam-info"), blockCamImage = (content.querySelector(".event-cam__image")), blockInfo = content.querySelector(".event-info");
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
                    let evDate = data;
                    let dType = evDate.type, dTemp = evDate.temperature, dHumi = evDate.humidity, dAlbum = evDate.albumcover, dArtist = evDate.artist, dTrack = evDate.track, dVolume = evDate.volume, dButton = evDate.buttons, dImage = evDate.image;
                    /* Temporary Solution */
                    //Image
                    if (dType == "graph") {
                        blockImage.setAttribute("src", "img/graph.png");
                        blockImage.setAttribute("alt", "graph");
                        blockImage.classList.remove("event__image_hide");
                    }
                    else if (dImage == "get_it_from_mocks_:3.jpg") {
                        blockCamImage.id = "cam"; //add cam
                        blockCamImage.style.backgroundImage = "url(img/image.jpg)";
                        blockCamImage.classList.remove("event-cam__image_hide");
                    }
                    //Climate
                    if (dTemp)
                        blockTemp.innerHTML = "Температура: <b>" + dTemp + " C</b>";
                    if (dHumi)
                        blockHumi.innerHTML = "Влажность: <b>" + dHumi + "%</b>";
                    if (dTemp || dHumi)
                        blockClimate.classList.remove("event-climate_hide"); //show event climate block
                    //Music
                    if (dTrack) {
                        let trackDate = dTrack;
                        let dLength = trackDate.length, dName = trackDate.name;
                        if (dAlbum)
                            blockMusImg.style.backgroundImage = "url(" + dAlbum + ")";
                        if (dName)
                            blockMusName.textContent = dArtist + " - " + dName;
                        if (dLength)
                            blockMusTime.textContent = dLength;
                        if (dVolume)
                            blockMusVolume.textContent = dVolume + "%";
                        blockMusic.classList.remove("event-music_hide"); //show event music block
                    }
                    //Buttons
                    if (dButton) {
                        if (dButton[0])
                            blockButtAct.textContent = dButton[0];
                        if (dButton[1])
                            blockButtIna.textContent = dButton[1];
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
                let container = document.querySelector(".container");
                container.appendChild(content.cloneNode(true));
            });
        }
        else {
            throw "Error: data not received";
        }
    };
    request.send();
    if (request.status != 200) {
        alert(request.status + ": " + request.statusText);
    }
    else {
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
            imgCenterX = Math.round((imgLeft + imgRight) / 2);
            imgCenterY = Math.round((imgTop + imgBot) / 2);
        }
        function moveController(e) {
            // Find this event in the cache and update its record with this event
            for (let i = 0; i < touchedPoints.length; i++) {
                if (touchedPoints[i].pointerId == e.pointerId &&
                    Math.abs(e.clientX - touchedPoints[i].clientX) > 50) {
                    e.move = true;
                    touchedPoints[i] = e;
                    break;
                }
            }
            //if one active touch
            if (touchedPoints.length < 2) {
                /* Left & Right Move */
                let xPos = e.clientX;
                let moveValue = Math.round(xPos - conXstart);
                !imgBackPosition
                    ? (this.style.backgroundPositionX = moveValue + "px")
                    : (this.style.backgroundPositionX =
                        imgBackPosition + moveValue + "px");
            }
            else if (touchedPoints.length == 2) {
                //if two active touches
                let oneTouchMove = checkВrightness(e); //check brightness status (one touch move & one stay)
                if (oneTouchMove === true && !checkZoom) {
                    /* Rotate */
                    touchAngle = Math.round(Math.atan2(e.clientX - imgCenterX, -(e.clientY - imgCenterY)) *
                        (180 / Math.PI));
                    if (touchAngle > 0) {
                        this.style.filter = "brightness(" + touchAngle + "%)";
                        camBright.textContent = "Яркость: " + touchAngle + "%";
                    }
                }
                else {
                    /* Zoom */
                    checkZoom = true;
                    // Calculate the distance between the two pointers
                    let curDiff = Math.abs(touchedPoints[0].clientX - touchedPoints[1].clientX);
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
            touchedPoints.forEach(function (point) {
                //if current touch move & second touch not move
                if (point.pointerId != e.pointerId && point.move == false)
                    status = true;
            });
            return status;
        }
    }
}

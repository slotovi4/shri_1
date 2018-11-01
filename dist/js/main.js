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
                blockInfo.removeAttribute("id");
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
                        blockInfo.id = "camParent";
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
    let cam = document.querySelector("#cam");
    let camParent = document.querySelector("#camParent");
    let camInfo = camParent.querySelector(".event-cam-info");
    let camZoom = camInfo.querySelector(".event-cam-info__zoom");
    let camBright = (camInfo.querySelector(".event-cam-info__bright"));
    let conXstart; //start X touch position
    let imgBackPosition; //img background X position
    let imgLeft, imgRight, imgTop, imgBot; //img L/R/T/B position
    let imgCenterX, imgCenterY; //img X&Y center position
    let touchAngle; //touch rotate angle
    let touchedPoints = []; //active touches
    let prevDiff = -1;
    let checkZoom = false;
    let checkScale = 0;
    if ("ontouchstart" in document.documentElement) {
        camInfo.classList.remove("event-cam-info_hide"); //if touch device show cam info block
        camZoom.textContent = "Приближение: 0%";
        camBright.textContent = "Яркость: 0%";
        /* Check Pointer Support */
        if (window.PointerEvent) {
            cam.addEventListener("pointerdown", startController, false);
            cam.addEventListener("pointermove", moveController, false);
            cam.addEventListener("pointerup", stopController, false);
        }
    }
    function startController(e) {
        /* Get Position Info */
        let eEv = e;
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
    function moveController(e) {
        // Find this event in the cache and update its record with this event
        let eEv = e;
        for (let i = 0; i < touchedPoints.length; i++) {
            let touP = touchedPoints[i];
            if (touP.pointerId == eEv.pointerId &&
                Math.abs(eEv.clientX - touP.clientX) > 50) {
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
        }
        else if (touchedPoints.length == 2) {
            //if two active touches
            let oneTouchMove = checkВrightness(e); //check brightness status (one touch move & one stay)
            if (oneTouchMove === true && !checkZoom) {
                /* Rotate */
                touchAngle = Math.round(Math.atan2(eEv.clientX - imgCenterX, -(eEv.clientY - imgCenterY)) *
                    (180 / Math.PI));
                if (touchAngle > 0) {
                    this.style.filter = "brightness(" + touchAngle + "%)";
                    camBright.textContent = "Яркость: " + touchAngle + "%";
                }
            }
            else {
                /* Zoom */
                checkZoom = true;
                let firP = touchedPoints[0];
                let secP = touchedPoints[1];
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
    function checkВrightness(e) {
        let status = false;
        touchedPoints.forEach(function (point) {
            //if current touch move & second touch not move
            let pPoint = point;
            let eEv = e;
            if (pPoint.pointerId != eEv.pointerId && pPoint.move == false)
                status = true;
        });
        return status;
    }
    //detete touch on up
    function stopController(e) {
        checkZoom = false;
        for (let i = 0; i < touchedPoints.length; i++) {
            let eEv = e;
            let touP = touchedPoints[i];
            if (touP.pointerId == eEv.pointerId) {
                touchedPoints.splice(i, 1);
                break;
            }
        }
    }
}
/* Draw Canvas Video & Video Effects */
function canvasVideo(videoId) {
    let video = document.querySelector("#" + videoId); //video
    let block = document.querySelector("#" + videoId + "-block"); //video block
    let videoInfo = (block.querySelector(".canv-video-block__info")); //video info
    let canvas = (block.querySelector(".canv-video-block__video")); //canvas video result
    let lumRange = (block.querySelector(".canv-video-block__luminance")); //luminance range
    let contrRange = (block.querySelector(".canv-video-block__contrast")); //contrast range
    let canvasMove = (block.querySelector(".canv-video-block__canvas-move")); //move info canvas
    let ctx = canvas.getContext("2d", { alpha: false });
    let custCtx = canvasMove.getContext("2d", { alpha: false });
    let oldRGB; //old rgb video data
    /* Get Video Size*/
    let videoWidth = video.offsetWidth;
    let videoHeight = video.offsetHeight;
    video.style.display = "none"; //hide video
    /* Change Range Luminance */
    let changeLum = lumRange.value;
    lumRange.addEventListener("input", function () {
        changeLum = lumRange.value;
        canvas.style.filter =
            "brightness(" +
                parseInt(changeLum) * 20 +
                "%) contrast(" +
                changeContr +
                ")";
    }, false);
    /* Change Range Contrast */
    let changeContr = contrRange.value;
    contrRange.addEventListener("input", function () {
        changeContr = contrRange.value;
        canvas.style.filter =
            "brightness(" +
                parseInt(changeLum) * 20 +
                "%) contrast(" +
                changeContr +
                ")";
    }, false);
    /* Drawing */
    function loop(video, canvas, canvasMove, ctx, custCtx) {
        let luminanceBlack = 0, luminanceWhite = 0;
        /* Set Canvas Size*/
        canvas.width = videoWidth;
        canvas.height = videoHeight;
        canvasMove.width = videoWidth;
        canvasMove.height = videoHeight;
        /* Set Canvas Styles */
        if (!video.paused && !video.ended) {
            ctx.drawImage(video, 0, 0, videoWidth, videoHeight);
            /* Get RGB */
            let videoData = ctx.getImageData(0, 0, videoWidth, videoHeight); //video canvas
            let data = videoData.data;
            let moveI = custCtx.getImageData(0, 0, videoWidth, videoHeight); //move canvas
            let moveData = moveI.data;
            /* Get Contrast */
            let contrast = parseInt(changeContr) / 5 + 1; // [0..2]
            let intercept = 128 * (1 - contrast);
            /* Set RGB Style */
            for (let i = 0; i < data.length; i += 4) {
                let r = data[i];
                let g = data[i + 1];
                let b = data[i + 2];
                /* Change Luminance */
                /* if (changeLum) {
                  data[i] = (parseInt(changeLum) / 5) * r;
                  data[i + 1] = (parseInt(changeLum) / 5) * g;
                  data[i + 2] = (parseInt(changeLum) / 5) * b;
        
                  r = data[i];
                  g = data[i + 1];
                  b = data[i + 2];
                } */
                /* Change Contrast */
                /* if (changeContr) {
                  data[i] = data[i] * contrast + intercept;
                  data[i + 1] = data[i + 1] * contrast + intercept;
                  data[i + 2] = data[i + 2] * contrast + intercept;
        
                  r = data[i];
                  g = data[i + 1];
                  b = data[i + 2];
                } */
                /* Check RGB Values */
                if (r > 255)
                    data[i] = 255;
                if (g > 255)
                    data[i + 1] = 255;
                if (b > 255)
                    data[i + 2] = 255;
                if (r < 0)
                    data[i] = 0;
                if (g < 0)
                    data[i + 1] = 0;
                if (b < 0)
                    data[i + 2] = 0;
                /* Get Luminance Info */
                let luminance = 0.299 * r + 0.587 * g + 0.114 * b;
                luminance < 50 ? luminanceBlack++ : luminanceWhite++;
                /* Change Info Text Color 25x25px */
                if (i == 100) {
                    luminanceBlack > luminanceWhite
                        ? (videoInfo.style.color = "white")
                        : (videoInfo.style.color = "black");
                }
                /* Move Detection */
                if (oldRGB) {
                    let rgbSumm = data[i] + data[i + 1] + data[i + 2];
                    let rgboldSumm = oldRGB[i] + oldRGB[i + 1] + oldRGB[i + 2];
                    if (rgbSumm - 100 > rgboldSumm || rgbSumm + 100 < rgboldSumm) {
                        moveData[i] = 255;
                        moveData[i + 1] = 0;
                        moveData[i + 2] = 0;
                    }
                }
            }
            /* Check Luminance */
            luminanceBlack > luminanceWhite
                ? (videoInfo.textContent = "dark")
                : (videoInfo.textContent = "light");
            /* Apply Style */
            oldRGB = data;
            videoData.data.set(data);
            moveI.data.set(moveData);
            ctx.putImageData(videoData, 0, 0);
            custCtx.putImageData(moveI, 0, 0);
        }
        /* Redrawing */
        setTimeout(function () {
            requestAnimationFrame(function () {
                loop(video, canvas, canvasMove, ctx, custCtx);
            });
        }, 100);
    }
    if (ctx && custCtx)
        loop(video, canvas, canvasMove, ctx, custCtx);
}
/* Get Video Sound */
function canvasVideoSound(videoId) {
    let AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
        let video = document.querySelector("#" + videoId), //video
        block = document.querySelector("#" + videoId + "-block"), //video block
        muteButton = (block.querySelector(".canv-video-block__sound-mute")), canvas = (block.querySelector(".canv-video-block__video")), //canvas
        soundIndicator = (block.querySelector(".canv-video-block__sound-volume")), //sound indicator
        ctx = new AudioContext(), //audio
        source = ctx.createMediaElementSource(video), //get video element
        analyser = ctx.createAnalyser(), //analys sound
        processor = ctx.createScriptProcessor(2048, 1, 1); //check sound changes
        let soundVolume; //current sound value
        let maxSoundVolume = 0; //max sound value
        /* Set Mute Event */
        soundMuteButton(muteButton, video);
        /* Connect Elements */
        source.connect(analyser);
        source.connect(processor);
        analyser.connect(ctx.destination);
        processor.connect(ctx.destination);
        /* Check Sound Volume(Frequency) */
        let data = new Uint8Array(analyser.frequencyBinCount);
        processor.onaudioprocess = function () {
            analyser.getByteFrequencyData(data);
            soundVolume = getSoundVolumeValue(data);
            if (maxSoundVolume < soundVolume)
                maxSoundVolume = soundVolume;
            drawSoundVolume(soundVolume, maxSoundVolume, canvas, soundIndicator);
        };
    }
    else {
        alert("Ваш браузер не поддерживает Web Audio API");
    }
}
/* Get Sound Value(Frequency) */
function getSoundVolumeValue(data) {
    let result = 0;
    data.forEach(val => {
        result += val;
    });
    return result;
}
/* Draw Volume */
function drawSoundVolume(volume, maxVolume, canvas, soundIndicator) {
    let canvasHeight = canvas.offsetHeight; //canvas height
    let oneHeightVal = canvasHeight / maxVolume;
    let volumeValue = volume * oneHeightVal;
    soundIndicator.style.height = volumeValue + "px";
}
/* Create Canvas Video Block, Canvas, Info, Luminance */
function createCanvasVideoBlock(videoId) {
    /* Create Video Elements */
    let block = document.createElement("div"), canvasBlock = document.createElement("div"), controllsBlock = document.createElement("div"), soundVolume = document.createElement("div"), soundMute = document.createElement("div"), prevButton = document.createElement("span"), canvas = document.createElement("canvas"), info = document.createElement("span"), luminance = document.createElement("input"), luminanceText = document.createElement("span"), contrast = document.createElement("input"), canvMove = document.createElement("canvas"), contrastText = document.createElement("span");
    /* Set Values */
    canvMove.classList.add("canv-video-block__canvas-move");
    block.classList.add("canv-video-block");
    block.id = videoId + "-block";
    canvasBlock.classList.add("canv-video-block__canvas-block");
    controllsBlock.classList.add("canv-video-block__controll-block");
    prevButton.classList.add("canv-video-block__button");
    prevButton.textContent = "Все камеры";
    canvas.classList.add("canv-video-block__video");
    soundVolume.classList.add("canv-video-block__sound-volume");
    soundMute.classList.add("canv-video-block__sound-mute");
    soundMute.textContent = "♪";
    info.classList.add("canv-video-block__info");
    luminance.classList.add("canv-video-block__luminance");
    luminance.setAttribute("type", "range");
    luminance.setAttribute("value", "5");
    luminance.setAttribute("min", "0");
    luminance.setAttribute("max", "10");
    luminanceText.classList.add("canv-video-block__text");
    luminanceText.textContent = "Яркость";
    contrast.classList.add("canv-video-block__contrast");
    contrast.setAttribute("type", "range");
    contrast.setAttribute("value", "1");
    contrast.setAttribute("min", "1");
    contrast.setAttribute("max", "5");
    contrastText.classList.add("canv-video-block__text");
    contrastText.textContent = "Контраст";
    /* Add Elements To Block */
    controllsBlock.appendChild(luminanceText);
    controllsBlock.appendChild(luminance);
    controllsBlock.appendChild(contrastText);
    controllsBlock.appendChild(contrast);
    controllsBlock.appendChild(prevButton);
    controllsBlock.appendChild(soundMute);
    canvasBlock.appendChild(info);
    canvasBlock.appendChild(soundVolume);
    canvasBlock.appendChild(canvas);
    canvasBlock.appendChild(canvMove);
    canvasBlock.appendChild(controllsBlock);
    block.appendChild(canvasBlock);
    let container = document.querySelector(".container");
    container.appendChild(block);
}
/* HLS */
function initVideo(video, url) {
    if (Hls.isSupported()) {
        let hls = new Hls();
        hls.loadSource(url);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function () {
            video.play();
        });
    }
}
/* Zoom(Click) Event To Video */
function openVideo() {
    let canvasVid = document.querySelectorAll(".canv-video-block__video");
    canvasVid.forEach(function (canvas) {
        canvas.addEventListener("click", function () {
            let parentBlock = this.parentNode;
            let controllBlock = parentBlock.querySelector(".canv-video-block__controll-block");
            let button = parentBlock.querySelector(".canv-video-block__button");
            let soundIndicator = parentBlock.querySelector(".canv-video-block__sound-volume");
            /* Close Button */
            button.addEventListener("click", function () {
                parentBlock.classList.remove("canv-video-block__canvas-block_open");
                button.classList.remove("canv-video-block__button_open");
                button.classList.remove("canv-video-block__button_open");
                controllBlock.classList.remove("canv-video-block__controll-block_open");
                soundIndicator.classList.remove("canv-video-block__sound-volume_active");
            });
            /* Open Video */
            if (!parentBlock.classList.contains("canv-video-block__canvas-block_open")) {
                parentBlock.classList.add("canv-video-block__canvas-block_open");
                button.classList.add("canv-video-block__button_open");
                controllBlock.classList.add("canv-video-block__controll-block_open");
                soundIndicator.classList.add("canv-video-block__sound-volume_active");
            }
        });
    });
}
/* Click Event To Mute Button */
function soundMuteButton(button, video) {
    button.addEventListener("click", function () {
        /* If Sound Muted */
        if (!button.classList.contains("canv-video-block__sound-mute_active")) {
            video.muted = false;
            button.classList.add("canv-video-block__sound-mute_active");
        }
        else {
            video.muted = true;
            button.classList.remove("canv-video-block__sound-mute_active");
        }
    });
}
/* Event handling "click" on the button ".header-mobile-btn": animate button & show/hide mobile menu */
const menu = document.querySelector(".header__menu");
const menuBtn = document.querySelector(".header-mobile-btn");
const menuBtnLine = document.querySelectorAll(".header-mobile-btn__line");
/* Set Initial State Of Menu */
let showMenu = false;
menuBtn.addEventListener("click", toggleMenu);
function toggleMenu() {
    if (!showMenu) {
        menu.classList.add("header__menu_show");
        menuBtn.classList.add("header-mobile-btn_close");
        menuBtnLine.forEach(item => item.classList.add("header-mobile-btn__line_close"));
        /* Set Menu State */
        showMenu = true;
    }
    else {
        menu.classList.remove("header__menu_show");
        menuBtn.classList.remove("header-mobile-btn_close");
        menuBtnLine.forEach(item => item.classList.remove("header-mobile-btn__line_close"));
        /* Set Menu State */
        showMenu = false;
    }
}

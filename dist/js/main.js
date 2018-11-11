function templateEngine(jsonData) {
    let data = jsonData;
    let ev = data;
    let page = ev.page;
    const container = document.querySelector(".Container");
    let sections = container.querySelectorAll("section");
    sections.forEach(item => {
        container.removeChild(item);
    });
    if (page == "events") {
        let events = ev.events;
        events.forEach(function (el) {
            let elts = el;
            /* Get Data */
            let type = elts.type, title = elts.title, source = elts.source, time = elts.time, description = elts.description, icon = elts.icon, size = elts.size, data = elts.data;
            /* Template */
            let template = (document.querySelector(".EventTemplate"));
            let content = template.content, block = content.querySelector(".Event"), blockIcon = content.querySelector(".Event-Icon"), blockTitle = content.querySelector(".Event-Title"), blockSource = content.querySelector(".Event-Source"), blockTime = content.querySelector(".Event-Time"), blockDesc = content.querySelector(".Event-Desc"), blockClose = content.querySelector(".Event-Close"), blockImage = content.querySelector(".Event-Image"), blockTemp = content.querySelector(".Event-Temperature"), blockHumi = content.querySelector(".Event-Humidity"), blockClimate = content.querySelector(".EventClimate"), blockMusic = content.querySelector(".EventMusic"), blockMusImg = content.querySelector(".EventMusic-Image"), blockMusName = content.querySelector(".EventMusic-Name"), blockMusTime = content.querySelector(".EventMusic-Time"), blockMusVolume = (content.querySelector(".EventMusicControlls-VolumeValue")), blockButt = content.querySelector(".EventButtons"), blockButtAct = (content.querySelector(".EventButtons-Button_active")), blockButtIna = (content.querySelector(".EventButtons-Button_inactive")), blockCamInfo = content.querySelector(".EventCamInfo"), blockCamImage = content.querySelector(".EventCam-Image"), blockInfo = content.querySelector(".EventInfo");
            /* Custom Data */
            //hide blocks
            blockImage.classList.add("Event-Image_hide");
            blockClimate.classList.add("EventClimate_hide");
            blockMusic.classList.add("EventMusic_hide");
            blockButt.classList.add("EventButtons_hide");
            blockCamImage.classList.add("EventCam-Image_hide");
            blockInfo.removeAttribute("id");
            blockCamImage.removeAttribute("id");
            blockCamInfo.classList.add("EventCamInfo_hide");
            if (data) {
                let evDate = data;
                let dType = evDate.type, dTemp = evDate.temperature, dHumi = evDate.humidity, dAlbum = evDate.albumcover, dArtist = evDate.artist, dTrack = evDate.track, dVolume = evDate.volume, dButton = evDate.buttons, dImage = evDate.image;
                /* Temporary Solution */
                //Image
                if (dType == "graph") {
                    blockImage.setAttribute("src", "img/graph.png");
                    blockImage.setAttribute("alt", "graph");
                    blockImage.classList.remove("Event-Image_hide");
                }
                else if (dImage == "get_it_from_mocks_:3.jpg") {
                    blockInfo.id = "camParent";
                    blockCamImage.id = "cam"; //add cam
                    blockCamImage.style.backgroundImage = "url(img/image.jpg)";
                    blockCamImage.classList.remove("EventCam-Image_hide");
                }
                //Climate
                if (dTemp)
                    blockTemp.innerHTML = "Температура: <b>" + dTemp + " C</b>";
                if (dHumi)
                    blockHumi.innerHTML = "Влажность: <b>" + dHumi + "%</b>";
                if (dTemp || dHumi)
                    blockClimate.classList.remove("EventClimate_hide"); //show event climate block
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
                    blockMusic.classList.remove("EventMusic_hide"); //show event music block
                }
                //Buttons
                if (dButton) {
                    if (dButton[0])
                        blockButtAct.textContent = dButton[0];
                    if (dButton[1])
                        blockButtIna.textContent = dButton[1];
                    blockButt.classList.remove("EventButtons_hide"); //show event buttons block
                }
            }
            /* Fill Template */
            block.className = "Event Event_size_" + size + " Event_type_" + type;
            blockIcon.setAttribute("src", "img/" + icon + ".svg");
            blockIcon.setAttribute("alt", icon);
            blockClose.className = "Event-Close Event-Close_type_" + type;
            blockTitle.textContent = title;
            blockSource.textContent = source;
            blockTime.textContent = time;
            blockDesc.textContent = description;
            //hide event info block if empry data
            !description
                ? blockInfo.classList.add("EventInfo_hide")
                : blockInfo.classList.remove("EventInfo_hide");
            container.appendChild(content.cloneNode(true));
        });
        touchEvets();
    }
    if (page == "videomonitoring") {
        let videos = ev.videos;
        videos.forEach(function (el) {
            let elts = el, id = elts.id, url = elts.url;
            let template = (document.querySelector(".VideoTemplate")), content = template.content, video = content.querySelector(".Container-Video"), canvBlock = content.querySelector(".CanvVideoBlock");
            video.id = id;
            canvBlock.id = id + "-block";
            container.appendChild(content.cloneNode(true));
            initVideo(document.getElementById(id), url);
            canvasVideo(id);
            canvasVideoSound(id);
        });
        openVideo();
    }
}
/* Event Handling: Drag & Pinch & Rotate In #cam Image */
function touchEvets() {
    let cam = document.querySelector("#cam");
    let camParent = document.querySelector("#camParent");
    let camInfo = camParent.querySelector(".EventCamInfo");
    let camZoom = camInfo.querySelector(".EventCamInfo-Zoom");
    let camBright = (camInfo.querySelector(".EventCamInfo-Bright"));
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
        camInfo.classList.remove("EventCamInfo_hide"); //if touch device show cam info block
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
/* Event handling "click" on the button ".header-mobile-btn": animate button & show/hide mobile menu */
const menu = document.querySelector(".Header-Menu");
const menuBtn = document.querySelector(".HeaderMobileBtn");
const menuBtnLine = document.querySelectorAll(".HeaderMobileBtn-Line");
/* Set Initial State Of Menu */
let showMenu = false;
menuBtn.addEventListener("click", toggleMenu);
function toggleMenu() {
    if (!showMenu) {
        menu.classList.add("Header-Menu_show");
        menuBtn.classList.add("HeaderMobileBtn_close");
        menuBtnLine.forEach(item => item.classList.add("HeaderMobileBtn-Line_close"));
        /* Set Menu State */
        showMenu = true;
    }
    else {
        menu.classList.remove("Header-Menu_show");
        menuBtn.classList.remove("HeaderMobileBtn_close");
        menuBtnLine.forEach(item => item.classList.remove("HeaderMobileBtn-Line_close"));
        /* Set Menu State */
        showMenu = false;
    }
}
/* Draw Canvas Video & Video Effects */
function canvasVideo(videoId) {
    const video = document.querySelector("#" + videoId), //video
    block = document.querySelector("#" + videoId + "-block"), //video block
    videoInfo = block.querySelector(".CanvVideoBlock-Info"), //video info
    canvas = block.querySelector(".CanvVideoBlock-Video"), //canvas video result
    lumRange = (block.querySelector(".CanvVideoBlock-Luminance")), //luminance range
    contrRange = (block.querySelector(".CanvVideoBlock-Contrast")), //contrast range
    canvasMove = (block.querySelector(".CanvVideoBlock-CanvasMove")); //move info canvas
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
            /* Set RGB Style */
            for (let i = 0; i < data.length; i += 4) {
                let r = data[i];
                let g = data[i + 1];
                let b = data[i + 2];
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
        muteButton = (block.querySelector(".CanvVideoBlock-SoundMute")), canvas = (block.querySelector(".CanvVideoBlock-Video")), //canvas
        soundIndicator = (block.querySelector(".CanvVideoBlock-SoundVolume")), //sound indicator
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
    canvMove.classList.add("CanvVideoBlock-CanvasMove");
    block.classList.add("CanvVideoBlock");
    block.id = videoId + "-block";
    canvasBlock.classList.add("CanvVideoBlock-CanvasBlock");
    controllsBlock.classList.add("CanvVideoBlock-ControllBlock");
    prevButton.classList.add("CanvVideoBlock-Button");
    prevButton.textContent = "Все камеры";
    canvas.classList.add("CanvVideoBlock-Cideo");
    soundVolume.classList.add("CanvVideoBlock-SoundVolume");
    soundMute.classList.add("CanvVideoBlock-SoundMute");
    soundMute.textContent = "♪";
    info.classList.add("CanvVideoBlock-Info");
    luminance.classList.add("CanvVideoBlock-Luminance");
    luminance.setAttribute("type", "range");
    luminance.setAttribute("value", "5");
    luminance.setAttribute("min", "0");
    luminance.setAttribute("max", "10");
    luminanceText.classList.add("CanvVideoBlock-Text");
    luminanceText.textContent = "Яркость";
    contrast.classList.add("CanvVideoBlock-Contrast");
    contrast.setAttribute("type", "range");
    contrast.setAttribute("value", "1");
    contrast.setAttribute("min", "1");
    contrast.setAttribute("max", "5");
    contrastText.classList.add("CanvVideoBlock-Text");
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
    let container = document.querySelector(".Container");
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
    let canvasVid = document.querySelectorAll(".CanvVideoBlock-Video");
    let videoBlock = document.querySelectorAll(".CanvVideoBlock-CanvasBlock");
    canvasVid.forEach(function (canvas) {
        canvas.addEventListener("click", function () {
            let parentBlock = this.parentNode;
            let controllBlock = parentBlock.querySelector(".CanvVideoBlock-ControllBlock");
            let button = parentBlock.querySelector(".CanvVideoBlock-Button");
            let soundIndicator = parentBlock.querySelector(".CanvVideoBlock-SoundVolume");
            /* Close Button */
            button.addEventListener("click", function () {
                parentBlock.classList.remove("CanvVideoBlock-CanvasBlock_open");
                button.classList.remove("CanvVideoBlock-Button_open");
                button.classList.remove("CanvVideoBlock-Button_open");
                controllBlock.classList.remove("CanvVideoBlock-ControllBlock_open");
                soundIndicator.classList.remove("CanvVideoBlock-SoundVolume_active");
            });
            /* Open Video */
            if (!parentBlock.classList.contains("CanvVideoBlock-CanvasBlock_open")) {
                parentBlock.classList.add("CanvVideoBlock-CanvasBlock_open");
                button.classList.add("CanvVideoBlock-Button_open");
                controllBlock.classList.add("CanvVideoBlock-ControllBlock_open");
                soundIndicator.classList.add("CanvVideoBlock-SoundVolume_active");
            }
        });
    });
}
/* Click Event To Mute Button */
function soundMuteButton(button, video) {
    button.addEventListener("click", function () {
        /* If Sound Muted */
        if (!button.classList.contains("CanvVideoBlock-SoundMute_active")) {
            video.muted = false;
            button.classList.add("CanvVideoBlock-SoundMute_active");
        }
        else {
            video.muted = true;
            button.classList.remove("CanvVideoBlock-SoundMute_active");
        }
    });
}

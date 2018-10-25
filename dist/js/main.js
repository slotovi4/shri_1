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

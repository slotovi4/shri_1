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
}

function templateEngine(jsonData: string) {
  let request = new XMLHttpRequest();
  request.open("GET", jsonData, false);

  interface Events {
    events: Array<object>;
  }

  interface Event {
    type: string;
    title: string;
    source: string;
    time: string;
    description: string | null;
    icon: string;
    size: string;
    data: Object;
  }

  interface EventDate {
    type: string;
    temperature: number;
    humidity: number;
    albumcover: string;
    artist: string;
    track: object;
    volume: number;
    buttons: Array<string>;
    image: string;
  }

  interface TrackDate {
    name: string;
    length: string;
  }

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      let data: object = JSON.parse(request.responseText);

      let ev = data as Events;
      let events = ev.events;

      events.forEach(function(el) {
        let elts = el as Event;

        /* Get Data */
        let type = elts.type,
          title = elts.title,
          source = elts.source,
          time = elts.time,
          description = elts.description,
          icon = elts.icon,
          size = elts.size,
          data = elts.data;

        /* Template */
        let template = <HTMLTemplateElement>document.querySelector("template");
        let content = template.content,
          block = <HTMLElement>content.querySelector("#event"),
          blockIcon = <HTMLElement>content.querySelector(".event__icon"),
          blockTitle = <HTMLElement>content.querySelector(".event__title"),
          blockSource = <HTMLElement>content.querySelector(".event__source"),
          blockTime = <HTMLElement>content.querySelector(".event__time"),
          blockDesc = <HTMLElement>content.querySelector(".event__desc"),
          blockClose = <HTMLElement>content.querySelector(".event__close"),
          blockImage = <HTMLElement>content.querySelector(".event__image"),
          blockTemp = <HTMLElement>content.querySelector(".event__temperature"),
          blockHumi = <HTMLElement>content.querySelector(".event__humidity"),
          blockClimate = <HTMLElement>content.querySelector(".event-climate"),
          blockMusic = <HTMLElement>content.querySelector(".event-music"),
          blockMusImg = <HTMLElement>(
            content.querySelector(".event-music__image")
          ),
          blockMusName = <HTMLElement>(
            content.querySelector(".event-music__name")
          ),
          blockMusTime = <HTMLElement>(
            content.querySelector(".event-music__time")
          ),
          blockMusVolume = <HTMLElement>(
            content.querySelector(".event-music-controlls__volume-value")
          ),
          blockButt = <HTMLElement>content.querySelector(".event-buttons"),
          blockButtAct = <HTMLElement>(
            content.querySelector(".event-buttons__button_active")
          ),
          blockButtIna = <HTMLElement>(
            content.querySelector(".event-buttons__button_inactive")
          ),
          blockCamInfo = <HTMLElement>content.querySelector(".event-cam-info"),
          blockCamImage = <HTMLElement>(
            content.querySelector(".event-cam__image")
          ),
          blockInfo = <HTMLElement>content.querySelector(".event-info");

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
          let evDate = data as EventDate;

          let dType = evDate.type,
            dTemp = evDate.temperature,
            dHumi = evDate.humidity,
            dAlbum = evDate.albumcover,
            dArtist = evDate.artist,
            dTrack = evDate.track,
            dVolume = evDate.volume,
            dButton = evDate.buttons,
            dImage = evDate.image;

          /* Temporary Solution */
          //Image
          if (dType == "graph") {
            blockImage.setAttribute("src", "img/graph.png");
            blockImage.setAttribute("alt", "graph");
            blockImage.classList.remove("event__image_hide");
          } else if (dImage == "get_it_from_mocks_:3.jpg") {
            blockInfo.id = "camParent";
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
            let trackDate = dTrack as TrackDate;
            let dLength = trackDate.length,
              dName = trackDate.name;

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

        let container = <HTMLElement>document.querySelector(".container");
        container.appendChild(content.cloneNode(true));
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

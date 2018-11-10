function templateEngine(jsonData: object): void {
  interface Template {
    page: string;
    events: Array<object>;
    videos: Array<object>;
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

  interface Video {
    id: string;
    url: string;
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

  let data: object = jsonData;
  let ev = data as Template;
  let page = ev.page;

  const container = <HTMLElement>document.querySelector(".Container");
  let sections = container.querySelectorAll("section");
  sections.forEach(item => {
    container.removeChild(item);
  });

  if (page == "events") {
    let events = ev.events;

    events.forEach(function (el) {
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
      let template = <HTMLTemplateElement>(
        document.querySelector(".event-template")
      );
      let content = template.content,
        block = <HTMLElement>content.querySelector(".Event"),
        blockIcon = <HTMLElement>content.querySelector(".Event-Icon"),
        blockTitle = <HTMLElement>content.querySelector(".Event-Title"),
        blockSource = <HTMLElement>content.querySelector(".Event-Source"),
        blockTime = <HTMLElement>content.querySelector(".Event-Time"),
        blockDesc = <HTMLElement>content.querySelector(".Event-Desc"),
        blockClose = <HTMLElement>content.querySelector(".Event-Close"),
        blockImage = <HTMLElement>content.querySelector(".Event-Image"),
        blockTemp = <HTMLElement>content.querySelector(".Event-Temperature"),
        blockHumi = <HTMLElement>content.querySelector(".Event-Humidity"),
        blockClimate = <HTMLElement>content.querySelector(".EventClimate"),
        blockMusic = <HTMLElement>content.querySelector(".EventMusic"),
        blockMusImg = <HTMLElement>content.querySelector(".EventMusic-Image"),
        blockMusName = <HTMLElement>content.querySelector(".EventMusic-Name"),
        blockMusTime = <HTMLElement>content.querySelector(".EventMusic-Time"),
        blockMusVolume = <HTMLElement>(
          content.querySelector(".EventMusicControlls-VolumeValue")
        ),
        blockButt = <HTMLElement>content.querySelector(".EventButtons"),
        blockButtAct = <HTMLElement>(
          content.querySelector(".EventButtons-Button_active")
        ),
        blockButtIna = <HTMLElement>(
          content.querySelector(".EventButtons-Button_inactive")
        ),
        blockCamInfo = <HTMLElement>content.querySelector(".EventCamInfo"),
        blockCamImage = <HTMLElement>content.querySelector(".EventCam-Image"),
        blockInfo = <HTMLElement>content.querySelector(".EventInfo");
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
          blockImage.classList.remove("Event-Image_hide");
        } else if (dImage == "get_it_from_mocks_:3.jpg") {
          blockInfo.id = "camParent";
          blockCamImage.id = "cam"; //add cam
          blockCamImage.style.backgroundImage = "url(img/image.jpg)";
          blockCamImage.classList.remove("EventCam-Image_hide");
        }

        //Climate
        if (dTemp) blockTemp.innerHTML = "Температура: <b>" + dTemp + " C</b>";
        if (dHumi) blockHumi.innerHTML = "Влажность: <b>" + dHumi + "%</b>";
        if (dTemp || dHumi) blockClimate.classList.remove("EventClimate_hide"); //show event climate block

        //Music
        if (dTrack) {
          let trackDate = dTrack as TrackDate;
          let dLength = trackDate.length,
            dName = trackDate.name;

          if (dAlbum) blockMusImg.style.backgroundImage = "url(" + dAlbum + ")";
          if (dName) blockMusName.textContent = dArtist + " - " + dName;
          if (dLength) blockMusTime.textContent = dLength;
          if (dVolume) blockMusVolume.textContent = dVolume + "%";

          blockMusic.classList.remove("EventMusic_hide"); //show event music block
        }

        //Buttons
        if (dButton) {
          if (dButton[0]) blockButtAct.textContent = dButton[0];
          if (dButton[1]) blockButtIna.textContent = dButton[1];

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
      let elts = el as Video,
        id = elts.id,
        url = elts.url;

      let template = <HTMLTemplateElement>(
        document.querySelector(".VideoTemplate")
      ),
        content = template.content,
        video = <HTMLElement>content.querySelector(".Container-Video"),
        canvBlock = <HTMLElement>content.querySelector(".CanvVideoBlock");

      video.id = id;
      canvBlock.id = id + "-block";

      container.appendChild(content.cloneNode(true));

      initVideo(<HTMLVideoElement>document.getElementById(id), url);
      canvasVideo(id);
      canvasVideoSound(id);
    });

    openVideo();
  }
}

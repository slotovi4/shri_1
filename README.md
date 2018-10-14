<b>«Мультимедиа»</b><br>
Страница "Видеонаблюдение" содержится в файле video.html<br>
Все скрипты для камер находятся в директории app/js/video-monitoring-scripts.<br>
Все стили описаны в файле canv-video-block.scss, в директории app/sass/canv-video-block/<br>
<br>
<b>initVideoHLS.js</b> -> Подключение HLS видеопотока.<br>
<b>canvasVideo.js</b> -> Отвечает за отрисовку canvas видео. Реализованы контроллы яркости/контраста и индикатор освещенности.<br>
<b>createCanvasVideoBlock.js</b> -> Отвечает за создание блока и всех элементов для canvas видео.<br>
<b>canvasVideoSound.js</b> -> Отвечает за получение звука из видео. Реализован индикатор громкости.<br>
<b>soundMuteButton.js</b> -> Отвечает за отключение/включение звука на видео.<br>
<b>openVideo.js</b> -> Отвечает за открытие(зум) видео при клике.<br>
<br>
Запуск:<br>
<b>npm i</b><br>
<b>gulp watch</b><br>

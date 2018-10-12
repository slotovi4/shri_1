<b>«Адаптивная вёрстка»</b><br>
Работа шаблонизатора описана в файле template-engine.js (app/js/template-engine.js).<br>
Обработка мобильного меню описана в файле header-mobile-btn.js (app/js/header-mobile-btn.js).<br>
Все стили импортируются в файл main.scss (app/sass/main.scss).<br>
<br>
<b>«Работа с сенсорным пользовательским вводом»</b><br>
Обработка touch событий описана в файле touch-events.js (app/js/touch-events.js)<br>
Событие Drag обрабатывается только тогда когда один палец на экране. Меняет положение изображения при движении вправо/влево.<br>
Событие Rotate обрабатывается когда один палец неподвижен а второй делает круговое движение. Яркость меняется относительно угла поворота.<br>
Событие Zoom обрабатывается при движении обоих пальцев в стороны.<br>
<br>
<b>«Node js»</b><br>
branch - node-express<br>
Все файлы находятся папке express. Файл events.json находится в папке express/api.<br>
Работа сервера реалиована в файле express.js, находится в папке express.<br>
Запуск:<br>
<b>npm i</b><br>
<b>node express/express.js</b><br>

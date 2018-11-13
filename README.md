merge bem & i-framework<br>
<br>
<b>ДЗ - «БЭМ»</b><br>
С помощью bem-tools-create создал структуру: createBemStructure.js(запуск - node createBemStructure.js)<br>
Структура bem описана в app/bem<br>
Все react bem компоненты собираются в файле reactComponents.js(путь - app/components)(classname & core)<br>
Работа с bem di и отрисовка компонентов описана в файле renderComponents.js(путь - app/components)<br>
Стили разбиваются на 3 уровня(common, desktop, touch)(путь - dist/css) и подключаются к сайну относительно viewport<br>
<br>
<b>Запуск:</b><br>
npm i<br>
gulp watch<br>

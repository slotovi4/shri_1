export class Header extends React.Component {
    render() {
        return (
            <div class="Header">
                <div class="Header-Logo"></div>
                <div class="Header-Menu">
                    <a class="Header-Link Header-Link_active" data-page-title="Лента событий" data-page="events.json" href="#">События</a>
                    <a class="Header-Link" href="#">Сводка</a>
                    <a class="Header-Link" href="#">Устройства</a>
                    <a class="Header-Link" href="#">Сценарии</a>
                    <a class="Header-Link" data-page-title="Видеонаблюдение" data-page="videos.json" href="#">Видеонаблюдение</a>
                </div>
                <div class="HeaderMobileBtn">
                    <div class="HeaderMobileBtn-Line"></div>
                    <div class="HeaderMobileBtn-Line"></div>
                    <div class="HeaderMobileBtn-Line"></div>
                </div>
            </div>
        )
    }
}
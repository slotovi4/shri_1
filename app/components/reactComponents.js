export function Footer() {
    return (
        <div class="Footer">
            <div class="Footer-LeftSection">
                <a href="#" class="Footer-Text">Помощь</a>
                <a href="#" class="Footer-Text">Обратная связь</a>
                <a href="#" class="Footer-Text">Разработчикам</a>
                <a href="#" class="Footer-Text">Условия использования</a>
                <a href="license.pdf" class="Footer-Text">Авторские права</a>
            </div>
            <div class="Footer-RightSection">
                <span class="Footer-Text">© 2001–2017 ООО «Яндекс»</span>
            </div>
        </div>
    )
}
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
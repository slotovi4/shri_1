function Footer() {
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

ReactDOM.render(<Footer />, document.querySelector('footer'));
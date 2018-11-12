const cnFooter = cn('Footer');

export function Footer() {
    return (
        <div className={cnFooter()}>
            <div className={cnFooter('LeftSection')}>
                <a href="#" className={cnFooter('Text')}>Помощь</a>
                <a href="#" className={cnFooter('Text')}>Обратная связь</a>
                <a href="#" className={cnFooter('Text')}>Разработчикам</a>
                <a href="#" className={cnFooter('Text')}>Условия использования</a>
                <a href="license.pdf" className={cnFooter('Text')}>Авторские права</a>
            </div>
            <div className={cnFooter('RightSection')}>
                <span className={cnFooter('Text')}>© 2001–2017 ООО «Яндекс»</span>
            </div>
        </div>
    )
}
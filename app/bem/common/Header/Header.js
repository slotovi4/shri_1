const cnHeader = cn('Header');
const cnHeaderMobileBtn = cn('HeaderMobileBtn');
export class Header extends React.Component {
    render() {
        return (
            <div className={cnHeader()}>
                <div className={cnHeader('Logo')}></div>
                <div className={cnHeader('Menu')}>
                    <a className={cnHeader('Link', { active: true })} data-page-title="Лента событий" data-page="events.json" href="#">События</a>
                    <a className={cnHeader('Link')} href="#">Сводка</a>
                    <a className={cnHeader('Link')} href="#">Устройства</a>
                    <a className={cnHeader('Link')} href="#">Сценарии</a>
                    <a className={cnHeader('Link')} data-page-title="Видеонаблюдение" data-page="videos.json" href="#">Видеонаблюдение</a>
                </div>
                <div className={cnHeaderMobileBtn()}>
                    <div className={cnHeaderMobileBtn('Line')}></div>
                    <div className={cnHeaderMobileBtn('Line')}></div>
                    <div className={cnHeaderMobileBtn('Line')}></div>
                </div>
            </div >
        )
    }
}

export const AppHeader = withBemMod(cnHeader(), cnHeaderMobileBtn())(Header)
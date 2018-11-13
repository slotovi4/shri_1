import { cn } from '@bem-react/classname';
import { withBemMod } from '@bem-react/core';

const cnCanvVideoBlock = cn('CanvVideoBlock');

function CanvVideoBlock(props) {
    const { videos } = props;
    const videoContent = [<h1 class="Container-Title">Видеонаблюдение</h1>];

    let sections = Object.keys(videos).map(function (key) {
        return (<section className={cnCanvVideoBlock()} key={key} id={videos[key].id + "-block"}>
            <video className="Container-Video" id={videos[key].id} poster="img/yandex.jpg" controls="controls" loop="loop" muted autoPlay ></video>
            <div className={cnCanvVideoBlock('CanvasBlock')}>
                <span className={cnCanvVideoBlock('Info')}></span>
                <div className={cnCanvVideoBlock('SoundVolume')}></div>
                <canvas className={cnCanvVideoBlock('Video')}></canvas>
                <canvas className={cnCanvVideoBlock('CanvasMove')}></canvas>
                <div className={cnCanvVideoBlock('ControllBlock')}>
                    <span className={cnCanvVideoBlock('Text')}>Яркость</span>
                    <input className={cnCanvVideoBlock('Luminance')} type="range" defaultValue="5" min="0" max="10" />
                    <span className={cnCanvVideoBlock('Text')}>Контраст</span>
                    <input className={cnCanvVideoBlock('Contrast')} type="range" defaultValue="1" min="1" max="5" />
                    <span className={cnCanvVideoBlock('Button')}>Все камеры</span>
                    <div className={cnCanvVideoBlock('SoundMute')}>♪</div>
                </div>
            </div>
        </section>)
    });

    videoContent.push(sections);

    return videoContent
}

export const CanvVideoBlockComponent = withBemMod(cnCanvVideoBlock(), { app: "common" })(CanvVideoBlock)


const cnFooter = cn('Footer');

function Footer(props) {
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

export const FooterComponent = withBemMod(cnFooter(), { app: "common" })(Footer)
const cnHeader = cn('Header');
const cnHeaderMobileBtn = cn('HeaderMobileBtn');

function Header(props) {
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

export const HeaderComponent = withBemMod(cnHeader(), { app: "common" })(Header)
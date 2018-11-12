import { cn } from '@bem-react/classname';
const cnCanvVideoBlock = cn('CanvVideoBlock');

export function CanvVideoBlock(props) {
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


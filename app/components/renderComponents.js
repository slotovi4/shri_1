import { cn } from '@bem-react/classname';
import { Registry, withRegistry, RegistryConsumer } from '@bem-react/di';
import { HeaderComponent, FooterComponent, CanvVideoBlockComponent } from './reactComponents';

const cnApp = cn('App');
const cnHeader = cn('Header');
const cnFooter = cn('Footer');
const cnCanvVideoBlock = cn('CanvVideoBlock');

const registry = new Registry({ id: cnApp() });
registry.set(cnHeader(), HeaderComponent);
registry.set(cnFooter(), FooterComponent);
registry.set(cnCanvVideoBlock(), CanvVideoBlockComponent);

const HeaderElem = () => (
  <RegistryConsumer>
    {registries => {
      // reading App registry
      const registry = registries[cnApp()];
      const HeaderNew = registry.get(cnHeader());

      return <HeaderNew />;
    }}
  </RegistryConsumer>
);

const FooterElem = () => (
  <RegistryConsumer>
    {registries => {
      const registry = registries[cnApp()];
      const FooterNew = registry.get(cnFooter());

      return <FooterNew />;
    }}
  </RegistryConsumer>
);

const VideoElem = () => (
  <RegistryConsumer>
    {registries => {
      const registry = registries[cnApp()];
      const VideoNew = registry.get(cnCanvVideoBlock());
      let videos = getData('/dist/data/videos.json');

      return <VideoNew videos={videos} />;
    }}
  </RegistryConsumer>
);

const HeaderApp = withRegistry(registry)(HeaderElem);
const FooterApp = withRegistry(registry)(FooterElem);
const VideoApp = withRegistry(registry)(VideoElem);

/* Render */
ReactDOM.render(<HeaderApp />, document.querySelector('header'));
ReactDOM.render(<FooterApp />, document.querySelector('footer'));
ReactDOM.render(<VideoApp />, document.querySelector('.Container'));

/* Get Json */
function getData(url) {
  let request = new XMLHttpRequest();
  let videosData;
  request.open("GET", url, false);

  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      let data = JSON.parse(request.responseText);
      videosData = data.videos;

    } else {
      throw "Error: data not received";
    }
  };

  request.send();

  return videosData;
}


/* class Check extends React.Component {
  render() {
    return (
      <RegistryConsumer>
        {registries => {
          // reading App registry
          const registry = registries[cnApp()];
          const HeaderNe = registry.get(cnHeader());

          return <HeaderNe />;
        }}
      </RegistryConsumer>
    )
  }
}

ReactDOM.render(<Check />, document.querySelector('header')); */

/* ReactDOM.render(<Header />, document.querySelector('header'));
ReactDOM.render(<Footer />, document.querySelector('footer'));

let videos = getData('/dist/data/videos.json');
ReactDOM.render(<CanvVideoBlock videos={videos} />, document.querySelector('.Container'));

function getData(url) {
  let request = new XMLHttpRequest();
  let videosData;
  request.open("GET", url, false);

  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      let data = JSON.parse(request.responseText);
      videosData = data.videos;

    } else {
      throw "Error: data not received";
    }
  };

  request.send();

  return videosData;
} */
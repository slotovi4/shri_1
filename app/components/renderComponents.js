import { Header, Footer, CanvVideoBlock } from './reactComponents';

/* Render */
ReactDOM.render(<Header />, document.querySelector('header'));
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
}
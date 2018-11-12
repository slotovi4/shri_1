import { Header, Footer, CanvVideoBlock } from './reactComponents';

/* Render */
ReactDOM.render(<Header />, document.querySelector('header'));
ReactDOM.render(<Footer />, document.querySelector('footer'));


let request = new XMLHttpRequest();
request.open("GET", '/dist/data/videos.json', false);

request.onload = function () {
  if (request.status >= 200 && request.status < 400) {
    let data = JSON.parse(request.responseText);
    let videos = data.videos;

    ReactDOM.render(<CanvVideoBlock videos={videos} />, document.querySelector('.Container'));

  } else {
    throw "Error: data not received";
  }
};

request.send();

if (request.status != 200) {
  alert(request.status + ": " + request.statusText);
}
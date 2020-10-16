class Subtyle {
  constructor(video, track) {
    this.video = video;
    this.vtt = video.textTracks;
    this.track = track;

    this.subtitle = document.createElement('div');
    this.text = document.createElement('span');

    this.style = {
      'background-color': 'grey',
      'font-size': '15pt',
      display: 'inline',
      margin: '0 10 0 10',
      position: 'relative',
      'z-index': '1',
      left: '50%',
    };

    this.on = () => {
      this.setStyle();
      this.event();
      this.render();
    };

    this.off = () => {
      this.hide();
    };

    this.big = (option) => {};

    this.small = (option) => {};

    this.white = (option) => {};
  }

  init() {
    this.event();
    this.hide();
  }

  render() {
    this.subtitle.appendChild(this.text);
    this.video.parentNode.prepend(this.subtitle);
  }

  hide() {
    this.subtitle.hidden = true;
    this.video.textTracks[0].mode = 'showing';

    // TODO removeEventListener event
    // this.track.removeEventListener('cuechange', function () {}, true);

    this.render();
  }

  event() {
    this.track.addEventListener('cuechange', (event) => {
      console.log(event);
      if (event.target.track.activeCues[0] !== undefined) {
        this.text.textContent = event.target.track.activeCues[0].text;
      } else {
        this.text.textContent = '';
      }
    });
  }

  setStyle() {
    this.video.textTracks[0].mode = 'hidden';

    if (this.video.zIndex !== undefined) {
      this.subtitle.style.zIndex = this.video.zIndex + 1;
    } else {
      this.subtitle.style.zIndex = 1;
    }

    this.subtitle.style.width = `${this.video.offsetWidth}px`;
    this.subtitle.style.color = 'blue';
    this.subtitle.style.position = 'absolute';
    this.subtitle.style.top = `40%`;
    this.subtitle.style.display = 'flex';
    this.subtitle.style.justifyContent = 'center';
    this.subtitle.style.fontSize = '1em';

    this.text.style.backgroundColor = 'white';
    this.text.style.padding = '0 10 0 10';
  }
}

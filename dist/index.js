class Subtyle {
  constructor(video, track) {
    this.videoElement = video;
    this.videoVtt = video.textTracks;
    this.track = track;

    this.style = {
      animate: true,
      background: 'black',
      color: 'white',
    };

    this.vtt = (option) => {
      this.render();
    };

    this.big = (option) => {};

    this.small = (option) => {};

    this.white = (option) => {};

    this.show = () => {};

    this.hide = () => {};
  }

  render() {
    let subtitleContainer = document.createElement('div');
    let subtitleText = document.createElement('span');
    subtitleContainer.appendChild(subtitleText);

    this.videoElement.parentNode.prepend(subtitleContainer);

    this.track.addEventListener('cuechange', (event) => {
      console.log(event);
      if (event.target.track.activeCues[0] !== undefined) {
        subtitleText.textContent = event.target.track.activeCues[0].text;
      } else {
        subtitleText.textContent = '';
      }
    });
  }
}

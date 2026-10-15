const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PLAYER_STORAGE_KEY = 'F8_MUSIC_PLAYER';

const player = $('.player');
const dashboard = $('.dashboard');
const playlistSection = $('.playlist-section');
const playlist = $('.playlist');
const cd = $('.cd');
const cdThumb = $('.cd-thumb');
const heading = $('.song-title');
const audio = $('#audio');
const playBtn = $('.btn-toggle-play');
const progress = $('#progress');
const timeCurrent = $('.time-current');
const timeDuration = $('.time-duration');
const prevBtn = $('.btn-prev');
const nextBtn = $('.btn-next');
const randomBtn = $('.btn-random');
const repeatBtn = $('.btn-repeat');

const app = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  playedIndexes: [],
  config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},

  setConfig(key, value) {
    this.config[key] = value;
    localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config));
  },

  songs: [
    {
      name: 'Sting 57th & 9th',
      singer: 'Sting',
      path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&auto=format&fit=crop&q=80'
    },
    {
      name: 'La Gozadera',
      singer: 'Gente de Zona ft. Marc Anthony',
      path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&auto=format&fit=crop&q=80'
    },
    {
      name: 'Starboy',
      singer: 'The Weeknd',
      path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80'
    },
    {
      name: 'Englishman in New York',
      singer: 'Sting',
      path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&auto=format&fit=crop&q=80'
    },
    {
      name: 'Viva la vida',
      singer: 'Coldplay',
      path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
      image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=400&auto=format&fit=crop&q=80'
    },
    {
      name: 'Divide (Shape of You)',
      singer: 'Ed Sheeran',
      path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
      image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&auto=format&fit=crop&q=80'
    },
    {
      name: 'Attention',
      singer: 'Charlie Puth',
      path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
      image: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&auto=format&fit=crop&q=80'
    },
    {
      name: 'Counting Stars',
      singer: 'OneRepublic',
      path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3',
      image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&auto=format&fit=crop&q=80'
    }
  ],

  formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  },

  defineProperties() {
    Object.defineProperty(this, 'currentSong', {
      get() {
        return this.songs[this.currentIndex];
      }
    });
  },

  updatePlaylistPosition() {
    if (dashboard && playlistSection) {
      playlistSection.style.marginTop = `${dashboard.offsetHeight}px`;
    }
  },

  render() {
    const htmls = this.songs.map((song, index) => {
      const isActive = index === this.currentIndex ? 'active' : '';
      return `
        <div class="song ${isActive}" data-index="${index}">
          <div class="thumb" style="background-image: url('${song.image}')"></div>
          <div class="body">
            <h3 class="title">${song.name}</h3>
            <p class="author">${song.singer}</p>
          </div>
          <div class="option" title="Tùy chọn">
            <i class="fas fa-ellipsis-h"></i>
          </div>
        </div>
      `;
    });
    playlist.innerHTML = htmls.join('');
  },

  loadCurrentSong() {
    heading.textContent = this.currentSong.name;
    cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
    audio.src = this.currentSong.path;
    progress.value = 0;
    timeCurrent.textContent = '0:00';
    timeDuration.textContent = '0:00';
  },

  loadConfig() {
    this.isRandom = this.config.isRandom || false;
    this.isRepeat = this.config.isRepeat || false;
    if (typeof this.config.currentIndex === 'number' && this.songs[this.config.currentIndex]) {
      this.currentIndex = this.config.currentIndex;
    }

    randomBtn.classList.toggle('active', this.isRandom);
    repeatBtn.classList.toggle('active', this.isRepeat);
  },

  handleEvents() {
    const _this = this;
    const cdWidth = cd.offsetWidth;

    this.updatePlaylistPosition();
    window.onresize = function () {
      _this.updatePlaylistPosition();
    };

    const cdThumbAnimate = cdThumb.animate([{ transform: 'rotate(360deg)' }], {
      duration: 12000,
      iterations: Infinity
    });
    cdThumbAnimate.pause();

    document.onscroll = function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const newCdWidth = cdWidth - scrollTop;

      cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : '0px';
      cd.style.opacity = newCdWidth > 0 ? (newCdWidth / cdWidth).toString() : '0';
    };

    playBtn.onclick = function () {
      if (_this.isPlaying) {
        audio.pause();
      } else {
        audio.play().catch(() => {});
      }
    };

    audio.onplay = function () {
      _this.isPlaying = true;
      player.classList.add('playing');
      cdThumbAnimate.play();
    };

    audio.onpause = function () {
      _this.isPlaying = false;
      player.classList.remove('playing');
      cdThumbAnimate.pause();
    };

    audio.ontimeupdate = function () {
      if (audio.duration) {
        const progressPercent = (audio.currentTime / audio.duration) * 100;
        progress.value = Math.floor(progressPercent);
        timeCurrent.textContent = _this.formatTime(audio.currentTime);
        timeDuration.textContent = _this.formatTime(audio.duration);
      }
    };

    audio.onloadedmetadata = function () {
      timeDuration.textContent = _this.formatTime(audio.duration);
    };

    progress.oninput = function (e) {
      if (audio.duration) {
        const seekTime = (audio.duration / 100) * e.target.value;
        audio.currentTime = seekTime;
      }
    };

    nextBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.nextSong();
      }
      audio.play().catch(() => {});
      _this.render();
      _this.scrollToActiveSong();
    };

    prevBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.prevSong();
      }
      audio.play().catch(() => {});
      _this.render();
      _this.scrollToActiveSong();
    };

    randomBtn.onclick = function () {
      _this.isRandom = !_this.isRandom;
      _this.setConfig('isRandom', _this.isRandom);
      randomBtn.classList.toggle('active', _this.isRandom);
    };

    repeatBtn.onclick = function () {
      _this.isRepeat = !_this.isRepeat;
      _this.setConfig('isRepeat', _this.isRepeat);
      repeatBtn.classList.toggle('active', _this.isRepeat);
    };

    audio.onended = function () {
      if (_this.isRepeat) {
        audio.play().catch(() => {});
      } else {
        nextBtn.click();
      }
    };

    playlist.onclick = function (e) {
      const songNode = e.target.closest('.song:not(.active)');
      const optionNode = e.target.closest('.option');

      if (optionNode) {
        const songItem = e.target.closest('.song');
        const songName = songItem.querySelector('.title').textContent;
        alert(`Tùy chọn cho bài hát: "${songName}"`);
        return;
      }

      if (songNode) {
        _this.currentIndex = Number(songNode.dataset.index);
        _this.setConfig('currentIndex', _this.currentIndex);
        _this.loadCurrentSong();
        _this.render();
        audio.play().catch(() => {});
      }
    };
  },

  nextSong() {
    this.currentIndex++;
    if (this.currentIndex >= this.songs.length) {
      this.currentIndex = 0;
    }
    this.setConfig('currentIndex', this.currentIndex);
    this.loadCurrentSong();
  },

  prevSong() {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.songs.length - 1;
    }
    this.setConfig('currentIndex', this.currentIndex);
    this.loadCurrentSong();
  },

  playRandomSong() {
    let newIndex;
    if (this.playedIndexes.length >= this.songs.length - 1) {
      this.playedIndexes = [];
    }

    do {
      newIndex = Math.floor(Math.random() * this.songs.length);
    } while (newIndex === this.currentIndex || this.playedIndexes.includes(newIndex));

    this.playedIndexes.push(newIndex);
    this.currentIndex = newIndex;
    this.setConfig('currentIndex', this.currentIndex);
    this.loadCurrentSong();
  },

  scrollToActiveSong() {
    setTimeout(() => {
      if (this.currentIndex <= 2) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        const activeSong = $('.song.active');
        if (activeSong) {
          activeSong.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
          });
        }
      }
    }, 250);
  },

  start() {
    this.defineProperties();
    this.loadConfig();
    this.loadCurrentSong();
    this.render();
    this.handleEvents();
  }
};

app.start();

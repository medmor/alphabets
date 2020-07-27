import {Howl, Howler} from 'howler';

export default class SoundManager{
  music : Howl = null

  playMusic(){
    this.music = new Howl({
      src: ['https://funksyou.com/fileDownload/Songs/128/13080.mp3'],
      });
    this.music.on('load', ()=>{console.log(5)})
    this.music.play();
    console.log(this.music)
  }
}


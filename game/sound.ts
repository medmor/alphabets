import {Howl, Howler} from 'howler';

export default class SoundManager{
  music : Howl = null

  playMusic(){
    this.music = new Howl({
      src: ['https://stackblitz.com/edit/alphabets?file=sounds%2Fwin.wav'],
      });
    this.music.on('load', ()=>{console.log(5)})
    this.music.play();
    console.log(this.music)
  }
}


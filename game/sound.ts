import {Howl, Howler} from 'howler';

export default class SoundManager{
  music : Howl = null

  playMusic(){
    this.music = new Howl({
      src: ['https://taalimma-my.sharepoint.com/:u:/g/personal/mohammed_elmadioune_taalim_ma/EeSVFYFIkmpMqvM_kAl_s1oBVZwhyBVJBA6J12JaNQohrQ'],format: ['mp3'],
      });
    this.music.on('load', ()=>{console.log(5)})
    this.music.play();
    console.log(this.music)
  }
}


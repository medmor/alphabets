import {Howl, Howler} from 'howler';

export default class SoundManager{
  music : Howl = null

  load(){
    this.music = new Howl({
      src: ['https://github.com/medmor/alphabets/raw/master/sounds/bensoundMusic.mp3'],
      loop: true
      });

      this.music.on('load', ()=>{
        this.music.play()
      })
  }

}


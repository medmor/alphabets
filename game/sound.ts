import {Howl, Howler} from 'howler';

export default class SoundManager{
  static music : Howl = null
  static win : Howl = null
  static lose : Howl = null



  static load(loadCallback: ()=>void){
    this.win = new Howl({src: ['https://github.com/medmor/alphabets/raw/master/sounds/win.wav']})
    this.lose = new Howl({src: ['https://github.com/medmor/alphabets/raw/master/sounds/lose.wav']})
    this.music = new Howl({
      src: ['https://github.com/medmor/alphabets/raw/master/sounds/bensoundMusic.mp3'],
      volume: .6,
      loop: true
      });
      

    this.music.on('load', ()=>{
      this.music.play()
      loadCallback()
    })
  }

}


import {Howl, Howler} from 'howler';

export default class SoundManager{
  music : Howl = null
  win : Howl = null
  lose : Howl = null



  load(){
    this.music = new Howl({
      src: ['https://github.com/medmor/alphabets/raw/master/sounds/bensoundMusic.mp3'],
      loop: true
      });
    this.win = new Howl({src: ['https://github.com/medmor/alphabets/blob/master/sounds/lose.wav']})
    this.lose = new Howl({src: ['https://github.com/medmor/alphabets/blob/master/sounds/win.wav']})
      

    this.music.on('load', ()=>{
      this.music.play()
    })
    this.win.on('load', ()=>{console.log(7)})
  }

}


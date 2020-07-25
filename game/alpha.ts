import * as PIXI from "pixi.js"

class Alpha extends PIXI.Text {

  alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  constructor(public startX: number, public startY: number){
    super("", {color:0x00});
    this.setAlpha()
  }

  fall(speed: number){
    this.y += speed
  }

  setAlpha(){
    this.x = this.startX
    this.y = this.startY
    this.randomAlpha()
  }

  randomAlpha(){
    this.text = this.alphabets[Math.floor(Math.random() * 26)]
  }

  inputHandler(event: KeyboardEvent){
    this.setAlpha()
  }

  isEqual= (keycode: number): boolean => this.text === this.alphabets[keycode - 65]  

}

export default Alpha
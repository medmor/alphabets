import * as PIXI from "pixi.js"

class Alpha extends PIXI.Text {
  alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  constructor(text: string, public startX: number, public startY: number){
    super(text, {color:0x00});
    this.x = startX
    this.y = startY
  }

  fall(speed: number){
    this.y += speed
  }
  reset(){
    this.x = this.startX
    this.y = this.startY
  }
  randomAlpha(){
    this.text = this.alphabets[Math.random() * 26]
  }
  isEqual(keycode: number): boolean{
    return this.text === this.alphabets[keycode]
  }

}

export default Alpha
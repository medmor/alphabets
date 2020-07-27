import * as PIXI from "pixi.js"

class Alpha extends PIXI.Text {

  alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  constructor(public startX: number, public startY: number){
    super("", {fill:0xff00ff, fontFamilly: "Bolder", fontSize: 100});
    this.setAlpha()
    this.anchor.set(.5)
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

  isEqual= (keycode: number): boolean => this.text === this.alphabets[keycode - 65]  

}

export default Alpha
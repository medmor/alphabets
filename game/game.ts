import * as PIXI from "pixi.js"
//import CONSTS from "./constants"
import Alpha from "./alpha"
import Input from "./input"
import SoundManager from "./sound"


class Game extends PIXI.Application{

  alpha = new Alpha(300, -100)
  input = new Input(this.inputHandler.bind(this))
  sound = new SoundManager()

  constructor(){
    super({width: 600, height: 400, backgroundColor: 0x00BDF0})
    this.stage.addChild(this.alpha)

    this.ticker.add(this.loop.bind(this))
    this.ticker.start()
  }

  loop(){
    this.alpha.fall(2)
  }

  inputHandler(event: KeyboardEvent){
    this.alpha.setAlpha()
    this.sound.playMusic()
  }

}

export default new Game()
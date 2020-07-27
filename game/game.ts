import * as PIXI from "pixi.js"
//import CONSTS from "./constants"
import Intro from "./intro"
import Alpha from "./alpha"
import Input from "./input"
import SoundManager from "./sound"


class Game extends PIXI.Application{
  intro : Intro = null
  alpha = new Alpha(300, -100)
  input = new Input(this.inputHandler.bind(this))
  sound = new SoundManager()

  constructor(){
    super({width: 600, height: 400, backgroundColor: 0x00BDF0})

    this.intro = new Intro(this, this.startGame.bind(this))
    this.intro.addToStage()
  }

  startGame(){
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
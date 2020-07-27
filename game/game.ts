import * as PIXI from "pixi.js"
import Consts from "./constants"
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
    super({width: Consts.WIDTH, height: Consts.HEIGHT, backgroundColor: 0x00BDF0})

    this.intro = new Intro(this, this.startGame.bind(this))
    this.intro.addToStage()
  }

  startGame(){
    this.sound.load()

    this.stage.addChild(this.alpha)

    this.ticker.add(this.loop.bind(this))
    this.ticker.start()
  }

  loop(){
    this.alpha.fall(2)
    if(this.alpha.y > 410) {
      this.alpha.setAlpha()
    }
  }

  inputHandler(event: KeyboardEvent){
    if(this.alpha.isEqual(event.keyCode)){
      this.sound.win.play()
      this.alpha.setAlpha()
    }else{
      this.sound.lose.play()
    }
  }

}

export default new Game()
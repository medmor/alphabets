import * as PIXI from "pixi.js"
import Consts from "./constants"
import Intro from "./intro"
import Alpha from "./alpha"
import Input from "./input"
import Sound from "./sound"
import Info from "./info"


class Game extends PIXI.Application{
  intro : Intro = null
  alpha = new Alpha(300, -50)
  input = new Input(this.inputHandler.bind(this))
  //dsound = new SoundManager()
  info = new Info()

  score: number = 0
  time = 0
  startTime = 0
  fallSpeed = .5

  win = false

  constructor(){
    super({width: Consts.WIDTH, height: Consts.HEIGHT, backgroundColor: 0x00BDF0})

    this.intro = new Intro(this, this.startGame.bind(this))
    this.intro.addToStage()
  }

  startGame(){
    
    this.startTime = Date.now()

    this.stage.addChild(this.alpha)

    this.info.addToStage(this.stage)

    this.ticker.add(this.loop.bind(this))
    this.ticker.start()
  }

  loop(time: number){
    this.info.setTime(Date.now() - this.startTime)
    this.alpha.fall(this.fallSpeed)
    if(this.alpha.y > 410 && !this.win) {
      this.alpha.setAlpha()
      this.info.setScore(this.score-=10)
      Sound.lose.play()
    }
  }

  inputHandler(event: KeyboardEvent){
    if(event.keyCode > 64 && event.keyCode < 92 && !this.win) {
      if(this.alpha.isEqual(event.keyCode)){
        Sound.win.play()
        this.alpha.setAlpha()
        this.info.setScore(this.score+=10)
        this.fallSpeed += .01
        if(this.score >= 1000) {
          this.win = true
          this.alpha.text = "YOU WIN"
          this.info.removeFromStage(this.stage)
        }
      }else{
        Sound.lose.play()
        this.info.setScore(this.score-=10)
      }
    }

  }

}

export default new Game()
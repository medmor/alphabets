import * as PIXI from "pixi.js"

export default class {
  
  time: PIXI.Text =  new PIXI.Text('', {fontSize: 50})
  score: PIXI.Text = new PIXI.Text('',  {fontSize: 50})

  constructor(){
    this.resetValues()
    this.setPositions()
  }

  resetValues(){
    this.setScore(0)
    this.setTime(0.0)
  }

  setPositions(){

    this.time.anchor.set(.5)
    this.time.x = 100
    this.time.y = 50

    this.score.anchor.set(.5)
    this.score.x = 500
    this.score.y = 50
  }

  setScore(value: number){
    this.score.text = value.toString()
  }

  setTime(value: number){
    this.time.text = value.toString()
  }

  addToStage(stage: PIXI.Container){
    stage.addChild(this.time)
    stage.addChild(this.score)
  }

  removeFromStage(stage: PIXI.Container){
    stage.removeChild(this.time)
    stage.removeChild(this.score)
  }


}
import * as PIXI from "pixi.js"

export default class Intro{
  renderer
  graphics = new PIXI.Graphics();
  rectangle: PIXI.Sprite
  circle: PIXI.Sprite
  triangle: PIXI.Sprite


  constructor(rend: PIXI.Renderer){
    this.renderer = rend
    this.rectangle = this.rectangleGenerate()
    this.circle = this.circleGenerate()
    this.circle.anchor.set(.5)
    this.circle.x = 300
    this.circle.y = 200
    this.triangle = this.triangelGenerate()
    this.triangle.anchor.set(.5)
    this.triangle.x = 300 + 3
    this.triangle.y = 200

  }

  rectangleGenerate(){
    this.graphics.clear()
    this.graphics.beginFill(0x9951FF);
    this.graphics.lineStyle(0);
    this.graphics.drawRect(0, 0, 600, 400);
    this.graphics.endFill();

    let texture = this.renderer.generateTexture(this.graphics);
    return new PIXI.Sprite(texture);
  }
  circleGenerate(){
    this.graphics.clear()
    this.graphics.beginFill(0xFF);
    this.graphics.lineStyle(0);
    this.graphics.drawCircle(0, 0, 30);
    this.graphics.endFill();

    let texture = this.renderer.generateTexture(this.graphics);
    return new PIXI.Sprite(texture);
  }

  triangelGenerate(){
    this.graphics.clear()
    this.graphics.beginFill(0x00ff00)
    this.graphics.lineStyle(0)
    this.graphics.drawPolygon([0, 0, 30, 15, 0, 30])
    this.graphics.endFill()

    return new PIXI.Sprite(this.renderer.generateTexture(this.graphics))
  }

  addToStage(stage: PIXI.Container){
    stage.addChild(this.rectangle)
    stage.addChild(this.circle)
    stage.addChild(this.triangle)
  }

}
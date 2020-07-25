import * as PIXI from "pixi.js"
//import CONSTS from "./constants"
import Alpha from "./alpha"


const game = new PIXI.Application({width: 600, height: 400, backgroundColor: 0x00BDF0})
const alpha = new Alpha("A", 300, 100)
game.stage.addChild(alpha)

game.ticker.add(()=>{
  alpha.fall(1)
})
game.ticker.start()

export default game
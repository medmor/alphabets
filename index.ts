// Import stylesheets
import './style.css';

import * as pixi from "pixi.js"
import {default as sound} from "pixi-sound"

pixi["soun" + "d"] = sound

pixi.sound.Sound.from("./sounds")

console.log(pixi.sound)

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
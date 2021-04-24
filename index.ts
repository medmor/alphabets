// Import stylesheets
import './style.css';
import game from "./src/game/game"


// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.appendChild(game.view)
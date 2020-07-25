export default class Input {
  constructor(){

    window.focus()

    window.addEventListener(
      "keyup", this.upHandler, false
    );
  }

  //The `upHandler`
  upHandler = (event: KeyboardEvent) => {
    console.log(event.keyCode)
  };

  

  // Detach event listeners
  unsubscribe = () => {
    window.removeEventListener("keyup", this.upHandler);
  };
  
}
export default class Input {

  handler:(event: KeyboardEvent)=> void

  constructor(_handler: (event: KeyboardEvent)=>void){
    this.handler = _handler
    window.focus()
    this.subscribe(this.handler)

  }

  
  subscribe(handler: (event: KeyboardEvent)=>void){
    window.addEventListener(
      "keyup", handler, false
    );
  }

  // Detach event listeners
  unsubscribe () {
    window.removeEventListener("keyup", this.handler);
  };
  
}
class board {
  constructor(props){
    //Initialize all the class variables here.
    this.squares = [];
    props.squares.forEach(e => {
      e.spacing = spacing;
      const square = new Square(e);
      this.squares.push(square);
    });
  }
  
  update(){
    //update the player's position from here.
    
  }
  
  render(){
    this.squares.forEach(e => {e.render()});
  }
}







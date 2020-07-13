class dice{
  constructor(){
    //this.location = createVector(x, y, size);
    this.values = [1, 2, 3, 4, 5, 6];
    this.location = createVector(235, 545);
    this.spacing = 500/13;
    this.changed = false;
    this.current = this.getRandom();
  }
  
  getRandom(){
    return random(this.values);
  }
  
  onclick(){
    var randomArray = [], currentRandom;
    for(var i = 0; i < 1000; i++){
      currentRandom = this.getRandom();
      this.current = currentRandom;
      randomArray.push(currentRandom);
      this.render();
    }
    this.current = random(randomArray);
    this.changed = true;
  }
  
  render(){
    push();
    fill('cyan');
    rect(this.location.x, this.location.y, this.spacing, this.spacing);
    fill(0);
    textSize(32);
    text(this.current, this.location.x+10, this.location.y+30);
    if(this.changed){
      textSize(256);
      text(this.current, 180, 300);
      setTimeout(()=>{this.changed = false;}, 600);
    }
    pop();
  }
}
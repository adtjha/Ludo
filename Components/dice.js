class dice{
  constructor(){
    //this.location = createVector(x, y, size);
    this.values = [1, 2, 3, 4, 5, 6];
    this.location = createVector(235, 545);
    this.spacing = 500/13;
    this.changed = false;
    this.current = 'D';
    this.show = true;
  }
  
  getRandom(){
    return random(this.values);
  }
  
  reset(){
    this.changed = false;
    this.current = 'D';
    this.show = true;
  }
  
  onclick(){
    this.show = false;
    var randomArray = [], currentRandom;
    for(var i = 0; i < 1000; i++){
      currentRandom = this.getRandom();
      this.current = currentRandom;
      randomArray.push(currentRandom);
    }
    this.current = random(randomArray);
    this.changed = true;
    setTimeout(()=>{this.show = true;}, 1000);
    
    if(this.current === 6){
      console.info("SIX")
    }
  }
  
  render(){
    push();
      if(this.show){
        fill('cyan');
        rect(this.location.x, this.location.y, this.spacing, this.spacing);
        fill(0);
        textSize(32);
        text(this.current, this.location.x+10, this.location.y+30);
      }
      if(this.changed){
        fill(0);
        textSize(256);
        text(this.current, 180, 300);
        setTimeout(()=>{this.changed = false;}, 600);
      }
    pop();
  }
}
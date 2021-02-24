class Stone {
    constructor(x, y) {
      var options = {
          'restitution':1.0,
          'friction':1.2,
          'density':2.0
      }
      this.body = Bodies.rectangle(x, y, 50,50, options);
      this.width = 90;               
      this.height = 120;
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;


      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("black");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };

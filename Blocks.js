class Block{
    constructor(x, y, width, height) {
        var options = {
            restitution:0.8,
            friction:1.0,
            density:1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility=255
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(5);
        stroke("yellow");
        fill(255);
        rect(0, 0, this.width, this.height);
        pop();
        if(this.body.speed < 10){
          var pos =this.body.position;
          var angle = this.body.angle;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          rectMode(CENTER);
          strokeWeight(5);
          stroke("yellow");
          fill(255);
          pop();
        }else{
          World.remove(world, this.body);
          push();
          this.visibility=this.visibility-1;
          rectMode(CENTER)
          tint(255,this.visibility);
          rect(this.body.position.x,this.body.position.y,30,40);
          pop();
        }
      }
}
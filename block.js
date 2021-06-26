class Block{
    constructor(x, y, width, height) {
        var options = {
              
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("box.png")
        World.add(world, this.body);
        this.Visiblity = 255;
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        if(this.body.speed < 3){
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width, this.height);
        pop();} 
        else{
          World.remove(world, this.body);
          push();
          translate(pos.x, pos.y);
          this.Visiblity = this.Visiblity - 5;
          tint(255,this.Visiblity);
          image(this.image, 0,0,this,width ,this.height);
          pop();
        }

      }
      score(){
        if (this.Visiblity < 0 && this.Visiblity > -55){
          score++;
        }
      }
}




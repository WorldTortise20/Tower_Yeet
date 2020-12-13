class Box{
    constructor(x,y,width,height){
        var options={
            isStatic: false,
            friction:1.0,
            density:0.2
        }
        
        this.x = x; 
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
                        }
        display()
        {
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
        }
}
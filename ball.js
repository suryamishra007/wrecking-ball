class Ball
{
    constructor(x,y,r,angle)
    {
        var option = {

            density:0.5,
            frictionAir:0.005

        }
        this.x = x
        this.y = y
        this.r = r
        this.angle = angle
        
        this.body = Bodies.circle(this.x,this.y,this.r/2,option)
        World.add(world,this.body)

    }
    display()
    {
        
     var pos = this.body.position;
     var angle = this.body.angle;
     push() 
     translate(pos.x,pos.y)
     rotate(angle)
     fill("gray")
     ellipse(0,0,this.r,this.r)
     pop() 
    }
}
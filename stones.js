class Stone{
    constructor(x,y)
    {
        var options ={
            'restitution': 0.8,
            'friction': 0.9,
            'density': 12
        }
        this.x = x;
        this.y = y;
        this.r = 20;

        this.body = Bodies.circle(this.x, this.y, (this.r-2)/2, options)
        World.add(world, this.body);
    
    }
    display()
    {
        var stonepos = this.body.position;
        push()
        translate(stonepos.x, stonepos.y);
        rectMode(CENTER)
        strokeWeight(4);
        stroke("black");
        fill("grey");
        ellipse(0,0,this.r,this.r);

        pop()
    }
}
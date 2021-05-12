class Iron{
    constructor(x,y)
    {
        var options ={
            'restitution': 0.8,
            'friction': 0.9,
            'density': 30,
        }
        this.x = x;
        this.y = y;
        this.width = 100;
        this.height = 100;

        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height, options)
        World.add(world, this.body);
    }
    display()
    {
        var ironpos = this.body.position

        push()
        translate(ironpos.x, ironpos.y);
        rectMode(CENTER)
        strokeWeight(4);
        stroke("black");
        fill("lightgrey");
        rect(0,0,this.width,this.height)

        pop()
    }
}
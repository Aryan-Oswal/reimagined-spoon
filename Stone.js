class Stone {
    
    constructor(x,y,radius){
        var options = {
            isStatic: false,
            restitution: 0.5,
            density: 0.6,
           
	}
        this.body = Bodies.circle(x, y, radius, options)
        this.image = loadImage('./stone.png') 
        this.radius = radius
        World.add(world , this.body)
    }
    display() {
        push()
        strokeWeight(0)
        var pos = this.body.position
        imageMode(CENTER)
        image(this.image , pos.x , pos.y , 100,100)
        ellipseMode(RADIUS)
        translate(pos.x, pos.y)
        pop()
    }
}
class Mango {
    
    constructor(x,y,radius){
        var options = {
            isStatic: true,
            restitution: 0.5,
            density: 0.6,
           
	}
        this.body = Bodies.circle(x, y, radius, options)
        this.radius = radius
        this.image = loadImage('./mango.png') 

        World.add(world , this.body)
    }
    display() {
        push()
        strokeWeight(0)
        var pos = this.body.position
        imageMode(CENTER)
        image(this.image , pos.x , pos.y , 30,30)

        ellipseMode(RADIUS)
        translate(pos.x, pos.y)
        pop()
    }
}
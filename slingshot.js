class Slingshot {
    constructor(bodyA, bodyB){
        var options = {
            bodyA:bodyA, 
            bodyB:bodyB,
            stiffness: 0.3,
            length: 20
        }

        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        var pa = this.sling.bodyA.position;
        var pb = this.sling.bodyB.position;
        strokeWeight(4);
        stroke("maroon");
        line(pa.x, pa.y, pb.x, pb.y);
    }
}
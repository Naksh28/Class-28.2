class Slingshot {
    constructor(bodyA, pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness: 0.3,
            length: 20
        }

        this.sling = Matter.Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.sling);
    }

    display(){
        if (this.sling.bodyA){
        var pa = this.sling.bodyA.position;
        var pb = this.pointB;
        strokeWeight(4);
        stroke("maroon");
        line(pa.x, pa.y, pb.x, pb.y);
        }
    }
    
    fly(){
        this.sling.bodyA = null;
    }
}
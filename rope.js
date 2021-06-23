class Rope {
    constructor(object) {
        this.object = object;

         this.constraint = Constraint.create(this.object);
         World.add(world, this.constraint);
    }

    display() {
        line(this.constraint.pointA.x, this.constraint.pointA.y, this.constraint.bodyB.position.x, this.constraint.bodyB.position.y);
    }
}
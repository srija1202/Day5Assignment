class Circle {
    constructor() {
            this.radius = 1.0;
            this.color = "red";
    }
    getRadius() {
        return this.radius;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
    toString() {
        return `Circle[radius=${this.radius.toFixed(1)}, color=${this.color}]`;
    }
}

let circle = new Circle();
circle.setColor("green");
console.log(circle.getArea());
console.log(circle.getCircumference());
console.log(circle.getColor());
console.log(circle.toString());
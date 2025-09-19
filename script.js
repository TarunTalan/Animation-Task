const canvas = document.querySelector("canvas");
const c = canvas.getContext('2d');
canvas.height = innerHeight;
canvas.width = innerWidth;





class Circle {
    constructor(x, y, dx, dy, r) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.r = r;
    }
    makeCircle() {
        c.fillStyle = "blue";
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        c.fill();
    }
    updateCircle() {
        if ((this.x + this.r >= innerWidth) || (this.x <= this.r)) {
            this.dx = -this.dx;
        }
        if ((this.y + this.r >= innerHeight) || (this.y <= this.r)) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.makeCircle();
    }
}

let numCircles = 100;
const circleArr = [];
for (let i = 0; i < numCircles; i++) {
    let r = 20;
    let x = Math.random() * (innerWidth - 2 * r) + r;
    let y = Math.random() * (innerHeight - 2 * r) + r;
    let dx = (Math.random() - 0.5) * 2;
    let dy = (Math.random() - 0.5) * 2;
    circleArr.push(new Circle(x, y, dx, dy, r));
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    circleArr.forEach(circle => {
        circle.updateCircle();
    });
}
animate();
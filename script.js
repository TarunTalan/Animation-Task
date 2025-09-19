const canvas = document.querySelector("canvas");
const c = canvas.getContext('2d');
canvas.height = innerHeight;
canvas.width = innerWidth;

const color = [
    "blue",
    "red",
    "yellow",
    "green",
    "black"
]

const mouse = {};
window.addEventListener('mousemove', function (event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
    console.log(mouse);
})

class Circle {
    constructor(x, y, dx, dy, r) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.r = r;
        this.rMin = r;
        this.rMax = (r + 2.3) * (12 + (Math.random()));
        this.color = color[Math.floor(Math.random() * color.length)];

    }
    makeCircle() {
        c.fillStyle = this.color;
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
        if (Math.abs(mouse.x - this.x) < 40 &&
            Math.abs(mouse.y - this.y) < 40 &&
            this.r < this.rMax) {
            this.r += 1;
        }
        else {
            if (this.r > 2) {
                this.r -= 1;
            }
        }
        this.makeCircle();
    }
}

let numCircles = 1000;
const circleArr = [];
for (let i = 0; i < numCircles; i++) {
    let r = 2 * Math.random() + 0.5;
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
const canvas = document.querySelector("canvas");
const c = canvas.getContext('2d');
canvas.height = innerHeight;
canvas.width = innerWidth;

const gravity = 1;
const friction = 0.95;
const color = [
    "rgba(0, 0, 255,0.7)",
    "rgba(0, 255, 0,0.7)",
    "rgba(255, 0, 0,0.7)",
    "rgba(131, 150, 150, 0.7)",
    "rgba(255, 255, 0, 0.7)"
]

class Ball {
    constructor(x, y, dx, dy, r) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.r = r;
        this.color = color[Math.floor(Math.random() * color.length)];
    }
    makeBall() {
        c.fillStyle = this.color;
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        c.fill();
    }
    updateBall() {
        if ((this.x + this.r + this.dx > innerWidth) || (this.x <= this.r)) {
            this.dx = -this.dx * friction;
        }
        if ((this.y + this.r + this.dy > innerHeight) || (this.y <= this.r)) {
            this.dy = -this.dy * friction;
        } else {
            this.dy += gravity;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.makeBall();
    }
}

let ballArr = [];
window.addEventListener('click', () => {
    ballArr = [];
    let numball = 400;
    for (let i = 0; i < numball; i++) {
        let r = randomNum(10, 20);
        let dx = randomNum(-2, 2);
        let dy = randomNum(0, 2);
        let x = randomNum(r, innerWidth - r);
        let y = randomNum(r + dy, innerHeight - 2 * r);
        ballArr.push(new Ball(x, y, dx, dy, r));
    }
});

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    ballArr.forEach(ball => {
        ball.updateBall();
    });
}
animate();

function randomNum(x, y) {
    return (x + (y - x) * Math.random());
}
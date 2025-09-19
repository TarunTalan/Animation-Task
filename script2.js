const canvas = document.querySelector("canvas");
const c = canvas.getContext('2d');
canvas.height = innerHeight;
canvas.width = innerWidth;

const gravity = 1;
const friction = 0.95;

class Ball {
    constructor(x, y, dx, dy, r) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.r = r;
    }
    makeBall() {
        c.fillStyle = "black";
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
        }else {
            this.dy += gravity;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.makeBall();
    }
}

let ball = new Ball(100,100,2,2,10);
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    ball.updateBall();
}
animate();
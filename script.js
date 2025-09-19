const canvas = document.querySelector("canvas");
const c = canvas.getContext('2d');
canvas.height = innerHeight;
canvas.width = innerWidth;


let x = Math.random() * innerWidth;
let y = Math.random() * innerHeight;
let dx = 2;
let dy = 2;
let r = 20;

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.fillStyle = "black";
    c.beginPath();
    c.arc(x, y, r, 0, 2 * Math.PI);
    c.fill();
    c.closePath();
    if((x+r >= innerWidth) || (x<=r)){
        dx = -dx;
    }
    if((y+r >= innerHeight) || (y<=r)){
        dy = -dy;
    }
    x += dx;
    y += dy;
}
animate();
const canvas = document.querySelector("canvas");
const c = canvas.getContext('2d');
const canvas_width = canvas.width = 600;
const canvas_height = canvas.height = 500;


const playerImage = new Image();
playerImage.src = "shadow_dog.png";
const spriteWidth = 575;
const spriteHeight = 523;

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.drawImage(playerImage,spriteWidth,spriteHeight,spriteWidth,spriteHeight,0,0,spriteWidth,spriteHeight);
}
animate();
const canvas = document.querySelector("canvas");
const c = canvas.getContext('2d');
const canvas_width = canvas.width = 600;
const canvas_height = canvas.height = 500;


const playerImage = new Image();
playerImage.src = "shadow_dog.png";
const spriteWidth = 575;
const spriteHeight = 523;
let FrameX = 0;
let FrameY = 0;
let gameFrame = 0;
let staggerFrames = 5;
const spriteAni = [];
const animationState = [
    {
        name: 'idle',
        frames: 7
    },
    {
        name: 'jump',
        frames: 7
    }
];
animationState.forEach((state,indx)=>{
    let frames = {
        loc:[],
    }
    for (let i = 0; i < state.frames; i++) {
        let positionX = i*spriteWidth;
        let positionY = indx*spriteHeight;
        frames.loc.push({
            x: positionX,
            y: positionY
        })
    }
    spriteAni[state.name] = frames;
})
console.log(spriteAni);

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    let position = Math.floor(gameFrame / staggerFrames) % 6;
    FrameX = spriteWidth * position;
    c.drawImage(playerImage, FrameX, FrameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    gameFrame++;

}
animate();
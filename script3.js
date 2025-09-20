const canvas = document.querySelector("canvas");
const c = canvas.getContext('2d');
const canvas_width = canvas.width = 600;
const canvas_height = canvas.height = 600;

let playerState = 'idle';
const dropdown = document.querySelector(".select-anime");
dropdown.addEventListener('change', function(e){
    playerState = e.target.value;
})


const playerImage = new Image();
playerImage.src = "shadow_dog.png";
const spriteWidth = 575;
const spriteHeight = 523;
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
        frames: 7,
    },
    {
        name: 'fall',
        frames: 7,
    },
    {
        name: 'run',
        frames: 9,
    },
    {
        name: 'dizzy',
        frames: 11,
    },
    {
        name: 'sit',
        frames: 5,
    },
    {
        name: 'roll',
        frames: 7
    },
    {
        name: 'bite',
        frames: 7
    },
    {
        name: 'ko',
        frames: 12,
    },
    {
        name: 'getHit',
        frames: 4,
    },
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
    let position = Math.floor(gameFrame / staggerFrames) % spriteAni[playerState].loc.length;
    let FrameX = spriteWidth * position;
    let FrameY = spriteAni[playerState].loc[position].y
    c.drawImage(playerImage, FrameX, FrameY , spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    gameFrame++;

}
animate();
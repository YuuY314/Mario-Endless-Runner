const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");
const game = document.querySelector(".game");
const menu = document.querySelector(".menu-container");
const gameOver = document.querySelector(".game-over-container");
const score = document.querySelector(".score");
let numScore = 0;

const playBtn = document.querySelector("#play-btn");

playBtn.addEventListener("click", () => {
    game.classList.toggle("blur");
    pipe.classList.add("pipe-animation");
    clouds.classList.add("clouds-animation");
    menu.classList.add("hide");

    const loop = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const cloudsPosition = clouds.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");
        score.textContent = numScore++;
        if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 100){
            pipe.style.animation = "none";
            pipe.style.left = `${pipePosition}px`;
    
            clouds.style.animation = "none";
            clouds.style.left = `${cloudsPosition}px`;
    
            mario.style.animation = "none";
            mario.style.bottom = `${marioPosition}px`;
    
            mario.src = "img/game-over.png";
            mario.style.width = "75px";
            mario.style.marginLeft = "50px";
    
            clearInterval(loop);
            gameOver.classList.remove("hide");
        }
    }, 10);
});

const jump = () => {
    mario.classList.add("jump");

    setTimeout(() => {
        mario.classList.remove("jump");
    }, 500);
};

document.addEventListener("keydown", jump);
// 해결하지 못한문제
// 1. 타이머 부분이 동작을 이상하게함..(중시했다가 실행했다가 하면 2초씩 감소되거나 엄청빨리시간이감소됨)

const footer = document.querySelector('.footer');
const score = document.querySelector('.header__score');
const popup = document.querySelector('.footer__popup');
const restartBtn = document.querySelector('.footer__popup__restart');
const result = document.querySelector('.footer__popup__result');
const startBtn = document.querySelector('.gameBtn');
const timer = document.querySelector('.header__timer');


const footerWidth = footer.clientWidth;
const footerHeight = footer.clientHeight;
let remainCount = 10;   //carrot number
let time = 10;
let countDown;

startBtn.addEventListener('click',()=>{
    // 시작기능
    if(!startBtn.classList.contains('stopBtn')){
        gameStart();
        startBtn.innerHTML='<i class="fas fa-stop"></i>';
        startBtn.classList.add('stopBtn');
    }else{
        // 중지기능
        startBtn.innerHTML='<i class="fas fa-play"></i>';
        startBtn.classList.remove('stopBtn');
        removeAllCharacter();
        gameOver();
        
    }
    
    
})
// overTime

// footer click event
footer.addEventListener('click',(e)=>{
    if(e.target.className === 'bug'){
        // result text
        result.innerHTML='YOU LOST';
        gameOver();
    }else if(e.target.className === 'carrot'){
        deleteThis(e.target);
        if(remainCount == 0){
            // result text
            result.innerHTML='YOU WIN👍';
            gameOver();
        }
    }
});

restartBtn.addEventListener('click',()=>{
    removeAllCharacter();
    gameStart();
    popup.style.display = 'none';
});


function deleteThis(e){
    e.remove();
    decreasePoint();
    updateCount();
}

function decreasePoint(){
    remainCount -=1;
}

function updateCount(){
    score.innerHTML = remainCount;
}

function gameOver(){
    // 1.show popup
    popup.style.display = 'flex';
    // 2.stop time
    clearInterval(countDown);
    // 3.stop carrot click event
}

function gameStart(){
    // 1.Make 5 bug and 10 carrot randomly
    time =10;
    remainCount = 10;
    updateCount();
    createBug(10);
    createCarrot(10);
    setTimer();
    countDown = setInterval(setTimer,1000);
    
    // 2.Set time
    // 3.Reset remainCount
    // 4.remove remain imgs 
    
}


function createCarrot(number){
    for(let i=0;i<number;i++){
    const carrot = document.createElement('img');
    carrot.setAttribute('src','img/carrot.png');
    carrot.setAttribute('class','carrot');
    footer.appendChild(carrot)
    // set Position
    carrot.style.top = `${createRandomHeight(carrot)}px`;
    carrot.style.left = `${createRandomWidth(carrot)}px`;
    }
}


function createBug(number){
    for(let i=0;i<number;i++){
        const bug = document.createElement('img');
        bug.setAttribute('src','img/bug.png');
        bug.setAttribute('class','bug');
        footer.appendChild(bug)
        // set Position
        bug.style.top = `${createRandomHeight(bug)}px`;
        bug.style.left = `${createRandomWidth(bug)}px`;
    }
}

function createRandomWidth(imgSize){
    const thisSize = footerWidth - imgSize.naturalWidth;
    // n =  0 ~ footer width-1
    const n = Math.floor(Math.random() * thisSize);
    return n;
}

function createRandomHeight(imgSize){
    const thisSize = footerHeight - imgSize.naturalHeight;
    // n =  0 ~ footer height-1
    const n = Math.floor(Math.random() * thisSize);
    return n;
}

function removeAllCharacter(){
    const imgs = document.querySelectorAll('img');
    imgs.forEach((img)=>{
        img.remove();
    })
}

function setTimer(){
    timer.innerHTML=`00:${time}`;
    time -=1;
    // -1 is stop
    if(time <= -1){
        result.innerHTML='YOU LOST';
        gameOver();
    }
    
}
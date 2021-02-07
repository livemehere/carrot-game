// footer click event
const footer = document.querySelector('.footer');
const score = document.querySelector('.header__score');
const popup = document.querySelector('.footer__popup');
const footerWidth = footer.clientWidth;
const footerHeight = footer.clientHeight;
let remainCount = 10;   //carrot number

gameStart();

footer.addEventListener('click',(e)=>{
    if(e.target.className === 'bug'){
        gameOver();
        console.log('im bug');
    }else if(e.target.className === 'carrot'){
        deleteThis(e.target);
        console.log('im carrot');
    }
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
    // 3.stop carrot click event
}

function gameStart(){
    // 1.Make 5 bug and 10 carrot randomly
    createBug(10);
    createCarrot(10);
    // 2.Set time
    // 3.Reset remainCount
}


function createCarrot(number){
    for(let i=0;i<number;i++){
    const carrot = document.createElement('img');
    carrot.setAttribute('src','img/carrot.png');
    carrot.setAttribute('class','carrot');
    // console.log(carrot);
    footer.appendChild(carrot)
    // set Position
    carrot.style.top = `${createRandomHeight(carrot)}px`;
    carrot.style.left = `${createRandomWidth(carrot)}px`;
    // console.log(carrot.clientWidth)
    }
}


function createBug(number){
    for(let i=0;i<number;i++){
        const bug = document.createElement('img');
        bug.setAttribute('src','img/bug.png');
        bug.setAttribute('class','bug');
        // console.log(bug);
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
    console.log(thisSize)
    return n;
}

function createRandomHeight(imgSize){
    const thisSize = footerHeight - imgSize.naturalHeight;
    // n =  0 ~ footer height-1
    const n = Math.floor(Math.random() * thisSize);
    console.log(thisSize)
    return n;
}


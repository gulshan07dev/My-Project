const prevBtn = document.getElementById('prev');
const nextbtn = document.getElementById('next');
const displayImg = document.querySelector('img');

const imageSrc = ['./assests/nature1.jpeg', './assests/nature2.jpeg', './assests/nature3.jpeg', './assests/nature4.jpeg', './assests/nature5.webp'];

let curIdx = 0;

displayImg.src = imageSrc[curIdx];

nextbtn.addEventListener("click", () => {
    if(curIdx < imageSrc.length-1) {
        curIdx += 1;
        displayImg.src = imageSrc[curIdx];
    }
    else {
        curIdx = 0;
        displayImg.src = imageSrc[curIdx];
    }
})

prevBtn.addEventListener("click", () => {
    if(curIdx > 0 && curIdx < imageSrc.length) {
        curIdx -= 1;
        displayImg.src = imageSrc[curIdx];
    }
    else {
        curIdx = imageSrc.length-1;
        displayImg.src = imageSrc[curIdx];
    }
})
const buttonPrev = document.getElementById ("prev");
const buttonNext = document.getElementById ("next");
const imgEl = document.querySelector(".bgcardimg")
const imgs = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];
const min1 = document.getElementById ("min1");
const min2 = document.getElementById ("min2");
const min3 = document.getElementById ("min3");
const min4 = document.getElementById ("min4");
const min5 = document.getElementById ("min5");
const miniature = [min1, min2, min3, min4, min5]
let imgCount = 0; 
imgEl.src = imgs[imgCount];
miniature[imgCount].classList.add ("selected-min")



buttonNext.addEventListener("click", function(){
    if (imgCount == (imgs.length - 1)){
        miniature[imgCount].classList.remove ("selected-min")
        imgCount = 0;
        imgEl.src = imgs[imgCount]
        miniature[imgCount].classList.add ("selected-min")


    }else{ 
        miniature[imgCount].classList.remove ("selected-min")
        imgCount = imgCount + 1
        imgEl.src = imgs[imgCount]
        miniature[imgCount].classList.add ("selected-min")
    }
    
   

    
});
buttonPrev.addEventListener("click", function(){
    if(imgCount == 0){
        miniature[imgCount].classList.remove ("selected-min")
        imgCount = imgs.length - 1
        imgEl.src = imgs[imgCount]
        miniature[imgCount].classList.add ("selected-min")
    }else{
        miniature[imgCount].classList.remove ("selected-min")
        imgCount = imgCount - 1
        imgEl.src = imgs[imgCount]
        miniature[imgCount].classList.add ("selected-min")
    }

     
});
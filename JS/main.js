const buttonPrev = document.getElementById ("prev");
const buttonNext = document.getElementById ("next");
const imgEl = document.querySelector(".bgcardimg")
const imgs = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];
let imgCount = 0; 
imgEl.src = imgs[imgCount]
console.log(imgs.length);
buttonNext.addEventListener("click", function(){
    if (imgCount == (imgs.length - 1)){
        imgCount = 0;
        imgEl.src = imgs[imgCount]


    }else{ 
        imgCount = imgCount + 1
        imgEl.src = imgs[imgCount]
    }
    
   

    
});
buttonPrev.addEventListener("click", function(){
    if(imgCount == 0){
        imgCount = imgs.length - 1
        imgEl.src = imgs[imgCount]
    }else{
        imgCount = imgCount - 1
        imgEl.src = imgs[imgCount]
    }

     
});
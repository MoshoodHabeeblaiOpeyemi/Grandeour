




 var nav=document.querySelector(".overlay");
 function openNav(){nav.style.height=("100%");}
 function closeNav(){nav.style.height=("0%");}

 const sliderContainer=document.querySelector(".slider-container");
 const imageWidth=document.querySelector(".slider-container img").clientWidth;


 function slideshow(){
     let offset = 0;
     setInterval(function(){
         offset-=imageWidth;
         if(offset<= -sliderContainer.clientWidth){
             offset=0;
         }
         sliderContainer.style.transform='translateX(' + offset + 'px)';
     },3000);
 }

 slideshow();







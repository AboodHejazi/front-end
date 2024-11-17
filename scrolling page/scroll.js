let stars = document.querySelector('.stars');
let moon = document.querySelector('.moon');
let mountaines3 = document.querySelector('.mountaines3');
let mountaines4 = document.querySelector('.mountaines4');
let river = document.querySelector('.river');
let boat = document.querySelector('.boat');
let academy = document.querySelector('.academy');

window.onscroll = function() {
    let value = scrollY ;
    let sec = document.querySelector('.main');
   stars.style.left =  value +'px';
   moon.style.top = value * 4 +'px';
   mountaines3.style.top = value * 1.5  +'px';
   mountaines4.style.top = value * 1.2 +'px';
   river.style.top = value  +'px';
   boat.style.top = value  +'px';
   boat.style.left = value * 3 + 'px';
if(value >= 127)
    sec.style.background = 'linear-gradient(#376281 , #10001f)';
    else
    sec.style.background = 'linear-gradient(#200016 , #10001f)';
  
}
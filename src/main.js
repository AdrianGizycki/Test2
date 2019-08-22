import "./styles.css";

const square = document.createElement('div');
document.body.appendChild(square);
let grow = true; // flaga
let size = 10;
square.style.width = size + 'px';
square.style.height = size + 'px';

//maksymalna wielkość kwadratu
// widnow.innerWidth * 0.5

window.addEventListener('scroll', function(){
  
  if (size >= window.innerWidth / 2){
    grow =!grow;
  } else if (size <= 0) {
    grow = !grow
  }
  if(grow) {
    size += 5; 
    square.style.width = size + 100 + "px";
    square.style.height = size + 100 + "px";
  } else {
    size -= 5;
    square.style.width = size + 100 + "px";
    square.style.height = size + 100 + "px";
  }
  
})
let card = document.getElementsByClassName("card");
let centerX = window.innerWidth / 2;
let centerY = window.innerHeight / 2;
let distanceToMouseX, distanceToMouseY;
document.addEventListener('mousemove', event => {
    distanceToMouseX = (event.clientX - centerX) / 20;
    distanceToMouseY = (event.clientY - centerY) / -20 ;
    Array.from(card).forEach(element => element.style.transform = `perspective(1000px) rotateY(${distanceToMouseX}deg) rotateX(${distanceToMouseY}deg)`);
});
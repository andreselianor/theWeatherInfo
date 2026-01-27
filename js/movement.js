let card = document.getElementsByClassName("card")[0];
let centerX = window.innerWidth / 2;
let distanceToMouse;
document.addEventListener('move', event => {
    distanceToMouse = (event.clientX - centerX) / 20;
    card.style.transform = `perspective(1000px); rotateY(${distanceToMouse}deg);`
});
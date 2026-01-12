let splashIcon = document.getElementById("animationLogo");
function animateLogo() {
    let count = 1;
    setInterval(() => {
        if (count < 11) {
            splashIcon.src = "./media/icons/animation/animation" + count + ".png";
            count++;
        }
        if (count >= 11) {
            window.open("./html/home.html", "_self");
        }
    }, 400);
}

animateLogo();
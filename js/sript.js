const img = document.querySelector(".img");
const social = document.querySelector('.social');

function clickImg() {
    img.classList.add('animation')
    social.classList.add('social-animation')

    clickImg()
}

function backImg() {

    img.classList.remove('animation');
    social.classList.remove('social-animation');
    backImg()
}


img.addEventListener('click', clickImg)
img.addEventListener('dblclick', backImg)

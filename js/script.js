
const burger = document.getElementById('burger');
const cancel = document.getElementById('cancel');
const menu = document.getElementById('menu');
const black_bg = document.getElementById('black_bg');

burger.onclick = () => {
    menu.style.right = "0";
    black_bg.style.display = "block";
    menu.style.display = "block"
}
cancel.onclick = () => {
    menu.style.right = "-100%";
    black_bg.style.display = "none";
}
black_bg.onclick = () => {
    menu.style.right = "-100%";
    black_bg.style.display = "block";
}
// eye.onclick = () => {
//     if(eye.checked) {
//         pass.setAttribute("type", "text")
//     } else {
//         pass.setAttribute("type", "password")
//     }
// }
const button = document.getElementById('button');
const popup = document.getElementById('popup');
const dark = document.getElementById('dark');
const close = document.getElementById('close');

button.onclick = () => {
    popup.style.display = "block"
    dark.style.display = "block"
}
dark.onclick = () => {
    dark.style.display = "block"
}
dark.onclick = () => {
    dark.style.display = "block"
    popup.style.display = "none"
    dark.style.display = "none"
}
close.onclick = () => {
    popup.style.display = "none"
    dark.style.display = "none"
}
const chest = document.getElementById('chest');

document.querySelectorAll('figure picture img').forEach(function(img){
    img.addEventListener('click', function(e){
        e.preventDefault();
        document.getElementById('popup-img').src = img.src;
        document.getElementById('img-popup').style.display = 'flex';
    });
});

document.getElementById('img-popup').addEventListener('click', function(e){
    if(e.target === this){
        this.style.display = 'none';
        chest.style.display = "none";
    }
});




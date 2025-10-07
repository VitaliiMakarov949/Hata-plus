
const burger = document.getElementById('burger');
const cancel = document.getElementById('cancel');
const menu = document.getElementById('menu');
const black_bg = document.getElementById('black_bg');

burger.onclick = () => {
    menu.style.right = "0";
    black_bg.style.display = "block";
    document.body.classList.add('menu-open');
}
cancel.onclick = () => {
    menu.style.right = "-100%";
    black_bg.style.display = "none";
    document.body.classList.remove('menu-open');
}
black_bg.onclick = () => {
    menu.style.right = "-100%";
    black_bg.style.display = "block";
    document.body.classList.remove('menu-open');
}
eye.onclick = () => {
    if(eye.checked) {
        pass.setAttribute("type", "text")
    } else {
        pass.setAttribute("type", "password")
    }
}
const button = document.getElementById('button');  
const popup = document.getElementById('popup');       
const close = document.getElementById('close');      
const dark = document.getElementById('dark');  

button.onclick = () => {
    popup.style.right = "0"
    popup.style.display = "block"
}
dark.onclick = () => {
    popup.style.right = "-100%";
    dark.style.display = "block";
    text.value = pageText.title
}

close.onclick = () => {
    close.style.right = "-100%"
    close.style.display = "block"
}




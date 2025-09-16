

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
    black_bg.style.display = "none";
    document.body.classList.remove('menu-open');
}

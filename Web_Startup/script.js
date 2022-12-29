let header = document.querySelector('.header__menu__sub')
let menu = document.getElementById('#menu--btn');
document.querySelector('#menu--btn').onclick = ()=>{
    header.classList.toggle('active');
    menu.style.transform="translate(50px, 100px)"
}


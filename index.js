const botaoMenu = document.querySelector('.cabecalho-lateral')
const menu = document.querySelector('menu-lateral')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral')
})
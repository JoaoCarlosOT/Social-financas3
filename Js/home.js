var menuAberto = false;

const abrirMenu = () => {
    if (!menuAberto) { 
        var menu = document.querySelector('.navbar');
        menu.style.left = '0';
        menu.style.transition = '.5s ease-in-out';
        menuAberto = true;
    }
};

const fecharMenu = () => {
    if (menuAberto) { 
        var menu = document.querySelector('.navbar');
        menu.style.left = '-300px';
        menu.style.transition = '.4s';
        menuAberto = false;
    }
};

const mudarTemaEscuro = () => {

    var detailsList = document.querySelectorAll(".details");

    detailsList.forEach((detail) => {
        detail.classList.toggle('dark');
        detail.classList.toggle('title-dark');
    });

    var tagWhite = document.querySelector('.box');
    tagWhite.classList.toggle('dark');

    var section = document.querySelector('#curiosidades');
    section.classList.toggle('dark');

    var titleSection = document.querySelector('.title-curiosidades');
    titleSection.classList.toggle('title-dark');

    var tagWhite = document.querySelector('.title-box');
    tagWhite.classList.toggle('dark');
    tagWhite.classList.toggle('title-dark');

    var article = document.getElementsByTagName("article")[0];
    article.classList.toggle('dark-verde');

    var header = document.getElementsByTagName("header")[0];
    header.classList.toggle('dark-verde');

    var button = document.getElementsByTagName("button")[0];
    button.classList.toggle('button-white');

    var p = document.querySelector('.p-footer');
    p.classList.toggle('dark-verde');

    var footer = document.getElementsByTagName("footer")[0];
    footer.classList.toggle('dark-verde');

    document.body.classList.toggle('dark');

    const iconMoon = document.querySelector('#icon-moon');
    const iconSun = document.querySelector('#icon-sun');

    const isDarkMode = document.body.classList.contains('dark');

    iconMoon.style.display = isDarkMode ? 'none' : 'inline';
    iconSun.style.display = isDarkMode ? 'inline' : 'none';
    
    var cardshome = document.querySelectorAll('.containers');
    var textcards = document.querySelectorAll('.textcards');
    cardshome.forEach((detail) => {
        detail.classList.toggle('containersdark');
        detail.classList.toggle('whitecc');
    });
    textcards.forEach((detail) => {
        detail.classList.toggle('whitecc');
    });
};

document.getElementById("toggle-navbar").addEventListener("click", mudarTemaEscuro);
document.querySelector('.button').addEventListener("click", mudarTemaEscuro);
document.querySelector('.abrir-btn').addEventListener("click", abrirMenu);
document.querySelector('.fechar-btn').addEventListener("click", fecharMenu);

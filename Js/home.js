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
    var tagWhite = document.querySelector('.box');
    tagWhite.style.background = '#2D2B2B';

    var section = document.querySelector('#curiosidades');
    section.style.background = '#2D2B2B';

    var titleSection = document.querySelector('.title-curiosidades');
    titleSection.style.color = 'white';

    var tagWhite = document.querySelector('.title-box');
    tagWhite.style.background = '#2D2B2B';
    tagWhite.style.color = 'white';

    var article = document.getElementsByTagName("article")[0];
    article.style.background = '#10482E';

    var header = document.getElementsByTagName("header")[0];
    header.style.background = '#10482E';

    var button = document.getElementsByTagName("button")[0];
    button.style.background = '#fff';

    var iconsun = document.querySelector('#icon-sun');
    iconsun.style.display = 'inline';

    var iconmoon = document.querySelector('#icon-moon');
    iconmoon.style.display = 'none';

    var footer = document.getElementsByTagName("footer")[0];
    footer.style.background = '#10482E';

    var p = document.querySelector('.p-footer');
    p.style.background = '#10482E';
};

addEventListener("click", mudarTema);

document.querySelector('.abrir-btn').addEventListener("click", abrirMenu);
document.querySelector('.fechar-btn').addEventListener("click", fecharMenu);

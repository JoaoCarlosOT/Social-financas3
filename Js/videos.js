const mudarTemaEscuroVideos = () => {
    var navvideos = document.querySelector('.nav-videos');
    var sectionvideos = document.querySelector('.section-videos');
    var divallvideos = document.querySelector('.div-all-videos');
    var divmainduração = document.querySelector('.div-main-duração');
    var barradenav = document.querySelector('.barra-de-nav');
    var h2info = document.querySelector('.h2-info');
    var letrasbarnav = document.querySelectorAll('.letras-bar-nav');
    var imgbarradenav = document.querySelectorAll('.img-barra-de-nav');

    divallvideos.classList.toggle('title-dark');
    divallvideos.classList.toggle('dark');
    sectionvideos.classList.toggle('dark');
    navvideos.classList.toggle('dark-verde');
    divmainduração.classList.toggle('darkmode0');
    barradenav.classList.toggle('darkmode0');
    h2info.classList.toggle('title-dark');

    letrasbarnav.forEach(ttext => {
        ttext.classList.toggle('title-dark');
    });
    imgbarradenav.forEach(ttext => {
        ttext.classList.toggle('ttext');
    });

    var areatext = document.querySelectorAll('.h2-contabilidade-videos');
    var teamtext = document.querySelectorAll('.p-video-contabilidade');
    teamtext.forEach(ttext => {
        ttext.classList.toggle('title-dark');
    });
    areatext.forEach(atext => {
        atext.classList.toggle('title-dark');
    });
    

    var header = document.getElementsByTagName("header")[0];
    header.classList.toggle('dark-verde');

    var button = document.getElementsByTagName("button")[0];
    button.classList.toggle('button-white');

    var p = document.querySelector('.p-footer');
    p.classList.toggle('dark-verde');

    var footer = document.getElementsByTagName("footer")[0];
    footer.classList.toggle('dark-verde');

    const iconMoon = document.querySelector('#icon-moon');
    const iconSun = document.querySelector('#icon-sun');

    const isDarkMode = document.body.classList.contains('dark');

    iconMoon.style.display = isDarkMode ? 'inline' : 'none';
    iconSun.style.display = isDarkMode ? 'none' : 'inline';

    var body = document.querySelector('.body');
    document.body.classList.toggle('title-dark');
    document.body.classList.toggle('dark');
};

document.getElementById("toggle-navbar").addEventListener("click", mudarTemaEscuroVideos);
document.querySelector('.button').addEventListener("click", mudarTemaEscuroVideos);
document.querySelector('.abrir-btn').addEventListener("click", abrirMenu);
document.querySelector('.fechar-btn').addEventListener("click", fecharMenu);
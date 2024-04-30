const mudarTemaEscuroVideos = () => {
    var body = document.querySelector('.body');
    body.style.background = '#2D2B2B';
    body.style.color = 'white';

    var sectionvideos = document.querySelector('#section-videos');
    var divallvideos = document.querySelector('#div-all-videos');
    divallvideos.style.color = 'white';
    divallvideos.style.background = '#2D2B2B';
    sectionvideos.style.background = '#2D2B2B';

    var header = document.getElementsByTagName("header")[0];
    header.style.background = '#10482E';

    var iconsun = document.querySelector('#icon-sun');
    iconsun.style.display = 'inline';

    var iconmoon = document.querySelector('#icon-moon');
    iconmoon.style.display = 'none';

    var footer = document.getElementsByTagName("footer")[0];
    footer.style.background = '#10482E';

    var p = document.querySelector('.p-footer');
    p.style.background = '#10482E';

    var divmainduração = document.querySelector('#div-main-duração');
    var barradenav = document.querySelector('#barra-de-nav');
    var h2info = document.querySelector('#h2-info');
    var letrasbarnav = document.querySelectorAll('.letras-bar-nav');
    var imgbarradenav = document.querySelectorAll('.img-barra-de-nav');
    divmainduração.style.background = '#FFFFFF';
    barradenav.style.background = '#FFFFFF';
    h2info.style.color = 'black';
    letrasbarnav.forEach(ttext => {
        ttext.style.color = 'black';
    });
    imgbarradenav.forEach(ttext => {
        ttext.style.filter = 'brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(308deg) brightness(99%) contrast(101%)';
    });

    var areatext = document.querySelectorAll('.h2-contabilidade-videos');
    var teamtext = document.querySelectorAll('.p-video-contabilidade');
    teamtext.forEach(ttext => {
        ttext.style.color = 'white';
    });
    areatext.forEach(atext => {
        atext.style.color = '#1AA744';
    });
};
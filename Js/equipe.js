const mudarTemaEscuroEquipe = () => {
    var body = document.querySelector('.body');
    body.style.background = '#2D2B2B';
    body.style.color = 'white';

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

    var teamtext = document.querySelectorAll('.team-text');
    var areatext = document.querySelectorAll('.area-text');
    teamtext.forEach(ttext => {
        ttext.style.color = 'white';
    });
    areatext.forEach(atext => {
        atext.style.color = '#5AF0A9';
    });
};
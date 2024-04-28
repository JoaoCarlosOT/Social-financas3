const mudarTemaEscuroEquipe = () => {
    var body = document.querySelector('.body');
    body.style.background = '#2D2B2B';
    body.style.color = 'white';

    var letters = document.querySelectorAll('.selectionseach');
    letters.forEach(ttext => {
        ttext.style.color = 'white';
    });

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
        atext.style.color = '#1AA744';
    });
};

const section = () => {
    var team1 = document.querySelector('.team1');
    var team2 = document.querySelector('.team2');
    var team3 = document.querySelector('.team3');
    var team4 = document.querySelector('.team4');
    var team5 = document.querySelector('.team5');
    setTimeout(() => {
        var sections = document.querySelectorAll('.selectionboxs');
        sections.forEach(section => {
            if(section.value == 1){
                if(section.checked){
                    team1.style.display = "flex";
                }else{
                    team1.style.display = "none";
                }
            }
            if(section.value == 2){
                if(section.checked){
                    team2.style.display = "flex";
                }else{
                    team2.style.display = "none";
                }
            }
            if(section.value == 3){
                if(section.checked){
                    team3.style.display = "flex";
                }else{
                    team3.style.display = "none";
                }
            }
            if(section.value == 4){
                if(section.checked){
                    team4.style.display = "flex";
                }else{
                    team4.style.display = "none";
                }
            }
            if(section.value == 5){
                if(section.checked){
                    team5.style.display = "flex";
                }else{
                    team5.style.display = "none";
                }
            }
        });
    }, 10);
}

var team1 = document.querySelector('.team1');
var sections = document.querySelectorAll('.selectionboxs');
sections.forEach(section => {
    if(section.value == 1){
        section.checked;
        team1.style.display = "flex";
    }
});
var team1 = document.querySelector('.team1');
var sections = document.querySelectorAll('.selectionboxs');
sections.forEach(section => {
    if(section.value == 1){
        section.checked;
        team1.style.display = "flex";
    }
});

const mudarTemaEscuroEquipe = () => {
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
    body.classList.toggle('title-dark');
    body.classList.toggle('dark');

    var letters = document.querySelectorAll('.selectionseach');
    letters.forEach(ttext => {
        ttext.classList.toggle('title-dark');
    });

    var teamtext = document.querySelectorAll('.team-text');
    var areatext = document.querySelectorAll('.area-text');
    teamtext.forEach(ttext => {
        ttext.classList.toggle('title-dark');
    });
    areatext.forEach(atext => {
        atext.classList.toggle('titled4rk');
    });
};

const section = () => {
    var team1 = document.querySelector('.team1');
    var team2 = document.querySelector('.team2');
    var team3 = document.querySelector('.team3');
    var team4 = document.querySelector('.team4');
    var team5 = document.querySelector('.team5');
    var team6 = document.querySelector('.team6');
    var team7 = document.querySelector('.team7');
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
            if(section.value == 6){
                if(section.checked){
                    team6.style.display = "flex";
                }else{
                    team6.style.display = "none";
                }
            }
            if(section.value == 7){
                if(section.checked){
                    team7.style.display = "flex";
                }else{
                    team7.style.display = "none";
                }
            }
        });
    }, 10);
}

document.getElementById("toggle-navbar").addEventListener("click", mudarTemaEscuroEquipe);
document.querySelector('.button').addEventListener("click", mudarTemaEscuroEquipe);
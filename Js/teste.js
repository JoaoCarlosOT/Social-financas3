
/*document.addEventListener("DOMContentLoaded", function() {
    var divDuvida = document.querySelector('.duvida');
    divDuvida.addEventListener('click', function() {
        this.classList.add('ativo');
    })
})


*/
const amplia = () => {
    var divDuvida = document.querySelector('.duvida');
    divDuvida.classList.toggle('ativo');
    
}


addEventListener("click", amplia);


document.addEventListener("DOMContentLoaded", function() {
    var divDuvida = document.querySelector('.duvida');
    divDuvida.addEventListener('click', function() {
        this.classList.toggle('ativo');
    })
})

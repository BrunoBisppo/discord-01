// Seleciona todos os botões de "like"
const likeButtons = document.querySelectorAll('.like-button');

// Adiciona um evento de clique para cada botão
likeButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Alterna a classe 'liked' no botão clicado
        this.classList.toggle('liked');
    });
});

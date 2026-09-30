let imagemAtual = 0;

function passarImagem() {

    const imagens = document.querySelector(".imagens");

    const totalImagens = document.querySelectorAll(".imagens img").length;

    imagemAtual++;

    if (imagemAtual >= totalImagens) {
        imagemAtual = 0;
    }

    imagens.style.transform =
        `translateX(-${imagemAtual * 800}px)`;
}

setInterval(passarImagem, 3000);
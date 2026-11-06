const acontecimentos = [

    {
        data: "2025",
        titulo: "Britoskt",
        texto: "Em 2025, nossos alunos receberam a visita especial do skatista e coordenador cultural Thales Brito (britoskt). Em um encontro dinâmico, ele compartilhou a história, os valores de superação do esporte e inspirou a garotada mostrando que o skate vai muito além das manobras: é arte, estilo de vida e comunidade.",
        imagem: "skatista.png"
    },

    {
        data: "Atividade anual",
        titulo: "Slam",
        texto: "O Slam Poético da Escola Estadual Culto à Ciência é uma das atividades anuais mais vibrantes e tradicionais do colégio. O projeto leva a força da poesia falada, da identidade e da resistência urbana para dentro do ambiente de uma escola centenária e histórica em Campinas.",
        imagem: "slam.png"
    },

    {
        data: "Desde 2025",
        titulo: "Escolha das eletivas.",
        texto: "Elas servem para tirar o aprendizado dos livros e levá-lo para a prática por meio de oficinas e debates. É a sua oportunidade de explorar novas áreas profissionais, desenvolver talentos e assumir o protagonismo do seu próprio projeto de vida.",
        imagem: "eletivas.png"
    },


];

let atual = 0;


/* ELEMENTOS DO HTML */

const imagem = document.getElementById("imagem");
const data = document.getElementById("data");
const titulo = document.getElementById("titulo");
const texto = document.getElementById("texto");

const anterior = document.getElementById("anterior");
const proximo = document.getElementById("proximo");

const pontos = document.querySelectorAll(".ponto");


/* MOSTRAR ACONTECIMENTO */

function mostrarAcontecimento() {

    data.textContent = acontecimentos[atual].data;

    titulo.textContent = acontecimentos[atual].titulo;

    texto.textContent = acontecimentos[atual].texto;

    imagem.src = acontecimentos[atual].imagem;


    /* ATUALIZA OS PONTOS */

    pontos.forEach(function(ponto, index) {

        ponto.classList.remove("ativo");

        if (index === atual) {
            ponto.classList.add("ativo");
        }

    });

}


/* BOTÃO ANTERIOR */

anterior.addEventListener("click", function() {

    atual--;

    if (atual < 0) {
        atual = acontecimentos.length - 1;
    }

    mostrarAcontecimento();

});


/* BOTÃO PRÓXIMO */

proximo.addEventListener("click", function() {

    atual++;

    if (atual >= acontecimentos.length) {
        atual = 0;
    }

    mostrarAcontecimento();

});
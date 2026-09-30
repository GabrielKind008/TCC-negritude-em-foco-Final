const acontecimentos = [

    {
        data: "1888",
        titulo: "Lei Áurea",
        texto: "Em 13 de maio de 1888, a Lei Áurea declarou extinta a escravidão no Brasil.",
        imagem: "imagens/lei-aurea.jpg"
    },

    {
        data: "1978",
        titulo: "Movimento Negro Unificado",
        texto: "Em 7 de julho de 1978, um ato público nas escadarias do Teatro Municipal de São Paulo marcou a apresentação pública do Movimento Negro Unificado.",
        imagem: "imagens/movimento-negro.jpg"
    },

    {
        data: "2003",
        titulo: "Lei 10.639",
        texto: "A Lei 10.639 tornou obrigatório o ensino de História e Cultura Afro-Brasileira nas escolas.",
        imagem: "imagens/lei-10639.jpg"
    },

    {
        data: "2011",
        titulo: "Dia da Consciência Negra",
        texto: "A Lei 12.519 instituiu oficialmente o Dia Nacional de Zumbi e da Consciência Negra, celebrado em 20 de novembro.",
        imagem: "imagens/consciencia-negra.jpg"
    },

    {
        data: "2023",
        titulo: "Feriado Nacional",
        texto: "A Lei 14.759 declarou o dia 20 de novembro como feriado nacional para a celebração do Dia Nacional de Zumbi e da Consciência Negra.",
        imagem: "imagens/feriado.jpg"
    }

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
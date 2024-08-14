const caixaPrincipal = document.querySelector(".principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        alternativas: [
            {
                texto: "Você gosta de cozinhar?",
            },
            {
                texto: "Você não gosta de cozinhar?",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Já tentou cozinhar sozinho?",
            },
            {
                texto: "Não tentei.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Já procurou receitas, aulas ou dicas de culinária na internet?",
            },
            {
                texto: "Nunca procurei isso.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Um bom lugar para encontrar recitas é o site 'Tudo Gostoso'.",
            },
            {
                texto: "Não tenho interesse em procurar em sites.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Pode procurar livros digitais ou fisícos em bibliotecas online.",
            },
            {
                texto: "Não tenho interesse em ler livros sobre culinária.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Você também pode pedir receitas  e dicas a uma 'IA'.",
            },
            {
                texto: "Não obrigado.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Espero que essas dicas tenham o ajudado.",
            },
            {
                texto: "Atualize a página para recomeçar.",
            }
        ]
    },

];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraAlternativas(){
    perguntaAtual = perguntas[atual];
    caixaAlternativas.textContent = "";

    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    atual++;
    mostraAlternativas();
}


mostraAlternativas();
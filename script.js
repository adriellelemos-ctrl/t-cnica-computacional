
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const telaInicial = document.querySelector(".tela-inicial");
const jogo = document.querySelector(".jogo");
const botaoIniciar = document.querySelector("#botao-iniciar");
const botaoReiniciar = document.querySelector("#botao-reiniciar");

// Lista de nomes aleatórios
const nomes = [
    "Gabriel",
    "Mariana",
    "Lucas",
    "Isabela",
    "Rafael",
    "Beatriz",
    "Pedro",
    "Sofia"
];

// Lista de perguntas e alternativas
const perguntas = [
    {
        enunciado: "Em 2049, NOME saiu da escola e encontrou uma tecnologia capaz de responder dúvidas, criar imagens e produzir áudios realistas. Qual seria sua primeira reação?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: [
                    "No início ficou com medo do que essa tecnologia poderia fazer.",
                    "Achou assustador pensar na velocidade com que a tecnologia está avançando."
                ]
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: [
                    "Quis descobrir como utilizar a Inteligência Artificial no dia a dia.",
                    "Pensou que a IA poderia ajudar em diversas tarefas da vida."
                ]
            }
        ]
    },

    {
        enunciado: "NOME descobriu que algumas empresas estão utilizando Inteligência Artificial para substituir trabalhadores. O que pensa sobre isso?",
        alternativas: [
            {
                texto: "Isso pode prejudicar muitas pessoas.",
                afirmacao: [
                    "Ficou preocupado com a possibilidade de muitas pessoas perderem seus empregos.",
                    "Acreditou que a sociedade precisa se preparar para as mudanças no mercado de trabalho."
                ]
            },
            {
                texto: "Novas oportunidades podem surgir.",
                afirmacao: [
                    "Pensou que novas profissões poderiam aparecer com o avanço da tecnologia.",
                    "Acreditou que aprender novas habilidades seria cada vez mais importante."
                ]
            }
        ]
    },

    {
        enunciado: "NOME percebeu que a Inteligência Artificial consegue criar imagens, músicas e textos. Qual seria sua opinião?",
        alternativas: [
            {
                texto: "É uma ferramenta incrível!",
                afirmacao: [
                    "Ficou impressionado com as possibilidades criativas da tecnologia.",
                    "Pensou que a IA poderia ajudar artistas e criadores a desenvolver novas ideias."
                ]
            },
            {
                texto: "É preciso ter cuidado.",
                afirmacao: [
                    "Ficou preocupado com a utilização de conteúdos falsos e informações manipuladas.",
                    "Percebeu que nem tudo produzido pela tecnologia deve ser considerado verdadeiro."
                ]
            }
        ]
    },

    {
        enunciado: "Uma escola decidiu utilizar Inteligência Artificial para ajudar os estudantes nas atividades. O que NOME faria?",
        alternativas: [
            {
                texto: "Utilizaria para aprender mais.",
                afirmacao: [
                    "Acreditou que a tecnologia poderia facilitar os estudos.",
                    "Percebeu que a IA poderia ser uma aliada na educação."
                ]
            },
            {
                texto: "Preferiria estudar sem depender dela.",
                afirmacao: [
                    "Pensou que os estudantes precisam desenvolver seu próprio raciocínio.",
                    "Acreditou que a tecnologia deve complementar o aprendizado, e não substituir o esforço pessoal."
                ]
            }
        ]
    },

    {
        enunciado: "Ao imaginar o futuro, NOME percebeu que a Inteligência Artificial estará presente em quase todos os lugares. O que considera mais importante?",
        alternativas: [
            {
                texto: "Criar regras para o uso da tecnologia.",
                afirmacao: [
                    "Concluiu que a Inteligência Artificial precisa ser utilizada com responsabilidade.",
                    "Pensou que a privacidade e a segurança das pessoas devem ser protegidas."
                ]
            },
            {
                texto: "Continuar desenvolvendo novas tecnologias.",
                afirmacao: [
                    "Acreditou que a inovação pode trazer soluções para problemas da humanidade.",
                    "Percebeu que o futuro dependerá das escolhas feitas no presente."
                ]
            }
        ]
    }
];

// Variáveis do jogo
let perguntaAtual = 0;
let afirmacoesSelecionadas = [];
let nomeEscolhido = "";

// Escolhe um elemento aleatório de uma lista
function escolherAleatorio(lista) {
    const numero = Math.floor(Math.random() * lista.length);
    return lista[numero];
}

// Inicia o jogo
function iniciarJogo() {
    perguntaAtual = 0;
    afirmacoesSelecionadas = [];
    nomeEscolhido = escolherAleatorio(nomes);

    telaInicial.hidden = true;
    caixaResultado.hidden = true;
    jogo.hidden = false;

    mostrarPergunta();
}

// Mostra as perguntas
function mostrarPergunta() {
    caixaAlternativas.innerHTML = "";

    if (perguntaAtual >= perguntas.length) {
        mostrarResultado();
        return;
    }

    const pergunta = perguntas[perguntaAtual];

    // Substitui a palavra NOME pelo nome escolhido aleatoriamente
    caixaPerguntas.textContent = pergunta.enunciado.replace(/NOME/g, nomeEscolhido);

    pergunta.alternativas.forEach((alternativa) => {
        const botao = document.createElement("button");

        botao.textContent = alternativa.texto;

        botao.addEventListener("click", () => {
            escolherAlternativa(alternativa);
        });

        caixaAlternativas.appendChild(botao);
    });
}

// Registra a alternativa escolhida
function escolherAlternativa(alternativa) {
    const afirmacao = escolherAleatorio(alternativa.afirmacao);

    afirmacoesSelecionadas.push(afirmacao);

    perguntaAtual++;

    mostrarPergunta();
}

// Mostra o resultado final
function mostrarResultado() {
    jogo.hidden = true;
    caixaResultado.hidden = false;

    textoResultado.textContent =
        "Em 2049, " + nomeEscolhido + " viveu uma experiência que mudou sua maneira de enxergar a Inteligência Artificial. " +
        afirmacoesSelecionadas.join(" ") +
        " No final, percebeu que o futuro da tecnologia depende das escolhas que fazemos hoje.";
}

// Botões de início e reinício
botaoIniciar.addEventListener("click", iniciarJogo);

botaoReiniciar.addEventListener("click", iniciarJogo);

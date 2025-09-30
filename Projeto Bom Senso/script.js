const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{
    enunciado: "Você está indo pra escola quando se depara com uma senhora com muitas compras de mercado tendo dificuldade para atrevesssar a rua, o que você faz?",
    alternativas:[
        {
        texto:"Ajudo ela!",
        afirmacao:"Você estava indo pra escola, se deparou com uma senhora tentando atravessar a rua, você a ajudou e foi recompensado com um bubalu,"
        },
        {
       texto:"Deixo ela sofrer porque não é problema meu.",
       afirmacao:"Você estava indo pra escola e viu uma senhora tendo dificuldade de atravessar a rua, você não quis ajudar ela, então viu ela ser atropelada por um uber celta.  ",
        }

    ]
},

{
    
        enunciado: "Após isso você continua seu caminho até encontar um carteira no chão, recheada de dinheiro, ao olhar para a esquerda você encontra o dono da carteira alegando que o dinheiro seria necessario para o tratamento de seu tio que tem gastrite, o que você faz? ",
        alternativas:[{
            texto:"devolvo a carteira pra ele!",
            afirmacao:" Após isso você continua seu caminho até que você encontrou um carteira recheada de dinheiro no chão, você encontrou o dono da carteira alegando que o dinheiro seria necessario para o tratamento de seu tio que tem gastrite, então você a devolveu pro respectivo dono que ficou muito feliz e te elogio.",
        },
        {        
           texto:"Devolvo a carteira sem nada porque não sou besta.",
           afirmacao:" Após isso você continua seu caminho até que você encontrou um carteira recheada de dinheiro no chão, você encontrou o dono da carteira alegando que o dinheiro seria necessario para o tratamento de seu tio que tem gastrite, mas, você a devolveu vazia, o dono deseperado, desabou a chorar no meio da rua.",
        }        
        ]
    },
    

    {
    
        enunciado: "Prosseguindo seu caminho você acha um grupo de estudantes zoando um colega deles que gostava de comer peixe, o que você faz?",
        alternativas:[
            {
            texto:"Eu entro no meio deles e os repreendo!",
            afirmacao:" Prosseguindo o seu caminho você encontrou um grupo de estudantes que estavam bullynando um colega deles por comer peixe, você decidiu ajudar o estudante repreendendo seus colegas, o estudante ficou feliz e disse que quando ele crescesse iria querer ser igual a você,",
            },
            {
            texto:"Dou risada junto com eles.",
            afirmacao:" Prosseguindo o seu caminho você encontrou um grupo de estudantes que estavam bullynando um colega deles por comer peixe, você decidiu rir do menino junto com eles, porque achou hilário chamar ele de comedor de peixe, o menino no entanto, dessistiu de todos os sonhos e de sua vida social. "
            }
        ]
    },
    
    {
    
        enunciado: "Depois de passar por esse grupo de estudantes você chega a sua aula de programação, onde encontra o professor de saco cheio dos alunos que não realizam o projeto, ele começa a cobrar os alunos por uma atividade, você fez?",
        alternativas:[
            {
            texto:"Sim eu fiz, mas,  ficou meia boca",
            afirmacao:" Depois que vooê passou pelo grupo de estudantes você chegou a sua aula de programação, onde o professor estava cobrando uma atividade que você fez mas não ficou tão boa, o professor sendo muito gente boa e compreensivo, te deu nota maxima pelo esforço.",
        },
        {
            texto:"Eu fiz , mas, ela fere os direitos humanos e não sei se é uma boa ideia mostrar pra ele.",
            afirmacao:" Depois que você passou pelo grupo de estudantes você chegou a sua aula de programação, onde o professor estava cobrando uma atividade que você fez, mas.... ele a achou ridícula, sem sentido e medíocre, mas no fianl você convenceu ele a te dar nota maxima pela audácia e originalidade. ",
        }
        ]
    },

    {
    
        enunciado: "Por fim, você volta pra casa, deita na cama e pensa se suas atitudes foram corretas, o que você acha?",
        alternativas:[
            {
            texto:"Talvez sim, mas sempre há espaço para melhorar",
            afirmacao:" Analisando suas respostas, concluie-se que no fim você quase fez tudo certo mas acredita que pode fazer melhor. Parabéns você tem uma quantidade considerável de bom senso!",
            },
        {
            texto:"Não me arrependo de nada!",
            afirmacao:" Analisando suas respostas, concluie-se que você não deveria estar vivendo em uma sociedade, pense nos seus erros e refaça o teste.",
        }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = " ";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
    }
    
    function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa.texto;
    botaoAlternativas.addEventListener("click",() => respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botaoAlternativas);
    }
     }

     function respostaSelecionada(opcaoSelecionada){
        const afirmacao = opcaoSelecionada. afirmacao;
        historiaFinal+= afirmacao+"";
        atual++;
        mostraPergunta();
     }


     function mostraResultado(){
        caixaPerguntas.textContent = "Resultado Final...";
        textoResultado. textContent = historiaFinal;
        caixaAlternativas.textContent = "";
     }
    
     mostraPergunta();
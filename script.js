document.getElementById("cagado").style.display = 'none';
document.getElementById("osga-moura").style.display = 'none';


var botao1 = document.getElementById("botao_cinzento");
var botao2 = document.getElementById("botao_castanho");
var botao3 = document.getElementById("botao_verde");
var frase = document.getElementById('pergunta1');

const escolhas = [];
const perguntas = ["De que cor é o seu animal?", "Why are we here, just to suffer?", "Who is Joe?"];
const perguntaescolhida = Math.floor(Math.random() * perguntas.length);

console.log(perguntaescolhida, perguntas[perguntaescolhida]);

function pergunta1(){
    frase.innerHTML = "De que cor é o seu animal?";
    botao1.innerHTML = "Cinzento";
    botao2.innerHTML = "Castanho";
    botao3.innerHTML = "Verde";
    botao1.onclick = function(){
        escolhas[0] = "Cinzento";
        console.log(escolhas);
        pergunta2();
       }
       
       botao2.onclick  = function(){
        escolhas[0] = "Castanho"
        console.log(escolhas);
        pergunta2();
       }
       
       botao3.onclick  = function(){
       escolhas[0] = "Verde"
       console.log(escolhas);
       pergunta2();
       }
}
function pergunta2(){
frase.innerHTML = "Why are we here, just to suffer?";
botao1.innerHTML = "Caralho";
botao2.innerHTML = "Tomas";
botao3.innerHTML = "Es *family friendly word*";
botao1.onclick = function(){
    escolhas[1] = "Caralho";
    console.log(escolhas[1]);
    pergunta3();
   }
   
   botao2.onclick  = function(){
    escolhas[1] = "Tomas"
    console.log(escolhas[1]);
    pergunta3();
   }
   
   botao3.onclick  = function(){
   escolhas[1] = "Es *family friendly word*"
   console.log(escolhas[1]);
   pergunta3();
   }
}
function pergunta3(){
    frase.innerHTML = "Who is Joe?";
    botao1.innerHTML = "O";
    botao2.innerHTML = "Menezes";
    botao3.innerHTML = "É *family friendly word*";
    botao1.onclick = function(){
        escolhas[2] = "O";
        console.log(escolhas[2]);
        pergunta1();
       }
       
       botao2.onclick  = function(){
        escolhas[2] = "Menezes"
        console.log(escolhas[2]);
        pergunta1();
       }
       
       botao3.onclick  = function(){
       escolhas[2] = "É *family friendly word*"
       console.log(escolhas[2]);
       pergunta1();
       }
    }

    //funcoes pergunta1, 2 e 3 são para chamar as perguntas e substituir a ordem destas. 
    //tambem guardam o valor no array Escolhas[]
    //depois metia-se um loop while(escolhas<=3) e no final apresentava um texto qualquer
    //este texto pegava nos valores do array e substituia or something

if(perguntas[perguntaescolhida] == perguntas[0])
{
pergunta1();
}

if(perguntas[perguntaescolhida] == perguntas[1])
{
pergunta2();
}

if(perguntas[perguntaescolhida] == perguntas[2])
{
pergunta3();
}





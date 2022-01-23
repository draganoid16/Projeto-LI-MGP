document.getElementById("cagado").style.display = "none";
document.getElementById("osga-moura").style.display = "none";
var textodoanimal = document.getElementById("textofinal");
var botao1 = document.getElementById("botao_cinzento");
var botao2 = document.getElementById("botao_castanho");
var botao3 = document.getElementById("botao_verde");
var frase = document.getElementById("pergunta1");

const escolhas = [];
const perguntas = [
  "De que cor é o seu animal?",
  "Os olhos movem-se autonomamente?",
  "Quantas pernas tem?",
  "O animal tem carapaça?",
  "Em que ambiente viu o animal?",
  "Viu-o em água",
];
//const perguntaescolhida = Math.floor(Math.random() * perguntas.length);

//console.log(perguntaescolhida, perguntas[perguntaescolhida]);
pergunta1();

function pergunta1() {
  frase.innerHTML = perguntas[0];
  botao1.innerHTML = "Cinzento";
  botao2.innerHTML = "Castanho";
  botao3.innerHTML = "Verde";
  botao1.onclick = function () {
    escolhas[0] = "Cinzento";
    console.log(escolhas);
    pergunta2();
  };

  botao2.onclick = function () {
    escolhas[0] = "Castanho";
    console.log(escolhas);
    pergunta2();
  };

  botao3.onclick = function () {
    escolhas[0] = "Verde";
    console.log(escolhas);
    pergunta2();
  };
}
function pergunta2() {
  textodoanimal.innerHTML = " cor: " + escolhas[0];
  frase.innerHTML = perguntas[1];
  botao1.innerHTML = "Sim";
  botao2.style.display = "none";
  botao3.innerHTML = "Não";
  botao1.onclick = function () {
    // se for sim
    escolhas[1] = "Sim";
    textodoanimal.innerHTML =
      "cor " + escolhas[0] + "olhos movem-se autonomamente: " + escolhas[1];
    alert("O animal que avistou foi o camaleão!");
    console.log(escolhas);
  };

  botao3.onclick = function () {
    escolhas[1] = "Não";
    textodoanimal.innerHTML =
      "cor " + escolhas[0] + "olhos movem-se autonomamente: " + escolhas[1];
    console.log(escolhas);
    pergunta3();
  };
}
function pergunta3() {
  frase.innerHTML = perguntas[2];
  botao1.innerHTML = "Não tem";
  botao2.style.display = "none";
  botao3.innerHTML = "Tem quatro";
  botao1.onclick = function () {
    escolhas[2] = "0";
    textodoanimal.innerHTML =
      "cor " +
      escolhas[0] +
      "olhos movem-se autonomamente: " +
      escolhas[1] +
      "pernas:" +
      escolhas[2];
    alert("O animal que avistou foi uma cobra!");
    console.log(escolhas);
  };

  botao3.onclick = function () {
    escolhas[2] = "4";
    textodoanimal.innerHTML =
      "cor " +
      escolhas[0] +
      "olhos movem-se autonomamente: " +
      escolhas[1] +
      "pernas:" +
      escolhas[2];
    console.log(escolhas);
    pergunta4();
  };
}

function pergunta4() {
  frase.innerHTML = perguntas[3];
  botao1.innerHTML = "Sim";
  botao2.style.display = "none";
  botao3.innerHTML = "Nao";
  botao1.onclick = function () {
    escolhas[3] = "sim";
    textodoanimal.innerHTML =
      "cor " +
      escolhas[0] +
      "olhos movem-se autonomamente: " +
      escolhas[1] +
      "pernas:" +
      escolhas[2] +
      "carapaça: " +
      escolhas[3];
    console.log(escolhas);
    pergunta5();
  };
  botao3.onclick = function () {
    escolhas[3] = "não";
    textodoanimal.innerHTML =
      "cor " +
      escolhas[0] +
      "olhos movem-se autonomamente: " +
      escolhas[1] +
      "pernas:" +
      escolhas[2] +
      "carapaça: " +
      escolhas[3];
    if (escolhas[0] == "Verde") {
      alert("O animal que avistou foi um sardão!");
    } else if (escolhas[0] == "Cinzento" || escolhas[0] == "Castanho") {
      alert("O animal que avistou foi uma osga!");
    }
    console.log(escolhas);
  };
}
function pergunta5() {
  frase.innerHTML = perguntas[4];
  botao1.innerHTML = "Água";
  botao2.style.display = "none";
  botao3.innerHTML = "Terra";
  botao1.onclick = function () {
    escolhas[4] = "Água";
    textodoanimal.innerHTML =
      "cor " +
      escolhas[0] +
      "olhos movem-se autonomamente: " +
      escolhas[1] +
      "pernas:" +
      escolhas[2] +
      "carapaça: " +
      escolhas[3] +
      "Ambiente: " +
      escolhas[4];
    console.log(escolhas);
    pergunta6();
  };
  botao3.onclick = function () {
    escolhas[4] = "Terra";
    textodoanimal.innerHTML =
      "cor " +
      escolhas[0] +
      "olhos movem-se autonomamente: " +
      escolhas[1] +
      "pernas:" +
      escolhas[2] +
      "carapaça: " +
      escolhas[3] +
      "Ambiente: " +
      escolhas[4];
    alert("O animal que avistou foi um cágado!");
    console.log(escolhas);
  };
}

function pergunta6() {
  frase.innerHTML = perguntas[5];
  botao1.innerHTML = "Doce";
  botao2.style.display = "none";
  botao3.innerHTML = "Salgada";
  botao1.onclick = function () {
    escolhas[5] = "Doce";
    textodoanimal.innerHTML =
      "cor " +
      escolhas[0] +
      "olhos movem-se autonomamente: " +
      escolhas[1] +
      "pernas:" +
      escolhas[2] +
      "carapaça: " +
      escolhas[3] +
      "Ambiente: " +
      escolhas[4] +
      "água: " +
      escolhas[5];
    console.log(escolhas);
    alert("O animal que avistou foi um cágado!");
  };
  botao3.onclick = function () {
    escolhas[5] = "Salgada";
    textodoanimal.innerHTML =
      "cor " +
      escolhas[0] +
      "olhos movem-se autonomamente: " +
      escolhas[1] +
      "pernas:" +
      escolhas[2] +
      "carapaça: " +
      escolhas[3] +
      "Ambiente: " +
      escolhas[4] +
      "água: " +
      escolhas[5];
    console.log(escolhas);
    alert("O animal que avistou foi uma tartaruga!");
  };
}
/*
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
*/

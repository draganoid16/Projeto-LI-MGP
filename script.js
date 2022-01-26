document.getElementById("cagado").style.display = "none";
document.getElementById("osga-moura").style.display = "none";
var botao_anterior = document.getElementById("botao_anterior");
var botao_reset = document.getElementById("botao_reset");
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

pergunta1();
botao_reset.onclick = function () {
  // como é a primeira pergunta este botao tem de voltar a desaparecer
  botao_anterior.style = "none";
  // volta a mostrar o botao 2
  botao2.style.display = "block";
  // volta a adicionar background no botao 1 e 3
  botao1.style.backgroundColor = "rgb(153, 153, 153)"; //mete uma cor nova
  botao3.style.backgroundColor = "rgb(60, 122, 55)";
  escolhas[0] = "";
  escolhas[1] = "";
  escolhas[2] = "";
  escolhas[3] = "";
  escolhas[4] = "";
  escolhas[5] = "";
  pergunta1();
};
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
  //NAZAS NÃO TOCA QUERO QUE ISTO FIQUE SEPARADO
  botao1.style.backgroundColor = "rgb(82, 163, 131)"; //mete uma cor nova
  botao3.style.backgroundColor = "rgb(82, 163, 131)";

  botao_anterior.style.display = "block";
  //se clicar no anterior
  botao_anterior.onclick = function () {
    // como é a primeira pergunta este botao tem de voltar a desaparecer
    botao_anterior.style = "none";
    // volta a mostrar o botao 2
    botao2.style.display = "block";
    // volta a adicionar background no botao 1 e 3
    botao1.style.backgroundColor = "rgb(153, 153, 153)"; //mete uma cor nova
    botao3.style.backgroundColor = "rgb(60, 122, 55)";
    escolhas[0] = "";
    pergunta1();
  };
  botao1.onclick = function () {
    // se for sim

    if ((escolhas[1] = "Sim")) {
      textodoanimal.innerHTML =
        "cor " + escolhas[0] + "olhos movem-se autonomamente: " + escolhas[1];

      console.log(escolhas);

      //document.getElementById("tituloprincipal").style.display = "none";
      document.getElementById("textofinal").style.display = "none";
      document.getElementById("pergunta1").style.display = "none";

      botao1.style.display = "none";
      botao2.style.display = "none";
      botao3.style.display = "none";

      document.getElementById("camaleão").style.display = "block";
    }
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
  //se clicar no anterior vai para a pergunta atras
  botao_anterior.onclick = function () {
    escolhas[1] = "";
    pergunta2();
  };

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
  //se clicar no anterior vai para a pergunta atras
  botao_anterior.onclick = function () {
    escolhas[2] = "";
    pergunta3();
  };
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
  //se clicar no anterior vai para a pergunta atras
  botao_anterior.onclick = function () {
    escolhas[3] = "";
    pergunta4();
  };
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
  //se clicar no anterior vai para a pergunta atras
  botao_anterior.onclick = function () {
    escolhas[4] = "";
    pergunta5();
  };
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

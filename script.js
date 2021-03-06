function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}



window.addEventListener("scroll", reveal);
//funcao para dar fade in e fade out da pagina

//jogo.js
var botao_anterior = document.getElementById("botao_anterior");
var botao_reset = document.getElementById("botao_reset");
var textodoanimal = document.getElementById("textofinal");
var botao1 = document.getElementById("botao_cinzento");
var botao2 = document.getElementById("botao_castanho");
var botao3 = document.getElementById("botao_verde");
var frase = document.getElementById("pergunta1");

const confirmar_resposta_sim = document.getElementsByClassName("sim");
const confirmar_resposta_nao = document.getElementsByClassName("nao");

var camaleao_imagem = document.getElementById("camaleao");
var cobra_imagem = document.getElementById("cobra");
var sardao_imagem = document.getElementById("sardao");
var osga_imagem = document.getElementById("osga");
var cagado_imagem = document.getElementById("cagado");
var tartaruga_imagem = document.getElementById("tartaruga");
var jogo = 0; // nr de jogos
var jogo_correto = 0;

const escolhas = [];
const perguntas = [
  "De que cor é o seu animal?",
  "Os olhos movem-se autonomamente?",
  "Quantas pernas tem?",
  "O animal tem carapaça?",
  "Em que ambiente viu o animal?",
  "Viu-o em água",
];
// csv é criado apenas com as perguntas que serão feitas.
const csv = [
  [
    "Jogo",
    perguntas[0],
    perguntas[1],
    perguntas[2],
    perguntas[3],
    perguntas[4],
    perguntas[5],
    "Resultado",
    "Acertou corretamente?"
  ]
];

var doc = new jsPDF();
var pdf = document.getElementById("pdf");
botao_reset.style.display ="none";

function downloadpdf() {
  doc.save("respostas.pdf");
}

function downloadcsv() {
  // resolver caracteres especiais
  let csvContent = "data:text/csv;charset=ISO-8859-1,"; // O excel é que abre mal, os caracteres estão bons

  csv.forEach(function (rowArray) {
    let new_row = rowArray.join(",");
    csvContent += new_row + "\r\n";
  });
  
  var encodedUri = encodeURI(csvContent);

  // faz o mesmo que o windows.open
  window.location.assign(encodedUri);
  //window.open(encodedUri, 'asdas.csv');
}

function downloadjson(){
    // a melhor solução que encontrei foi: criar um csv e depois convert para json!
    // cria o csv 
    // resolver caracteres especiais
    let csvContent = "data:text/csv;charset=utf-8,";

    csv.forEach(function (rowArray) {
      let new_row = rowArray.join(",");
      csvContent += new_row + "\r\n";
    });
    
    var encodedUri = encodeURI(csvContent);
    // cria o json
    var dataStr = "data:text/json;charset=utf-8," + decodeURIComponent(JSON.stringify(encodedUri));
    // cria um element (tag <a></a>) que vai permitir fazer o download
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", "respostas" + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    // depois de download o element criado é eliminado
    downloadAnchorNode.remove();
}
pergunta1();

function termina_jogo(){
  let estatistica = document.getElementById("estatistica");
  estatistica.style.display = "block";

  let span_nr_jogos = document.getElementById("nr_jogos");
  let span_nr_jogos_corretos = document.getElementById("nr_jogos_corretos");
  let span_percentagem_de_acerto = document.getElementById("percentagem de acerto");
  
  span_nr_jogos.innerHTML = jogo;
  span_nr_jogos_corretos.innerHTML = jogo_correto;
  percentagem = ((jogo_correto/jogo)*100).toFixed(2);
  
  span_percentagem_de_acerto.innerHTML = percentagem + " %";
}
function mostra_animal_classificado(animal_para_mostrar, resultado){
  document.getElementById("container_animal_avaliados").style.display = "block";
  var imagEscolhida = document.createElement("img");
  let scr_animal_para_mostrar = "resources/"+animal_para_mostrar+".jpg"; 
  //imagEscolhida.setAttribute("src", "resources/cagado.jpg");
  imagEscolhida.src = scr_animal_para_mostrar;
  
  
  if(resultado==="certo"){
    imagEscolhida.setAttribute("class", "animal_classificado_certo");
  }else if(resultado==="errado"){
    imagEscolhida.setAttribute("class", "animal_classificado_errado");
    
  }

  document.getElementById("animal_classificado").appendChild(imagEscolhida);

}
function again() {
  botao_anterior.style.display = "none";
  document.getElementsByClassName("choice")[0].style.display = "none";
  document.getElementsByClassName("choice1")[0].style.display = "grid";
  botao2.style.display = "block";
  botao1.style.backgroundColor = "rgb(153, 153, 153)";
  botao3.style.backgroundColor = "rgb(60, 122, 55)";
  escolhas[0] = "";
  escolhas[1] = "";
  escolhas[2] = "";
  escolhas[3] = "";
  escolhas[4] = "";
  escolhas[5] = "";
  textodoanimal.innerHTML = "";
  doc.addPage();
  pergunta1();
}

botao_reset.onclick = function () {
  jogo-=1;
  botao_reset.style.display = "none";
  // como é a primeira pergunta este botao tem de voltar a desaparecer
  botao_anterior.style.display = "none";
  // volta a mostrar o botao 2
  botao2.style.display = "block";
  // volta a adicionar background no botao 1 e 3
  botao1.style.backgroundColor = "rgb(153, 153, 153)";
  botao3.style.backgroundColor = "rgb(60, 122, 55)";
  escolhas[0] = "";
  escolhas[1] = "";
  escolhas[2] = "";
  escolhas[3] = "";
  escolhas[4] = "";
  escolhas[5] = "";
  textodoanimal.innerHTML = "";
  pergunta1();
};

function pergunta1() {
  jogo += 1;
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
  botao_reset.style.display = "block";
  botao1.style.backgroundColor = "#2f5c50"; //mete uma cor nova
  botao3.style.backgroundColor = "#2f5c50";

  botao_anterior.style.display = "block";
  //se clicar no anterior
  botao_anterior.onclick = function () {
    // como é a primeira pergunta este botao tem de voltar a desaparecer
    botao_anterior.style.display = "none";
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
      //adicionar animal ao pdf
      var camaleaoimg = new Image();
      camaleaoimg.src = "resources/camaleao.jpg";

      doc.text(100, 20, "Jogo " + jogo);
      doc.text(20, 30, "Pergunta 1: " + perguntas[0]);
      doc.text(20, 40, "Resposta: " + escolhas[0]);
      doc.text(20, 50, "Pergunta 2: " + perguntas[1]);
      doc.text(20, 60, "Resposta: " + escolhas[1]);
      doc.text(70, 70, "Resultado: Camaleão-Comum");
      doc.addImage(camaleaoimg, "jpg", 30, 80, 150, 150);
      
      document.getElementsByClassName("choice1")[0].style.display = "none";
      document.getElementsByClassName("choice")[0].style.display = "grid";
      document.getElementsByClassName("confirmar_resposta")[0].style.display="block";
      document.getElementsByClassName("again")[0].style.display = "none";
      document.getElementsByClassName("download")[0].style.display = "none";
      confirmar_resposta_sim[0].onclick = function(){
        jogo_correto+=1;
        doc.text(40, 90, "Acertámos no resultado!");
        //adiciona as respostas a array do csv
        const addRespostas = [
          [jogo, escolhas[0], escolhas[1], "N/A", "N/A","N/A","N/A", "Camaleão-Comum", "Sim"]
        ]
        csv.push(addRespostas);
        document.getElementsByClassName("confirmar_resposta")[0].style.display="none";
        document.getElementsByClassName("download")[0].style.display = "block";
        document.getElementsByClassName("again")[0].style.display = "inline-block";
        mostra_animal_classificado("camaleao", "certo");
        termina_jogo();
        
      }
      confirmar_resposta_nao[0].onclick = function(){
        doc.text(40, 90, "Não acertámos no resultado!");
        //adiciona as respostas a array do csv
        const addRespostas = [
          [jogo, escolhas[0], escolhas[1], "N/A", "N/A","N/A","N/A", "Camaleão-Comum", "Não"]
        ]
        csv.push(addRespostas);
        document.getElementsByClassName("confirmar_resposta")[0].style.display="none";
        document.getElementsByClassName("download")[0].style.display = "block";
        document.getElementsByClassName("again")[0].style.display = "inline-block";
        mostra_animal_classificado("camaleao", "errado");
        termina_jogo();
      }
      
      //document.getElementsByClassName("download")[0].style.display = "none";
      camaleao_imagem.style.display = "block";
      cobra_imagem.style.display = "none";
      sardao_imagem.style.display = "none";
      osga_imagem.style.display = "none";
      cagado_imagem.style.display = "none";
      tartaruga_imagem.style.display = "none";
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

    // adicionar o pdf da cobra
    var cobraimg = new Image();
    cobraimg.src = "resources/cobra.jpg";

    doc.text(100, 20, "Jogo " + jogo);
    doc.text(20, 30, "Pergunta 1: " + perguntas[0]);
    doc.text(20, 40, "Resposta: " + escolhas[0]);
    doc.text(20, 50, "Pergunta 2: " + perguntas[1]);
    doc.text(20, 60, "Resposta: " + escolhas[1]);
    doc.text(20, 70, "Pergunta 3: " + perguntas[2]);
    doc.text(20, 80, "Resposta: " + escolhas[2]);
    doc.text(20, 90, "Resultado: Cobra-Rateira");
    doc.addImage(cobraimg, "jpg", 30, 100, 150, 150);

    document.getElementsByClassName("choice1")[0].style.display = "none";
    document.getElementsByClassName("choice")[0].style.display = "grid";
    document.getElementsByClassName("confirmar_resposta")[1].style.display="block";
    document.getElementsByClassName("again")[1].style.display = "none";  
    document.getElementsByClassName("download")[1].style.display = "none";

    confirmar_resposta_sim[1].onclick = function(){
      jogo_correto+=1;
      doc.text(40, 100, "Acertámos no resultado!");
      //adiciona as respostas a array do csv
      const addRespostas = [
        [jogo, escolhas[0], escolhas[1], escolhas[2], "N/A","N/A","N/A", "Cobra-Rateira", "Sim"]
      ]
      csv.push(addRespostas);
      document.getElementsByClassName("confirmar_resposta")[1].style.display="none";
      document.getElementsByClassName("download")[1].style.display = "block";
      document.getElementsByClassName("again")[1].style.display = "inline-block";
      mostra_animal_classificado("cobra", "certo");
      termina_jogo();
    }
    confirmar_resposta_nao[1].onclick = function(){
      doc.text(40, 100, "Não acertámos no resultado!");
      //adiciona as respostas a array do csv
      const addRespostas = [
        [jogo, escolhas[0], escolhas[1], escolhas[2], "N/A","N/A","N/A", "Cobra-Rateira", "Não"]
      ]
      csv.push(addRespostas);
      document.getElementsByClassName("confirmar_resposta")[1].style.display="none";
      document.getElementsByClassName("download")[1].style.display = "block";
      document.getElementsByClassName("again")[1].style.display = "inline-block";
      mostra_animal_classificado("cobra", "errado");
      termina_jogo();
    }
    cobra_imagem.style.display = "block";
    camaleao_imagem.style.display = "none";
    sardao_imagem.style.display = "none";
    osga_imagem.style.display = "none";
    cagado_imagem.style.display = "none";
    tartaruga_imagem.style.display = "none";
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
  botao3.innerHTML = "Não";
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

      var sardaoimg = new Image();
      sardaoimg.src = "resources/sardao.jpg";

      doc.text(100, 20, "Jogo " + jogo);
      doc.text(20, 30, "Pergunta 1: " + perguntas[0]);
      doc.text(20, 40, "Resposta: " + escolhas[0]);
      doc.text(20, 50, "Pergunta 2: " + perguntas[1]);
      doc.text(20, 60, "Resposta: " + escolhas[1]);
      doc.text(20, 70, "Pergunta 3: " + perguntas[2]);
      doc.text(20, 80, "Resposta: " + escolhas[2]);
      doc.text(20, 90, "Pergunta 4: " + perguntas[3]);
      doc.text(20, 100, "Resposta: " + escolhas[3]);
      doc.text(70, 110, "Resultado: Sardão");
      doc.addImage(sardaoimg, "jpg", 30, 120, 150, 150);

      document.getElementsByClassName("choice1")[0].style.display = "none";
      document.getElementsByClassName("choice")[0].style.display = "grid";
      document.getElementsByClassName("confirmar_resposta")[2].style.display="block";
      document.getElementsByClassName("again")[2].style.display = "none";  
      document.getElementsByClassName("download")[2].style.display = "none";
      confirmar_resposta_sim[2].onclick = function(){
        jogo_correto+=1;
        doc.text(40, 120, "Acertámos no resultado!");
        //adiciona as respostas a array do csv
        const addRespostas = [
          [jogo, escolhas[0], escolhas[1], escolhas[2], escolhas[3],"N/A","N/A", "Sardão", "Sim"]
        ]
        csv.push(addRespostas);
        document.getElementsByClassName("confirmar_resposta")[2].style.display="none";
        document.getElementsByClassName("download")[2].style.display = "block";
        document.getElementsByClassName("again")[2].style.display = "inline-block";
        mostra_animal_classificado("sardao", "certo");
        termina_jogo();
      }
      confirmar_resposta_nao[2].onclick = function(){
        doc.text(40, 120, "Não acertámos no resultado!");
        //adiciona as respostas a array do csv
        const addRespostas = [
          [jogo, escolhas[0], escolhas[1], escolhas[2], escolhas[3],"N/A","N/A", "Sardão", "Não"]
        ]
        csv.push(addRespostas);
        document.getElementsByClassName("confirmar_resposta")[2].style.display="none";
        document.getElementsByClassName("download")[2].style.display = "block";
        document.getElementsByClassName("again")[2].style.display = "inline-block";
        mostra_animal_classificado("sardao", "errado");
        termina_jogo();
      }

      sardao_imagem.style.display = "block";
      cobra_imagem.style.display = "none";
      camaleao_imagem.style.display = "none";
      osga_imagem.style.display = "none";
      cagado_imagem.style.display = "none";
      tartaruga_imagem.style.display = "none";
    } else if (escolhas[0] == "Cinzento" || escolhas[0] == "Castanho") {      

      var osgaimg = new Image();
      osgaimg.src = "resources/osga.jpg";

      doc.text(100, 20, "Jogo " + jogo);
      doc.text(20, 30, "Pergunta 1: " + perguntas[0]);
      doc.text(20, 40, "Resposta: " + escolhas[0]);
      doc.text(20, 50, "Pergunta 2: " + perguntas[1]);
      doc.text(20, 60, "Resposta: " + escolhas[1]);
      doc.text(20, 70, "Pergunta 3: " + perguntas[2]);
      doc.text(20, 80, "Resposta: " + escolhas[2]);
      doc.text(20, 90, "Pergunta 4: " + perguntas[3]);
      doc.text(20, 100, "Resposta: " + escolhas[3]);
      doc.text(70, 110, "Resultado: Osga-Turca");
      doc.addImage(osgaimg, "jpg", 30, 120, 150, 150);

      document.getElementsByClassName("choice1")[0].style.display = "none";
      document.getElementsByClassName("choice")[0].style.display = "grid";
      document.getElementsByClassName("confirmar_resposta")[3].style.display="block";
      document.getElementsByClassName("again")[3].style.display = "none";  
      document.getElementsByClassName("download")[3].style.display = "none";
      confirmar_resposta_sim[3].onclick = function(){
        jogo_correto+=1;
        doc.text(40, 120, "Acertámos no resultado!");
        //adiciona as respostas a array do csv
        const addRespostas = [
          [jogo, escolhas[0], escolhas[1], escolhas[2], escolhas[3],"N/A","N/A", "Osga-Turca", "Sim"]
        ]
        csv.push(addRespostas);
        document.getElementsByClassName("confirmar_resposta")[3].style.display="none";
        document.getElementsByClassName("download")[3].style.display = "block";
        document.getElementsByClassName("again")[3].style.display = "inline-block";
        mostra_animal_classificado("osga", "certo");
        termina_jogo();
      }
      confirmar_resposta_nao[3].onclick = function(){
        doc.text(40, 120, "Não acertámos no resultado!");
        //adiciona as respostas a array do csv
        const addRespostas = [
          [jogo, escolhas[0], escolhas[1], escolhas[2], escolhas[3],"N/A","N/A", "Osga-Turca", "Não"]
        ]
        csv.push(addRespostas);
        document.getElementsByClassName("confirmar_resposta")[3].style.display="none";
        document.getElementsByClassName("download")[3].style.display = "block";
        document.getElementsByClassName("again")[3].style.display = "inline-block";
        mostra_animal_classificado("osga", "errado");
        termina_jogo();
      }

      osga_imagem.style.display = "block";
      sardao_imagem.style.display = "none";
      cobra_imagem.style.display = "none";
      camaleao_imagem.style.display = "none";
      cagado_imagem.style.display = "none";
      tartaruga_imagem.style.display = "none";
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

    var cagadoimg = new Image();
    cagadoimg.src = "resources/cagado.jpg";

    doc.text(100, 20, "Jogo " + jogo);
    doc.text(20, 30, "Pergunta 1: " + perguntas[0]);
    doc.text(20, 40, "Resposta: " + escolhas[0]);
    doc.text(20, 50, "Pergunta 2: " + perguntas[1]);
    doc.text(20, 60, "Resposta: " + escolhas[1]);
    doc.text(20, 70, "Pergunta 3: " + perguntas[2]);
    doc.text(20, 80, "Resposta: " + escolhas[2]);
    doc.text(20, 90, "Pergunta 4: " + perguntas[3]);
    doc.text(20, 100, "Resposta: " + escolhas[3]);
    doc.text(20, 110, "Pergunta 5: " + perguntas[4]);
    doc.text(20, 120, "Resposta: " + escolhas[4]);
    doc.text(70, 130, "Resultado: Cágado-Mediterrânico");
    doc.addImage(cagadoimg, "jpg", 30, 140, 150, 150);

    document.getElementsByClassName("choice1")[0].style.display = "none";
    document.getElementsByClassName("choice")[0].style.display = "grid";
    document.getElementsByClassName("confirmar_resposta")[4].style.display="block";
    document.getElementsByClassName("again")[4].style.display = "none";  
    document.getElementsByClassName("download")[4].style.display = "none";
    confirmar_resposta_sim[4].onclick = function(){
      jogo_correto+=1;
      doc.text(40, 140, "Acertámos no resultado!");
      //adiciona as respostas a array do csv
      const addRespostas = [
        [jogo, escolhas[0], escolhas[1], escolhas[2], escolhas[3],escolhas[4],"N/A", "Cágado-Mediterrânico", "Sim"]
      ]
      csv.push(addRespostas);
      document.getElementsByClassName("confirmar_resposta")[4].style.display="none";
      document.getElementsByClassName("download")[4].style.display = "block";
      document.getElementsByClassName("again")[4].style.display = "inline-block";
      mostra_animal_classificado("cagado", "certo");
      termina_jogo();
    }
    confirmar_resposta_nao[4].onclick = function(){
      doc.text(40, 140, "Não acertámos no resultado!");
      //adiciona as respostas a array do csv
      const addRespostas = [
        [jogo, escolhas[0], escolhas[1], escolhas[2], escolhas[3],escolhas[4],"N/A", "Cágado-Mediterrânico", "Não"]
      ]
      csv.push(addRespostas);
      document.getElementsByClassName("confirmar_resposta")[4].style.display="none";
      document.getElementsByClassName("download")[4].style.display = "block";
      document.getElementsByClassName("again")[4].style.display = "inline-block";
      mostra_animal_classificado("cagado", "errado");
      termina_jogo();
    }

    cagado_imagem.style.display = "block";
    osga_imagem.style.display = "none";
    sardao_imagem.style.display = "none";
    cobra_imagem.style.display = "none";
    camaleao_imagem.style.display = "none";
    tartaruga_imagem.style.display = "none";
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

    var cagadoimg = new Image();
    cagadoimg.src = "resources/cagado.jpg";

    doc.text(100, 20, "Jogo " + jogo);
    doc.text(20, 30, "Pergunta 1: " + perguntas[0]);
    doc.text(20, 40, "Resposta: " + escolhas[0]);
    doc.text(20, 50, "Pergunta 2: " + perguntas[1]);
    doc.text(20, 60, "Resposta: " + escolhas[1]);
    doc.text(20, 70, "Pergunta 3: " + perguntas[2]);
    doc.text(20, 80, "Resposta: " + escolhas[2]);
    doc.text(20, 90, "Pergunta 4: " + perguntas[3]);
    doc.text(20, 100, "Resposta: " + escolhas[3]);
    doc.text(20, 110, "Pergunta 5: " + perguntas[4]);
    doc.text(20, 120, "Resposta: " + escolhas[4]);
    doc.text(20, 130, "Pergunta 6: " + perguntas[5]);
    doc.text(20, 140, "Resposta: " + escolhas[5]);
    doc.text(70, 150, "Resultado: Cágado-Mediterrânico");
    doc.addImage(cagadoimg, "jpg", 30, 160, 150, 150);

    document.getElementsByClassName("choice1")[0].style.display = "none";
    document.getElementsByClassName("choice")[0].style.display = "grid";
    document.getElementsByClassName("confirmar_resposta")[4].style.display="block";
    document.getElementsByClassName("again")[4].style.display = "none";  
    document.getElementsByClassName("download")[4].style.display = "none";
    confirmar_resposta_sim[4].onclick = function(){
      jogo_correto+=1;
      doc.text(40, 160, "Acertámos no resultado!");
      //adiciona as respostas a array do csv
      const addRespostas = [
        [jogo, escolhas[0], escolhas[1], escolhas[2], escolhas[3],escolhas[4], escolhas[5], "Cágado-Mediterrânico", "Sim"]
      ]
      csv.push(addRespostas);
      document.getElementsByClassName("confirmar_resposta")[4].style.display="none";
      document.getElementsByClassName("download")[4].style.display = "block";
      document.getElementsByClassName("again")[4].style.display = "inline-block";
      mostra_animal_classificado("cagado", "certo");
      termina_jogo();
    }
    confirmar_resposta_nao[4].onclick = function(){
      doc.text(40, 160, "Não acertámos no resultado!");
      //adiciona as respostas a array do csv
      const addRespostas = [
        [jogo, escolhas[0], escolhas[1], escolhas[2], escolhas[3],escolhas[4], escolhas[5], "Cágado-Mediterrânico", "Não"]
      ]
      csv.push(addRespostas);
      document.getElementsByClassName("confirmar_resposta")[4].style.display="none";
      document.getElementsByClassName("download")[4].style.display = "block";
      document.getElementsByClassName("again")[4].style.display = "inline-block";
      mostra_animal_classificado("cagado", "errado");
      termina_jogo();
    }
    cagado_imagem.style.display = "block";
    osga_imagem.style.display = "none";
    sardao_imagem.style.display = "none";
    cobra_imagem.style.display = "none";
    camaleao_imagem.style.display = "none";
    tartaruga_imagem.style.display = "none";
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

    var tartarugaimg = new Image();
    tartarugaimg.src = "resources/tartaruga.jpg";

    doc.text(100, 20, "Jogo " + jogo);
    doc.text(20, 30, "Pergunta 1: " + perguntas[0]);
    doc.text(20, 40, "Resposta: " + escolhas[0]);
    doc.text(20, 50, "Pergunta 2: " + perguntas[1]);
    doc.text(20, 60, "Resposta: " + escolhas[1]);
    doc.text(20, 70, "Pergunta 3: " + perguntas[2]);
    doc.text(20, 80, "Resposta: " + escolhas[2]);
    doc.text(20, 90, "Pergunta 4: " + perguntas[3]);
    doc.text(20, 100, "Resposta: " + escolhas[3]);
    doc.text(20, 110, "Pergunta 5: " + perguntas[4]);
    doc.text(20, 120, "Resposta: " + escolhas[4]);
    doc.text(20, 130, "Pergunta 6: " + perguntas[5]);
    doc.text(20, 140, "Resposta: " + escolhas[5]);
    doc.text(70, 150, "Resultado: Tartaruga-Comum");
    doc.addImage(tartarugaimg, "jpg", 30, 160, 150, 150);

    document.getElementsByClassName("choice1")[0].style.display = "none";
    document.getElementsByClassName("choice")[0].style.display = "grid";
    document.getElementsByClassName("confirmar_resposta")[5].style.display="block";
    document.getElementsByClassName("again")[5].style.display = "none";  
    document.getElementsByClassName("download")[5].style.display = "none";
    confirmar_resposta_sim[5].onclick = function(){
      jogo_correto+=1;
      doc.text(40, 160, "Acertámos no resultado!");
      //adiciona as respostas a array do csv
      const addRespostas = [
        [jogo, escolhas[0], escolhas[1], escolhas[2], escolhas[3],escolhas[4], escolhas[5], "Tartaruga-Comum", "Sim"]
      ]
      csv.push(addRespostas);
      document.getElementsByClassName("confirmar_resposta")[5].style.display="none";
      document.getElementsByClassName("download")[5].style.display = "block";
      document.getElementsByClassName("again")[5].style.display = "inline-block";
      mostra_animal_classificado("tartaruga", "certo");
      termina_jogo();
    }
    confirmar_resposta_nao[5].onclick = function(){
      doc.text(40, 160, "Acertámos no resultado!");
      //adiciona as respostas a array do csv
      const addRespostas = [
        [jogo, escolhas[0], escolhas[1], escolhas[2], escolhas[3],escolhas[4], escolhas[5], "Tartaruga-Comum", "Não"]
      ]
      document.getElementsByClassName("confirmar_resposta")[5].style.display="none";
      document.getElementsByClassName("download")[5].style.display = "block";
      document.getElementsByClassName("again")[5].style.display = "inline-block";
      mostra_animal_classificado("tartaruga", "errado");
      termina_jogo();
    }

    tartaruga_imagem.style.display = "block";
    cagado_imagem.style.display = "none";
    osga_imagem.style.display = "none";
    sardao_imagem.style.display = "none";
    cobra_imagem.style.display = "none";
    camaleao_imagem.style.display = "none";
  };
}

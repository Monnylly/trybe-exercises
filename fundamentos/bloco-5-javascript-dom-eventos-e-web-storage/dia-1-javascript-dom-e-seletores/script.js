
//1 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos.

function mudaTextoTag (){
  document.getElementsById("paragrafo").innerText = "Desenvolvedora de sucesso";
}

//2 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
function mudaCorDoQuadradoAmarelo (){
  document.getElementsByClassName("main-content")[0].style.background = "rgb(76,164,109";
}
//3Crie uma função que mude a cor do quadrado vermelho para branco.
function mudaCorQuadradoVermelho(){
  Document.getElementsByClassName(".main-content .center-content").style.background = "white";
}
//4 Crie uma função que corrija o texto da tag <h1>.

function corigeTextH1(){
  document.getElementsByClassName("title")[0].innerText ="Exercício 5.1 - JavaScript";
}

//5 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
function mudaTextoParaMaiusculo (){
  document.getElementsByClassName("center-content") = toUppercase;
}


//6 Crie uma função que exiba o conteúdo de todas as tags <p> no console
function exibeConteudo(){
  console.log(document.getElementsByClassName("center-content"));
}

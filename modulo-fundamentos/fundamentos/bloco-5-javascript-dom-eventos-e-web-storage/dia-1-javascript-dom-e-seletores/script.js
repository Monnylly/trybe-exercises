
//1 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos.

function mudaTextoTag (){
  document.getElementById("paragrafo").innerText = "Desenvolvedora de sucesso";
}
mudaTextoTag();

//2 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
function mudaCorDoQuadradoAmarelo (){
  document.getElementsByClassName("main-content")[0].style.background = "rgb(76,164,109";
}
mudaCorDoQuadradoAmarelo();

//3Crie uma função que mude a cor do quadrado vermelho para branco.
function mudaCorQuadradoVermelho(){
  document.getElementsByClassName("center-content")[0].style.backgroundColor = "white";
}
mudaCorQuadradoVermelho();

//4 Crie uma função que corrija o texto da tag <h1>.

function corrigeTextH1(){
  document.getElementsByClassName("title")[0].innerText ="Exercício 5.1 - JavaScript";
}
corrigeTextH1();

//5 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
function mudaTextoParaMaiusculo (){
  for (let index = 0; index < document.getElementsByTagName("p").length; index += 1){
    let resultado = document.getElementsByTagName("p")[index];
    let resMaiusculo = document.getElementsByTagName("p")[index].innerText.toUpperCase();
    resultado.innerText = resMaiusculo;
  }
}
mudaTextoParaMaiusculo();


//6 Crie uma função que exiba o conteúdo de todas as tags <p> no console
function exibeConteudo(){
  console.log(document.getElementsByTagName("p")[0]);
}
exibeConteudo();

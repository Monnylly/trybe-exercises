//1Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
//document.createElement('h1');

let tagH1 = document.createElement('h1');
tagH1.innerHTML = "Exercicio 5.2 - JavaScript DOM";
document.body.appendChild(tagH1);

//2Adicione a tag div com a classe main-content como filho da tag body ;

let adicionaTag = document.createElement('div');
adicionaTag.className = 'main-content';
document.body.appendChild(adicionaTag);

//3Adicione a tag div com a classe center-content como filho da tag div criada no passo 2
let tagDiv = document.createElement('div');
tagDiv.className = 'center-content';
tagDiv.innerText = "teste";
adicionaTag.appendChild(tagDiv);

//4Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
let tagP = document.createElement('p');
tagP.innerText = "criando tag p";
tagDiv.appendChild(tagP);

//5Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
let tagDivFilho = document.createElement('div');
tagDivFilho.className = "left-content";
adicionaTag.appendChild(tagDivFilho);

//6Adicione a tag div com a classe right-content como filho da tag div criada no passo 2
let novaTag = document.createElement('div');
novaTag.className = 'right-content';
adicionaTag.appendChild(novaTag);


//7Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;
let imagem = document.createElement('img');
imagem.className = 'small-image';
imagem.src = "https://picsum.photos/200";
tagDivFilho.appendChild(imagem);

//8adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista.
// Essa lista deve ser filha do div criado no passo 6;

let lista = [
  'um',
  'dois', 
  'tres', 
  'quatro',
  'cinco',
  'seis',
  'sete',
  'oito',
  'nove', 
  'dez'
]

let listaNaoOrdem = document.createElement('ul');
listaNaoOrdem.className = "nova-lista";
novaTag.appendChild(listaNaoOrdem);

let listaNumeros = document.querySelector('.nova-lista');

for(let index = 0; index < lista.length; index +=1){
  let numeros = lista[index];

  let listaNumerosLista = document.createElement('li');
  listaNumerosLista.innerText = numeros;

listaNumeros.appendChild(listaNumerosLista);
}


//9Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.
for (let index =0; index <3; index +=1){
  let h3 = document.createElement('h3');
  h3.innerText = index;
  adicionaTag.appendChild(h3)
}
//parte 2

//1 -Adicione a classe title na tag h1 criada

tagH1.className = "title";

//2 Adicione a classe description nas 3 tags h3 criadas;
const elementsH3 = document.getElementsByTagName('h3');
for (let index = 0; index < 3; index += 1){
  elementsH3[index].className = 'description';
}

//3Remova o div criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;

const removeDiv = document.querySelector('left-content');
tagDivFilho.removeChild (removeDiv);


//4 Centralize o div criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto do div ;
const mudaCorDiv = document.querySelector('.rigth-content');
mudaCorDiv.style.marginRight = 'auto';

//5 Troque a cor de fundo do elemento pai da div criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
const divCenter = document.querySelector('.center-content');
divCenter.parentNode.style.backgroundColor = 'green';

//6Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
ul.lastChild.remove();
ul.lastChild.remove();

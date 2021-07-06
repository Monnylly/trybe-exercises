//1Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
//document.createElement('h1');

let tagH1 = document.createElement('h1');
tagH1.innerHTML = "texto";
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




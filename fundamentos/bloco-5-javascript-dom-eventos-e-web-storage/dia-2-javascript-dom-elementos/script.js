// acesse o elementoOndeVoceEsta
document.querySelector('#elementoOndeVoceEsta');

//Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let acessandoElemPai = document.querySelector('#elementoOndeVoceEsta');
acessandoElemPai.parentNode.style.color = red;

//Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?

document.querySelector('#primeiroFilhoDoFilho').innerText = "novo texto";

//Acesse o primeiroFilho a partir de pai .

document.querySelector('#pai').nextElementSibling;

//Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
document.querySelector("#elementoOndeVoceEsta").previousSibling;

//Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
document.querySelector("#elementoOndeVoceEsta").nextElementSibling;

//Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta 

document.querySelector("#elementoOndeVoceEsta").nextSibling;

//Agora acesse o terceiroFilho a partir de pai .
document.querySelector("#pai").lastElementChild.previousElementSibling;


//Crie um irmão para elementoOndeVoceEsta .
let tagIrmaoDiv = document.createElement('div');
tagIrmaoDiv.innerText = "tag irma de div elementoOndeVoceEsta";
document.querySelector('#pai').appendChild(tagIrmaoDiv);

//Crie um filho para elementoOndeVoceEsta 
let filhoTag = document.createElement('div');
filhoTag.innerText = "tag criada filha de elementosOndeVoceEsta";
document.querySelector('#elementoOndeVoceEsta').appendChild(filhoTag);


//Crie um filho para primeiroFilhoDoFilho .

let filhoDoPrimeiroFilho = document.createElement('div');
filhoDoPrimeiroFilho.innerText = "tag criada primeiro filho do filho";
document.querySelector('#primeiroFilhoDoFilho').appendChild(filhoDoPrimeiroFilho);

//A partir desse filho criado, acesse terceiroFilho 

let removendoDiv = document.querySelectorAll('.paiMaior');
for (let index = 0; index < removendoDiv.length; index += 1){
  let element = removendoDiv[index];
  if (element.innerText.includes('pai, elementoOndeVoceEsta, primeiroFilhoDoFilho')){
    element = removendoDiv[index];
  }else {
    removendoDiv.removeChild(element);
  }      
}

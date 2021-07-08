// imagine que você é a pessoa responsável por desenvolver uma página que servirá como um leitor de conteúdo escrito.
// Esse conteúdo escrito pode ser uma página de livro, uma reportagem de revista ou uma nota de jornal online. Para que você não tenha que pensar no conteúdo da página, utilize este link (https://www.lipsum.com/) para gerar o texto para sua página.
// Até aqui, nenhuma novidade, mas essa demanda exige que você aplique preferências das pessoas leitoras na página para melhorar a experiência de leitura dessas pessoas.
// As pessoas devem ter o poder de alterar:
// As pessoas devem ter o poder de alterar:

// * Cor de fundo da tela;
// * Cor do texto;
// * Tamanho da fonte;
// * Espaçamento entre as linhas do texto;
// * Tipo da fonte (Font family).

// Essas preferências devem ser salvas de forma que, ao retornar à página, as preferências que foram pre
// previamente configuradas possam ser aplicadas na tela.

const backgroundButton= document.getElementById('backgroundButton');
const bodyLocator = document.querySelector('body');

function creatBtnAndInput(){
  let button = document.createElement('button');
  button.id = 'btn1';
  button.innerHTML = 'muda cor de fundo';
  backgroundButton.appendChild(button);
  let input = document.createElement('input');
  input.id = 'input1';
  input.innerHTML = 'valor inicial';
  let text = input.innerHTML;
  backgroundButton.appendChild(input);
}
creatBtnAndInput();

button.addEventListener ('click', newBackgroundColor(input))

function newBackgroundColor(stringColor){
  bodyLocator.style.backgroundColor= stringColor;
  localStorage.setItem('backgroundColor', stringColor)
}
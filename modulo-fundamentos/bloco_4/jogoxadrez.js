// qual a posicao da rainha?
let posicaoRainhaLinha = 4;
let posicaoRainhaColuna = 4;

// qual a posição da peça?

let posicaoPecaLinha =2;
let posicaoPecaColuna =2;
// algo para guardar se o atacqua foi bem sucedido ou nao 

let ataqueBemSucedido = false;

// quais sao os caminhos que a rainha pode atacar?


// se a peça estiver na mesma linha que a rainha, ataque bem sucedido

if(posicaoPecaLinha === posicaoRainhaLinha){
  console.log("ataque bem sucedido na mesma linha")
  ataqueBemSucedido = true;
}
if (posicaoPecaLinha === posicaoRainhaColuna){
  console.log("ataque bem sucedido na mesma coluna");
  ataqueBemSucedido = true;
}
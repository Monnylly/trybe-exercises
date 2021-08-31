//3- Agora inverta o lado do triângulo. Por exemplo:


let n =5;
let asterisco = "*";
let espaco = " ";
let conteudoLinha = '';

for (let linha = 1; linha <= n; linha +=1){
  let conteudoLinha = '';
  for (let colunaVazia = 1; colunaVazia <= n - linha; colunaVazia +=1){
    conteudoLinha += espaco;
  }
  for (let colunaCheia = 1; colunaCheia <= linha; colunaCheia +=1){
    conteudoLinha += asterisco;
  }
  console.log(conteudoLinha);
}


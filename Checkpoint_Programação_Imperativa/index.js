
/*
1.	Crie uma variável produtos, que contenha um array de objetos, com no mínimo 3 itens. Dentro da variável, 
liste produtos disponíveis, informando os seguintes detalhes: Nome do Produto, Valor do Produto, 
Qualidade do Produto e Status.
A informação Qualidade do Produto deve ser um número que irá de 0 a 10.
A informação Status deve ser um Booleano, indicando se o produto está disponível em estoque.
*/
const produtos = [

    { nomeDoProduto: "smartPhone", valorDoProduto: 2500, qualidadeDoProduto: 8, statusDoProduto:true},
    { nomeDoProduto: "impressora", valorDoProduto: 750, qualidadeDoProduto: 5, statusDoProduto:false},
    { nomeDoProduto: "notbook", valorDoProduto: 3500, qualidadeDoProduto: 10, statusDoProduto:false},
    { nomeDoProduto: "kit_mouse_teclado", valorDoProduto: 490, qualidadeDoProduto: 9, statusDoProduto:true},
    { nomeDoProduto: "ventilador", valorDoProduto: 49, qualidadeDoProduto:8 , statusDoProduto:true},
    { nomeDoProduto: "tenis_nike", valorDoProduto: 499, qualidadeDoProduto: 7, statusDoProduto:false},
    { nomeDoProduto: "relógio", valorDoProduto:560 , qualidadeDoProduto: 6, statusDoProduto:false},
    { nomeDoProduto: "fone_gamer", valorDoProduto: 482, qualidadeDoProduto: 9, statusDoProduto:true},
    { nomeDoProduto: "caixa_JBL", valorDoProduto: 1599, qualidadeDoProduto: 10, statusDoProduto:true},
    { nomeDoProduto: "óculos", valorDoProduto: 350, qualidadeDoProduto: 9, statusDoProduto:false},
    { nomeDoProduto: "perfume_212", valorDoProduto: 600, qualidadeDoProduto:5, statusDoProduto:true},
    { nomeDoProduto: "mala_de_viagem", valorDoProduto: 280, qualidadeDoProduto: 10, statusDoProduto:true},
    { nomeDoProduto: "pendrive_256gb", valorDoProduto: 530, qualidadeDoProduto: 7, statusDoProduto:true},
    { nomeDoProduto: "microondas", valorDoProduto: 488, qualidadeDoProduto: 10, statusDoProduto:false},
    { nomeDoProduto: "tablet", valorDoProduto: 799, qualidadeDoProduto: 9, statusDoProduto:false},
    { nomeDoProduto: "roteador", valorDoProduto: 250, qualidadeDoProduto: 10, statusDoProduto:true},

];

 /*
 2.	Em seguida, um usuário deseja filtrar os produtos, com base em alguns critérios. Selecione todos os produtos que tenham: 
 */ 

 //Valor entre 482 e 1600;
 var preco = produtos.filter(p => (p.valorDoProduto  >=482 && p.valorDoProduto <=1600));{

  console.log( preco )
  };



 //Qualidade superior a 6;
var qualidade = preco.filter(p => (p.qualidadeDoProduto  >=6));{

console.log( qualidade )
};

//Status como disponível.
function disponibilidade (value){
  if (value.statusDoProduto == true)
  return value;
}
var produtosDisponiveis = qualidade.filter(disponibilidade);
produtosDisponiveis.forEach(produtoDisponivel => { 
  console.log(produtoDisponivel);
});

/*
3.	Por fim, é necessário exibir todos os itens presentes no carrinho,
 com seus nomes e preços correspondentes, e no final um valor total,
  resultante da somatória de todos os produtos.
*/
var carrinho = produtosDisponiveis; {
 for (let i = 0; i < carrinho.length; i++) { 
  console.log(carrinho[i].nomeDoProduto);
  console.log(carrinho[i].valorDoProduto);
  
    }
}
var total = carrinho.reduce((soma, pedido) => soma + pedido.valorDoProduto, 0);

console.log(`Parabens! Pedido realizado com sucesso, Total a pagar é de R$ ${total}`);



// Definindo o array de objetos de produtos
var produtos = [
    {
      nome: "Produto 1",
      preco: 19.99,
      descricao: "Este é o produto 1",
    },
    {
      nome: "Produto 2",
      preco: 29.99,
      descricao: "Este é o produto 2",
    },
    {
      nome: "Produto 3",
      preco: 39.99,
      descricao: "Este é o produto 3",
    },
  ];
  
  // Usando o método map() para aplicar um aumento de 1.5 ao preço de cada produto
  var produtosComAumento = produtos.map(function (produto) {
    return {
      nome: produto.nome,
      preco: produto.preco * 1.5, // Aplicando o aumento de 1.5 ao preço
      descricao: produto.descricao,
    };
  });
  
  // Exibindo o resultado no console
  console.log(produtosComAumento);
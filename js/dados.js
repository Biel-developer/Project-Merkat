$(document).ready(function () {
    var data = [
        {
            "id": 1,
            "nome": "Carne Bovina Bife Amaciado",
            "preco": 28.99,
            "precoAntigo": 32.49,
            "imagem": "img/icones/imagens/carnes/bifeAmaciado.png",
            "categoria": "Carne Fresca"
        },
        {
            "id": 2,
            "nome": "Hambúrguer de Carne de Frango e Bovina Perdigão Pacote 56g",
            "preco": 1.19,
            "precoAntigo": "sem desconto",
            "imagem": "img/icones/imagens/carnes/hamburguerdeCarne.jpeg",
            "categoria": "Comida Rápida"
        },
        {
            "id": 3,
            "nome": "Carne Coxao Mole Bov Resf",
            "preco": 30.99,
            "precoAntigo": 32.99,
            "imagem": "img/icones/imagens/carnes/coxaoMole.png",
            "categoria": "Carne Fresca"
        },
        {
            "id": 4,
            "nome": "Carne Bov Peito",
            "preco": 18.89,
            "precoAntigo": 19.99,
            "imagem": "img/icones/imagens/carnes/peitodeBoi.jpg",
            "categoria": "Carne Fresca"
        },
        {
            "id": 5,
            "nome": "Carne Bovina Bucho",
            "preco": 12.99,
            "precoAntigo": "sem desconto",
            "imagem": "img/icones/imagens/carnes/buchodeBoi.png",
            "categoria": "Carne Fresca"
        },
        {
            "id": 6,
            "nome": "Carne Costela Bovina",
            "preco": 19.49,
            "precoAntigo": 19.98,
            "imagem": "img/icones/imagens/carnes/costelaBovina.png",
            "categoria": "Carne Fresca"
        },
        {
            "id": 7,
            "nome": "Carne Bovina Patinho",
            "preco": 34.69,
            "precoAntigo": "sem desconto",
            "imagem": "img/icones/imagens/carnes/patinhocarne.png",
            "categoria": "Carne Fresca"
        },
        {
            "id": 8,
            "nome": "Carne Acém Com Osso",
            "preco": 19.89,
            "precoAntigo": 22.89,
            "imagem": "img/icones/imagens/carnes/acemBovino.jpeg",
            "categoria": "Carne Fresca"
        },
        {
            "id": 9,
            "nome": "Pizza Congelada",
            "preco": 12.99,
            "precoAntigo": "sem desconto",
            "imagem": "img/icones/imagens/comidaRapida/pizzaCongelada.jpeg",
            "categoria": "Comida Rápida"
        },
        {
            "id": 10,
            "nome": "Uva Verde Sem Semente",
            "preco": 17.99,
            "precoAntigo": "sem desconto",
            "imagem": "img/icones/imagens/frutas/uvaVerdejpeg.jpeg",
            "categoria": "Frutas"
        },
        {
            "id": 11,
            "nome": "Morango Premium Peterfrut 250G",
            "preco": 11.99,
            "precoAntigo": "sem desconto",
            "imagem": "img/icones/imagens/frutas/morango.jpeg",
            "categoria": "Frutas"
        },
        {
            "id": 12,
            "nome": "Uva Globo",
            "preco": 24.99,
            "precoAntigo": "sem desconto",
            "imagem": "img/icones/imagens/frutas/uva.png",
            "categoria": "Frutas"
        },
        {
            "id": 13,
            "nome": "Melão Português",
            "preco": 4.99,
            "precoAntigo": "sem desconto",
            "imagem": "img/icones/imagens/frutas/melao.png",
            "categoria": "Frutas"
        },
        {
            "id": 14,
            "nome": "Limão Siciliano",
            "preco": 13.99,
            "precoAntigo": "sem desconto",
            "imagem": "img/icones/imagens/frutas/limao.jpg",
            "categoria": "Frutas"
        },
        {
            "id": 15,
            "nome": "Maçã Fuji",
            "preco": 11.99,
            "precoAntigo": "sem desconto",
            "imagem": "img/icones/imagens/frutas/maca.jpeg",
            "categoria": "Frutas"
        },
        {
            "id": 16,
            "nome": "Banana Prata Unid",
            "preco": 0.49,
            "precoAntigo": "sem desconto",
            "imagem": "img/icones/imagens/verduras/banana.png",
            "categoria": "Frutas"
        },
        {
            "id": 17,
            "nome": "Batata Inglesa",
            "preco": 7.99,
            "precoAntigo": "sem desconto",
            "imagem": "img/icones/imagens/verduras/batata.jpeg",
            "categoria": "Legumes"
        },
        {
            "id": 18,
            "nome": "Batata Doce",
            "preco": 4.99,
            "precoAntigo": "sem desconto",
            "imagem": "img/icones/imagens/verduras/batataDoce.png",
            "categoria": "Legumes"
        },
        {
            "id": 19,
            "nome": "Cebola",
            "preco": 7.99,
            "precoAntigo": "sem desconto",
            "imagem": "img/icones/imagens/verduras/cebola.jpeg",
            "categoria": "Legumes"
        },
        {
            "id": 20,
            "nome": "Maracuja",
            "preco": 6.99,
            "precoAntigo": "sem desconto",
            "imagem": "img/icones/imagens/verduras/maracuja.jpg",
            "categoria": "Frutas"
        },
        {
            "id": 21,
            "nome": "Macaxeira",
            "preco": 1.99,
            "precoAntigo": "sem desconto",
            "imagem": "img/icones/imagens/verduras/macaxeira.png",
            "categoria": "Legumes"
        },
        {
            "id": 22,
            "nome": "Alface",
            "preco": 1.49,
            "precoAntigo": "sem desconto",
            "imagem": "img/icones/imagens/verduras/alface.jpeg",
            "categoria": "Verduras"
        },
        {
            "id": 23,
            "nome": "Cenoura",
            "preco": 7.99,
            "precoAntigo": "sem desconto",
            "imagem": "img/icones/imagens/verduras/cenoura.png",
            "categoria": "Legumes"
        },
        {
            "id": 24,
            "nome": "Repolho Verde",
            "preco": 3.99,
            "precoAntigo": "sem desconto",
            "imagem": "img/icones/imagens/verduras/repolhoVerde.jpeg",
            "categoria": "Verduras"
        },
        {
            "id": 25,
            "nome": "Repolho Roxo",
            "preco": 7.99,
            "precoAntigo": "sem desconto",
            "imagem": "img/icones/imagens/verduras/repolhoRoxo.jpeg",
            "categoria": "Verduras"
        },
        {
            "id": 26,
            "nome": "Couve-Flor",
            "preco": 11.99,
            "precoAntigo": "sem desconto",
            "imagem": "img/icones/imagens/verduras/couveFlor.png",
            "categoria": "Verduras"
        }
    ];

    localStorage.setItem('produtosContainer', JSON.stringify(data));

    function mostrarProdutos(categoria) {
        $("#card-produtos").empty();

        var produtosFiltrados = data.filter(produto => produto.categoria === categoria);

        if (produtosFiltrados.length === 0) {
            $("#card-produtos").append('<h1>Nenhum produto encontrado nessa categoria.</h1>');
        } else {
            produtosFiltrados.forEach(produto => {
                var unidadeMedida = '';
                if (categoria === 'Verduras' || categoria === 'Frutas') {
                    unidadeMedida = '/uni';
                } else if (categoria === 'Carne Fresca') {
                    unidadeMedida = '/KG';
                }

                var produtoHtml = `
                    <div data-id="${produto.id}" class="card-element">
                        <div class="img-product">
                            <img src="${produto.imagem}" alt="">
                        </div>
                        <div class="price-element">
                            <p>R$ ${produto.preco.toFixed(2)} ${unidadeMedida}</p>
                            <s>${produto.precoAntigo}</s>
                        </div>
                        <div class="description-element">
                            <span>${produto.nome}</span>
                        </div>
                        <div class="button-element">
                            <button><a onclick='carrinho(${JSON.stringify(produto)})' href="#">Adicionar ao Carrinho</a></button>
                        </div>
                    </div>
                `;
                $("#card-produtos").append(produtoHtml);
                console.log('Produto adicionado:', produtoHtml);
            });
        }
    }

    // Mostra os produtos de uma categoria por padrão
    mostrarProdutos('Carne Fresca');

    // Filtra os produtos ao clicar nos botões
    $(".menu-section button").click(function () {
        var categoria = $(this).text();
        mostrarProdutos(categoria);
    });

    window.carrinho = function (produto) {
        const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
        carrinho.push(produto);
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        carregarCarrinho();
        console.log("Produto adicionado ao carrinho: ", produto);
    };

    function carregarCarrinho() {
        const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
        const cart = document.querySelector('.menu-carrinho #carrinhoMenu');
        const qtdCart = document.getElementById('qtdCart');
        const precoTotalProduto = document.querySelector('.precoTotalProduto');
    
        let totalItens = 0;
        let precoTotal = 0;
    
        cart.innerHTML = '';
    
        carrinho.forEach(produto => {
            const item = document.createElement('li');
            item.className = 'produto-item';
    
            item.innerHTML = `
                <div class="card">
                    <div class="cards-element-product">
                        <div class="img-element">
                            <img src="${produto.imagem}" alt="">
                        </div>
                        <div class="text-element">
                            <p>${produto.nome}</p>
                            <span>R$ ${produto.preco.toFixed(2)}</span>
                        </div>
                    </div>
                    <div class="removerProduto">
                        <button class="removerBtn" data-id="${produto.id}">Remover</button>
                    </div>
                </div>
            `;
            cart.appendChild(item);
    
            totalItens++;
            precoTotal += produto.preco;
        });
    
        if (qtdCart) {
            qtdCart.textContent = totalItens;
            qtdCart.style.display = totalItens > 0 ? 'flex' : 'none';
        }
    
        if (precoTotalProduto) {
            precoTotalProduto.textContent = 'R$ ' + precoTotal.toFixed(2);
        }
    
        localStorage.setItem('subtotal', precoTotal.toFixed(2));
    
        document.querySelectorAll('.removerBtn').forEach(btn => {
            btn.addEventListener('click', function () {
                const produtoId = parseInt(this.getAttribute('data-id'));
                removerDoCarrinho(produtoId);
            });
        });

        const FinalizarCompra = document.getElementById('FinalizarCompra');

    FinalizarCompra.addEventListener("click", (e) => {
        e.preventDefault();
        if(precoTotal === 0){
            return;
        }else{
            window.location.href = 'checkoutpage/checkout.html';
        }
    });
    }

    
    
    function removerDoCarrinho(produtoId) {
        const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
        const novoCarrinho = carrinho.filter(produto => produto.id !== produtoId);
        localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
        carregarCarrinho();
    }
    
    document.addEventListener('DOMContentLoaded', carregarCarrinho);
    carregarCarrinho();
});
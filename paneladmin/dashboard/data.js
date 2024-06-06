$(document).ready(function () {
    var data = JSON.parse(localStorage.getItem('produtosContainer')) || [];

    // pega o endereço da imagem e ajusta para a nova pagina
    function corrigirCaminhoImagens() {
        for (var id in data) {
            var produto = data[id];
            produto.imagem = corrigirCaminho(produto.imagem);
        }
    }

    function corrigirCaminho(caminho) {
        var correcoes = {
            'img/icones/imagens/carnes/': '../../img/icones/imagens/carnes/',
            'img/icones/imagens/comidaRapida/': '../../img/icones/imagens/comidaRapida/',
            'img/icones/imagens/frutas/': '../../img/icones/imagens/frutas/',
            'img/icones/imagens/verduras/': '../../img/icones/imagens/verduras/'
        };

        for (var originalDir in correcoes) {
            if (caminho.includes(originalDir)) {
                return caminho.replace(originalDir, correcoes[originalDir]);
            }
        }

        return caminho;
    }
    // =================================================================================================

    // mostra os produtos no dashboard com o Nome, Preço e Imagem.
    function mostrarProdutosNoDashboard() {
        var dashboardProdutos = $("#dashboard-produtos");
        dashboardProdutos.empty();

        if (data.length === 0) {
            dashboardProdutos.append('<h1>Nenhum produto encontrado.</h1>');
        } else {
            data.forEach(function(produto) {
                var produtoHtml = `
                    <div data-id="${produto.id}" class="card-element">
                        <div class="img-product">
                            <img src="${produto.imagem}" alt="">
                        </div>
                        <div class="price-element">
                            <p>R$ ${produto.preco.toFixed(2)}</p>
                        </div>
                        <div class="description-element">
                            <span>${produto.nome}</span>
                        </div>
                        <div class="edit-element">
                            <button class="editProduct">Editar</button>
                            <button class="deleteProduct">Excluir</button>
                        </div>
                    </div>
                `;
                dashboardProdutos.append(produtoHtml);
            });

            // abre o painel de editar os produtos
            $('.editProduct').on('click', function() {
                const productId = $(this).closest('.card-element').data('id');
                abrirPainelEdicao(productId);
            });

            // aqui eu excluo os produtos apresentados no dashboard
            $('.deleteProduct').on('click', function() {
                const productId = $(this).closest('.card-element').data('id');
                excluirProduto(productId);
            });
        }
    }

    // ========================================================================================

    // Aqui se o produto for encontrado, os campos do formulário de edição são preenchidos com os dados.
    function abrirPainelEdicao(productId) {
        let produto = data.find(p => p.id == productId);
        if (produto) {
            $('#nome-produto').val(produto.nome);
            $('#preco-produto').val(produto.preco);
            $('#descricao-produto').val(produto.descricao);
            $('#preview-imagem').attr('src', produto.imagem).show();
            $('#adicionar-produto').text('Salvar Produto').data('productId', productId);
        } else {
            $('#form-produto')[0].reset();
            $('#preview-imagem').hide();
            $('#adicionar-produto').text('Adicionar Produto').removeData('productId');
        }
        $('#painel-adicao').show();
    }

    // Aqui basicamente esta excluindo um produto do array data e atualizando no localStorage.
    function excluirProduto(productId) {
        data = data.filter(produto => produto.id != productId);
        localStorage.setItem('produtosContainer', JSON.stringify(data));
        mostrarProdutosNoDashboard();
    }

    function salvarProdutos() {
        localStorage.setItem('produtosContainer', JSON.stringify(data));
    }

    $('#abrir-painel').on('click', function () {
        abrirPainelEdicao(null);
    });

    // Quando eu abro o produto a função lê o arquivo utilizando FileReader e exibe a imagem selecionada no elemento com o id preview-imagem.
    $('#imagem-produto').on('change', function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                $('#preview-imagem').attr('src', e.target.result).show();
            };
            reader.readAsDataURL(file);
        }
    });

    // aqui basicamente eu adiono um produto nome no dashboard
    $('#adicionar-produto').on('click', function () {
        const nome = $('#nome-produto').val();
        const preco = parseFloat($('#preco-produto').val());
        const descricao = $('#descricao-produto').val();
        const imagem = $('#preview-imagem').attr('src');
        const productId = $(this).data('productId');

        if (nome && !isNaN(preco) && descricao && imagem) {
            let produto = {
                id: productId ? productId : Date.now(),
                nome: nome,
                preco: preco,
                descricao: descricao,
                imagem: imagem
            };


            // aqui esta verificando se o produto é verdadeiro
            if (productId) {
                const index = data.findIndex(p => p.id == productId);
                if (index !== -1) {
                    data[index] = produto;
                }
            } else {
                data.push(produto);
            }

            salvarProdutos();

            alert("Produto salvo com sucesso!");

            $('#painel-adicao').hide();
            mostrarProdutosNoDashboard();
        } else {
            alert("Por favor, preencha todos os campos e adicione uma imagem.");
        }
    });

    corrigirCaminhoImagens();
    mostrarProdutosNoDashboard();
});

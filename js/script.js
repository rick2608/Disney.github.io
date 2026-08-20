// Pega no HTML o elemento que possui o ID "personagens".
// É dentro desse elemento que os cards serão colocados.
const areaPersonagens = document.getElementById("personagens");

// Pega no HTML o elemento que possui o ID "quantidade".
// Ele será usado para mostrar quantos personagens foram carregados.
const quantidade = document.getElementById("quantidade");

// Pega no HTML o botão que possui o ID "botaoCarregar".
// Esse botão será usado para carregar mais personagens.
const botaoCarregar = document.getElementById("botaoCarregar");

// Pega no HTML o elemento que possui o ID "paginaAtual".
// Ele mostrará qual página estamos visualizando.
const paginaAtual = document.getElementById("paginaAtual");

// Pega no HTML o elemento que possui o ID "carregando".
// Ele mostrará mensagens enquanto os dados estão sendo carregados.
const carregando = document.getElementById("carregando");

// Pega no HTML o campo de pesquisa.
// O usuário digitará o nome do personagem nesse campo.
const campoBusca = document.getElementById("campoBusca");

// Pega no HTML o botão de busca.
// Esse botão será usado para pesquisar um personagem.
const botaoBuscar = document.getElementById("botaoBuscar");


// Cria uma variável chamada "pagina".
// O valor começa em 1 porque a primeira página da API é a página 1.
let pagina = 1;

// Cria uma variável para controlar a quantidade total de personagens.
let totalPersonagens = 0;

// Cria uma constante chamada "limite".
// Define que queremos receber 50 personagens por página.
const limite = 50;


// Cria uma função assíncrona chamada "carregarPersonagens".
// Essa função será responsável por buscar os personagens na API.
async function carregarPersonagens() {

    // Mostra uma mensagem informando que os personagens estão sendo carregados.
    carregando.textContent =
        "Carregando personagens...";

    // O "try" tenta executar o código que está dentro dele.
    try {

        // Faz uma requisição HTTP para a API da Disney.
        // "fetch" é usado para acessar dados de outro servidor.
        // "await" espera a resposta chegar.
        const resposta = await fetch(

            // Endereço da API.
            // "page" recebe o número da página atual.
            // "pageSize" recebe a quantidade de personagens.
            `https://api.disneyapi.dev/character?page=${pagina}&pageSize=${limite}`
        );


        // Verifica se a requisição não foi realizada corretamente.
        if (!resposta.ok) {

            // Cria um erro para ser capturado pelo "catch".
            throw new Error(
                "Erro ao acessar a API"
            );
        }


        // Converte a resposta da API para JSON.
        // O JSON contém as informações dos personagens.
        const dados = await resposta.json();


        // Acessa a propriedade "data".
        // "data" contém a lista de personagens.
        // "forEach" percorre cada personagem da lista.
        dados.data.forEach(personagem => {

            // Chama a função "criarCard".
            // O personagem atual é enviado para essa função.
            criarCard(personagem);

        });


        // Soma ao total a quantidade de personagens recebidos.
        // "length" informa quantos itens existem na lista.
        totalPersonagens += dados.data.length;


        // Altera o texto do contador.
        // Mostra a quantidade atual de personagens.
        quantidade.textContent =
            `${totalPersonagens} personagens carregados`;


        // Atualiza o texto que mostra a página atual.
        paginaAtual.textContent =
            `Página ${pagina}`;


        // Apaga a mensagem de carregamento.
        carregando.textContent = "";


        // Verifica se a API possui uma próxima página.
        // "dados.info" contém as informações da paginação.
        // "nextPage" informa se existe uma próxima página.
        if (!dados.info || !dados.info.nextPage) {

            // Esconde o botão quando não existem mais páginas.
            botaoCarregar.style.display =
                "none";
        }

    // Se acontecer algum erro, o código passa para o "catch".
    } catch (erro) {

        // Mostra o erro no console do navegador.
        // Isso ajuda a descobrir o que aconteceu.
        console.error(erro);

        // Mostra uma mensagem de erro na página.
        carregando.textContent =
            "Erro ao carregar os personagens.";
    }
}


// Cria uma função chamada "criarCard".
// Ela recebe um personagem como parâmetro.
function criarCard(personagem) {

    // Cria um novo elemento HTML "div".
    // Esse elemento será o card do personagem.
    const card =
        document.createElement("div");


    // Adiciona a classe CSS "card".
    // Isso permite que o CSS estilize o card.
    card.classList.add("card");


    // Cria uma nova "div".
    // Ela será usada para colocar a imagem.
    const imagem =
        document.createElement("div");


    // Adiciona a classe CSS "imagem".
    imagem.classList.add("imagem");


    // Cria um elemento HTML "img".
    // Esse elemento mostrará a imagem do personagem.
    const img =
        document.createElement("img");


    // Pega da API o endereço da imagem.
    // "imageUrl" é o campo que contém a imagem.
    img.src =
        personagem.imageUrl;


    // Define o texto alternativo da imagem.
    // O texto será o nome do personagem.
    img.alt =
        personagem.name;


    // Cria uma nova "div".
    // Ela será usada para mostrar o nome.
    const nome =
        document.createElement("div");


    // Adiciona a classe CSS "nome".
    nome.classList.add("nome");


    // Coloca o nome do personagem dentro da "div".
    // "textContent" altera o texto do elemento.
    nome.textContent =
        personagem.name;


    // Coloca a imagem dentro da área de imagem.
    imagem.appendChild(img);


    // Coloca a área de imagem dentro do card.
    card.appendChild(imagem);


    // Coloca o nome dentro do card.
    card.appendChild(nome);


    // Coloca o card completo dentro da área de personagens.
    // É aqui que o card finalmente aparece na página.
    areaPersonagens.appendChild(card);
}


// Adiciona um evento de clique ao botão "Carregar Mais".
botaoCarregar.addEventListener(
    "click",
    () => {

        // Aumenta o número da página em 1.
        // Página 1 passa a ser página 2.
        pagina++;


        // Busca os personagens da nova página.
        carregarPersonagens();

    }
);


// Adiciona um evento de clique ao botão "Buscar".
botaoBuscar.addEventListener(
    "click",
    buscarPersonagem
);


// Adiciona um evento ao campo de busca.
// "keydown" acontece quando uma tecla é pressionada.
campoBusca.addEventListener(
    "keydown",
    evento => {

        // Verifica se a tecla pressionada foi Enter.
        if (evento.key === "Enter") {

            // Executa a função de pesquisa.
            buscarPersonagem();

        }

    }
);


// Cria uma função assíncrona para pesquisar personagens.
async function buscarPersonagem() {

    // Pega o texto digitado no campo de pesquisa.
    const nome =
        campoBusca.value.trim();


    // Verifica se o campo está vazio.
    if (nome === "") {

        // Apaga todos os cards atuais.
        areaPersonagens.innerHTML = "";


        // Volta para a primeira página.
        pagina = 1;


        // Zera a quantidade de personagens.
        totalPersonagens = 0;


        // Mostra novamente o botão "Carregar Mais".
        botaoCarregar.style.display =
            "inline-block";


        // Carrega novamente os primeiros personagens.
        carregarPersonagens();


        // Encerra a função.
        return;
    }


    // Mostra uma mensagem informando que a pesquisa está acontecendo.
    carregando.textContent =
        "Pesquisando...";


    // Apaga os cards que estavam na tela.
    areaPersonagens.innerHTML = "";


    // Tenta fazer a pesquisa.
    try {

        // Faz uma requisição para o endpoint de filtro da API.
        // "name" recebe o nome digitado pelo usuário.
        // "encodeURIComponent" transforma o texto em formato adequado para URL.
        const resposta = await fetch(

            `https://api.disneyapi.dev/character?name=${encodeURIComponent(nome)}`
        );


        // Verifica se a API respondeu corretamente.
        if (!resposta.ok) {

            // Cria um erro caso a resposta seja inválida.
            throw new Error(
                "Personagem não encontrado"
            );
        }


        // Converte a resposta para JSON.
        const dados =
            await resposta.json();


        // Verifica se não existem personagens nos resultados.
        if (!dados.data ||
            dados.data.length === 0) {

            // Mostra uma mensagem informando que nada foi encontrado.
            quantidade.textContent =
                "Nenhum personagem encontrado";


            // Remove a mensagem de pesquisa.
            carregando.textContent = "";


            // Esconde o botão de carregar mais.
            botaoCarregar.style.display =
                "none";


            // Encerra a função.
            return;
        }


        // Percorre cada personagem encontrado.
        dados.data.forEach(personagem => {

            // Cria um card para o personagem encontrado.
            criarCard(personagem);

        });


        // Mostra a quantidade de resultados encontrados.
        quantidade.textContent =
            `${dados.data.length} personagem(ns) encontrado(s)`;


        // Remove a mensagem "Pesquisando...".
        carregando.textContent = "";


        // Esconde o botão "Carregar Mais".
        // Durante uma pesquisa estamos mostrando somente os resultados.
        botaoCarregar.style.display =
            "none";

    // Captura qualquer erro que aconteça durante a pesquisa.
    } catch (erro) {

        // Mostra o erro no console.
        console.error(erro);


        // Mostra uma mensagem para o usuário.
        quantidade.textContent =
            "Nenhum personagem encontrado.";


        // Remove a mensagem de pesquisa.
        carregando.textContent = "";
    }
}


// Executa a função assim que o site é aberto.
// Isso faz os primeiros 50 personagens aparecerem automaticamente.
carregarPersonagens();
# Mundo Disney — Integração com API

## Autor

* **Nome:** Richard
* **Ano:** 2026

## 1. Identificação do projeto

* **Nome do projeto:** Mundo Disney
* **Instituição de ensino:** Senac
* **Unidade curricular:** UC8 - Desenvolver Aplicações Mobile
* **Professor(a):** Rafaela

---

## 2. Sobre o projeto

O projeto desenvolvido foi feito para interligar a API da disney com o vs code e mostrar os personagens que tem na disney

## 3. Estrutura do projeto

Apresente a organização dos arquivos e pastas do seu projeto.

**Exemplo:**

```text
missao_117/
│
├── index.html
├── README.md
├── img/
│      └── disney.jpg
├── css/
│      └── style.css
└── js/
        └── script.css

```

### Descrição dos arquivos

| Arquivo      | Descrição                                                        |
| ------------ | ---------------------------------------------------------------- |
| `index.html` | Contém a estrutura da página, como o cards dos personagens que serão exibidos. |
| `style.css`  | Usado para deixar o estilo da pagina mais bonito                 |
| `script.js`  | Faz a ligação com API da disney para mostrar as fotos e os nomes dos personagens. |
| `README.md`  | Apresenta informações sobre o projeto, seu funcionamento e instruções para utilização. |
| `disney.jpg` | Imagem padrão utilizada quando um personagem não possui uma imagem disponível. |

> **Caso seu projeto possua outras pastas ou arquivos, apresente-os também na estrutura acima.**

---

## 💻 4. Tecnologias utilizadas

Liste as tecnologias utilizadas no desenvolvimento do projeto.

* Item 1 Java Script
* Item 2 API
* Item 3 HTML
* Item 4 CSS

---

## 5. API utilizada

### Nome da API

**Disney API Documentation**

### Endpoint utilizado

```text
https://api.disneyapi.dev/character
```

### Para que a API foi utilizada?

> A API foi utilizada para pegar os nomes dos personagens e a foto deles

### Quais informações foram consumidas?

> Nomes dos Personagens e imagens dos Personagens


##  6. Como executar o projeto

Explique passo a passo como outra pessoa pode executar seu projeto em outra máquina.

### Pré-requisitos

VS CODE

### Passo a passo

* Passo 1 Instale o VS CODE em sua maquina
* Passo 2 Instale o arquivo na sua maquina
* Passo 3 Extraia o arquivo para ficar apenas em pasta
* Passo 4 Abra o VS CODE vá nas 3 linhas no lado esquerdo superior clique em arquivo e abir o arquivo ou pressionar CTRL + O

---

## 7. Como funciona a integração

Explique de forma objetiva e em até 10 passos como sua aplicação se comunica com a API.

1. A aplicação envia uma requisição para a API da Disney.
2. A API recebe a solicitação e processa os dados.
3. A aplicação utiliza endpoints específicos para buscar personagens.
4. Os dados dos personagens são retornados pela API em formato JSON.
5. O JavaScript recebe e interpreta esses dados.
6. A aplicação verifica informações como nome, filmes e imagem do personagem.
7. Os dados são organizados e exibidos na página.
8. Caso o personagem não possua imagem, a aplicação utiliza a imagem padrão `disney.jpg`.
9. O usuário pode pesquisar e visualizar diferentes personagens.
10. Toda nova pesquisa gera uma nova requisição à API e atualiza os resultados na tela.


## 8. Desafios encontrados

Registre pelo menos um problema ou dificuldade que você encontrou durante o desenvolvimento e como resolveu

### Desafio encontrado

**Problema:** 

> Interligação da API

**Como identifiquei o problema:**  

> Não sabia como pegar as coisas da API  e utilizalas na miha pagina sem precisar ter o banco de dados no computador

**Como resolvi:**

> Tive ajuda de algumas IAs e pedi para elas me explicarem como resolver para não ficar sem entender como funciona as coisas e comentei cada linha do JavaScript para caso eu me esqueça eu consiga entender 

---

## 9. Aprendizados

Responda:

> **O que você aprendeu com o desenvolvimento deste projeto?**

Eu aprendi a conectar uma APi e a como pegar os dados dela sem precisar instalar o banco de dados no computador como fazer para ele limitar por pagina/carregamento e ele carregar os personagens sempre que clicasse para carregar mais e também mostrar erro caso ele não consiga se conectar com a API


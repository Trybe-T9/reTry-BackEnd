'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => queryInterface.bulkInsert('question',
  [
    {
      id: '946731e6-68aa-49be-94de-8ba1b55cfa6b',
      question: 'Quais das opções abaixo não são consideradas HOF’S (Higher Order Functions)?',
      type: 'multi-choice',
      difficulty: 2,
      theme: 'Higher Order Functions',
      image: '',
      block: 8,
      module_id: 'efff8570-5cb7-4090-bd58-46f4b5a335a6',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: '8496ec78-9e92-4bb6-bf92-a722a4ed2953',
      question: 'O componente do código da imagem seria renderizado sem problemas.',
      type: 'boolean',
      difficulty: 2,
      theme: 'Ciclo de Vida de Componentes e React Router',
      image: 'images/questao1.png',
      block: 11,
      module_id: 'a5df9455-4d7f-4f52-94cb-eb830b416cad',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: 'b51f5957-627d-4380-b801-21088dc4b041',
      question: 'Como o reducer altera o estado geral da aplicação?',
      type: 'multi-choice',
      difficulty: 2,
      theme: 'Gerenciamento de estado com Redux',
      image: '',
      block: 16,
      module_id: 'a5df9455-4d7f-4f52-94cb-eb830b416cad',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: 'db528663-c100-495d-83bf-179adc42dbab',
      question: 'Em React Router, qual o nome do componente que renderiza um "href" mudando a rota da minha aplicação?',
      type: 'multi-choice',
      difficulty: 1,
      theme: 'Ciclo de Vida de Componentes e React Router',
      image: '',
      block: 13,
      module_id: 'a5df9455-4d7f-4f52-94cb-eb830b416cad',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: '5a181751-ece8-49ba-939d-3023621a5fbb',
      question: 'Toda função assíncrona retorna uma Promise',
      type: 'boolean',
      difficulty: 2,
      theme: 'JavaScript Assíncrono e Promises',
      image: '',
      block: 9,
      module_id: 'efff8570-5cb7-4090-bd58-46f4b5a335a6',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: 'f00403e2-f913-42b1-9196-2dd38d11081f',
      question: 'Quanto ao ciclo de vida de um componente React, a gente pode dizer que o método componentDidMount...',
      type: 'multi-choice',
      difficulty: 1,
      theme: 'Ciclo de Vida de Componentes e React Router',
      image: '',
      block: 11,
      module_id: 'a5df9455-4d7f-4f52-94cb-eb830b416cad',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: '104c3b73-6467-456c-b6c7-d6079a565dc1',
      question: 'O ______ é executado antes de um componente ser desmontado.',
      type: 'multi-choice',
      difficulty: 1,
      theme: 'Ciclo de Vida de Componentes e React Router',
      image: '',
      block: 13,
      module_id: 'a5df9455-4d7f-4f52-94cb-eb830b416cad',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: 'b046dfb2-0ffd-4bf4-946e-90365154fcdb',
      question: 'O que a Higher Order Function "forEach" retorna?',
      type: 'multi-choice',
      difficulty: 1,
      theme: 'Higher Order Functions do JavaScript ES6',
      image: '',
      block: 8,
      module_id: 'efff8570-5cb7-4090-bd58-46f4b5a335a6',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: '009016cf-ab90-4a69-a02c-6bbd87b62864',
      question: 'CRUD é um conceito no Desenvolvimento de Sistemas?',
      type: 'boolean',
      difficulty: 1,
      theme: 'CRUD',
      image: '',
      block: 13,
      module_id: 'a5df9455-4d7f-4f52-94cb-eb830b416cad',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: '0a6c9cda-9fdd-4cbf-bdd1-c1d1a2c8b199',
      question: 'Qual(is) dos seguintes comandos podem ser usados para acessar um valor guardado no Local Storage?\n' +
        '    A: localStorage.getItem("NOME_DA_CHAVE")\n' +
        '    B: localStorage.setItem("NOME_DA_CHAVE", "VALOR_DA_CHAVE")\n' +
        '    C: localStorage.NOME_DA_CHAVE\n' +
        '    D: localStorage.getItem("NOME_DA_CHAVE", "VALOR_DA_CHAVE")',
      type: 'multi-choice',
      difficulty: 1,
      theme: 'JavaScript: DOM, Eventos e Web Storage',
      image: '',
      block: 5,
      module_id: 'efff8570-5cb7-4090-bd58-46f4b5a335a6',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: 'be115d73-c89a-4ca2-bab3-a59275dd891a',
      question: 'O código mais comum para criar um escutador de eventos é através de uma função nativa do JavaScript, chamada addEventListener. A respeito dela, podemos dizer que...',
      type: 'multi-choice',
      difficulty: 1,
      theme: 'JavaScript: DOM, Eventos e Web Storage',
      image: '',
      block: 5,
      module_id: 'efff8570-5cb7-4090-bd58-46f4b5a335a6',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: 'dce0383c-a03a-424f-a476-a83c2064d617',
      question: 'Para criar uma nova aplicação em React é necessário executar o comando:',
      type: 'multi-choice',
      difficulty: 1,
      theme: 'Introdução à React',
      image: '',
      block: 13,
      module_id: 'a5df9455-4d7f-4f52-94cb-eb830b416cad',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: 'b355cbe5-d091-4951-b0d8-aa63a0425183',
      question: 'No React, quais propriedades utilizamos, respectivamente, em um elemento "input" e um elemento "label" para associar um ao outro?',
      type: 'multi-choice',
      difficulty: 1,
      theme: 'Componentes com Estado, Eventos e Formulários com React',
      image: '',
      block: 12,
      module_id: 'a5df9455-4d7f-4f52-94cb-eb830b416cad',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: 'fcbf1d8b-be84-4ef3-8901-8644c3c8b7a6',
      question: 'Utilizamos a Higher Order Function ______ para retornar um booleano que indica se todos os elementos do array retornam "true" quando passados para uma callback.',
      type: 'multi-choice',
      difficulty: 1,
      theme: 'Higher Order Functions do JavaScript ES6',
      image: '',
      block: 8,
      module_id: 'efff8570-5cb7-4090-bd58-46f4b5a335a6',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: 'f93332df-d4be-4def-b9c1-11eb9ef3537a',
      question: 'O Git é um versionador de arquivos que nos permite guardar nossos arquivos online e alternar entre as diversas versões commitadas',
      type: 'boolean',
      difficulty: 2,
      theme: 'Git, GitHub e Internet',
      image: '',
      block: 2,
      module_id: 'efff8570-5cb7-4090-bd58-46f4b5a335a6',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: '0c143303-89c8-4b1c-bc92-da202db541e3',
      question: 'Você está está programando e, para utilizar o resultado de uma Promise, resolve usar a expressão "await" fora de uma função assíncrona...',
      type: 'boolean',
      difficulty: 1,
      theme: 'JavaScript Assíncrono e Promises',
      image: '',
      block: 9,
      module_id: 'efff8570-5cb7-4090-bd58-46f4b5a335a6',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: '23c09cd6-09f3-47b0-a141-6934e8f36c84',
      question: 'Quanto à propriedade "order" do Flexbox, podemos afirmar que é uma propriedade particular de cada item que - quando atribuída - exibe os itens em ordem crescente. Por padrão, cada item recebe o valor 1 e o item que tiver o valor de -1 é exibido no final',
      type: 'boolean',
      difficulty: 3,
      theme: 'HTML e CSS: Forms, Flexbox e Responsivo',
      image: '',
      block: 6,
      module_id: 'efff8570-5cb7-4090-bd58-46f4b5a335a6',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: '07620e7f-e738-4b2d-8cbf-115bbeb2b0aa',
      question: 'Sobre localStorage é correto afirmar que:',
      type: 'multi-choice',
      difficulty: 3,
      theme: 'JavaScript: DOM, Eventos e Web Storage',
      image: '',
      block: 5,
      module_id: 'efff8570-5cb7-4090-bd58-46f4b5a335a6',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: '47879841-b757-46fc-8c61-2661e1a94310',
      question: 'Em um componente de classe do React, se eu quiser utilizar o seu estado num método que eu criei, não preciso "fazer o bind" no "constructor".',
      type: 'boolean',
      difficulty: 1,
      theme: 'Componentes com Estado, Eventos e Formulários com React',
      image: '',
      block: 12,
      module_id: 'a5df9455-4d7f-4f52-94cb-eb830b416cad',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: 'cd42748d-ffcf-4acd-a289-36d9e6f9c6d7',
      question: 'Qual comando utilizamos para renomear um arquivo através do terminal no Linux?',
      type: 'multi-choice',
      difficulty: 2,
      theme: 'Unix e Bash',
      image: '',
      block: 1,
      module_id: 'efff8570-5cb7-4090-bd58-46f4b5a335a6',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: '8c78fd98-2c09-44fb-95d4-aa50709e4d50',
      question: 'Sobre sessionStorage é incorreto afirmar que:',
      type: 'multi-choice',
      difficulty: 2,
      theme: 'JavaScript: DOM, Eventos e Web Storage',
      image: '',
      block: 5,
      module_id: 'efff8570-5cb7-4090-bd58-46f4b5a335a6',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: '41ed60a8-3064-4738-a815-9d329064ebbf',
      question: 'Imagine que você esta trabalhando em um projeto e, logo após commitar, percebe que escreveu uma mensagem errada ou adicionou algo que não devia. Qual comando utilizaria para remover esse commit?',
      type: 'multi-choice',
      difficulty: 1,
      theme: 'Git, GitHub e Internet',
      image: '',
      block: 5,
      module_id: 'efff8570-5cb7-4090-bd58-46f4b5a335a6',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: 'fc384176-62b1-4619-bf6f-d00ff6b54239',
      question: 'O ______ é o componente que relaciona o caminho de uma URL com a renderização de um componente.',
      type: 'multi-choice',
      difficulty: 2,
      theme: 'Ciclo de Vida de Componentes e React Router',
      image: '',
      block: 13,
      module_id: 'a5df9455-4d7f-4f52-94cb-eb830b416cad',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: '036caf5f-3881-48a1-b825-296c96e2caa2',
      question: 'Toda HOF recebe ou retornam funções como parâmetros.',
      type: 'boolean',
      difficulty: 3,
      theme: 'Higher Order Functions do JavaScript ES6',
      image: '',
      block: 8,
      module_id: 'efff8570-5cb7-4090-bd58-46f4b5a335a6',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: 'e61dd876-f20a-4ade-b9b9-7710c41db1a7',
      question: 'O que podemos fazer quando o Evaluator da Trybe no Github está rodando há mais de 40 minutos sem terminar o teste ou quebra inexplicavelmente?',
      type: 'multi-choice',
      difficulty: 2,
      theme: '',
      image: '',
      block: 12,
      module_id: 'a5df9455-4d7f-4f52-94cb-eb830b416cad',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: '5b77368b-625d-4173-9df4-5f56e6d2c9f4',
      question: 'Com relação as Metodologias Ágeis, em uma Daily Meeting os integrantes do time devem basicamente responder quais perguntas?',
      type: 'multi-choice',
      difficulty: 1,
      theme: 'Metodologias Ágeis',
      image: '',
      block: 14,
      module_id: 'a5df9455-4d7f-4f52-94cb-eb830b416cad',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: '52243da5-96c1-49a3-85e5-15580e1e0caf',
      question: 'Sobre as metodologias ágeis e Scrum podemos afirmar que:',
      type: 'multi-choice',
      difficulty: 2,
      theme: 'Metodologias Ágeis',
      image: '',
      block: 14,
      module_id: 'a5df9455-4d7f-4f52-94cb-eb830b416cad',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: '16b8aac0-ed53-46ed-b35f-469b7e17ec2c',
      question: 'O que são constraints em bancos de dados relacionais?',
      type: 'multi-choice',
      difficulty: 1,
      theme: 'Introdução à SQL',
      image: '',
      block: 20,
      module_id: 'afdd5680-b811-4aeb-b229-6e7f3351bd01',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: 'd32f1083-2e9f-47fd-91f6-4875e6385708',
      question: 'Quais os tipos de bancos de dados que existem?',
      type: 'multi-choice',
      difficulty: 1,
      theme: 'Introdução à SQL',
      image: '',
      block: 20,
      module_id: 'afdd5680-b811-4aeb-b229-6e7f3351bd01',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: 'bd00a339-7aea-44a0-8661-756cc2050118',
      question: 'Imagine que temos duas tabelas trybers_cats e trybers_dogs com os nomes dos pets dos alunos da turma 9. Se quisermos os nomes de todos os pets independente da espécie em uma única tabela qual seria o método mais adequado?',
      type: 'multi-choice',
      difficulty: 2,
      theme: 'Introdução à SQL',
      image: '',
      block: 21,
      module_id: 'afdd5680-b811-4aeb-b229-6e7f3351bd01',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: '195b997c-e845-4ebc-9dfd-1cfd05199956',
      question: 'O que é uma SUBQUERY?',
      type: 'multi-choice',
      difficulty: 1,
      theme: 'Funções SQL, Joins e Subqueries',
      image: '',
      block: 21,
      module_id: 'afdd5680-b811-4aeb-b229-6e7f3351bd01',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: 'abe650cd-37b8-461a-80f4-76802ae6da18',
      question: 'A biblioteca Joi permite que sejam criados schemas para fazer a validação de objetos JavaScript. Qual das alternativas contém uma sintaxe correta para validar um campo de email obrigatório com no máximo 60 caracteres?',
      type: 'multi-choice',
      difficulty: 3,
      theme: '',
      image: '',
      block: 27,
      module_id: 'afdd5680-b811-4aeb-b229-6e7f3351bd01',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: '41d007ac-c90a-4a2b-8d91-e77a195afdc2',
      question: '<code><MyComponent customProp /></code>\n' +
        '    Considerando o código acima, é correto dizer que dentro do componente "MyComponent" a prop "customProp" receberá o valor:\n' +
        '    ',
      type: 'multi-choice',
      difficulty: 3,
      theme: 'Ciclo de Vida de Componentes e React Router',
      image: '',
      block: 12,
      module_id: 'a5df9455-4d7f-4f52-94cb-eb830b416cad',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: 'f1f16399-8c26-46cd-b5b9-e26bbb9a6aef',
      question: 'Em qual das seguintes alternativas não contem um componente do Redux?',
      type: 'multi-choice',
      difficulty: 2,
      theme: 'Gerenciamento de estado com Redux',
      image: '',
      block: 16,
      module_id: 'a5df9455-4d7f-4f52-94cb-eb830b416cad',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: '42e999ab-e135-49b6-9d3a-33bd2255c19c',
      question: 'Qual o papel da função connect?',
      type: 'multi-choice',
      difficulty: 2,
      theme: 'Gerenciamento de estado com Redux',
      image: '',
      block: 16,
      module_id: 'a5df9455-4d7f-4f52-94cb-eb830b416cad',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: '75ef1b3b-e417-46a9-98c1-b0fe0b484deb',
      question: 'O que é uma action?',
      type: 'multi-choice',
      difficulty: 2,
      theme: 'Gerenciamento de estado com Redux',
      image: '',
      block: 16,
      module_id: 'a5df9455-4d7f-4f52-94cb-eb830b416cad',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: '8a6a532b-1364-4690-adae-c344de7e2d44',
      question: 'Qual dos comandos a seguir deve ser utilizado ao instalar o Redux e o React-Redux?',
      type: 'multi-choice',
      difficulty: 2,
      theme: 'Gerenciamento de estado com Redux',
      image: '',
      block: 16,
      module_id: 'a5df9455-4d7f-4f52-94cb-eb830b416cad',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: '514ffc4f-58ed-473b-8d2c-637a5efa8c21',
      question: 'O Reducer deve receber o que para alterar o estado da aplicação?',
      type: 'multi-choice',
      difficulty: 2,
      theme: 'Gerenciamento de estado com Redux',
      image: '',
      block: 16,
      module_id: 'a5df9455-4d7f-4f52-94cb-eb830b416cad',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: '609fee13-8187-4458-8fb4-0465c7cda8dc',
      question: 'O que é Dispatch?',
      type: 'multi-choice',
      difficulty: 2,
      theme: 'Gerenciamento de estado com Redux',
      image: '',
      block: 16,
      module_id: 'a5df9455-4d7f-4f52-94cb-eb830b416cad',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: '7f60d958-9f17-4107-aec9-79c1fffe6963',
      question: 'O que deve vir dentro do primeiro par de parênteses da função connect?',
      type: 'multi-choice',
      difficulty: 2,
      theme: 'Gerenciamento de estado com Redux',
      image: '',
      block: 16,
      module_id: 'a5df9455-4d7f-4f52-94cb-eb830b416cad',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: 'b2df82a9-26fa-4b6d-a0a4-e9b74cbf1b54',
      question: 'O que é o redux-thunk?',
      type: 'multi-choice',
      difficulty: 2,
      theme: 'Gerenciamento de estado com Redux',
      image: '',
      block: 16,
      module_id: 'a5df9455-4d7f-4f52-94cb-eb830b416cad',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: '59d33945-5e40-40cf-bebf-5c898741ac49',
      question: 'Qual das opções a seguir precisa ser um objeto puro? (Desconsiderar a ação do Thunk)',
      type: 'multi-choice',
      difficulty: 2,
      theme: 'Gerenciamento de estado com Redux',
      image: '',
      block: 16,
      module_id: 'a5df9455-4d7f-4f52-94cb-eb830b416cad',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: '24491eff-f24f-4da6-bcf1-925f204fd6f0',
      question: 'O Redux cria…',
      type: 'multi-choice',
      difficulty: 2,
      theme: 'Gerenciamento de estado com Redux',
      image: '',
      block: 16,
      module_id: 'a5df9455-4d7f-4f52-94cb-eb830b416cad',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: 'bd28c0d1-81f8-4dbe-a53a-fdb9646d3644',
      question: 'Qual é a ordem de inicialização e montagem de um componente em React?',
      type: 'multi-choice',
      difficulty: 2,
      theme: 'Ciclo de Vida de Componentes e React Router',
      image: '',
      block: 13,
      module_id: 'a5df9455-4d7f-4f52-94cb-eb830b416cad',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: '15334923-9b9e-4940-82c0-71c9aff8c7f9',
      question: 'O ciclo de vida de componentes está atrelada a 3 funções, são elas:',
      type: 'multi-choice',
      difficulty: 2,
      theme: 'Ciclo de Vida de Componentes e React Router',
      image: '',
      block: 13,
      module_id: 'a5df9455-4d7f-4f52-94cb-eb830b416cad',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: 'a4b1b39b-172d-4322-a4d3-40cdfc64793f',
      question: 'Qual o comando para instalar o React Router Dom?',
      type: 'multi-choice',
      difficulty: 2,
      theme: 'Ciclo de Vida de Componentes e React Router',
      image: '',
      block: 13,
      module_id: 'a5df9455-4d7f-4f52-94cb-eb830b416cad',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: 'd0320b10-531a-4a9d-bc5d-605be7126b8e',
      question: 'O que o BrowserRouter faz?',
      type: 'multi-choice',
      difficulty: 2,
      theme: 'Ciclo de Vida de Componentes e React Router',
      image: '',
      block: 13,
      module_id: 'a5df9455-4d7f-4f52-94cb-eb830b416cad',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: '24da3cf7-382d-4837-baa4-1230e725d158',
      question: 'A seguinte rota “<Route path="/" component={ Xablau } />” redireciona para qual página? ',
      type: 'multi-choice',
      difficulty: 2,
      theme: 'Ciclo de Vida de Componentes e React Router',
      image: '',
      block: 13,
      module_id: 'a5df9455-4d7f-4f52-94cb-eb830b416cad',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: '1652bcde-fc80-4e94-a8c8-58fa260c0902',
      question: 'É possível ter acesso via route a quais chaves via props?',
      type: 'multi-choice',
      difficulty: 2,
      theme: 'Ciclo de Vida de Componentes e React Router',
      image: '',
      block: 13,
      module_id: 'a5df9455-4d7f-4f52-94cb-eb830b416cad',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: '100dacfa-3848-4d09-a7d2-d61740737740',
      question: 'O que é Switch?',
      type: 'multi-choice',
      difficulty: 2,
      theme: 'Ciclo de Vida de Componentes e React Router',
      image: '',
      block: 13,
      module_id: 'a5df9455-4d7f-4f52-94cb-eb830b416cad',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: '6bef4946-63c2-4b89-b21e-26178b66d927',
      question: 'Aplicações em React Router são chamadas de SPA, o que significa essa sigla?',
      type: 'multi-choice',
      difficulty: 2,
      theme: 'Ciclo de Vida de Componentes e React Router',
      image: '',
      block: 13,
      module_id: 'a5df9455-4d7f-4f52-94cb-eb830b416cad',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: '8335f7c8-4f46-48d3-bb9b-b2a53dc18b53',
      question: 'O que é o React Router Dom?',
      type: 'multi-choice',
      difficulty: 2,
      theme: 'Ciclo de Vida de Componentes e React Router',
      image: '',
      block: 13,
      module_id: 'a5df9455-4d7f-4f52-94cb-eb830b416cad',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: '73c90234-98e7-4f9a-b8c6-cc2997a0676d',
      question: 'Em React, o que utilizamos no lugar da Tag “a”?',
      type: 'multi-choice',
      difficulty: 2,
      theme: 'Ciclo de Vida de Componentes e React Router',
      image: '',
      block: 13,
      module_id: 'a5df9455-4d7f-4f52-94cb-eb830b416cad',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: '1d21f642-8232-4418-b419-f4924ce7aac9',
      question: 'O que é RTL?',
      type: 'multi-choice',
      difficulty: 2,
      theme: 'Ciclo de Vida de Componentes e React Router',
      image: '',
      block: 15,
      module_id: 'a5df9455-4d7f-4f52-94cb-eb830b416cad',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: 'd3ddfc04-ba7a-4171-b9db-bd126f05671d',
      question: 'O que é fireEvent?',
      type: 'multi-choice',
      difficulty: 2,
      theme: 'Testes automatizados com React Testing Library',
      image: '',
      block: 15,
      module_id: 'a5df9455-4d7f-4f52-94cb-eb830b416cad',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: '22685e56-05a0-4503-98da-19c5407faa35',
      question: 'O que a biblioteca history faz?',
      type: 'multi-choice',
      difficulty: 2,
      theme: 'Testes automatizados com React Testing Library',
      image: '',
      block: 15,
      module_id: 'a5df9455-4d7f-4f52-94cb-eb830b416cad',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: 'e5bc9c6c-6c5b-4f2c-abc1-02abb1e8512c',
      question: 'O que é mock?',
      type: 'multi-choice',
      difficulty: 2,
      theme: 'Testes automatizados com React Testing Library',
      image: '',
      block: 15,
      module_id: 'a5df9455-4d7f-4f52-94cb-eb830b416cad',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: '86b6a3fd-992d-45d9-96dd-75598ca937fc',
      question: 'Por que fazer o mock de funções?',
      type: 'multi-choice',
      difficulty: 2,
      theme: 'Testes automatizados com React Testing Library',
      image: '',
      block: 15,
      module_id: 'a5df9455-4d7f-4f52-94cb-eb830b416cad',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: '4d85e5e9-2904-4e0f-8213-34289a5ff2cc',
      question: 'O que é useState?',
      type: 'multi-choice',
      difficulty: 2,
      theme: 'Contest API e React Hooks',
      image: '',
      block: 18,
      module_id: 'a5df9455-4d7f-4f52-94cb-eb830b416cad',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: '29eb5a3a-597c-4257-86c4-18929a2f38e5',
      question: 'A função useEffect tem o mesmo comportamento de que função do componente de classe?',
      type: 'multi-choice',
      difficulty: 2,
      theme: 'Contest API e React Hooks',
      image: '',
      block: 18,
      module_id: 'a5df9455-4d7f-4f52-94cb-eb830b416cad',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: 'f7969b01-3df9-4334-ae07-6c42ff0b7112',
      question: 'O que é context API?',
      type: 'multi-choice',
      difficulty: 2,
      theme: 'Contest API e React Hooks',
      image: '',
      block: 18,
      module_id: 'a5df9455-4d7f-4f52-94cb-eb830b416cad',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: '7404f1fe-1b6d-42a3-a2c5-cb3d71aad03e',
      question: 'O que são hooks?',
      type: 'multi-choice',
      difficulty: 2,
      theme: 'Contest API e React Hooks',
      image: '',
      block: 18,
      module_id: 'a5df9455-4d7f-4f52-94cb-eb830b416cad',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: '3993b66c-b0a2-4862-9f96-7ba0cfc1412c',
      question: 'O context API é uma opção a qual outra biblioteca?',
      type: 'multi-choice',
      difficulty: 2,
      theme: 'Contest API e React Hooks',
      image: '',
      block: 18,
      module_id: 'a5df9455-4d7f-4f52-94cb-eb830b416cad',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: '0cfc03d5-ae40-46f0-be59-362369ccf94a',
      question: 'Qual sintaxe utilizamos para importar para uma página HTML os estilos CSS definidos em um arquivo "style.css"?',
      type: 'multi-choice',
      difficulty: 1,
      theme: 'Introdução à HTML e CSS',
      image: '',
      block: 3,
      module_id: 'efff8570-5cb7-4090-bd58-46f4b5a335a6',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: 'dfa5f1f0-18ac-48bc-855a-7c48a904f3f9',
      question: 'O que é uma função callback?',
      type: 'boolean',
      difficulty: 1,
      theme: 'Higher Order Functions do JavaScript ES6',
      image: '',
      block: 8,
      module_id: 'efff8570-5cb7-4090-bd58-46f4b5a335a6',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: '0bdc2d3a-3734-490a-bd22-5a68bbe42cf1',
      question: 'Uma API é um servidor que mantém informações e dados, respondendo clientes via requisições HTTP. É na API que estão armazenados os websites que acessamos e as informações do banco de dados que queremos acessar.',
      type: 'boolean',
      difficulty: 1,
      theme: 'JavaScript Assíncrono e Promises',
      image: '',
      block: 9,
      module_id: 'efff8570-5cb7-4090-bd58-46f4b5a335a6',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: '0762ced6-9861-4521-8db3-36d0932606d3',
      question: 'Na pasta de nosso projeto temos um arquivo "package.json" com a seguinte chave script:\n' +
        '    "scripts": {\n' +
        '      "test": "jest"\n' +
        '    },\n' +
        '    Qual comando deve ser inserido na CLI para executar o script?',
      type: 'multi-choice',
      difficulty: 1,
      theme: 'Testes automatizados com Jest',
      image: '',
      block: 10,
      module_id: 'efff8570-5cb7-4090-bd58-46f4b5a335a6',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: '712e928a-9eb1-442b-923a-cb0ad109282d',
      question: 'Qual a diferença entre o NPX e o NPM?',
      type: 'multi-choice',
      difficulty: 1,
      theme: 'Introdução à React',
      image: '',
      block: 11,
      module_id: 'a5df9455-4d7f-4f52-94cb-eb830b416cad',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    }
  ], {}),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('question', null, {})
};

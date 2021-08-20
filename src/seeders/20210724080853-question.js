'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => queryInterface.bulkInsert('question',
  [
    {
      id: '37388c96-f607-4927-99b0-b1c5c57ff73b',
      question: 'Quais das opções abaixo não são consideradas HOF’S (Higher Order Functions)?',
      type: 'multi-choice',
      difficulty: 1,
      theme: 'Higher Order Functions do JavaScript ES6',
      image: '',
      block: 8,
      module_id: 'efff8570-5cb7-4090-bd58-46f4b5a335a6',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e'
    },
    {
      id: '6017f770-d152-4c1e-b6f3-2363fb4cb26f',
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
      id: '93e14782-eeb0-4d78-ab39-ec19908dfae7',
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
      id: '5bd39c3a-5594-4b50-8766-5c01f5254884',
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
      id: '71d09cf6-0b8e-4707-8532-f66626523754',
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
      id: '7c78bef5-eeb3-4673-ab96-b294878edb18',
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
      id: '6ce7ff55-1bc3-4cd2-9407-578c0fdad46d',
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
      id: 'db2cfd7e-fa99-48ed-b34d-a1bfa6ff25e0',
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
      id: 'ae0c48ad-1d5a-45d7-9501-512bbfc1c9ba',
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
      id: '42a7fde3-5530-4e9b-9f4d-7df9dfc49f96',
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
      id: 'f533fbad-4404-4981-8d2c-dbde21044fab',
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
      id: 'f2b6d0b0-fb87-4f9f-895d-a2e44df46b13',
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
      id: '75240eb9-450e-4237-b38e-c3b8e5ced503',
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
      id: 'bdfae4cf-4825-4a57-9bb9-ad1c0781f24f',
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
      id: 'd089261c-0359-4c77-861b-e603b311cbd5',
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
      id: '8dbda4b3-360b-4efb-994e-bb2f16bfcffb',
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
      id: 'f4b57891-5137-43a6-89bf-40381c99c8d3',
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
      id: 'e30d1dc5-150e-4504-a148-9875820f48ee',
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
      id: '712a94c6-a9b3-4675-b075-332b03aacf12',
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
      id: 'bd84d4d4-c9f9-4162-99f0-f51e06097b37',
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
      id: '7b848089-77d8-4c1c-b28a-607c0711146d',
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
      id: '154acd94-e5bb-4783-8224-35c1af5e9f44',
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
      id: 'ca7655b5-0261-40c2-8113-92879aeacf79',
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
      id: '8f187c27-1a60-4b36-b57c-28f9bdb81e62',
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
      id: 'f5e13360-6f50-457f-8de0-5d123ac6c458',
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
      id: '56e9eec7-2bc4-48db-a7f9-2e41460e5a78',
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
      id: '9bd93c11-6de0-4c5f-830f-88daea307be4',
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
      id: '228fa087-0b99-41f1-915e-d9dcb0211969',
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
      id: 'd1529754-d0cf-41c6-8f57-23c6936d4c3d',
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
      id: '1682f54b-8f5a-43f9-be33-eace42b59482',
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
      id: 'bf8ccdbd-e0e9-4825-931c-c02c42f54779',
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
      id: '99ed8b4c-1120-4577-8770-c1af19e00081',
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
      id: '13638026-e9ee-4873-8ee6-ccc83901f915',
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

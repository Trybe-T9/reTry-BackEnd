'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => queryInterface.bulkInsert('question',
  [
    {
      id: '37388c96-f607-4927-99b0-b1c5c57ff73b',
      question: 'Quais das opções abaixo não são consideradas HOF’S (Higher Order Functions)?',
      type: 'multi-choice',
      difficulty: 1,
      theme: '',
      image: '',
      block_id: 8,
      module_id: 'efff8570-5cb7-4090-bd58-46f4b5a335a6',
      user_id: ''
    },
    {
      id: '6017f770-d152-4c1e-b6f3-2363fb4cb26f',
      question: 'O componente do código da imagem seria renderizado sem problemas.',
      type: 'boolean',
      difficulty: 2,
      theme: '',
      image: 'images/questao1.png',
      block_id: 11,
      module_id: undefined,
      user_id: ''
    },
    {
      id: '93e14782-eeb0-4d78-ab39-ec19908dfae7',
      question: 'Como o reducer altera o estado geral da aplicação?',
      type: 'multi-choice',
      difficulty: 2,
      theme: '',
      image: '',
      block_id: 16,
      module_id: undefined,
      user_id: ''
    },
    {
      id: '5bd39c3a-5594-4b50-8766-5c01f5254884',
      question: 'Em React Router, qual o nome do componente que renderiza um "href" mudando a rota da minha aplicação?',
      type: 'multi-choice',
      difficulty: 1,
      theme: '',
      image: '',
      block_id: 13,
      module_id: undefined,
      user_id: ''
    },
    {
      id: '71d09cf6-0b8e-4707-8532-f66626523754',
      question: 'Toda função assíncrona retorna uma Promise',
      type: 'boolean',
      difficulty: 2,
      theme: '',
      image: '',
      block_id: 9,
      module_id: 'efff8570-5cb7-4090-bd58-46f4b5a335a6',
      user_id: ''
    },
    {
      id: '7c78bef5-eeb3-4673-ab96-b294878edb18',
      question: 'Quanto ao ciclo de vida de um componente React, a gente pode dizer que o método componentDidMount...',
      type: 'multi-choice',
      difficulty: 1,
      theme: '',
      image: '',
      block_id: 11,
      module_id: undefined,
      user_id: ''
    },
    {
      id: '6ce7ff55-1bc3-4cd2-9407-578c0fdad46d',
      question: 'O ______ é executado antes de um componente ser desmontado.',
      type: 'multi-choice',
      difficulty: 1,
      theme: '',
      image: '',
      block_id: 13,
      module_id: undefined,
      user_id: ''
    },
    {
      id: 'db2cfd7e-fa99-48ed-b34d-a1bfa6ff25e0',
      question: 'O que a Higher Order Function "forEach" retorna?',
      type: 'multi-choice',
      difficulty: 1,
      theme: '',
      image: '',
      block_id: 8,
      module_id: 'efff8570-5cb7-4090-bd58-46f4b5a335a6',
      user_id: ''
    },
    {
      id: 'ae0c48ad-1d5a-45d7-9501-512bbfc1c9ba',
      question: 'CRUD é um conceito no Desenvolvimento de Sistemas?',
      type: 'boolean',
      difficulty: undefined,
      theme: '',
      image: '',
      block_id: 13,
      module_id: 'a5df9455-4d7f-4f52-94cb-eb830b416cad',
      user_id: ''
    },
    {
      id: '42a7fde3-5530-4e9b-9f4d-7df9dfc49f96',
      question: 'Qual(is) dos seguintes comandos podem ser usados para acessar um valor guardado no Local Storage?\n' +
        '    A: localStorage.getItem("NOME_DA_CHAVE")\n' +
        '    B: localStorage.setItem("NOME_DA_CHAVE", "VALOR_DA_CHAVE")\n' +
        '    C: localStorage.NOME_DA_CHAVE\n' +
        '    D: localStorage.getItem("NOME_DA_CHAVE", "VALOR_DA_CHAVE")',
      type: 'multi-choice',
      difficulty: undefined,
      theme: '',
      image: '',
      block_id: 5,
      module_id: 'efff8570-5cb7-4090-bd58-46f4b5a335a6',
      user_id: ''
    },
    {
      id: 'f533fbad-4404-4981-8d2c-dbde21044fab',
      question: 'O código mais comum para criar um escutador de eventos é através de uma função nativa do JavaScript, chamada addEventListener. A respeito dela, podemos dizer que...',
      type: 'multi-choice',
      difficulty: undefined,
      theme: '',
      image: '',
      block_id: 5,
      module_id: undefined,
      user_id: ''
    },
    {
      id: 'f2b6d0b0-fb87-4f9f-895d-a2e44df46b13',
      question: 'Para criar uma nova aplicação em React é necessário executar o comando:',
      type: 'multi-choice',
      difficulty: 1,
      theme: '',
      image: '',
      block_id: 13,
      module_id: undefined,
      user_id: ''
    },
    {
      id: '75240eb9-450e-4237-b38e-c3b8e5ced503',
      question: 'No React, quais propriedades utilizamos, respectivamente, em um elemento "input" e um elemento "label" para associar um ao outro?',
      type: 'multi-choice',
      difficulty: 1,
      theme: '',
      image: '',
      block_id: 12,
      module_id: undefined,
      user_id: ''
    },
    {
      id: 'bdfae4cf-4825-4a57-9bb9-ad1c0781f24f',
      question: 'Utilizamos a Higher Order Function ______ para retornar um booleano que indica se todos os elementos do array retornam "true" quando passados para uma callback.',
      type: 'multi-choice',
      difficulty: 1,
      theme: '',
      image: '',
      block_id: 8,
      module_id: 'efff8570-5cb7-4090-bd58-46f4b5a335a6',
      user_id: ''
    },
    {
      id: 'd089261c-0359-4c77-861b-e603b311cbd5',
      question: 'O Git é um versionador de arquivos que nos permite guardar nossos arquivos online e alternar entre as diversas versões commitadas',
      type: 'boolean',
      difficulty: 2,
      theme: '',
      image: '',
      block_id: 2,
      module_id: 'efff8570-5cb7-4090-bd58-46f4b5a335a6',
      user_id: ''
    },
    {
      id: '8dbda4b3-360b-4efb-994e-bb2f16bfcffb',
      question: 'Você está está programando e, para utilizar o resultado de uma Promise, resolve usar a expressão "await" fora de uma função assíncrona...',
      type: 'boolean',
      difficulty: 1,
      theme: '',
      image: '',
      block_id: 9,
      module_id: 'efff8570-5cb7-4090-bd58-46f4b5a335a6',
      user_id: ''
    },
    {
      id: 'f4b57891-5137-43a6-89bf-40381c99c8d3',
      question: 'Quanto à propriedade "order" do Flexbox, podemos afirmar que é uma propriedade particular de cada item que - quando atribuída - exibe os itens em ordem crescente. Por padrão, cada item recebe o valor 1 e o item que tiver o valor de -1 é exibido no final',
      type: 'boolean',
      difficulty: 3,
      theme: '',
      image: '',
      block_id: 6,
      module_id: 'efff8570-5cb7-4090-bd58-46f4b5a335a6',
      user_id: ''
    },
    {
      id: 'e30d1dc5-150e-4504-a148-9875820f48ee',
      question: 'Sobre localStorage é correto afirmar que:',
      type: 'multi-choice',
      difficulty: 3,
      theme: '',
      image: '',
      block_id: 5,
      module_id: 'efff8570-5cb7-4090-bd58-46f4b5a335a6',
      user_id: ''
    },
    {
      id: '712a94c6-a9b3-4675-b075-332b03aacf12',
      question: 'Em um componente de classe do React, se eu quiser utilizar o seu estado num método que eu criei, não preciso "fazer o bind" no "constructor".',
      type: 'boolean',
      difficulty: 1,
      theme: '',
      image: '',
      block_id: 12,
      module_id: undefined,
      user_id: ''
    },
    {
      id: 'bd84d4d4-c9f9-4162-99f0-f51e06097b37',
      question: 'Qual comando utilizamos para renomear um arquivo através do terminal no Linux?',
      type: 'multi-choice',
      difficulty: 2,
      theme: '',
      image: '',
      block_id: 1,
      module_id: 'efff8570-5cb7-4090-bd58-46f4b5a335a6',
      user_id: ''
    },
    {
      id: '7b848089-77d8-4c1c-b28a-607c0711146d',
      question: 'Sobre sessionStorage é incorreto afirmar que:',
      type: 'multi-choice',
      difficulty: 2,
      theme: '',
      image: '',
      block_id: 5,
      module_id: 'efff8570-5cb7-4090-bd58-46f4b5a335a6',
      user_id: ''
    },
    {
      id: '154acd94-e5bb-4783-8224-35c1af5e9f44',
      question: 'Imagine que você esta trabalhando em um projeto e, logo após commitar, percebe que escreveu uma mensagem errada ou adicionou algo que não devia. Qual comando utilizaria para remover esse commit?',
      type: 'multi-choice',
      difficulty: 1,
      theme: '',
      image: '',
      block_id: 5,
      module_id: 'efff8570-5cb7-4090-bd58-46f4b5a335a6',
      user_id: ''
    },
    {
      id: 'ca7655b5-0261-40c2-8113-92879aeacf79',
      question: 'O ______ é o componente que relaciona o caminho de uma URL com a renderização de um componente.',
      type: 'multi-choice',
      difficulty: 2,
      theme: '',
      image: '',
      block_id: 13,
      module_id: undefined,
      user_id: ''
    },
    {
      id: '8f187c27-1a60-4b36-b57c-28f9bdb81e62',
      question: 'Toda HOF recebe ou retornam funções como parâmetros.',
      type: 'boolean',
      difficulty: 3,
      theme: '',
      image: '',
      block_id: 8,
      module_id: 'efff8570-5cb7-4090-bd58-46f4b5a335a6',
      user_id: ''
    },
    {
      id: 'f5e13360-6f50-457f-8de0-5d123ac6c458',
      question: 'O que podemos fazer quando o Evaluator da Trybe no Github está rodando há mais de 40 minutos sem terminar o teste ou quebra inexplicavelmente?',
      type: 'multi-choice',
      difficulty: undefined,
      theme: '',
      image: '',
      block_id: 12,
      module_id: 'a5df9455-4d7f-4f52-94cb-eb830b416cad',
      user_id: ''
    },
    {
      id: '56e9eec7-2bc4-48db-a7f9-2e41460e5a78',
      question: 'Com relação as Metodologias Ágeis, em uma Daily Meeting os integrantes do time devem basicamente responder quais perguntas?',
      type: 'multi-choice',
      difficulty: 1,
      theme: '',
      image: '',
      block_id: 14,
      module_id: undefined,
      user_id: ''
    },
    {
      id: '9bd93c11-6de0-4c5f-830f-88daea307be4',
      question: 'Sobre as metodologias ágeis e Scrum podemos afirmar que:',
      type: 'multi-choice',
      difficulty: 2,
      theme: '',
      image: '',
      block_id: 14,
      module_id: undefined,
      user_id: ''
    },
    {
      id: '228fa087-0b99-41f1-915e-d9dcb0211969',
      question: 'O que são constraints em bancos de dados relacionais?',
      type: 'multi-choice',
      difficulty: 1,
      theme: '',
      image: '',
      block_id: 20,
      module_id: 'afdd5680-b811-4aeb-b229-6e7f3351bd01',
      user_id: ''
    },
    {
      id: 'd1529754-d0cf-41c6-8f57-23c6936d4c3d',
      question: 'Quais os tipos de bancos de dados que existem?',
      type: 'multi-choice',
      difficulty: 1,
      theme: '',
      image: '',
      block_id: 20,
      module_id: 'afdd5680-b811-4aeb-b229-6e7f3351bd01',
      user_id: ''
    },
    {
      id: '1682f54b-8f5a-43f9-be33-eace42b59482',
      question: 'Imagine que temos duas tabelas trybers_cats e trybers_dogs com os nomes dos pets dos alunos da turma 9. Se quisermos os nomes de todos os pets independente da espécie em uma única tabela qual seria o método mais adequado?',
      type: 'multi-choice',
      difficulty: 2,
      theme: '',
      image: '',
      block_id: 21,
      module_id: 'afdd5680-b811-4aeb-b229-6e7f3351bd01',
      user_id: ''
    },
    {
      id: 'bf8ccdbd-e0e9-4825-931c-c02c42f54779',
      question: 'O que é uma SUBQUERY?',
      type: 'multi-choice',
      difficulty: 1,
      theme: '',
      image: '',
      block_id: 21,
      module_id: 'afdd5680-b811-4aeb-b229-6e7f3351bd01',
      user_id: ''
    },
    {
      id: '99ed8b4c-1120-4577-8770-c1af19e00081',
      question: 'A biblioteca Joi permite que sejam criados schemas para fazer a validação de objetos JavaScript. Qual das alternativas contém uma sintaxe correta para validar um campo de email obrigatório com no máximo 60 caracteres?',
      type: 'multi-choice',
      difficulty: 3,
      theme: '',
      image: null,
      block_id: 27,
      module_id: 'afdd5680-b811-4aeb-b229-6e7f3351bd01',
      user_id: ''
    },
    {
      id: '13638026-e9ee-4873-8ee6-ccc83901f915',
      question: `<code><MyComponent customProp /></code>
      
      Considerando o código acima, é correto dizer que dentro do componente "MyComponent" a prop "customProp" receberá o valor:`,
      type: 'multi-choice',
      difficulty: 3,
      theme: '',
      image: null,
      block_id: 12,
      module_id: 'a5df9455-4d7f-4f52-94cb-eb830b416cad',
      user_id: ''
    }
  ], {}),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('question', null, {})
};

'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => queryInterface.bulkInsert('question',
  [
    {
      id: '9ec219a2-0920-476f-9aab-60ba471fa2c8',
      question: 'Quais das opções abaixo não são consideradas HOF’S (Higher Order Functions)?',
      type: 'multi-choice',
      difficulty: 2,
      theme: 'Higher Order Functions',
      image: null,
      block: 8,
      module_id: 'efff8570-5cb7-4090-bd58-46f4b5a335a6',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e',
    },
    {
      id: 'b8141477-6ee0-4920-86ee-a10df1d092c5',
      question: 'O componente do código da imagem seria renderizado sem problemas.',
      type: 'boolean',
      difficulty: 3,
      theme: 'Componentes react',
      image: 'images/questao1.png',
      block: 11,
      module_id: 'a5df9455-4d7f-4f52-94cb-eb830b416cad',
      user_id: '911cac15-2492-400e-9d86-b4fca881de8e',
    },
  ], {}),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('question', null, {})
};

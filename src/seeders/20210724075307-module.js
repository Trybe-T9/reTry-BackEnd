'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => queryInterface.bulkInsert('module',
  [
    {
      id: 'efff8570-5cb7-4090-bd58-46f4b5a335a6',
      module: 'Fundamentos',
      description: 'Nosso primeiro módulo te ensinará tudo que você precisa saber para iniciar sua carreira no mundo do desenvolvimento Web, virando uma pessoa preparada para os módulos de front-end e back-end. Vamos te guiar, etapa a etapa, por toda essa jornada!',
    },
    {
      id: 'a5df9455-4d7f-4f52-94cb-eb830b416cad',
      module: 'Desenvolvimento Front-End',
      description: 'Neste módulo, você vai aprender as técnicas e ferramentas mais atuais para desenvolver um código de front-end que seja rápido, bonito e testável.',
    },
    {
      id: 'afdd5680-b811-4aeb-b229-6e7f3351bd01',
      module: 'Desenvolvimento Back-End',
      description: 'Neste módulo, você vai aprender como desenvolver um código de back-end robusto, limpo, escalável e seguro, dominando o uso de bancos de dados, a construção de APIs com testes automatizados.',
    },
    {
      id: 'f3ec9930-d2e3-4423-88e8-a28c6aa0265a',
      module: 'Ciência da Computação',
      description: 'Aqui, você aprenderá os principais conceitos da Ciência da Computação que são aplicados no dia a dia do desenvolvomento de software e como transformar a teoria em prática, analisando algoritmos e escolhendo as melhores estruturas de dados para resolver os problemas!',
    },
  ], {}),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('module', null, {})
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('answer',
  [
    {
      id: '9b6e207f-a40d-42a1-8fb5-c45e320dcd44',
      answer: 'Filter',
      is_right: false,
      hint: 'filter, recebe uma função como parâmetro - por isso, é considerada uma HOF - que vai ser aplicada a cada elemento do array e retornará um novo array com aqueles elementos para os quais esta função retorne true. Saiba mais sobre ela no link.',
      link: 'https://bognarjunior.wordpress.com/2018/02/08/array-javascript-o-metodo-filter/',
      question_id: '9ec219a2-0920-476f-9aab-60ba471fa2c8',
    },
    {
      id: '2c2f1774-1c21-400d-9ca7-5dad5d01de32',
      answer: 'forEach',
      is_right: false,
      hint: 'forEach, apesar de não retornar nenhum valor, recebe uma função como parâmetro - por isso, é considerada uma HOF - que vai ser aplicada a cada elemento do array. Saiba mais sobre ela no link.',
      link: 'https://blog.betrybe.com/javascript/javascript-foreach/',
      question_id: '9ec219a2-0920-476f-9aab-60ba471fa2c8',
    },
    {
      id: 'e6247609-2909-440b-ae56-96cbdf2e13e2',
      answer: 'map',
      is_right: false,
      hint: 'map, recebe uma função como parâmetro - por isso, é considerada uma HOF - que vai ser aplicada a cada elemento do array e retornará um novo array com os valores retornados por esta função. Saiba mais sobre ela no link.',
      link: 'https://bognarjunior.wordpress.com/2018/02/06/array-javascript-o-metodo-map/',
      question_id: '9ec219a2-0920-476f-9aab-60ba471fa2c8',
    },
    {
      id: 'c424e8a2-92b3-4747-8baf-c27dac3a0556',
      answer: 'reverse',
      is_right: true,
      hint: 'Higher Order Functions são funções que recebem como parâmetro outras funções ou retornam uma função como resultado. reverse não se encaixa em nenhuma dessas categorias, pois apenas retorna um novo array contendo os elementos do array atual em ordem inversa.',
      link: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse',
      question_id: '9ec219a2-0920-476f-9aab-60ba471fa2c8',
    },
    {
      id: '33dc299d-e2ad-41fd-8900-58538c1c4d46',
      answer: 'Verdadeiro',
      is_right: false,
      hint: 'Na verdade, não. Pois, no React, o retorno de um componente que possui mais de um "elemento filho" deve estar encapsulado dentro de um único elemento, como uma div ou fragmentos (<> e </>).Saiba mais sobre fragmentos neste link.',
      link: 'https://pt-br.reactjs.org/docs/fragments.html',
      question_id: 'b8141477-6ee0-4920-86ee-a10df1d092c5',
    },
    {
      id: '2fb8bca0-2ead-4acc-b8fa-cf2a017e1cae',
      answer: 'Falso',
      is_right: true,
      hint: 'Isso mesmo! No React, o retorno de um componente que possui mais de um "elemento filho" deve estar encapsulado dentro de um único elemento. Por isso, o código vai levantar um erro.',
      link: null,
      question_id: 'b8141477-6ee0-4920-86ee-a10df1d092c5',
    },
  ], {}),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('answer', null, {})
};

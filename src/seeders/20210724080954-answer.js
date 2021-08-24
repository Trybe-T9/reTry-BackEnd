'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('answer',
  [
    {
      id: 'c45babad-6e5e-430d-a120-874c8a4de32e',
      answer: 'forEach',
      is_right: false,
      hint: 'forEach, apesar de não retornar nenhum valor, recebe uma função como parâmetro - por isso, é considerada uma HOF - que vai ser aplicada a cada elemento do array. Saiba mais sobre ela no link.',
      link: 'https://blog.betrybe.com/javascript/javascript-foreach/',
      question_id: '946731e6-68aa-49be-94de-8ba1b55cfa6b'
    },
    {
      id: '449c112f-b090-4c9e-bcd6-44e99db59a52',
      answer: 'filter',
      is_right: false,
      hint: 'filter, recebe uma função como parâmetro - por isso, é considerada uma HOF - que vai ser aplicada a cada elemento do array e retornará um novo array com aqueles elementos para os quais esta função retorne true. Saiba mais sobre ela no link.',
      link: 'https://bognarjunior.wordpress.com/2018/02/08/array-javascript-o-metodo-filter/',
      question_id: '946731e6-68aa-49be-94de-8ba1b55cfa6b'
    },
    {
      id: 'c318a17e-3f01-4cdc-82e9-b2880b5a25a4',
      answer: 'map',
      is_right: false,
      hint: 'map, recebe uma função como parâmetro - por isso, é considerada uma HOF - que vai ser aplicada a cada elemento do array e retornará um novo array com os valores retornados por esta função. Saiba mais sobre ela no link.',
      link: 'https://bognarjunior.wordpress.com/2018/02/06/array-javascript-o-metodo-map/',
      question_id: '946731e6-68aa-49be-94de-8ba1b55cfa6b'
    },
    {
      id: '8043acbd-40d0-4e7f-8238-026f4aba312d',
      answer: 'reverse',
      is_right: true,
      hint: 'Higher Order Functions são funções que recebem como parâmetro outras funções ou retornam uma função como resultado. reverse não se encaixa em nenhuma dessas categorias, pois apenas retorna um novo array contendo os elementos do array atual em ordem inversa.',
      link: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse',
      question_id: '946731e6-68aa-49be-94de-8ba1b55cfa6b'
    },
    {
      id: '5b8591a2-58e5-452d-8c8f-ff25f7dccdd5',
      answer: 'Verdadeiro',
      is_right: false,
      hint: 'Na verdade, não. Pois, no React, o retorno de um componente que possui mais de um "elemento filho" deve estar encapsulado dentro de um único elemento, como uma div ou fragmentos (<> e </>).Saiba mais sobre fragmentos neste link.',
      link: 'https://pt-br.reactjs.org/docs/fragments.html',
      question_id: '8496ec78-9e92-4bb6-bf92-a722a4ed2953'
    },
    {
      id: '5b29d565-0111-4d2a-9a20-15d720fd31f0',
      answer: 'Falso',
      is_right: true,
      hint: 'Isso mesmo! No React, o retorno de um componente que possui mais de um "elemento filho" deve estar encapsulado dentro de um único elemento. Por isso, o código vai levantar um erro.',
      link: 'https://pt-br.reactjs.org/docs/fragments.html',
      question_id: '8496ec78-9e92-4bb6-bf92-a722a4ed2953'
    },
    {
      id: 'd8b168fa-c0ea-4e56-9fe5-3bb7b62c9f2b',
      answer: 'Através de uma action',
      is_right: true,
      hint: 'Isso mesmo! Para saber quais e como as informações devem ser alteradas, o reducer deve receber uma action, um objeto que tem como propriedades o tipo da ação e os valores que devem ser alterados no estado da store. De acordo com o seu tipo, o reducer retornará o objeto que será atribuído à sua propriedade na store.',
      link: undefined,
      question_id: 'b51f5957-627d-4380-b801-21088dc4b041'
    },
    {
      id: '25d29afe-ad43-41ff-b5f0-4c9083998e38',
      answer: 'Através de um componente',
      is_right: false,
      hint: 'Componentes não fazem parte do redux. A resposta correta é uma action, que é um objeto que tem como propriedades o tipo da ação e os valores que devem ser alterados no estado da store pelo reducer. De acordo com o seu tipo, o reducer retornará o objeto que será atribuído à sua propriedade na store.',
      link: undefined,
      question_id: 'b51f5957-627d-4380-b801-21088dc4b041'
    },
    {
      id: 'b4f4312d-1e1b-4f5c-b736-e9a07fb8ad94',
      answer: 'Através de um provider',
      is_right: false,
      hint: 'Provider não faz parte do redux. A resposta correta é uma action, que é um objeto que tem como propriedades o tipo da ação e os valores que devem ser alterados no estado da store pelo reducer. De acordo com o seu tipo, o reducer retornará o objeto que será atribuído à sua propriedade na store.',
      link: undefined,
      question_id: 'b51f5957-627d-4380-b801-21088dc4b041'
    },
    {
      id: 'a14b4f3f-8387-459d-8ccf-8860b44c03cb',
      answer: 'Não precisa de nada. É responsabilidade do próprio reducer alterar o estado da aplicação',
      is_right: false,
      hint: 'Reducers não conseguem ser chamados sem uma action, que é um objeto que tem como propriedades o tipo da ação e os valores que devem ser alterados no estado da store pelo reducer. De acordo com o seu tipo, o reducer retornará o objeto que será atribuído à sua propriedade na store.',
      link: undefined,
      question_id: 'b51f5957-627d-4380-b801-21088dc4b041'
    },
    {
      id: 'b03a1dc5-7a4d-4a89-bb21-12504175a9a2',
      answer: 'Uma tag <a href={ path } />',
      is_right: false,
      hint: 'O comportamento é o mesmo, mas, no React Router, é o componente Link que utilizamos para apontar para um caminho que estará associado a um componente através de um Route.',
      link: undefined,
      question_id: 'db528663-c100-495d-83bf-179adc42dbab'
    },
    {
      id: '5cf605aa-77e9-4ff4-904a-a6d55dc23616',
      answer: '<Redirect to={ path } /> ',
      is_right: false,
      hint: 'Cuidado! Quando o Redirect é renderizado, a pessoa usuária é redirecionada para outra rota sem qualquer tipo de interação, não sendo possível atribuí-lo a um botão ou link, por exemplo. Quem faz isso é o <Link to={ path } />, o qual aponta para um caminho que estará associado a um componente através de um Route.',
      link: undefined,
      question_id: 'db528663-c100-495d-83bf-179adc42dbab'
    },
    {
      id: 'e08820b0-5c6e-4da0-8b0a-6260f72a4755',
      answer: '<Link to={ path } />',
      is_right: true,
      hint: 'Boa! Ao passarmos esse componente como pai de um botão, por exemplo, será renderizada uma tag <a> com a propriedade href do caminho, mudando a rota da nossa aplicação quando clicado e renderizando o componente associado a ela através de um Route.',
      link: undefined,
      question_id: 'db528663-c100-495d-83bf-179adc42dbab'
    },
    {
      id: '9b8183cb-56a3-42b2-9628-c932e7e0ba02',
      answer: '<Switch />',
      is_right: false,
      hint: 'O componente Switch é usado para encapsular um conjunto de componentes <Route />. Este associará um caminho (path) que, quando acessado, renderizará um componente específico. E será o <Link to={ path } /> que permitirá termos um elemento href renderizado apontando para esse caminho quando precisarmos disso em qualquer lugar da nossa aplicação.',
      link: undefined,
      question_id: 'db528663-c100-495d-83bf-179adc42dbab'
    },
    {
      id: '1a02da59-8e75-4e98-abf5-71cbb643c6c6',
      answer: 'Verdadeiro',
      is_right: true,
      hint: 'De acordo com a documentação do MDN Web Docs, Promise é um objeto que representa a eventual conclusão ou falha de uma operação assincrona. Isso significa que a execução do resto do código não dependerá da conclusão dessa operação. Saiba mais no link.',
      link: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise',
      question_id: '5a181751-ece8-49ba-939d-3023621a5fbb'
    },
    {
      id: 'f7809f94-6987-466d-88d4-1f0021e81f22',
      answer: 'Falso',
      is_right: false,
      hint: 'De acordo com a documentação do MDN Web Docs, Promise é um objeto que representa a eventual conclusão ou falha de uma operação assincrona. Isso significa que a execução do resto do código não dependerá da conclusão dessa operação. Saiba mais no link.',
      link: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise',
      question_id: '5a181751-ece8-49ba-939d-3023621a5fbb'
    },
    {
      id: '32de86fb-e11e-4b57-8765-e3a18b89b419',
      answer: 'Renderiza a página toda vez que o estado ou prop de um componente é alterado.',
      is_right: false,
      hint: 'Na verdade, este ciclo de vida é executado apenas uma única vez, após o componente ser renderizado pela primeira vez - que é a tal da sua "montagem". Se você está procurando algo de acordo com esta alternativa, seria melhor usar o componentDidUpdate ou até o próprio render - dependendo do resultado que deseja atingir. Saiba mais no link a seguir.',
      link: 'https://pt-br.reactjs.org/docs/react-component.html#componentdidmount',
      question_id: 'f00403e2-f913-42b1-9196-2dd38d11081f'
    },
    {
      id: '86cbdef2-4c93-48d0-8769-eaa1d960933b',
      answer: 'É executado toda vez que o componente "desmonta", preparando-o para montar quando for chamado novamente.',
      is_right: false,
      hint: 'Mmmmm... Na verdade, não podemos dizer que exista algum método do ciclo de vida do React que faça isso. Já o componentDidMount, ele é executado apenas uma só vez, após o componente ser renderizado pela primeira vez - que é a tal da sua "montagem". Saiba mais no link a seguir.',
      link: 'https://pt-br.reactjs.org/docs/react-component.html#componentdidmount',
      question_id: 'f00403e2-f913-42b1-9196-2dd38d11081f'
    },
    {
      id: '86e15269-c5bb-476b-bb49-fc228587a8b3',
      answer: 'É executado apenas uma vez, quando o componente é criado e inserido no DOM.',
      is_right: true,
      hint: 'Boa! Para mais detalhes em relação a ciclos de vida consulte a documentação do React no link a seguir.',
      link: 'https://pt-br.reactjs.org/docs/react-component.html#componentdidmount',
      question_id: 'f00403e2-f913-42b1-9196-2dd38d11081f'
    },
    {
      id: 'b277529a-e799-4ff8-9616-da7b4069f4ec',
      answer: 'É equivalente à função useState de um componente funcional.',
      is_right: false,
      hint: 'Na verdade, a tal função é a useEffect. Mas isso apenas quando passamos como segundo parâmetro um array vazio. Saiba mais sobre o componentDidMount no link a seguir.',
      link: 'https://pt-br.reactjs.org/docs/react-component.html#componentdidmount',
      question_id: 'f00403e2-f913-42b1-9196-2dd38d11081f'
    },
    {
      id: 'a64836cc-399c-44c5-963b-132878c0a406',
      answer: 'componentDidMount',
      is_right: false,
      hint: 'Na verdade, a resposta é componentWillUnmount. componentDidMount é acionado assim que o componente é montado. Saiba mais lendo a documentação do React no seguinte link.',
      link: 'https://pt-br.reactjs.org/docs/state-and-lifecycle.html',
      question_id: '104c3b73-6467-456c-b6c7-d6079a565dc1'
    },
    {
      id: '92abc1ef-0967-428d-8916-758262db6d31',
      answer: 'componentDidUpdate',
      is_right: false,
      hint: 'Na verdade, a resposta é componentWillUnmount. componentDidUpdate é acionado quando há uma atualização no componente, isso é, através da alteração de um estado ou prop. Saiba mais lendo a documentação do React no seguinte link.',
      link: 'https://pt-br.reactjs.org/docs/state-and-lifecycle.html',
      question_id: '104c3b73-6467-456c-b6c7-d6079a565dc1'
    },
    {
      id: '42b95c02-144a-4e23-8c46-e30866dcdb8b',
      answer: 'componentDidReset',
      is_right: false,
      hint: 'Será que esse ciclo de vida existe? Na verdade, a resposta é componentWillUnmount. Saiba mais sobre os ciclos de vida lendo a documentação do React neste link.',
      link: 'https://pt-br.reactjs.org/docs/state-and-lifecycle.html',
      question_id: '104c3b73-6467-456c-b6c7-d6079a565dc1'
    },
    {
      id: '7db92105-6445-4e24-bbae-665d4e8c9e9b',
      answer: 'componentWillUnmount',
      is_right: true,
      hint: 'Corretíssimo! Mas você conhece direitinho os outros métodos que compõem o ciclo de vida do React? Confira a documentação do React no link a seguir.',
      link: 'https://pt-br.reactjs.org/docs/state-and-lifecycle.html',
      question_id: '104c3b73-6467-456c-b6c7-d6079a565dc1'
    },
    {
      id: '8deaa01c-b908-4330-a52a-0d1d109c3867',
      answer: 'Um novo array com valores definidos por uma callback para cada item do array na qual é chamada.',
      is_right: false,
      hint: 'A forEach percorre um array e, para cada item dele, executa uma função callback passada como primeiro parâmetro dela. Mas não retorna nada além de "undefined", o valor padrão que toda função que não tem um retorno devolve no JavaScript. A HOF que faz algo mais parecido com esta alternativa é a "map".',
      link: undefined,
      question_id: 'b046dfb2-0ffd-4bf4-946e-90365154fcdb'
    },
    {
      id: '6b5991ee-ae1f-429a-9bd3-fa30d00d17f0',
      answer: undefined,
      is_right: false,
      hint: 'A forEach percorre um array e, para cada item dele, executa uma função callback passada como primeiro parâmetro dela. Mas não retorna nada além de "undefined", o valor padrão que toda função que não tem um retorno devolve no JavaScript. As HOFs que fazem algo mais parecido com esta alternativa são a "some" e a "every". Saiba mais sobre elas no link a seguir.',
      link: 'https://desenvolvimentoparaweb.com/javascript/every-some-find-includes-javascript/',
      question_id: 'b046dfb2-0ffd-4bf4-946e-90365154fcdb'
    },
    {
      id: '235882ef-2307-424c-8d26-a841f6440357',
      answer: 'Nada. Nadinha!',
      is_right: true,
      hint: 'Isso mesmo! A forEach percorre um array e, para cada item dele, executa uma função callback passada como primeiro parâmetro dela. Mas não retorna nada além de "undefined", o valor padrão que toda função que não tem um retorno devolve no JavaScript.',
      link: undefined,
      question_id: 'b046dfb2-0ffd-4bf4-946e-90365154fcdb'
    },
    {
      id: 'c20cffc8-63d5-42ab-9b00-cbc380f9aaa3',
      answer: 'Os elementos do array para a qual a callback retornar "true".',
      is_right: false,
      hint: 'A forEach percorre um array e, para cada item dele, executa uma função callback passada como primeiro parâmetro dela. Mas não retorna nada além de "undefined", o valor padrão que toda função que não tem um retorno devolve no JavaScript. A HOF que faz algo mais parecido com esta alternativa é a "filter".',
      link: undefined,
      question_id: 'b046dfb2-0ffd-4bf4-946e-90365154fcdb'
    },
    {
      id: 'c68ca319-6e18-4617-a2fc-56ac0788a497',
      answer: 'Verdadeiro',
      is_right: true,
      hint: 'Isso! E remete a: Create (C), Read (R), Updade (U) e Delete (D). Isso é, ações comuns a uma boa parte das aplicações (web ou não) que criam, leem, atualizam e removem entradas de dados. Saiba mais escutando o podcast do link a seguir.',
      link: 'https://podprogramar.com.br/podprogramar-39-crud/',
      question_id: '009016cf-ab90-4a69-a02c-6bbd87b62864'
    },
    {
      id: 'a57d9369-2dc1-4f92-ae59-57d6d05baeec',
      answer: 'Falso',
      is_right: false,
      hint: 'É um conceito, sim. E significa: Create (C), Read (R), Updade (U) e Delete (D). Isso é, ações comuns a uma boa parte das aplicações (web ou não) que criam, leem, atualizam e removem entradas de dados. Saiba mais escutando o podcast do link a seguir.',
      link: 'https://podprogramar.com.br/podprogramar-39-crud/',
      question_id: '009016cf-ab90-4a69-a02c-6bbd87b62864'
    },
    {
      id: '98c17864-a419-416b-a40d-e47cb7efd5ad',
      answer: 'Apenas A está correta',
      is_right: false,
      hint: 'A forma localStorage.NOME_DA_CHAVE também serve para acessar uma chave armazenada no Local Storage.',
      link: undefined,
      question_id: '0a6c9cda-9fdd-4cbf-bdd1-c1d1a2c8b199'
    },
    {
      id: '83f98a30-c611-4c50-8149-ce7681ce9d3d',
      answer: 'Apenas D está correta',
      is_right: false,
      hint: 'As formas localStorage.getItem("NOME_DA_CHAVE") e localStorage.NOME_DA_CHAVE servem acessar uma chave armazenada no Local Storage. Vale a observação de que a forma da alternativa D retorna o valor da chave sem nenhum erro, mas só o primeiro parâmetro é necessário para isso. Assim, não podemos considerá-la uma sintaxe correta do comando proposto.',
      link: undefined,
      question_id: '0a6c9cda-9fdd-4cbf-bdd1-c1d1a2c8b199'
    },
    {
      id: '254ea4bb-ad26-498f-b699-e86c0c78a095',
      answer: 'A e C estão corretas',
      is_right: true,
      hint: 'As formas localStorage.getItem("NOME_DA_CHAVE") e localStorage.NOME_DA_CHAVE servem acessar uma chave armazenada no Local Storage. Vale a observação de que a forma da alternativa D retorna o valor da chave sem nenhum erro, mas só o primeiro parâmetro é necessário para isso. Assim, não podemos considerá-la uma sintaxe correta do comando proposto.',
      link: undefined,
      question_id: '0a6c9cda-9fdd-4cbf-bdd1-c1d1a2c8b199'
    },
    {
      id: '29c1fc6e-3c60-483d-8112-83ae3943e4ed',
      answer: 'Apenas B está correta',
      is_right: false,
      hint: 'localStorage.setItem("NOME_DA_CHAVE", "VALOR_DA_CHAVE") é usada para associar um valor a uma chave do Local Storage. As formas localStorage.getItem("NOME_DA_CHAVE") e localStorage.NOME_DA_CHAVE servem acessar uma chave armazenada no Local Storage.',
      link: undefined,
      question_id: '0a6c9cda-9fdd-4cbf-bdd1-c1d1a2c8b199'
    },
    {
      id: 'f0224f0f-3518-49c5-b152-8438fbbe0d58',
      answer: 'Esta função pode ser utilizada apenas em botões.',
      is_right: false,
      hint: 'Na verdade, qualquer tipo de elemento pode ter um escutador de eventos associado a ele. Saiba mais no link a seguir.',
      link: 'https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener',
      question_id: 'be115d73-c89a-4ca2-bab3-a59275dd891a'
    },
    {
      id: '4fa528c0-eff4-44a4-8ee1-23b60043544c',
      answer: 'Esta função pode ser utilizada apenas em botões e inputs.',
      is_right: false,
      hint: 'Na verdade, qualquer tipo de elemento pode ter um escutador de eventos associado a ele. Saiba mais no link a seguir.',
      link: 'https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener',
      question_id: 'be115d73-c89a-4ca2-bab3-a59275dd891a'
    },
    {
      id: '2249df7a-9ff8-403c-a086-4f91027aace6',
      answer: 'Esta função pode ser utilizada em qualquer elemento do DOM.',
      is_right: true,
      hint: 'Isso mesmo! Agora, você sabe como colocar mais de uma espera de evento no mesmo elemento? A documentação do MDN explica direitinho. Saiba mais no link a seguir.',
      link: 'https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener',
      question_id: 'be115d73-c89a-4ca2-bab3-a59275dd891a'
    },
    {
      id: 'bf5ea638-6ea9-4ab5-955e-7949ed07cc38',
      answer: 'npx create-react-app nome-da-aplicação',
      is_right: true,
      hint: 'Isso mesmo! Mas você sabe, afinal, qual é a diferença do NPX para o NPM? Saiba mais no link a seguir.',
      link: 'https://blog.rocketseat.com.br/conhecendo-o-npx-executor-de-pacote-do-npm/',
      question_id: 'dce0383c-a03a-424f-a476-a83c2064d617'
    },
    {
      id: '74487b34-5877-44b9-a667-0e35ef0a48f3',
      answer: 'npm create-react-app nome-da-aplicação ',
      is_right: false,
      hint: 'O NPM é um gerenciador de pacotes para a linguagem de programação JavaScript, mas ele não cria uma aplicação React. O comando que faz isso é o "npx create-react-app nome-da-aplicação". Você sabe qual é a diferença do NPX para o NPM? Saiba mais no link a seguir.',
      link: 'https://blog.rocketseat.com.br/conhecendo-o-npx-executor-de-pacote-do-npm/',
      question_id: 'dce0383c-a03a-424f-a476-a83c2064d617'
    },
    {
      id: 'c98ce5e1-68ba-4d2f-9d7a-d7f36d0780c0',
      answer: 'npx create-app nome-da-aplicação ',
      is_right: false,
      hint: 'Está faltando alguma coisa neste comando... O que será? Descubra no link a seguir.',
      link: 'https://pt-br.reactjs.org/docs/create-a-new-react-app.html#create-react-app',
      question_id: 'dce0383c-a03a-424f-a476-a83c2064d617'
    },
    {
      id: 'fde0a095-3276-44de-aa3c-29efe916d29e',
      answer: 'npx create-react-app',
      is_right: false,
      hint: 'Está faltando alguma coisa neste comando... O que será? Descubra no link a seguir.',
      link: 'https://pt-br.reactjs.org/docs/create-a-new-react-app.html#create-react-app',
      question_id: 'dce0383c-a03a-424f-a476-a83c2064d617'
    },
    {
      id: '3346acd0-ea59-4849-bbf8-d395caab328c',
      answer: '"name" e "for"',
      is_right: false,
      hint: 'Mmm... Acho que você se confundiu. Descubra a resposta e saiba mais no link a seguir!',
      link: 'https://www.codeproject.com/Tips/1248317/Creating-Labels-for-Input-Elements-in-React',
      question_id: 'b355cbe5-d091-4951-b0d8-aa63a0425183'
    },
    {
      id: '1da9aa9e-b990-434b-94e9-45dc07f9b7aa',
      answer: '"value" e "id"',
      is_right: false,
      hint: 'Mmm... Acho que você se confundiu. Descubra a resposta e saiba mais no link a seguir!',
      link: 'https://www.codeproject.com/Tips/1248317/Creating-Labels-for-Input-Elements-in-React',
      question_id: 'b355cbe5-d091-4951-b0d8-aa63a0425183'
    },
    {
      id: '2cb1fa42-8046-427b-bc97-8a6afedbb1dd',
      answer: '"id" e "for"',
      is_right: false,
      hint: 'Quase! Lembre-se que, em JSX, algumas sintaxes são diferentes das do HTML. Descubra a resposta e saiba mais no link a seguir!',
      link: 'https://www.codeproject.com/Tips/1248317/Creating-Labels-for-Input-Elements-in-React',
      question_id: 'b355cbe5-d091-4951-b0d8-aa63a0425183'
    },
    {
      id: 'a4da0426-74a7-496b-b05f-b84027e9dc86',
      answer: '"id" e "htmlFor"',
      is_right: true,
      hint: 'É isso aí! Quer saber mais? Confira no link a seguir!',
      link: 'https://www.codeproject.com/Tips/1248317/Creating-Labels-for-Input-Elements-in-React',
      question_id: 'b355cbe5-d091-4951-b0d8-aa63a0425183'
    },
    {
      id: 'f34a0076-de60-4356-a2df-b8b9d44aee6f',
      answer: '.map()',
      is_right: false,
      hint: 'Mmm... Acho que você se confundiu. Descubra a resposta e saiba mais no link a seguir!',
      link: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every',
      question_id: 'fcbf1d8b-be84-4ef3-8901-8644c3c8b7a6'
    },
    {
      id: '9d319d96-8d70-4cdc-a1cd-92e08aed563b',
      answer: '.filter()',
      is_right: false,
      hint: 'Mmm... Acho que você se confundiu. Descubra a resposta e saiba mais no link a seguir!',
      link: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every',
      question_id: 'fcbf1d8b-be84-4ef3-8901-8644c3c8b7a6'
    },
    {
      id: '47751eed-7903-4cec-9582-4c860a2da29b',
      answer: '.find()',
      is_right: false,
      hint: 'Mmm... Acho que você se confundiu. Descubra a resposta e saiba mais no link a seguir!',
      link: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every',
      question_id: 'fcbf1d8b-be84-4ef3-8901-8644c3c8b7a6'
    },
    {
      id: '772cc80c-988b-422d-b2be-244ad5e8b77a',
      answer: '.every()',
      is_right: true,
      hint: 'Corretísssimo! Saiba mais sobre o .every() no link a seguir.',
      link: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every',
      question_id: 'fcbf1d8b-be84-4ef3-8901-8644c3c8b7a6'
    },
    {
      id: '1684f91d-ab15-4361-b096-9311b4aa5e47',
      answer: 'Verdadeiro',
      is_right: false,
      hint: 'Você se confundiu. O Git é um versionador de arquivos local (offline) que nos permite alternar entre as diferentes versões de um repositório. Para trabalhar com versionamentos do git online precisamos de ferramentas externas como o GitHub, o GitLab, o BitBucket ou - até mesmo - um servidor próprio. Quer saber as diferenças entre eles? Confira o vídeo do link a seguir.',
      link: 'https://www.youtube.com/watch?v=E6fK7-O8Ow0',
      question_id: 'f93332df-d4be-4def-b9c1-11eb9ef3537a'
    },
    {
      id: 'afdaa49a-d54e-4399-9673-2be5cda389f7',
      answer: 'Falso',
      is_right: true,
      hint: 'Isso mesmo! O Git é um versionador de arquivos local (offline) que nos permite alternar entre as diferentes versões de um repositório. Para trabalhar com versionamentos do git online precisamos de ferramentas externas como o GitHub, o GitLab, o BitBucket ou - até mesmo - um servidor próprio. Quer saber as diferenças entre eles? Confira o vídeo do link a seguir.',
      link: 'https://www.youtube.com/watch?v=E6fK7-O8Ow0',
      question_id: 'f93332df-d4be-4def-b9c1-11eb9ef3537a'
    },
    {
      id: 'f1460d7b-9032-4347-944b-d003d97b3212',
      answer: 'Vai dar ruim!',
      is_right: true,
      hint: 'Exatamente! Apesar da "await" servir para experar o resultado de uma Promise, ela apenas atingirá o resultado esperado se utilizada dentro de uma função assíncrona. O vídeo do link a seguir traz uns bons exemplos de como ela funciona.',
      link: 'https://www.youtube.com/watch?v=h0sNAXE1ozo',
      question_id: '0c143303-89c8-4b1c-bc92-da202db541e3'
    },
    {
      id: '3d8c60bd-6321-4b6f-91d1-ce787e98f55a',
      answer: 'Vai dar certo!',
      is_right: false,
      hint: 'Pois é... O nome da expressão confunde a gente mesmo. O código do exemplo retornaria uma Promise, pois a "await" apenas funciona dessa maneira dentro de uma função assíncrona. Assista ao vídeo do link que você irá entender melhor.',
      link: 'https://www.youtube.com/watch?v=h0sNAXE1ozo',
      question_id: '0c143303-89c8-4b1c-bc92-da202db541e3'
    },
    {
      id: '70d4831c-7022-40ab-8c53-8a7ef9335a54',
      answer: 'Verdadeiro',
      is_right: false,
      hint: 'O valor padrão de cada item é 0 e aquele que tiver valor -1 tem prioridade sobre os demais. No course da Trybe, tem um vídeo que vai te ajudar a entender isso melhor. Assista-o no link a seguir!',
      link: 'https://app.betrybe.com/course/fundamentals/html-e-css-forms-flexbox-e-responsivo/css-flexbox-parte-2/3d4d2f0a-82a5-4ab1-9257-0a895f78ad22/conteudos/de0e594b-251a-47a7-a641-1c998b71ec38/propriedade-order/d77b1f60-8629-4355-b9a4-54f57b8a995b?use_case=side_bar',
      question_id: '23c09cd6-09f3-47b0-a141-6934e8f36c84'
    },
    {
      id: 'f8a2ebb3-15a9-4270-9a77-a0955765738b',
      answer: 'Falso',
      is_right: true,
      hint: 'Mandou bem! Se quiser saber mais detalhes sobre essa propriedade, no course da Trybe tem um vídeo bem bacana sobre isso. Assista-o no link a seguir!',
      link: 'https://app.betrybe.com/course/fundamentals/html-e-css-forms-flexbox-e-responsivo/css-flexbox-parte-2/3d4d2f0a-82a5-4ab1-9257-0a895f78ad22/conteudos/de0e594b-251a-47a7-a641-1c998b71ec38/propriedade-order/d77b1f60-8629-4355-b9a4-54f57b8a995b?use_case=side_bar',
      question_id: '23c09cd6-09f3-47b0-a141-6934e8f36c84'
    },
    {
      id: 'a9df92d1-cb0d-43bf-8e2f-df989ecef0e4',
      answer: 'Possui um tamanho disponível de 10 MB.',
      is_right: false,
      hint: 'Na verdade o localStorage possue um tamanho disponível de 5 MB. Saiba mais em https://medium.com/@desenvolvedormateusbarbosa/qual-%C3%A9-a-diferen%C3%A7a-entre-sessionstorage-localstorage-e-cookies-93b49eea747c',
      link: undefined,
      question_id: '07620e7f-e738-4b2d-8cbf-115bbeb2b0aa'
    },
    {
      id: '9245b619-71a0-40e2-b950-aa87ac1ef5a5',
      answer: 'Possui um tamanho disponível de 5 MB.',
      is_right: true,
      hint: 'Isso mesmo. Saiba mais em https://medium.com/@desenvolvedormateusbarbosa/qual-%C3%A9-a-diferen%C3%A7a-entre-sessionstorage-localstorage-e-cookies-93b49eea747c',
      link: undefined,
      question_id: '07620e7f-e738-4b2d-8cbf-115bbeb2b0aa'
    },
    {
      id: '493e492f-4fac-4e23-8e24-9eba1be686d1',
      answer: 'Os dados ficam armazenados até a página ser fechada.',
      is_right: false,
      hint: 'Os dados armazenados no localStorage persistem até serem excluídos explicitamente. Saiba mais em https://medium.com/@desenvolvedormateusbarbosa/qual-%C3%A9-a-diferen%C3%A7a-entre-sessionstorage-localstorage-e-cookies-93b49eea747c',
      link: undefined,
      question_id: '07620e7f-e738-4b2d-8cbf-115bbeb2b0aa'
    },
    {
      id: '0c016af0-edc1-4b50-a7b2-509038481ed9',
      answer: 'Os dados são salvos em JSON',
      is_right: false,
      hint: 'Na verdade é preciso converter os dados em uma string antes de serem salvos. Saiba mais em https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage',
      link: undefined,
      question_id: '07620e7f-e738-4b2d-8cbf-115bbeb2b0aa'
    },
    {
      id: '8ed8b01b-65ec-424e-807f-1e5239a42f16',
      answer: 'É isso aí! O "this" vai estar sempre disponível para fazer referência ao estado.',
      is_right: false,
      hint: 'Opa! Você se enganou. Isso só acontece em métodos herdados do "React.Component", como o "render" e aqueles que pertencem ao seu ciclo de vida. Em um método criado, temos que "bindar"! Tire suas dúvidas de uma vez lendo o texto do link a seguir.',
      link: 'https://medium.com/tableless/https-medium-com-tableless-react-this-bind-so-sei-que-e-assim-73e75f2adbd3',
      question_id: '47879841-b757-46fc-8c61-2661e1a94310'
    },
    {
      id: 'c715880d-d307-4b46-94d3-60e80dc67e1b',
      answer: 'Nada disso! O React não passa a instância para qualquer método.',
      is_right: true,
      hint: 'É isso aí! Isso só acontece em métodos herdados do "React.Component", como o "render" e aqueles que pertencem ao seu ciclo de vida. Em um método criado, temos que "bindar"! Saiba mais a respeito lendo o texto do link a seguir.',
      link: 'https://medium.com/tableless/https-medium-com-tableless-react-this-bind-so-sei-que-e-assim-73e75f2adbd3',
      question_id: '47879841-b757-46fc-8c61-2661e1a94310'
    },
    {
      id: '4505883c-71f1-457a-af6b-1af9434aba24',
      answer: 'mv nome_do_arquivo',
      is_right: false,
      hint: 'Opa! Faltou o novo nome. O correto é "mv nome_do_arquivo novo_nome".',
      link: undefined,
      question_id: 'cd42748d-ffcf-4acd-a289-36d9e6f9c6d7'
    },
    {
      id: '54c36fe1-fc84-4fed-a42e-107be85f3d7c',
      answer: 'rm nome_do_arquivo novo_nome',
      is_right: false,
      hint: 'O comando rm é usado para ReMover um arquivo. O correto é "mv nome_do_arquivo novo_nome". Este comando também pode ser utilizado para MoVer o arquivo para outro diretório.',
      link: undefined,
      question_id: 'cd42748d-ffcf-4acd-a289-36d9e6f9c6d7'
    },
    {
      id: 'd9a56bdc-ab56-4deb-991b-199565b01477',
      answer: 'cp nome_do_arquivo',
      is_right: false,
      hint: 'O comando cp é usado para CoPiar um arquivo. O correto é "mv nome_do_arquivo novo_nome". Este comando também pode ser utilizado para MoVer o arquivo para outro diretório.',
      link: undefined,
      question_id: 'cd42748d-ffcf-4acd-a289-36d9e6f9c6d7'
    },
    {
      id: 'd5349f3e-af31-48c2-9fe8-643a2be12f3a',
      answer: 'mv nome_do_arquivo novo_nome',
      is_right: true,
      hint: 'Correto! Este comando também pode ser utilizado para MoVer o arquivo para outro diretório.',
      link: undefined,
      question_id: 'cd42748d-ffcf-4acd-a289-36d9e6f9c6d7'
    },
    {
      id: '21e365eb-5770-4f87-9bc7-5b23390c2d75',
      answer: 'Possui os mesmos métodos que o localStorage.',
      is_right: false,
      hint: 'Opa! Esta alternativa está correta, sim! Confira o link a seguir e saiba mais a respeito.',
      link: 'https://developer.mozilla.org/pt-BR/docs/Web/API/Storage',
      question_id: '8c78fd98-2c09-44fb-95d4-aa50709e4d50'
    },
    {
      id: '14ff2a70-7127-46ad-881d-92fa6805dffd',
      answer: 'Podemos armazenar até 5 MB de dados.',
      is_right: false,
      hint: 'Esta alternativa está correta, sim! Confira o link a seguir e saiba mais a respeito.',
      link: 'https://www.geeksforgeeks.org/localstorage-and-sessionstorage-web-storage-apis/',
      question_id: '8c78fd98-2c09-44fb-95d4-aa50709e4d50'
    },
    {
      id: 'c2cd6279-e7a5-4713-b836-8766c2b1ae39',
      answer: 'Os dados ficam disponíveis se a página for aberta numa nova aba.',
      is_right: true,
      hint: 'Isso mesmo! Esta é a alternativa incorreta. Os dados do sessionStorage ficam disponíveis apenas para a sessão atual. Quando abrimos uma nova aba, criamos uma nova sessão. Confira o link a seguir e saiba mais.',
      link: 'https://developer.mozilla.org/pt-BR/docs/Web/API/Window/sessionStorage',
      question_id: '8c78fd98-2c09-44fb-95d4-aa50709e4d50'
    },
    {
      id: '6899ae97-1992-4d7e-96b4-47fb47421dc4',
      answer: 'Os dados são salvos no formato de string.',
      is_right: false,
      hint: 'Esta alternativa está correta, sim! Confira o link a seguir e saiba mais a respeito.',
      link: 'https://developer.mozilla.org/pt-BR/docs/Web/API/Window/sessionStorage',
      question_id: '8c78fd98-2c09-44fb-95d4-aa50709e4d50'
    },
    {
      id: 'e7f71b45-3471-4bae-ba77-335fe22d4a81',
      answer: 'git undo --last-commit',
      is_right: false,
      hint: 'Este comando não existe. Confira o comando correto no link a seguir.',
      link: 'https://git-scm.com/docs/git-reset/pt_BR',
      question_id: '41ed60a8-3064-4738-a815-9d329064ebbf'
    },
    {
      id: 'c2ea9174-84b8-4d83-a98c-cd9435336708',
      answer: 'git reset --soft HEAD^',
      is_right: true,
      hint: 'Isso aí! Com este comando, removemos o último commit da branch atual, mas não descartamos as mudanças no arquivo. Confira outros comandos no link a seguir.',
      link: 'https://git-scm.com/docs/git-reset/pt_BR',
      question_id: '41ed60a8-3064-4738-a815-9d329064ebbf'
    },
    {
      id: '4c44077f-79a9-472f-b2ee-94e7d53806d2',
      answer: 'git rm --cached [código-do-lastcommit]',
      is_right: false,
      hint: 'Este comando serve para remover arquivos do repositório sem removê-los do sistema. Confira o comando correto no link a seguir.',
      link: 'https://git-scm.com/docs/git-reset/pt_BR',
      question_id: '41ed60a8-3064-4738-a815-9d329064ebbf'
    },
    {
      id: 'a5a99989-9e11-43d4-8323-c4c977a85b7e',
      answer: 'git commit --undo-last',
      is_right: false,
      hint: 'Este comando não existe. Confira o comando correto no link a seguir.',
      link: 'https://git-scm.com/docs/git-reset/pt_BR',
      question_id: '41ed60a8-3064-4738-a815-9d329064ebbf'
    },
    {
      id: '416253b8-d5fe-4fb9-b159-98a470967df8',
      answer: 'React.Component',
      is_right: false,
      hint: 'React.Component é utilizado para a estruturação de um componente de classe. Saiba mais sobre a resposta correta no seguinte link.',
      link: 'https://reactrouter.com/web/example/route-config',
      question_id: 'fc384176-62b1-4619-bf6f-d00ff6b54239'
    },
    {
      id: '4bcb4263-7deb-4d06-95f1-04e1d5a22df2',
      answer: 'this.setState()',
      is_right: false,
      hint: 'A função this.setState() é utilizada para atualizar o estado de componente de classe. Saiba mais sobre a resposta correta no seguinte link.',
      link: 'https://reactrouter.com/web/example/route-config',
      question_id: 'fc384176-62b1-4619-bf6f-d00ff6b54239'
    },
    {
      id: 'eff0e6bb-af51-420f-83a3-6be24ccea2db',
      answer: 'React.Router',
      is_right: false,
      hint: 'Esse objeto não existe. Talvez você tenha se confundido com o nome da biblioteca React Router, que contém o componente a que estamos nos referindo. Saiba mais sobre a resposta correta no seguinte link.',
      link: 'https://reactrouter.com/web/example/route-config',
      question_id: 'fc384176-62b1-4619-bf6f-d00ff6b54239'
    },
    {
      id: 'd9a1cab2-b6bc-4d82-9a90-5815a34e054b',
      answer: 'Route',
      is_right: true,
      hint: 'Corretíssimo! Confira mais a respeito na documentação do link a seguir.',
      link: 'https://reactrouter.com/web/example/route-config',
      question_id: 'fc384176-62b1-4619-bf6f-d00ff6b54239'
    },
    {
      id: 'b6be623b-a5ed-42dc-8d8f-66d51fa99da4',
      answer: 'Verdadeiro',
      is_right: true,
      hint: 'Isso mesmo! Esta é a definição de uma HOF.',
      link: 'https://devpleno.com/high-order-functions/',
      question_id: '036caf5f-3881-48a1-b825-296c96e2caa2'
    },
    {
      id: 'eb3085dc-c91d-44ed-aa66-d5907b86c395',
      answer: 'Falso',
      is_right: false,
      hint: 'A definição está certa, sim. Saiba mais no link a seguir.',
      link: 'https://devpleno.com/high-order-functions/',
      question_id: '036caf5f-3881-48a1-b825-296c96e2caa2'
    },
    {
      id: 'a067810d-cfe6-4a55-876c-d0f7349440af',
      answer: 'Rezar para os jedis da trybe solucionarem o nosso problema',
      is_right: false,
      hint: 'Além de dar um novo commit para forçar o evaluator a rodar de novo, podemos clicar em "re-run jobs" para forçá-lo a rodar os testes novamente. Lembre-se que se o evaluator ainda estiver rodando e a opção "re-run jobs" não estiver aparecendo, será necessário clicar em "cancel workflow" pra encerrar os teste em andamento.',
      link: undefined,
      question_id: 'e61dd876-f20a-4ade-b9b9-7710c41db1a7'
    },
    {
      id: '31c8c4e0-aa43-40e4-91df-4698240826cd',
      answer: 'Reclamar no Forms que o evaluator é um lixo',
      is_right: false,
      hint: 'Além de dar um novo commit para forçar o evaluator a rodar de novo, podemos clicar em "re-run jobs" para forçá-lo a rodar os testes novamente. Lembre-se que se o evaluator ainda estiver rodando e a opção "re-run jobs" não estiver aparecendo, será necessário clicar em "cancel workflow" pra encerrar os teste em andamento.',
      link: undefined,
      question_id: 'e61dd876-f20a-4ade-b9b9-7710c41db1a7'
    },
    {
      id: '3588aa80-6f60-4d4c-bbb2-252f03080641',
      answer: 'Na tela do evaluator, clicar em re-run jobs pra forçar o evaluator a rodar as tarefas novamente',
      is_right: true,
      hint: 'Genial! Lembre-se de que se o evaluator ainda estiver rodando e a opção "re-run jobs" não estiver aparecendo, será necessário clicar em "cancel workflow" pra encerrar os teste em andamento.',
      link: undefined,
      question_id: 'e61dd876-f20a-4ade-b9b9-7710c41db1a7'
    },
    {
      id: 'df94856c-5999-449d-9d93-0afb28efcd2c',
      answer: 'Abrir uma tread no Slack para reclamar que o evaluator está bugado',
      is_right: false,
      hint: 'Além de dar um novo commit para forçar o evaluator a rodar de novo, podemos clicar em "re-run jobs" para forçá-lo a rodar os testes novamente. Lembre-se que se o evaluator ainda estiver rodando e a opção "re-run jobs" não estiver aparecendo, será necessário clicar em "cancel workflow" pra encerrar os teste em andamento.',
      link: undefined,
      question_id: 'e61dd876-f20a-4ade-b9b9-7710c41db1a7'
    },
    {
      id: '42cb7c7b-fe1c-4ec6-970c-65a4bc340d4b',
      answer: 'Como esta seu desenvolvimento? Tem alguma reclamação? Vai poder participar do dia?',
      is_right: false,
      hint: 'Confira mais sobre a resposta correta no link a seguir.',
      link: 'https://git-scm.com/https://app.betrybe.com/course/front-end/metodologias-ageis/metodologias-ageis/6a54cb80-ec79-419d-a6e5-7f9e4aec79da/conteudos/34843158-2685-416e-850a-0952c6ec129b/scrum/d504f8ef-bb7f-450a-a5a2-7793b7e559ab?use_case=side_bar/git-reset/pt_BR',
      question_id: '5b77368b-625d-4173-9df4-5f56e6d2c9f4'
    },
    {
      id: '77f03c80-3b2d-4c26-8e5f-187bac5f42d5',
      answer: 'O que voce fez ontem? Como foi seu dia? O que sera desenvolvido durante a Sprint?',
      is_right: false,
      hint: 'Confira mais sobre a resposta correta no link a seguir.',
      link: 'https://git-scm.com/https://app.betrybe.com/course/front-end/metodologias-ageis/metodologias-ageis/6a54cb80-ec79-419d-a6e5-7f9e4aec79da/conteudos/34843158-2685-416e-850a-0952c6ec129b/scrum/d504f8ef-bb7f-450a-a5a2-7793b7e559ab?use_case=side_bar/git-reset/pt_BR',
      question_id: '5b77368b-625d-4173-9df4-5f56e6d2c9f4'
    },
    {
      id: 'b68421a1-8714-475d-8af5-3e426038979c',
      answer: 'Há algum impedimento no seu caminho? Há algum bug para ser resolvido? Como será seu dia hoje?',
      is_right: false,
      hint: 'Confira mais sobre a resposta correta no link a seguir.',
      link: 'https://git-scm.com/https://app.betrybe.com/course/front-end/metodologias-ageis/metodologias-ageis/6a54cb80-ec79-419d-a6e5-7f9e4aec79da/conteudos/34843158-2685-416e-850a-0952c6ec129b/scrum/d504f8ef-bb7f-450a-a5a2-7793b7e559ab?use_case=side_bar/git-reset/pt_BR',
      question_id: '5b77368b-625d-4173-9df4-5f56e6d2c9f4'
    },
    {
      id: 'dd52b6e8-7757-4b94-87ed-fbd2a1a9e699',
      answer: 'O que você fez ontem? O que fará hoje? Há algum impedimento no seu caminho?',
      is_right: true,
      hint: 'Foi "ágil" na resposta, hein? Mas há sempre mais o que aprender no nosso link maroto com dicas para ter DMs mais eficientes. Ah! Lembre-se: não é necessário esperá-las para reportar impedimentos.',
      link: 'https://blog.adaptworks.com.br/2016/03/6-dicas-para-uma-daily-scrum-meeting-efetiva-parte-i/',
      question_id: '5b77368b-625d-4173-9df4-5f56e6d2c9f4'
    },
    {
      id: 'ceeb8ead-afc5-48e4-a9fd-4c56400141c6',
      answer: 'São executados reuniões para acompanhamento do projeto uma vez por semana - week meating (WM)',
      is_right: false,
      hint: 'Na verdade são executados reuniões todos os dias - daily meeting (DM). Saiba mais no link a seguir.',
      link: 'https://www.desenvolvimentoagil.com.br/scrum/daily_scrum',
      question_id: '52243da5-96c1-49a3-85e5-15580e1e0caf'
    },
    {
      id: 'cde27b7a-81ca-49ce-ae85-9b299f42abfd',
      answer: 'Sprint é o nome dado para o ciclo total do projeto',
      is_right: false,
      hint: 'Sprint é o nome dado para cada ciclo do projeto. Saiba mais no link a seguir.',
      link: 'https://www.treasy.com.br/blog/scrum/',
      question_id: '52243da5-96c1-49a3-85e5-15580e1e0caf'
    },
    {
      id: '5984e5b8-93a5-4983-8183-c5eb261d3801',
      answer: 'O Scrum Master é responsável por ajudar a todos os envolvidos a entender e abraçar os valores, princípios e práticas do Scrum.',
      is_right: true,
      hint: 'Isso mesmo! Mas há vários outros detalhes que você pode conhecer melhor no link a seguir.',
      link: 'https://www.treasy.com.br/blog/scrum/',
      question_id: '52243da5-96c1-49a3-85e5-15580e1e0caf'
    },
    {
      id: '4144e6d4-7a30-45ba-86da-c7534cd2b4ac',
      answer: 'Kanban é que é uma metodologia ágil, não o Scrum.',
      is_right: false,
      hint: 'Às vezes, a gente se confunde. Mas Scrum é o framework/metodologia e Kanban é uma ferramenta para controlar fluxos de trabalho. Ambos podem ser utilizados em conjunto. Saiba mais no seguinte link.',
      link: 'https://artia.com/blog/scrum-vs-kanban-vs-lean/',
      question_id: '52243da5-96c1-49a3-85e5-15580e1e0caf'
    },
    {
      id: '8d49c8fb-0db5-42e1-98e2-956054d9d8b9',
      answer: 'São chaves de outras tabelas do mesmo banco de dados',
      is_right: false,
      hint: 'Chaves de outras tabelas são as chamadas foreign keys. Constraints são as restrições que definem os tipos de dados aceitos para preencher determinado campo de uma tabela.',
      link: 'https://www.w3schools.com/sql/sql_constraints.asp',
      question_id: '16b8aac0-ed53-46ed-b35f-469b7e17ec2c'
    },
    {
      id: '1b3064ef-0af9-4bd8-90fb-034cad3cc870',
      answer: 'É uma função para unificar tabelas através de um campo em comum',
      is_right: false,
      hint: 'Unificamos tabelas através de JOINS, e temos algumas variações como INNER JOIN, SELF JOIN, LEFT JOIN E RIGHT JOIN por exemplo. Constraints são as restrições que definem os tipos de dados aceitos para preencher determinado campo de uma tabela.',
      link: 'https://www.w3schools.com/sql/sql_constraints.asp',
      question_id: '16b8aac0-ed53-46ed-b35f-469b7e17ec2c'
    },
    {
      id: 'f12d8f10-c276-4f48-8313-dc82f2579930',
      answer: 'São regras que definem os tipos de dados que um determinado campo aceita',
      is_right: true,
      hint: 'Boua! Especificar constraints em suas tabelas evita que dados de tipos inválidos sejam inseridos no banco e reforçam a consistência de um banco de dados.',
      link: 'https://www.w3schools.com/sql/sql_constraints.asp',
      question_id: '16b8aac0-ed53-46ed-b35f-469b7e17ec2c'
    },
    {
      id: '478bcce0-fe6e-4b87-a453-e4a4e6f1e15e',
      answer: 'É o nome que se dá aos relacionamentos entre os dados e tabelas',
      is_right: false,
      hint: 'Constraints são regras que garantem que os dados inseridos serão de tipos específicos, evitando inconsistência no banco de dados.',
      link: 'https://www.w3schools.com/sql/sql_constraints.asp',
      question_id: '16b8aac0-ed53-46ed-b35f-469b7e17ec2c'
    },
    {
      id: '14bb9a0b-d4a1-4415-a2a8-19170fff5b12',
      answer: 'Relacionais e Não-relacionais',
      is_right: true,
      hint: 'Isso aí! Os bancos de dados são classificados principalmente dessa forma. Os BD relacionais mais comuns são: MySQL, PostgreSQL e Oracle, e os BDs não relacionais mais comuns são: MongoDB, Cassandra e Redis',
      link: 'https://blog.betrybe.com/tecnologia/bancos-de-dados/',
      question_id: 'd32f1083-2e9f-47fd-91f6-4875e6385708'
    },
    {
      id: '07217d5e-a72e-4380-84ee-4ce94279e536',
      answer: 'SQL e JavaScript',
      is_right: false,
      hint: 'Na verdade SQL e JavaScript são linguagens de programação, inclusive SQL sendo a linguagem dos BDs relacionais. Mas os bancos dse dados são classificados em relacionais e não relacionais',
      link: 'https://blog.betrybe.com/tecnologia/bancos-de-dados/',
      question_id: 'd32f1083-2e9f-47fd-91f6-4875e6385708'
    },
    {
      id: '2eb4352a-05cf-4283-aa6e-2a350bfa5f51',
      answer: 'Lógicos e autônomos',
      is_right: false,
      hint: 'Gluglu iéié! Os bancos de dados são classificados em relacionais e não relacionais',
      link: 'https://blog.betrybe.com/tecnologia/bancos-de-dados/',
      question_id: 'd32f1083-2e9f-47fd-91f6-4875e6385708'
    },
    {
      id: '5e7b74f0-2f1d-4bb4-9550-9d708c5506c3',
      answer: 'Bancos do tipo Procedure e do tipo Functions',
      is_right: false,
      hint: 'Procedures e Functions são funções do MySQL. Os bancos de dados são classificados em relacionais e não relacionais',
      link: 'https://blog.betrybe.com/tecnologia/bancos-de-dados/',
      question_id: 'd32f1083-2e9f-47fd-91f6-4875e6385708'
    },
    {
      id: 'd0a139d1-d35f-434d-a7a4-81c0f53379f2',
      answer: 'INNER JOIN',
      is_right: false,
      hint: 'O INNER JOIN é um excelente método para unir tabelas que tenham um dado em comum entre si. Nessa situação o mehor método seria o UNION',
      link: 'https://dev.mysql.com/doc/refman/8.0/en/union.html',
      question_id: 'bd00a339-7aea-44a0-8661-756cc2050118'
    },{
      id: 'aca53c97-0136-4d2a-95e3-8f0032339e2f',
      answer: 'UNION ALL',
      is_right: false,
      hint: 'Foi por pouco! Mas o UNION ALL vai incluir todos os nomes duplicados já que esse método não trata os dados. O melhor método nesse caso seria usar o UNION que remove dados repetidos',
      link: 'https://dev.mysql.com/doc/refman/8.0/en/union.html',
      question_id: 'bd00a339-7aea-44a0-8661-756cc2050118'
    },
    {
      id: '52687aca-c10f-4ff1-942a-24d74f4696a1',
      answer: 'TRUNCATE',
      is_right: false,
      hint: 'CUIDADO COM O TRUNCATE! Ele é responsável por esvaziar uma tabela inteira! O melhor método nesse caso seria usar o UNION que remove dados repetidos',
      link: 'https://dev.mysql.com/doc/refman/8.0/en/union.html',
      question_id: 'bd00a339-7aea-44a0-8661-756cc2050118'
    },
    {
      id: '14d0e361-dc0e-441c-8739-af4a19f1721a',
      answer: 'UNION',
      is_right: true,
      hint: 'Certa resposta (ler com a voz do Sílvio Santos)! Isso mesmo, o UNION vai trazer todos os nomes dos bichinhos sem contar os nomes duplicados',
      link: 'https://dev.mysql.com/doc/refman/8.0/en/union.html',
      question_id: 'bd00a339-7aea-44a0-8661-756cc2050118'
    },
    {
      id: '456887d3-6552-4120-abd9-0ae419c66eae',
      answer: 'É uma query aninhada em outra query. Permitindo realizar consultas mais precisas e complexas com mais performance',
      is_right: true,
      hint: 'É isso mesmo! Como se fosse uma query dentro de outra query. Muitas vezes é uma forma mais eficiente de realizar JOINs com custo de memória muito menor, pois as buscas ocorrem em dados indexados sem percorrer tabelas por inteiro',
      link: 'https://dev.mysql.com/doc/refman/8.0/en/subqueries.html',
      question_id: '195b997c-e845-4ebc-9dfd-1cfd05199956'
    },
    {
      id: 'c597a88b-d8e8-4a2d-b451-023e8b02a62e',
      answer: 'São QUERIES que podemos deixar salvas para reutilizarmos quando precisarmos novamente da mesma busca',
      is_right: false,
      hint: 'SUBQUERIES são queries aninhadas que permitem execuções mais estruturadas e complexas sem o mesmo gasto de performance que UNIONs e JOINs',
      link: 'https://dev.mysql.com/doc/refman/8.0/en/subqueries.html',
      question_id: '195b997c-e845-4ebc-9dfd-1cfd05199956'
    },
    {
      id: 'fc7d8cd5-a8d3-4603-89d6-ec1f969e0993',
      answer: 'É o nome que se dá a queries mais simples de até duas linhas',
      is_right: false,
      hint: 'Não é isso não, SUBQUERIES são queries aninhadas que permitem execuções mais estruturadas e complexas sem o mesmo gasto de performance que UNIONs e JOINs',
      link: 'https://dev.mysql.com/doc/refman/8.0/en/subqueries.html',
      question_id: '195b997c-e845-4ebc-9dfd-1cfd05199956'
    },
    {
      id: '28eb7046-e30f-4957-99ab-c7a3543d6d88',
      answer: 'São funções que rodam por baixo dos panos para executar as buscas de uma QUERY',
      is_right: false,
      hint: 'É Sub mas não é isso. SUBQUERIES são queries aninhadas que permitem execuções mais estruturadas e complexas sem o mesmo gasto de performance que UNIONs e JOINs',
      link: 'https://dev.mysql.com/doc/refman/8.0/en/subqueries.html',
      question_id: '195b997c-e845-4ebc-9dfd-1cfd05199956'
    },
    {
      id: 'b03088c1-f2c1-4b01-a603-ae06974a5eed',
      answer: 'Joi.string().not().empty().max(60).required().email()',
      is_right: true,
      hint: "Boa! Essa alternativa verificaria se é uma string não vazia, obrigatória, com no máximo 60 caracteres e caracterizada como um email válido. Você sabia que o critério de validação 'email()' da biblioteca Joi possui opções adicionais para maior efetividade da verificação? Confira no link!",
      link: 'https://joi.dev/api/?v=17.4.1#stringemailoptions',
      question_id: 'abe650cd-37b8-461a-80f4-76802ae6da18'
    },
    {
      id: '03046cd1-d1b8-45ff-b33c-d93c98e103e9',
      answer: 'Joi.string().not().empty().max(60).required()',
      is_right: false,
      hint: 'Essa alternativa validaria somente se é uma string não vazia, obrigatória e com no máximo 60 caracteres, mas não verifica se o email é qualificado como válido. A biblioteca Joi possui o critério de validação "email()" que verifica se o objeto passado é um email válido, podendo-se especificar opções adicionais a essa validação.',
      link: 'https://joi.dev/api/?v=17.4.1#stringemailoptions',
      question_id: 'abe650cd-37b8-461a-80f4-76802ae6da18'
    },
    {
      id: '44c5e7d5-e72a-41a4-91e3-6dcede733cf6',
      answer: 'Joi.string().email().regex(/[A-Za-z0-9._%+-]+@[A-Za-z0-9]+.[A-Za-z]+/)',
      is_right: false,
      hint: 'Essa alternativa validaria somente se é uma string contendo email válido (verificado através do RegEx), mas não testa se é obrigatório e a quantidade máxima de caracteres. A biblioteca Joi possui os critérios de validação ".required()" para validar campos obrigatórios, ".max()" para verificar a quantidade máxima de caracteres e também "email()" que testa se o objeto passado é um email válido, podendo-se especificar opções adicionais a essa validação.',
      link: 'https://joi.dev/api/?v=17.4.1',
      question_id: 'abe650cd-37b8-461a-80f4-76802ae6da18'
    },
    {
      id: '70bfb4ab-64f7-40b4-a0b4-47c6a8df2046',
      answer: 'Joi.string().max(60).required()',
      is_right: false,
      hint: 'Essa alternativa validaria somente se é uma string obrigatória e com no máximo 60 caracteres, mas não verifica se deve ser uma string não vazia e se contém email válido.\n' +
        '        A biblioteca Joi possui os critérios de validação ".(not).Empty()" para validar strings não vazias e "email()" que verifica se o objeto passado é um email válido, podendo-se especificar opções adicionais a essa validação.',
      link: 'https://joi.dev/api/?v=17.4.1',
      question_id: 'abe650cd-37b8-461a-80f4-76802ae6da18'
    },
    {
      id: '3862c7b4-a733-4416-92c1-1af40bd713b1',
      answer: 'de uma variável "customProp" existente no componente em que "MyComponent" foi renderizado.',
      is_right: false,
      hint: 'A lógica da tua resposta faz sentido... Porém, quando declaramos mas não passamos um valor para a prop, o React interpreta que seu valor é "true". No link a seguir você confere mais informações sobre esta e outras formas de passar valores em props no React:',
      link: 'https://pt-br.reactjs.org/docs/jsx-in-depth.html#props-default-to-true',
      question_id: '41d007ac-c90a-4a2b-8d91-e77a195afdc2'
    },
    {
      id: '577c4b14-6926-46b8-abd1-7ca2a96eff7e',
      answer: '"true"',
      is_right: true,
      hint: 'Isso mesmo! Quando declaramos mas não passamos um valor para a prop, o React interpreta que seu valor é "true". No link a seguir você confere mais informações sobre esta e outras formas de passar valores em props no React:',
      link: 'https://pt-br.reactjs.org/docs/jsx-in-depth.html#props-default-to-true',
      question_id: '41d007ac-c90a-4a2b-8d91-e77a195afdc2'
    },
    {
      id: '2b0ba5db-9ee1-4049-843b-b5e8987a2f97',
      answer: '"undefined"',
      is_right: false,
      hint: 'A lógica da tua resposta faz sentido... Porém, quando declaramos mas não passamos um valor para a prop, o React interpreta que seu valor é "true". No link a seguir você confere mais informações sobre esta e outras formas de passar valores em props no React:',
      link: 'https://pt-br.reactjs.org/docs/jsx-in-depth.html#props-default-to-true',
      question_id: '41d007ac-c90a-4a2b-8d91-e77a195afdc2'
    },
    {
      id: '1428e18c-379b-4d32-b0f6-1a572fba4b24',
      answer: 'nenhum, pois passar uma prop sem atribuir um valor provocaria um erro.',
      is_right: false,
      hint: 'Não é essa a reação do React, não. Hehehe. Quando declaramos mas não passamos um valor para a prop, o React interpreta que seu valor é "true". No link a seguir você confere mais informações sobre esta e outras formas de passar valores em props no React:',
      link: 'https://pt-br.reactjs.org/docs/jsx-in-depth.html#props-default-to-true',
      question_id: '41d007ac-c90a-4a2b-8d91-e77a195afdc2'
    },
    {
      id: 'af0bdff4-9656-4d65-b244-9ed2424c1d03',
      answer: 'Context API',
      is_right: true,
      hint: 'O context API não faz parte do Redux. O context API e o Redux são alternativas ao problema do prop drilling.',
      link: 'https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/introducao-ao-redux-o-estado-global-da-aplicacao/b316e3d4-5699-47b2-9f62-a221fc2041a8/conteudos/0638a8c1-f4c8-4da4-ade8-0946ced7d118?use_case=side_bar',
      question_id: 'f1f16399-8c26-46cd-b5b9-e26bbb9a6aef'
    },
    {
      id: '3048ab8f-c536-4653-b22b-a16e96a1650f',
      answer: 'Action',
      is_right: false,
      hint: 'O context API não faz parte do Redux. O context API e o Redux são alternativas ao problema do prop drilling.',
      link: 'https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/introducao-ao-redux-o-estado-global-da-aplicacao/b316e3d4-5699-47b2-9f62-a221fc2041a8/conteudos/0638a8c1-f4c8-4da4-ade8-0946ced7d118?use_case=side_bar',
      question_id: 'f1f16399-8c26-46cd-b5b9-e26bbb9a6aef'
    },
    {
      id: '375e3622-bcae-4521-9e69-919959a75802',
      answer: 'Reducer',
      is_right: false,
      hint: 'O context API não faz parte do Redux. O context API e o Redux são alternativas ao problema do prop drilling.',
      link: 'https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/introducao-ao-redux-o-estado-global-da-aplicacao/b316e3d4-5699-47b2-9f62-a221fc2041a8/conteudos/0638a8c1-f4c8-4da4-ade8-0946ced7d118?use_case=side_bar',
      question_id: 'f1f16399-8c26-46cd-b5b9-e26bbb9a6aef'
    },
    {
      id: 'eb9576f4-c130-4b03-9c2e-93d2afbeda6e',
      answer: 'Store',
      is_right: false,
      hint: 'O context API não faz parte do Redux. O context API e o Redux são alternativas ao problema do prop drilling.',
      link: 'https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/introducao-ao-redux-o-estado-global-da-aplicacao/b316e3d4-5699-47b2-9f62-a221fc2041a8/conteudos/0638a8c1-f4c8-4da4-ade8-0946ced7d118?use_case=side_bar',
      question_id: 'f1f16399-8c26-46cd-b5b9-e26bbb9a6aef'
    },
    {
      id: '6cf527ec-ef16-4319-99c0-246d9cf08eed',
      answer: 'Conectar o componente React ao Redux.',
      is_right: true,
      hint: 'A função connect tem por objetivo conectar o componente do React a store.',
      link: 'https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/usando-o-redux-no-react/a2dac445-434c-4690-83da-7ebef1aad2cd/conteudos/794e5f2e-0f5b-4492-8532-31db57afd23d/connect/878b6c9d-5ded-4b9f-b3ca-e34904ba6ae3?use_case=side_bar',
      question_id: '42e999ab-e135-49b6-9d3a-33bd2255c19c'
    },
    {
      id: '338df70e-29f7-4037-853f-5a7bb05e4a96',
      answer: 'Conectar a Action ao Reducer',
      is_right: false,
      hint: 'A função connect tem por objetivo conectar o componente do React a store.',
      link: 'https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/usando-o-redux-no-react/a2dac445-434c-4690-83da-7ebef1aad2cd/conteudos/794e5f2e-0f5b-4492-8532-31db57afd23d/connect/878b6c9d-5ded-4b9f-b3ca-e34904ba6ae3?use_case=side_bar',
      question_id: '42e999ab-e135-49b6-9d3a-33bd2255c19c'
    },
    {
      id: '51058b2d-d658-4edb-b7f2-c39fb9afaab2',
      answer: 'Conectar a Store ou HTML',
      is_right: false,
      hint: 'A função connect tem por objetivo conectar o componente do React a store.',
      link: 'https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/usando-o-redux-no-react/a2dac445-434c-4690-83da-7ebef1aad2cd/conteudos/794e5f2e-0f5b-4492-8532-31db57afd23d/connect/878b6c9d-5ded-4b9f-b3ca-e34904ba6ae3?use_case=side_bar',
      question_id: '42e999ab-e135-49b6-9d3a-33bd2255c19c'
    },
    {
      id: 'e15baf94-c891-48ba-b360-2edb723f29bc',
      answer: 'Conectar o React ao CSS.',
      is_right: false,
      hint: 'A função connect tem por objetivo conectar o componente do React a store.',
      link: 'https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/usando-o-redux-no-react/a2dac445-434c-4690-83da-7ebef1aad2cd/conteudos/794e5f2e-0f5b-4492-8532-31db57afd23d/connect/878b6c9d-5ded-4b9f-b3ca-e34904ba6ae3?use_case=side_bar',
      question_id: '42e999ab-e135-49b6-9d3a-33bd2255c19c'
    },
    {
      id: 'b8d0cd56-6cbd-4d47-aaf1-139617d0c691',
      answer: 'Um objeto Javascript',
      is_right: true,
      hint: 'Por definição a action é um objeto JavaScript que representa a alteração que deve ocorrer no state da aplicação.',
      link: 'https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/usando-o-redux-no-react/a2dac445-434c-4690-83da-7ebef1aad2cd/conteudos/794e5f2e-0f5b-4492-8532-31db57afd23d/relembrando-conceitos/5f3b2b05-b403-4afa-9bec-637cc7d6f783?use_case=side_bar',
      question_id: '75ef1b3b-e417-46a9-98c1-b0fe0b484deb'
    },
    {
      id: '31ab8306-b514-4575-8146-cba1d58f260d',
      answer: 'Uma função do React',
      is_right: false,
      hint: 'Por definição a action é um objeto JavaScript que representa a alteração que deve ocorrer no state da aplicação.',
      link: 'https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/usando-o-redux-no-react/a2dac445-434c-4690-83da-7ebef1aad2cd/conteudos/794e5f2e-0f5b-4492-8532-31db57afd23d/relembrando-conceitos/5f3b2b05-b403-4afa-9bec-637cc7d6f783?use_case=side_bar',
      question_id: '75ef1b3b-e417-46a9-98c1-b0fe0b484deb'
    },
    {
      id: '06c39e84-6ec8-49de-8cc8-2fdc557a8146',
      answer: 'Uma função do Javascript',
      is_right: false,
      hint: 'Por definição a action é um objeto JavaScript que representa a alteração que deve ocorrer no state da aplicação.',
      link: 'https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/usando-o-redux-no-react/a2dac445-434c-4690-83da-7ebef1aad2cd/conteudos/794e5f2e-0f5b-4492-8532-31db57afd23d/relembrando-conceitos/5f3b2b05-b403-4afa-9bec-637cc7d6f783?use_case=side_bar',
      question_id: '75ef1b3b-e417-46a9-98c1-b0fe0b484deb'
    },
    {
      id: 'f095a693-1ccc-4f02-a63b-9abb7e6cdc8e',
      answer: 'Um objeto do React',
      is_right: false,
      hint: 'Por definição a action é um objeto JavaScript que representa a alteração que deve ocorrer no state da aplicação.',
      link: 'https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/usando-o-redux-no-react/a2dac445-434c-4690-83da-7ebef1aad2cd/conteudos/794e5f2e-0f5b-4492-8532-31db57afd23d/relembrando-conceitos/5f3b2b05-b403-4afa-9bec-637cc7d6f783?use_case=side_bar',
      question_id: '75ef1b3b-e417-46a9-98c1-b0fe0b484deb'
    },
    {
      id: '6f441554-83e4-4297-9597-bd37eec1dfcd',
      answer: 'npm install --save redux react-redux',
      is_right: true,
      hint: 'A resposta correta é a npm install --save redux react-redux. Outra forma de dar o mesmo comando seria npm i --save redux react-redux.',
      link: 'https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/usando-o-redux-no-react/a2dac445-434c-4690-83da-7ebef1aad2cd/conteudos/794e5f2e-0f5b-4492-8532-31db57afd23d/relembrando-conceitos/5f3b2b05-b403-4afa-9bec-637cc7d6f783?use_case=side_bar',
      question_id: '8a6a532b-1364-4690-adae-c344de7e2d44'
    },
    {
      id: 'f6132e27-7171-4422-a1d5-bc2b4c2a00ff',
      answer: 'npx install --save redux react-redux',
      is_right: false,
      hint: 'A resposta correta é a npm install --save redux react-redux. Outra forma de dar o mesmo comando seria npm i --save redux react-redux.',
      link: 'https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/usando-o-redux-no-react/a2dac445-434c-4690-83da-7ebef1aad2cd/conteudos/794e5f2e-0f5b-4492-8532-31db57afd23d/relembrando-conceitos/5f3b2b05-b403-4afa-9bec-637cc7d6f783?use_case=side_bar',
      question_id: '8a6a532b-1364-4690-adae-c344de7e2d44'
    },
    {
      id: 'c84e4fd9-f914-42d9-8ba3-2e525e26a0b1',
      answer: 'npm install --save redux reacty-redux',
      is_right: false,
      hint: 'A resposta correta é a npm install --save redux react-redux. Outra forma de dar o mesmo comando seria npm i --save redux react-redux.',
      link: 'https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/usando-o-redux-no-react/a2dac445-434c-4690-83da-7ebef1aad2cd/conteudos/794e5f2e-0f5b-4492-8532-31db57afd23d/relembrando-conceitos/5f3b2b05-b403-4afa-9bec-637cc7d6f783?use_case=side_bar',
      question_id: '8a6a532b-1364-4690-adae-c344de7e2d44'
    },
    {
      id: '31d4318c-b9c6-423a-99ac-c7f9df44efd5',
      answer: 'npm install --save redux react_redux',
      is_right: false,
      hint: 'A resposta correta é a npm install --save redux react-redux. Outra forma de dar o mesmo comando seria npm i --save redux react-redux.',
      link: 'https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/usando-o-redux-no-react/a2dac445-434c-4690-83da-7ebef1aad2cd/conteudos/794e5f2e-0f5b-4492-8532-31db57afd23d/relembrando-conceitos/5f3b2b05-b403-4afa-9bec-637cc7d6f783?use_case=side_bar',
      question_id: '8a6a532b-1364-4690-adae-c344de7e2d44'
    },
    {
      id: '21f80266-2be3-4701-b9df-0440d6d9bb88',
      answer: 'Uma action',
      is_right: true,
      hint: 'O Reducer deve receber uma Action que nada mais é do que um objeto contendo as alterações a serem feitas no estado.',
      link: 'https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/usando-o-redux-no-react/a2dac445-434c-4690-83da-7ebef1aad2cd/conteudos/794e5f2e-0f5b-4492-8532-31db57afd23d/fluxo-de-dados-no-redux/ff277222-a514-46cd-9a4f-1021018ce183?use_case=side_bar',
      question_id: '514ffc4f-58ed-473b-8d2c-637a5efa8c21'
    },
    {
      id: 'c341354c-0711-4a81-a501-db6d0bd73a3e',
      answer: 'Um componente',
      is_right: false,
      hint: 'O Reducer deve receber uma Action que nada mais é do que um objeto contendo as alterações a serem feitas no estado.',
      link: 'https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/usando-o-redux-no-react/a2dac445-434c-4690-83da-7ebef1aad2cd/conteudos/794e5f2e-0f5b-4492-8532-31db57afd23d/fluxo-de-dados-no-redux/ff277222-a514-46cd-9a4f-1021018ce183?use_case=side_bar',
      question_id: '514ffc4f-58ed-473b-8d2c-637a5efa8c21'
    },
    {
      id: 'c6cf199c-8b17-46d4-9d95-4ecbd2f1c68b',
      answer: 'Um Provider',
      is_right: false,
      hint: 'O Reducer deve receber uma Action que nada mais é do que um objeto contendo as alterações a serem feitas no estado.',
      link: 'https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/usando-o-redux-no-react/a2dac445-434c-4690-83da-7ebef1aad2cd/conteudos/794e5f2e-0f5b-4492-8532-31db57afd23d/fluxo-de-dados-no-redux/ff277222-a514-46cd-9a4f-1021018ce183?use_case=side_bar',
      question_id: '514ffc4f-58ed-473b-8d2c-637a5efa8c21'
    },
    {
      id: '55b94ab1-54c3-4518-90bd-d87b9a7f9cb2',
      answer: 'Um Redux',
      is_right: false,
      hint: 'O Reducer deve receber uma Action que nada mais é do que um objeto contendo as alterações a serem feitas no estado.',
      link: 'https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/usando-o-redux-no-react/a2dac445-434c-4690-83da-7ebef1aad2cd/conteudos/794e5f2e-0f5b-4492-8532-31db57afd23d/fluxo-de-dados-no-redux/ff277222-a514-46cd-9a4f-1021018ce183?use_case=side_bar',
      question_id: '514ffc4f-58ed-473b-8d2c-637a5efa8c21'
    },
    {
      id: 'fa22c2b7-88df-4f57-8339-639d0fd7e6c9',
      answer: 'Uma função que envia uma action para processamento',
      is_right: true,
      hint: 'O Dispatch deve “despachar” a action para o Reducer realizar a alteração no estado do Redux',
      link: 'https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/usando-o-redux-no-react/a2dac445-434c-4690-83da-7ebef1aad2cd/conteudos/794e5f2e-0f5b-4492-8532-31db57afd23d/relembrando-conceitos/5f3b2b05-b403-4afa-9bec-637cc7d6f783?use_case=side_bar',
      question_id: '609fee13-8187-4458-8fb4-0465c7cda8dc'
    },
    {
      id: '542d2d2a-f3f5-415a-a24e-7fe2159eeb90',
      answer: 'Uma biblioteca do Redux',
      is_right: false,
      hint: 'O Dispatch deve “despachar” a action para o Reducer realizar a alteração no estado do Redux',
      link: 'https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/usando-o-redux-no-react/a2dac445-434c-4690-83da-7ebef1aad2cd/conteudos/794e5f2e-0f5b-4492-8532-31db57afd23d/relembrando-conceitos/5f3b2b05-b403-4afa-9bec-637cc7d6f783?use_case=side_bar',
      question_id: '609fee13-8187-4458-8fb4-0465c7cda8dc'
    },
    {
      id: 'bef33d98-23e6-4efb-9612-f5bf0766a723',
      answer: 'Uma função do React',
      is_right: false,
      hint: 'O Dispatch deve “despachar” a action para o Reducer realizar a alteração no estado do Redux',
      link: 'https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/usando-o-redux-no-react/a2dac445-434c-4690-83da-7ebef1aad2cd/conteudos/794e5f2e-0f5b-4492-8532-31db57afd23d/relembrando-conceitos/5f3b2b05-b403-4afa-9bec-637cc7d6f783?use_case=side_bar',
      question_id: '609fee13-8187-4458-8fb4-0465c7cda8dc'
    },
    {
      id: '71897699-1539-4912-a6d3-66b8e6998ec4',
      answer: 'Um objeto do React',
      is_right: false,
      hint: 'O Dispatch deve “despachar” a action para o Reducer realizar a alteração no estado do Redux',
      link: 'https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/usando-o-redux-no-react/a2dac445-434c-4690-83da-7ebef1aad2cd/conteudos/794e5f2e-0f5b-4492-8532-31db57afd23d/relembrando-conceitos/5f3b2b05-b403-4afa-9bec-637cc7d6f783?use_case=side_bar',
      question_id: '609fee13-8187-4458-8fb4-0465c7cda8dc'
    },
    {
      id: 'ce280754-8d31-4296-aeca-52ad2a025369',
      answer: 'Respectivamente os métodos “mapStateToProps” e “mapDispatchToProps”',
      is_right: true,
      hint: 'No primeiro parênteses, devem estar presentes o mapStateToProps e o mapDispatchToProps que são métodos nativos do Redux .',
      link: 'https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/usando-o-redux-no-react/a2dac445-434c-4690-83da-7ebef1aad2cd/conteudos/794e5f2e-0f5b-4492-8532-31db57afd23d/connect/878b6c9d-5ded-4b9f-b3ca-e34904ba6ae3?use_case=side_bar',
      question_id: '7f60d958-9f17-4107-aec9-79c1fffe6963'
    },
    {
      id: '276c6cd4-cad7-459f-b899-2aab0d92f93e',
      answer: 'Respectivamente os métodos “mapDispatchToProps” e “mapStateToProps”',
      is_right: false,
      hint: 'No primeiro parênteses, devem estar presentes o mapStateToProps e o mapDispatchToProps que são métodos nativos do Redux .',
      link: 'https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/usando-o-redux-no-react/a2dac445-434c-4690-83da-7ebef1aad2cd/conteudos/794e5f2e-0f5b-4492-8532-31db57afd23d/connect/878b6c9d-5ded-4b9f-b3ca-e34904ba6ae3?use_case=side_bar',
      question_id: '7f60d958-9f17-4107-aec9-79c1fffe6963'
    },
    {
      id: '1395bc0b-954f-4d4f-8700-17fb09eab455',
      answer: 'Respectivamente o componente e o “mapDispatchToProps”',
      is_right: false,
      hint: 'No primeiro parênteses, devem estar presentes o mapStateToProps e o mapDispatchToProps que são métodos nativos do Redux .',
      link: 'https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/usando-o-redux-no-react/a2dac445-434c-4690-83da-7ebef1aad2cd/conteudos/794e5f2e-0f5b-4492-8532-31db57afd23d/connect/878b6c9d-5ded-4b9f-b3ca-e34904ba6ae3?use_case=side_bar',
      question_id: '7f60d958-9f17-4107-aec9-79c1fffe6963'
    },
    {
      id: 'c4f5cd86-5509-4842-a76c-968b8c561db2',
      answer: 'Respectivamente o componente e o “mapStateToProps”',
      is_right: false,
      hint: 'No primeiro parênteses, devem estar presentes o mapStateToProps e o mapDispatchToProps que são métodos nativos do Redux .',
      link: 'https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/usando-o-redux-no-react/a2dac445-434c-4690-83da-7ebef1aad2cd/conteudos/794e5f2e-0f5b-4492-8532-31db57afd23d/connect/878b6c9d-5ded-4b9f-b3ca-e34904ba6ae3?use_case=side_bar',
      question_id: '7f60d958-9f17-4107-aec9-79c1fffe6963'
    },
    {
      id: 'e2bbd01d-f301-4273-b172-64aaa9aa26e7',
      answer: 'É um pacote do React utilizado para trabalhar com funções assíncronas no Redux',
      is_right: true,
      hint: 'É solução padrão recomendada na documentação do Redux para se ter actions assíncronas e é instalada via uso do pacote redux-thunk.',
      link: 'https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/usando-o-redux-no-react-actions-assincronas/5e038872-db20-44f5-b6d5-ab36b654fff6/conteudos/e4ea24ec-8de1-42ab-a593-17a4e989fafd/redux-thunk/3acb1da6-774f-4659-8066-ffe0ece8335b?use_case=side_bar',
      question_id: 'b2df82a9-26fa-4b6d-a0a4-e9b74cbf1b54'
    },
    {
      id: '910da190-955c-47f3-8218-e39a48b121d0',
      answer: 'É uma função do React que utilizamos no Redux para trabalhar com funções assíncronas.',
      is_right: false,
      hint: 'É solução padrão recomendada na documentação do Redux para se ter actions assíncronas e é instalada via uso do pacote redux-thunk.',
      link: 'https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/usando-o-redux-no-react-actions-assincronas/5e038872-db20-44f5-b6d5-ab36b654fff6/conteudos/e4ea24ec-8de1-42ab-a593-17a4e989fafd/redux-thunk/3acb1da6-774f-4659-8066-ffe0ece8335b?use_case=side_bar',
      question_id: 'b2df82a9-26fa-4b6d-a0a4-e9b74cbf1b54'
    },
    {
      id: '8941c61c-4ae6-4c97-b8d3-e0dad56611d4',
      answer: 'É um item da Store que atualiza o componente React.',
      is_right: false,
      hint: 'É solução padrão recomendada na documentação do Redux para se ter actions assíncronas e é instalada via uso do pacote redux-thunk.',
      link: 'https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/usando-o-redux-no-react-actions-assincronas/5e038872-db20-44f5-b6d5-ab36b654fff6/conteudos/e4ea24ec-8de1-42ab-a593-17a4e989fafd/redux-thunk/3acb1da6-774f-4659-8066-ffe0ece8335b?use_case=side_bar',
      question_id: 'b2df82a9-26fa-4b6d-a0a4-e9b74cbf1b54'
    },
    {
      id: '9d4e9f22-4665-4dcd-bff1-fc1506f68ded',
      answer: 'É um método para renderizar o HTML e o JavaScript dentro do React.',
      is_right: false,
      hint: 'É solução padrão recomendada na documentação do Redux para se ter actions assíncronas e é instalada via uso do pacote redux-thunk.',
      link: 'https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/usando-o-redux-no-react-actions-assincronas/5e038872-db20-44f5-b6d5-ab36b654fff6/conteudos/e4ea24ec-8de1-42ab-a593-17a4e989fafd/redux-thunk/3acb1da6-774f-4659-8066-ffe0ece8335b?use_case=side_bar',
      question_id: 'b2df82a9-26fa-4b6d-a0a4-e9b74cbf1b54'
    },
    {
      id: 'a712ad9e-c30f-4194-8b19-272e30fa2df7',
      answer: 'Action',
      is_right: true,
      hint: 'As actions precisam ser objetos puros, ou seja, não podem ser funções. Para isso, precisaríamos do redux-thunk',
      link: 'https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/usando-o-redux-no-react-actions-assincronas/5e038872-db20-44f5-b6d5-ab36b654fff6/conteudos/e4ea24ec-8de1-42ab-a593-17a4e989fafd/exemplos-guiados/39a19519-23e7-41ea-817e-4f9a97a649df?use_case=side_bar',
      question_id: '59d33945-5e40-40cf-bebf-5c898741ac49'
    },
    {
      id: 'cc56d689-8a0f-4e61-ae39-f4c83fc2be78',
      answer: 'Reducer',
      is_right: false,
      hint: 'As actions precisam ser objetos puros, ou seja, não podem ser funções. Para isso, precisaríamos do redux-thunk',
      link: 'https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/usando-o-redux-no-react-actions-assincronas/5e038872-db20-44f5-b6d5-ab36b654fff6/conteudos/e4ea24ec-8de1-42ab-a593-17a4e989fafd/exemplos-guiados/39a19519-23e7-41ea-817e-4f9a97a649df?use_case=side_bar',
      question_id: '59d33945-5e40-40cf-bebf-5c898741ac49'
    },
    {
      id: '11eece69-000d-48b9-ad55-d3d5b347dead',
      answer: 'Redux',
      is_right: false,
      hint: 'As actions precisam ser objetos puros, ou seja, não podem ser funções. Para isso, precisaríamos do redux-thunk',
      link: 'https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/usando-o-redux-no-react-actions-assincronas/5e038872-db20-44f5-b6d5-ab36b654fff6/conteudos/e4ea24ec-8de1-42ab-a593-17a4e989fafd/exemplos-guiados/39a19519-23e7-41ea-817e-4f9a97a649df?use_case=side_bar',
      question_id: '59d33945-5e40-40cf-bebf-5c898741ac49'
    },
    {
      id: '3161df92-28f9-4caf-96f6-b1d87ef2f0d9',
      answer: 'Root Reducer',
      is_right: false,
      hint: 'As actions precisam ser objetos puros, ou seja, não podem ser funções. Para isso, precisaríamos do redux-thunk',
      link: 'https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/usando-o-redux-no-react-actions-assincronas/5e038872-db20-44f5-b6d5-ab36b654fff6/conteudos/e4ea24ec-8de1-42ab-a593-17a4e989fafd/exemplos-guiados/39a19519-23e7-41ea-817e-4f9a97a649df?use_case=side_bar',
      question_id: '59d33945-5e40-40cf-bebf-5c898741ac49'
    },
    {
      id: 'd9365b7e-ef57-4d4a-9a5e-76da9467d65f',
      answer: 'Um estado global para a aplicação',
      is_right: true,
      hint: 'O Redux existe para auxiliar o fluxo de dados dentro da sua aplicação! Com ele você consegue ter, além do estado local de cada componente, um estado global , acessível a todos os componentes , onde se pode armazenar e recuperar informações que precisam ser compartilhadas.',
      link: 'https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/introducao-ao-redux-o-estado-global-da-aplicacao/b316e3d4-5699-47b2-9f62-a221fc2041a8/conteudos/0638a8c1-f4c8-4da4-ade8-0946ced7d118?use_case=side_bar',
      question_id: '24491eff-f24f-4da6-bcf1-925f204fd6f0'
    },
    {
      id: '74a5b229-c0f3-488c-9d88-b1103ad9b267',
      answer: 'Um componente do React',
      is_right: false,
      hint: 'O Redux existe para auxiliar o fluxo de dados dentro da sua aplicação! Com ele você consegue ter, além do estado local de cada componente, um estado global , acessível a todos os componentes , onde se pode armazenar e recuperar informações que precisam ser compartilhadas.',
      link: 'https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/introducao-ao-redux-o-estado-global-da-aplicacao/b316e3d4-5699-47b2-9f62-a221fc2041a8/conteudos/0638a8c1-f4c8-4da4-ade8-0946ced7d118?use_case=side_bar',
      question_id: '24491eff-f24f-4da6-bcf1-925f204fd6f0'
    },
    {
      id: 'd5d91af4-a81c-4614-9189-97785afd980e',
      answer: 'Uma biblioteca',
      is_right: false,
      hint: 'O Redux existe para auxiliar o fluxo de dados dentro da sua aplicação! Com ele você consegue ter, além do estado local de cada componente, um estado global , acessível a todos os componentes , onde se pode armazenar e recuperar informações que precisam ser compartilhadas.',
      link: 'https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/introducao-ao-redux-o-estado-global-da-aplicacao/b316e3d4-5699-47b2-9f62-a221fc2041a8/conteudos/0638a8c1-f4c8-4da4-ade8-0946ced7d118?use_case=side_bar',
      question_id: '24491eff-f24f-4da6-bcf1-925f204fd6f0'
    },
    {
      id: '2d7d0e18-2b53-48e2-910c-4b00cb748e07',
      answer: 'Um objeto do React',
      is_right: false,
      hint: 'O Redux existe para auxiliar o fluxo de dados dentro da sua aplicação! Com ele você consegue ter, além do estado local de cada componente, um estado global , acessível a todos os componentes , onde se pode armazenar e recuperar informações que precisam ser compartilhadas.',
      link: 'https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/introducao-ao-redux-o-estado-global-da-aplicacao/b316e3d4-5699-47b2-9f62-a221fc2041a8/conteudos/0638a8c1-f4c8-4da4-ade8-0946ced7d118?use_case=side_bar',
      question_id: '24491eff-f24f-4da6-bcf1-925f204fd6f0'
    },
    {
      id: '6e3b820f-3862-4c65-8bd1-b091f203abe8',
      answer: 'Constructor, render e componentDidMount',
      is_right: true,
      hint: 'O Constructor é responsável por realizar a inicialização do componente recebendo as props e os estados, logo em seguida o render o renderiza e o insere no DOM, além de criar os componentes filhos e por último temos o componentDidMount que dispara as ações após o componente ser inserido no DOM.',
      link: 'https://app.betrybe.com/course/front-end/ciclo-de-vida-de-componentes-e-react-router/ciclo-de-vida-de-componentes/36f2a45f-a7c0-4f6f-ae29-119286c4dce9/conteudos/cfe4958f-d7f7-412f-bc93-91ab9ff37eac/o-ciclo-de-vida-de-um-componente-react/b7a46cbb-a1e3-4192-84a2-4d9d0e387cf2?use_case=side_bar',
      question_id: 'bd28c0d1-81f8-4dbe-a53a-fdb9646d3644'
    },
    {
      id: 'bf567048-c15e-4b95-82cd-4a8550665bbd',
      answer: 'Constructor, componentDidMount e render',
      is_right: false,
      hint: 'O Constructor é responsável por realizar a inicialização do componente recebendo as props e os estados, logo em seguida o render o renderiza e o insere no DOM, além de criar os componentes filhos e por último temos o componentDidMount que dispara as ações após o componente ser inserido no DOM.',
      link: 'https://app.betrybe.com/course/front-end/ciclo-de-vida-de-componentes-e-react-router/ciclo-de-vida-de-componentes/36f2a45f-a7c0-4f6f-ae29-119286c4dce9/conteudos/cfe4958f-d7f7-412f-bc93-91ab9ff37eac/o-ciclo-de-vida-de-um-componente-react/b7a46cbb-a1e3-4192-84a2-4d9d0e387cf2?use_case=side_bar',
      question_id: 'bd28c0d1-81f8-4dbe-a53a-fdb9646d3644'
    },
    {
      id: '34c26e00-aad5-4d19-8068-5a354bcc8891',
      answer: 'Render, Constructor e componentDidMount',
      is_right: false,
      hint: 'O Constructor é responsável por realizar a inicialização do componente recebendo as props e os estados, logo em seguida o render o renderiza e o insere no DOM, além de criar os componentes filhos e por último temos o componentDidMount que dispara as ações após o componente ser inserido no DOM.',
      link: 'https://app.betrybe.com/course/front-end/ciclo-de-vida-de-componentes-e-react-router/ciclo-de-vida-de-componentes/36f2a45f-a7c0-4f6f-ae29-119286c4dce9/conteudos/cfe4958f-d7f7-412f-bc93-91ab9ff37eac/o-ciclo-de-vida-de-um-componente-react/b7a46cbb-a1e3-4192-84a2-4d9d0e387cf2?use_case=side_bar',
      question_id: 'bd28c0d1-81f8-4dbe-a53a-fdb9646d3644'
    },
    {
      id: '5abe8b36-48b9-41f3-bc99-1ce028162f67',
      answer: 'componentDidMount, Render e Constructor',
      is_right: false,
      hint: 'O Constructor é responsável por realizar a inicialização do componente recebendo as props e os estados, logo em seguida o render o renderiza e o insere no DOM, além de criar os componentes filhos e por último temos o componentDidMount que dispara as ações após o componente ser inserido no DOM.',
      link: 'https://app.betrybe.com/course/front-end/ciclo-de-vida-de-componentes-e-react-router/ciclo-de-vida-de-componentes/36f2a45f-a7c0-4f6f-ae29-119286c4dce9/conteudos/cfe4958f-d7f7-412f-bc93-91ab9ff37eac/o-ciclo-de-vida-de-um-componente-react/b7a46cbb-a1e3-4192-84a2-4d9d0e387cf2?use_case=side_bar',
      question_id: 'bd28c0d1-81f8-4dbe-a53a-fdb9646d3644'
    },
    {
      id: '922be30a-4056-433f-a082-e6ae56196cb9',
      answer: 'componentDidMount, componentDidupdate e componentWillUnmount',
      is_right: true,
      hint: 'As 3 funções são: componentDidMount, componentDidupdate e componentWillUnmount. Elas são responsáveis por montar, atualizar e desmontar os componentes em React.',
      link: 'https://app.betrybe.com/course/front-end/ciclo-de-vida-de-componentes-e-react-router/ciclo-de-vida-de-componentes/36f2a45f-a7c0-4f6f-ae29-119286c4dce9/conteudos/cfe4958f-d7f7-412f-bc93-91ab9ff37eac/o-ciclo-de-vida-de-um-componente-react/b7a46cbb-a1e3-4192-84a2-4d9d0e387cf2?use_case=side_bar',
      question_id: '15334923-9b9e-4940-82c0-71c9aff8c7f9'
    },
    {
      id: 'ea6ed360-b7c4-4cb5-81ba-f7f573654b84',
      answer: 'componentDidMount, render e componentWillUnmount',
      is_right: false,
      hint: 'As 3 funções são: componentDidMount, componentDidupdate e componentWillUnmount. Elas são responsáveis por montar, atualizar e desmontar os componentes em React.',
      link: 'https://app.betrybe.com/course/front-end/ciclo-de-vida-de-componentes-e-react-router/ciclo-de-vida-de-componentes/36f2a45f-a7c0-4f6f-ae29-119286c4dce9/conteudos/cfe4958f-d7f7-412f-bc93-91ab9ff37eac/o-ciclo-de-vida-de-um-componente-react/b7a46cbb-a1e3-4192-84a2-4d9d0e387cf2?use_case=side_bar',
      question_id: '15334923-9b9e-4940-82c0-71c9aff8c7f9'
    },
    {
      id: '8da33655-e87c-4beb-8bac-c2f461792bc5',
      answer: 'componentDidMount, componentDidupdate e return',
      is_right: false,
      hint: 'As 3 funções são: componentDidMount, componentDidupdate e componentWillUnmount. Elas são responsáveis por montar, atualizar e desmontar os componentes em React.',
      link: 'https://app.betrybe.com/course/front-end/ciclo-de-vida-de-componentes-e-react-router/ciclo-de-vida-de-componentes/36f2a45f-a7c0-4f6f-ae29-119286c4dce9/conteudos/cfe4958f-d7f7-412f-bc93-91ab9ff37eac/o-ciclo-de-vida-de-um-componente-react/b7a46cbb-a1e3-4192-84a2-4d9d0e387cf2?use_case=side_bar',
      question_id: '15334923-9b9e-4940-82c0-71c9aff8c7f9'
    },
    {
      id: '8f0387e1-173d-4f6e-907c-96daf3f0de96',
      answer: 'componentDidMount, contructor e componentWillUnmount',
      is_right: false,
      hint: 'As 3 funções são: componentDidMount, componentDidupdate e componentWillUnmount. Elas são responsáveis por montar, atualizar e desmontar os componentes em React.',
      link: 'https://app.betrybe.com/course/front-end/ciclo-de-vida-de-componentes-e-react-router/ciclo-de-vida-de-componentes/36f2a45f-a7c0-4f6f-ae29-119286c4dce9/conteudos/cfe4958f-d7f7-412f-bc93-91ab9ff37eac/o-ciclo-de-vida-de-um-componente-react/b7a46cbb-a1e3-4192-84a2-4d9d0e387cf2?use_case=side_bar',
      question_id: '15334923-9b9e-4940-82c0-71c9aff8c7f9'
    },
    {
      id: '4c1a1a7f-c2b7-4ffe-8846-33dc51ff3f2c',
      answer: 'npm install react-router-dom',
      is_right: true,
      hint: 'Apesar de haver variações na forma de se instalar o React Router Dom, a única alternativa válida é a “npm install react-router-dom”',
      link: 'https://app.betrybe.com/course/front-end/ciclo-de-vida-de-componentes-e-react-router/react-router/22d8da78-d744-421e-b669-d72ff189e506/conteudos/3bc63bd1-e611-45f8-b73f-b4f5fc98312a/instalacao-react-router-dom/64c5729d-72dd-4dda-bd24-22042bd30b69?use_case=side_bar',
      question_id: 'a4b1b39b-172d-4322-a4d3-40cdfc64793f'
    },
    {
      id: 'c03b0193-2a87-4333-8edc-48b7588af521',
      answer: 'Nenhum, o React Router Dom é nativo do React',
      is_right: false,
      hint: 'Apesar de haver variações na forma de se instalar o React Router Dom, a única alternativa válida é a “npm install react-router-dom”',
      link: 'https://app.betrybe.com/course/front-end/ciclo-de-vida-de-componentes-e-react-router/react-router/22d8da78-d744-421e-b669-d72ff189e506/conteudos/3bc63bd1-e611-45f8-b73f-b4f5fc98312a/instalacao-react-router-dom/64c5729d-72dd-4dda-bd24-22042bd30b69?use_case=side_bar',
      question_id: 'a4b1b39b-172d-4322-a4d3-40cdfc64793f'
    },
    {
      id: 'f2b2355a-b8ad-4fb6-b2ae-22c636fbfc83',
      answer: 'npm i react-router',
      is_right: false,
      hint: 'Apesar de haver variações na forma de se instalar o React Router Dom, a única alternativa válida é a “npm install react-router-dom”',
      link: 'https://app.betrybe.com/course/front-end/ciclo-de-vida-de-componentes-e-react-router/react-router/22d8da78-d744-421e-b669-d72ff189e506/conteudos/3bc63bd1-e611-45f8-b73f-b4f5fc98312a/instalacao-react-router-dom/64c5729d-72dd-4dda-bd24-22042bd30b69?use_case=side_bar',
      question_id: 'a4b1b39b-172d-4322-a4d3-40cdfc64793f'
    },
    {
      id: '6d9d5df2-e215-4378-a785-1e1b88e7f2a1',
      answer: 'npm install react-dom',
      is_right: false,
      hint: 'Apesar de haver variações na forma de se instalar o React Router Dom, a única alternativa válida é a “npm install react-router-dom”',
      link: 'https://app.betrybe.com/course/front-end/ciclo-de-vida-de-componentes-e-react-router/react-router/22d8da78-d744-421e-b669-d72ff189e506/conteudos/3bc63bd1-e611-45f8-b73f-b4f5fc98312a/instalacao-react-router-dom/64c5729d-72dd-4dda-bd24-22042bd30b69?use_case=side_bar',
      question_id: 'a4b1b39b-172d-4322-a4d3-40cdfc64793f'
    },
    {
      id: '3c27e3d3-d3e4-48ec-afb6-a72d5526cddd',
      answer: 'Encapsula a aplicação de forma que possibilita a fazer uso da navegação',
      is_right: true,
      hint: 'Ele é responsável por encapsular a aplicação e permitir que sejam criadas as rotas (route) para que a aplicação seja navegável.',
      link: 'https://app.betrybe.com/course/front-end/ciclo-de-vida-de-componentes-e-react-router/react-router/22d8da78-d744-421e-b669-d72ff189e506/conteudos/3bc63bd1-e611-45f8-b73f-b4f5fc98312a/componentes-browserrouter-e-route/ef565812-71f0-40cd-b65c-d965d94854df?use_case=side_bar',
      question_id: 'd0320b10-531a-4a9d-bc5d-605be7126b8e'
    },
    {
      id: '42996163-1386-47da-a580-980a37a6df89',
      answer: 'Encapsula o componente e permite que o App redirecione pra ele',
      is_right: false,
      hint: 'Ele é responsável por encapsular a aplicação e permitir que sejam criadas as rotas (route) para que a aplicação seja navegável.',
      link: 'https://app.betrybe.com/course/front-end/ciclo-de-vida-de-componentes-e-react-router/react-router/22d8da78-d744-421e-b669-d72ff189e506/conteudos/3bc63bd1-e611-45f8-b73f-b4f5fc98312a/componentes-browserrouter-e-route/ef565812-71f0-40cd-b65c-d965d94854df?use_case=side_bar',
      question_id: 'd0320b10-531a-4a9d-bc5d-605be7126b8e'
    },
    {
      id: 'bd2d241e-73e0-4492-8e0c-c53647948571',
      answer: 'Direciona o usuário da página atual para outra.',
      is_right: false,
      hint: 'Ele é responsável por encapsular a aplicação e permitir que sejam criadas as rotas (route) para que a aplicação seja navegável.',
      link: 'https://app.betrybe.com/course/front-end/ciclo-de-vida-de-componentes-e-react-router/react-router/22d8da78-d744-421e-b669-d72ff189e506/conteudos/3bc63bd1-e611-45f8-b73f-b4f5fc98312a/componentes-browserrouter-e-route/ef565812-71f0-40cd-b65c-d965d94854df?use_case=side_bar',
      question_id: 'd0320b10-531a-4a9d-bc5d-605be7126b8e'
    },
    {
      id: '996da5a5-1e3f-4c77-9174-8b550c399ed0',
      answer: 'Renderiza nossa aplicação.',
      is_right: false,
      hint: 'Ele é responsável por encapsular a aplicação e permitir que sejam criadas as rotas (route) para que a aplicação seja navegável.',
      link: 'https://app.betrybe.com/course/front-end/ciclo-de-vida-de-componentes-e-react-router/react-router/22d8da78-d744-421e-b669-d72ff189e506/conteudos/3bc63bd1-e611-45f8-b73f-b4f5fc98312a/componentes-browserrouter-e-route/ef565812-71f0-40cd-b65c-d965d94854df?use_case=side_bar',
      question_id: 'd0320b10-531a-4a9d-bc5d-605be7126b8e'
    },
    {
      id: '6129ab75-0044-41db-9c4b-49017fd90f30',
      answer: 'Redireciona para nossa “Home” que no caso renderiza o componente “Xablau”',
      is_right: true,
      hint: 'O path “/”, indica que é o caminho raiz da nossa aplicação, sendo a raiz da aplicação.',
      link: 'https://app.betrybe.com/course/front-end/ciclo-de-vida-de-componentes-e-react-router/react-router/22d8da78-d744-421e-b669-d72ff189e506/conteudos/3bc63bd1-e611-45f8-b73f-b4f5fc98312a/componentes-browserrouter-e-route/ef565812-71f0-40cd-b65c-d965d94854df?use_case=side_bar',
      question_id: '24da3cf7-382d-4837-baa4-1230e725d158'
    },
    {
      id: 'e138cdc6-60cb-4a0b-a75f-bc803a81b936',
      answer: 'Redireciona para a página “Xablau”',
      is_right: false,
      hint: 'O path “/”, indica que é o caminho raiz da nossa aplicação, sendo a raiz da aplicação.',
      link: 'https://app.betrybe.com/course/front-end/ciclo-de-vida-de-componentes-e-react-router/react-router/22d8da78-d744-421e-b669-d72ff189e506/conteudos/3bc63bd1-e611-45f8-b73f-b4f5fc98312a/componentes-browserrouter-e-route/ef565812-71f0-40cd-b65c-d965d94854df?use_case=side_bar',
      question_id: '24da3cf7-382d-4837-baa4-1230e725d158'
    },
    {
      id: 'f084958c-79e4-4a19-afec-c70ae552b476',
      answer: 'Redireciona para nossa “Home” e chama a função “Xablau”',
      is_right: false,
      hint: 'O path “/”, indica que é o caminho raiz da nossa aplicação, sendo a raiz da aplicação.',
      link: 'https://app.betrybe.com/course/front-end/ciclo-de-vida-de-componentes-e-react-router/react-router/22d8da78-d744-421e-b669-d72ff189e506/conteudos/3bc63bd1-e611-45f8-b73f-b4f5fc98312a/componentes-browserrouter-e-route/ef565812-71f0-40cd-b65c-d965d94854df?use_case=side_bar',
      question_id: '24da3cf7-382d-4837-baa4-1230e725d158'
    },
    {
      id: 'a433d50a-0516-4b89-bf4c-c6896365abcc',
      answer: 'Nenhuma pois opath está como “/”, ou seja nenhuma página foi passada.',
      is_right: false,
      hint: 'O path “/”, indica que é o caminho raiz da nossa aplicação, sendo a raiz da aplicação.',
      link: 'https://app.betrybe.com/course/front-end/ciclo-de-vida-de-componentes-e-react-router/react-router/22d8da78-d744-421e-b669-d72ff189e506/conteudos/3bc63bd1-e611-45f8-b73f-b4f5fc98312a/componentes-browserrouter-e-route/ef565812-71f0-40cd-b65c-d965d94854df?use_case=side_bar',
      question_id: '24da3cf7-382d-4837-baa4-1230e725d158'
    },
    {
      id: '64f2f84f-96cd-46c0-9d7f-4491e2fb9c96',
      answer: 'match , location e history',
      is_right: true,
      hint: 'As 3 props passadas via link são: match , location e history.',
      link: 'https://app.betrybe.com/course/front-end/ciclo-de-vida-de-componentes-e-react-router/react-router/22d8da78-d744-421e-b669-d72ff189e506/conteudos/3bc63bd1-e611-45f8-b73f-b4f5fc98312a/componentes-route-com-passagem-de-props/e2791a8e-9a0b-4a49-8df4-83cd7feba34d?use_case=side_bar',
      question_id: '1652bcde-fc80-4e94-a8c8-58fa260c0902'
    },
    {
      id: '5c30ff58-7cf6-4987-80f6-3aee1bcbfc82',
      answer: 'match , location e path',
      is_right: false,
      hint: 'As 3 props passadas via link são: match , location e history.',
      link: 'https://app.betrybe.com/course/front-end/ciclo-de-vida-de-componentes-e-react-router/react-router/22d8da78-d744-421e-b669-d72ff189e506/conteudos/3bc63bd1-e611-45f8-b73f-b4f5fc98312a/componentes-route-com-passagem-de-props/e2791a8e-9a0b-4a49-8df4-83cd7feba34d?use_case=side_bar',
      question_id: '1652bcde-fc80-4e94-a8c8-58fa260c0902'
    },
    {
      id: 'a46a812d-b7e3-43e6-b719-26a1fca9eb98',
      answer: 'match ,path e history',
      is_right: false,
      hint: 'As 3 props passadas via link são: match , location e history.',
      link: 'https://app.betrybe.com/course/front-end/ciclo-de-vida-de-componentes-e-react-router/react-router/22d8da78-d744-421e-b669-d72ff189e506/conteudos/3bc63bd1-e611-45f8-b73f-b4f5fc98312a/componentes-route-com-passagem-de-props/e2791a8e-9a0b-4a49-8df4-83cd7feba34d?use_case=side_bar',
      question_id: '1652bcde-fc80-4e94-a8c8-58fa260c0902'
    },
    {
      id: '698a4d1a-da3e-4f2e-a5f8-8b054c33cdc0',
      answer: 'path ,component e history',
      is_right: false,
      hint: 'As 3 props passadas via link são: match , location e history.',
      link: 'https://app.betrybe.com/course/front-end/ciclo-de-vida-de-componentes-e-react-router/react-router/22d8da78-d744-421e-b669-d72ff189e506/conteudos/3bc63bd1-e611-45f8-b73f-b4f5fc98312a/componentes-route-com-passagem-de-props/e2791a8e-9a0b-4a49-8df4-83cd7feba34d?use_case=side_bar',
      question_id: '1652bcde-fc80-4e94-a8c8-58fa260c0902'
    },
    {
      id: '9314212b-2a41-44ce-a707-e1c378cccfc8',
      answer: 'É um componente do React-Router-Dom que encapsula as rotas e renderiza de cima para baixo a primeira rota que tiver correspondência.',
      is_right: true,
      hint: 'O Switch é muito útil para garantirmos que apenas links de correspondência exata sejam renderizados evitando conflitos.',
      link: 'https://app.betrybe.com/course/front-end/ciclo-de-vida-de-componentes-e-react-router/react-router/22d8da78-d744-421e-b669-d72ff189e506/conteudos/3bc63bd1-e611-45f8-b73f-b4f5fc98312a/componente-switch/60f7b58e-24b2-4b01-b027-94713cb1570d?use_case=side_bar',
      question_id: '100dacfa-3848-4d09-a7d2-d61740737740'
    },
    {
      id: '0325c211-09b3-4e8d-896e-24d46261bd93',
      answer: 'É um interruptor que liga e desliga elementos da nossa aplicação.',
      is_right: false,
      hint: 'O Switch é muito útil para garantirmos que apenas links de correspondência exata sejam renderizados evitando conflitos.',
      link: 'https://app.betrybe.com/course/front-end/ciclo-de-vida-de-componentes-e-react-router/react-router/22d8da78-d744-421e-b669-d72ff189e506/conteudos/3bc63bd1-e611-45f8-b73f-b4f5fc98312a/componente-switch/60f7b58e-24b2-4b01-b027-94713cb1570d?use_case=side_bar',
      question_id: '100dacfa-3848-4d09-a7d2-d61740737740'
    },
    {
      id: '6ac6d9ae-4f25-4032-9e8b-63bca66a2cf3',
      answer: 'É um componente que encapsula a nossa aplicação e nos permite criar rodas.',
      is_right: false,
      hint: 'O Switch é muito útil para garantirmos que apenas links de correspondência exata sejam renderizados evitando conflitos.',
      link: 'https://app.betrybe.com/course/front-end/ciclo-de-vida-de-componentes-e-react-router/react-router/22d8da78-d744-421e-b669-d72ff189e506/conteudos/3bc63bd1-e611-45f8-b73f-b4f5fc98312a/componente-switch/60f7b58e-24b2-4b01-b027-94713cb1570d?use_case=side_bar',
      question_id: '100dacfa-3848-4d09-a7d2-d61740737740'
    },
    {
      id: '291117bc-2c35-466a-a8f0-8af397d4cdfe',
      answer: 'É uma função que cria links para a aplicação.',
      is_right: false,
      hint: 'O Switch é muito útil para garantirmos que apenas links de correspondência exata sejam renderizados evitando conflitos.',
      link: 'https://app.betrybe.com/course/front-end/ciclo-de-vida-de-componentes-e-react-router/react-router/22d8da78-d744-421e-b669-d72ff189e506/conteudos/3bc63bd1-e611-45f8-b73f-b4f5fc98312a/componente-switch/60f7b58e-24b2-4b01-b027-94713cb1570d?use_case=side_bar',
      question_id: '100dacfa-3848-4d09-a7d2-d61740737740'
    },
    {
      id: '6cd764a6-2f20-40f3-a3ee-1ff7280d0195',
      answer: 'Single Page Aplication',
      is_right: true,
      hint: 'São conhecidas como Single Page Aplication, pois, não há o recarregamento da página já que os componentes são montados e desmontados sem precisar ocorrer a mudança.',
      link: 'https://app.betrybe.com/course/front-end/ciclo-de-vida-de-componentes-e-react-router/react-router/22d8da78-d744-421e-b669-d72ff189e506/conteudos/3bc63bd1-e611-45f8-b73f-b4f5fc98312a/single-page-application/4f644f1a-8944-4d92-8259-b13f37d3bf84?use_case=side_bar',
      question_id: '6bef4946-63c2-4b89-b21e-26178b66d927'
    },
    {
      id: 'd510987d-30d0-4af7-96d5-05b75933fb56',
      answer: 'Singular Page Aplication',
      is_right: false,
      hint: 'São conhecidas como Single Page Aplication, pois, não há o recarregamento da página já que os componentes são montados e desmontados sem precisar ocorrer a mudança.',
      link: 'https://app.betrybe.com/course/front-end/ciclo-de-vida-de-componentes-e-react-router/react-router/22d8da78-d744-421e-b669-d72ff189e506/conteudos/3bc63bd1-e611-45f8-b73f-b4f5fc98312a/single-page-application/4f644f1a-8944-4d92-8259-b13f37d3bf84?use_case=side_bar',
      question_id: '6bef4946-63c2-4b89-b21e-26178b66d927'
    },
    {
      id: '8f6bd598-550f-4359-a4ec-122e549a9631',
      answer: 'Similar Page Alternative',
      is_right: false,
      hint: 'São conhecidas como Single Page Aplication, pois, não há o recarregamento da página já que os componentes são montados e desmontados sem precisar ocorrer a mudança.',
      link: 'https://app.betrybe.com/course/front-end/ciclo-de-vida-de-componentes-e-react-router/react-router/22d8da78-d744-421e-b669-d72ff189e506/conteudos/3bc63bd1-e611-45f8-b73f-b4f5fc98312a/single-page-application/4f644f1a-8944-4d92-8259-b13f37d3bf84?use_case=side_bar',
      question_id: '6bef4946-63c2-4b89-b21e-26178b66d927'
    },
    {
      id: 'a10b0c67-42f8-48d8-aea5-9394be36f74b',
      answer: 'Simulate Pages Aplication',
      is_right: false,
      hint: 'São conhecidas como Single Page Aplication, pois, não há o recarregamento da página já que os componentes são montados e desmontados sem precisar ocorrer a mudança.',
      link: 'https://app.betrybe.com/course/front-end/ciclo-de-vida-de-componentes-e-react-router/react-router/22d8da78-d744-421e-b669-d72ff189e506/conteudos/3bc63bd1-e611-45f8-b73f-b4f5fc98312a/single-page-application/4f644f1a-8944-4d92-8259-b13f37d3bf84?use_case=side_bar',
      question_id: '6bef4946-63c2-4b89-b21e-26178b66d927'
    },
    {
      id: '394fd1e8-2fcf-46c2-bb3e-e82fdb99f689',
      answer: 'É uma biblioteca do React que permite a criação e controle de rotas para nossas aplicações React.',
      is_right: true,
      hint: ' O React Router é uma lib completa para controle de rotas que permite que você consiga configurar as rotas utilizando o formato JSX.',
      link: 'https://imasters.com.br/front-end/gerenciando-rotas-com-react-router#:~:text=O%20React%20Router%20%C3%A9%20uma,voc%C3%AA%20configurar%20diretamente%20via%20Javascript.',
      question_id: '8335f7c8-4f46-48d3-bb9b-b2a53dc18b53'
    },
    {
      id: '9ce574ae-2d73-4708-8a3e-1681a386f6a3',
      answer: 'É uma Framework do React que permite a criação e controle de rotas para nossas aplicações React.',
      is_right: false,
      hint: ' O React Router é uma lib completa para controle de rotas que permite que você consiga configurar as rotas utilizando o formato JSX.',
      link: 'https://imasters.com.br/front-end/gerenciando-rotas-com-react-router#:~:text=O%20React%20Router%20%C3%A9%20uma,voc%C3%AA%20configurar%20diretamente%20via%20Javascript.',
      question_id: '8335f7c8-4f46-48d3-bb9b-b2a53dc18b53'
    },
    {
      id: 'f0d43db7-5d44-45b9-9d4c-3bb996d653da',
      answer: 'Uma função do React para realizar alterações no CSS e no DOM.',
      is_right: false,
      hint: ' O React Router é uma lib completa para controle de rotas que permite que você consiga configurar as rotas utilizando o formato JSX.',
      link: 'https://imasters.com.br/front-end/gerenciando-rotas-com-react-router#:~:text=O%20React%20Router%20%C3%A9%20uma,voc%C3%AA%20configurar%20diretamente%20via%20Javascript.',
      question_id: '8335f7c8-4f46-48d3-bb9b-b2a53dc18b53'
    },
    {
      id: '30fcdf8a-d19f-4094-b6dd-9805c69c1b11',
      answer: 'É a forma com que o React acessa o Dom.',
      is_right: false,
      hint: ' O React Router é uma lib completa para controle de rotas que permite que você consiga configurar as rotas utilizando o formato JSX.',
      link: 'https://imasters.com.br/front-end/gerenciando-rotas-com-react-router#:~:text=O%20React%20Router%20%C3%A9%20uma,voc%C3%AA%20configurar%20diretamente%20via%20Javascript.',
      question_id: '8335f7c8-4f46-48d3-bb9b-b2a53dc18b53'
    },
    {
      id: 'a9372773-b02b-4587-9f55-e76b0fd55836',
      answer: 'Utilizamos a tag “Link”',
      is_right: true,
      hint: 'Em React a definição de links de navegação é dada pela tag “Link”, diferente do que temos no HTML.',
      link: 'https://app.betrybe.com/course/front-end/ciclo-de-vida-de-componentes-e-react-router/react-router/22d8da78-d744-421e-b669-d72ff189e506/conteudos/3bc63bd1-e611-45f8-b73f-b4f5fc98312a/componente-link/58487602-16c0-4898-b45e-5bb85c87cb7d?use_case=side_bar',
      question_id: '73c90234-98e7-4f9a-b8c6-cc2997a0676d'
    },
    {
      id: '48938e4e-b61e-40a2-9b4f-1d02ad249302',
      answer: 'Utilizamos a tag “b”',
      is_right: false,
      hint: 'Em React a definição de links de navegação é dada pela tag “Link”, diferente do que temos no HTML.',
      link: 'https://app.betrybe.com/course/front-end/ciclo-de-vida-de-componentes-e-react-router/react-router/22d8da78-d744-421e-b669-d72ff189e506/conteudos/3bc63bd1-e611-45f8-b73f-b4f5fc98312a/componente-link/58487602-16c0-4898-b45e-5bb85c87cb7d?use_case=side_bar',
      question_id: '73c90234-98e7-4f9a-b8c6-cc2997a0676d'
    },
    {
      id: '318f4f02-ec85-42ee-aff0-51e62fd6bc09',
      answer: 'Utilizamos a tag “A”',
      is_right: false,
      hint: 'Em React a definição de links de navegação é dada pela tag “Link”, diferente do que temos no HTML.',
      link: 'https://app.betrybe.com/course/front-end/ciclo-de-vida-de-componentes-e-react-router/react-router/22d8da78-d744-421e-b669-d72ff189e506/conteudos/3bc63bd1-e611-45f8-b73f-b4f5fc98312a/componente-link/58487602-16c0-4898-b45e-5bb85c87cb7d?use_case=side_bar',
      question_id: '73c90234-98e7-4f9a-b8c6-cc2997a0676d'
    },
    {
      id: '93f5c2ff-7ee3-49f7-a01d-fd82cfb1c578',
      answer: 'Em React, não substituímos a tag “a”',
      is_right: false,
      hint: 'Em React a definição de links de navegação é dada pela tag “Link”, diferente do que temos no HTML.',
      link: 'https://app.betrybe.com/course/front-end/ciclo-de-vida-de-componentes-e-react-router/react-router/22d8da78-d744-421e-b669-d72ff189e506/conteudos/3bc63bd1-e611-45f8-b73f-b4f5fc98312a/componente-link/58487602-16c0-4898-b45e-5bb85c87cb7d?use_case=side_bar',
      question_id: '73c90234-98e7-4f9a-b8c6-cc2997a0676d'
    },
    {
      id: 'ad995063-6b1f-4e0a-9ffa-7a5ed8a747db',
      answer: 'Uma biblioteca de testes',
      is_right: true,
      hint: 'RTL siginifica React Testing Library, seu objetivo é testar os comportamentos de nossa aplicação React.',
      link: 'https://app.betrybe.com/course/front-end/testes-automatizados-com-react-testing-library/rtl-primeiros-passos/4b749a62-3f4a-4fe6-872e-3d2853f089c8/conteudos/667b17bb-3ea3-447a-909c-ff5a13701fc5/introducao-ao-rtl/20ae0b43-4019-4180-bcb4-5eeb44ef8493?use_case=side_bar',
      question_id: '1d21f642-8232-4418-b419-f4924ce7aac9'
    },
    {
      id: '229db712-1892-4abb-b796-b77be907e7f6',
      answer: 'Uma função JavaScript',
      is_right: false,
      hint: 'RTL siginifica React Testing Library, seu objetivo é testar os comportamentos de nossa aplicação React.',
      link: 'https://app.betrybe.com/course/front-end/testes-automatizados-com-react-testing-library/rtl-primeiros-passos/4b749a62-3f4a-4fe6-872e-3d2853f089c8/conteudos/667b17bb-3ea3-447a-909c-ff5a13701fc5/introducao-ao-rtl/20ae0b43-4019-4180-bcb4-5eeb44ef8493?use_case=side_bar',
      question_id: '1d21f642-8232-4418-b419-f4924ce7aac9'
    },
    {
      id: 'cc502fc3-96f2-4518-bcdc-35ac055d6435',
      answer: 'Uma Tag semântica HTML',
      is_right: false,
      hint: 'RTL siginifica React Testing Library, seu objetivo é testar os comportamentos de nossa aplicação React.',
      link: 'https://app.betrybe.com/course/front-end/testes-automatizados-com-react-testing-library/rtl-primeiros-passos/4b749a62-3f4a-4fe6-872e-3d2853f089c8/conteudos/667b17bb-3ea3-447a-909c-ff5a13701fc5/introducao-ao-rtl/20ae0b43-4019-4180-bcb4-5eeb44ef8493?use_case=side_bar',
      question_id: '1d21f642-8232-4418-b419-f4924ce7aac9'
    },
    {
      id: '842a4edc-cf8d-4ada-b9e0-7175f9ad7637',
      answer: 'Um método de desenvolvimento',
      is_right: false,
      hint: 'RTL siginifica React Testing Library, seu objetivo é testar os comportamentos de nossa aplicação React.',
      link: 'https://app.betrybe.com/course/front-end/testes-automatizados-com-react-testing-library/rtl-primeiros-passos/4b749a62-3f4a-4fe6-872e-3d2853f089c8/conteudos/667b17bb-3ea3-447a-909c-ff5a13701fc5/introducao-ao-rtl/20ae0b43-4019-4180-bcb4-5eeb44ef8493?use_case=side_bar',
      question_id: '1d21f642-8232-4418-b419-f4924ce7aac9'
    },
    {
      id: 'cf7c97fc-588d-4e03-819a-2da3b11daddf',
      answer: 'Uma função do RTL que simula eventos da pessoa usuária com nosso código.',
      is_right: true,
      hint: 'O fireEvent simula interações da pessoa usuária como o clique de um botão, por exemplo.',
      link: 'https://testing-library.com/docs/dom-testing-library/api-events/',
      question_id: 'd3ddfc04-ba7a-4171-b9db-bd126f05671d'
    },
    {
      id: '4f1dc007-5cb1-42fd-8601-ce59037873d7',
      answer: 'Uma função JavaScript que aciona um evento',
      is_right: false,
      hint: 'O fireEvent simula interações da pessoa usuária como o clique de um botão, por exemplo.',
      link: 'https://testing-library.com/docs/dom-testing-library/api-events/',
      question_id: 'd3ddfc04-ba7a-4171-b9db-bd126f05671d'
    },
    {
      id: '0f7d7781-b9fe-41e9-a81c-a75392b4e0c2',
      answer: 'Uma função React',
      is_right: false,
      hint: 'O fireEvent simula interações da pessoa usuária como o clique de um botão, por exemplo.',
      link: 'https://testing-library.com/docs/dom-testing-library/api-events/',
      question_id: 'd3ddfc04-ba7a-4171-b9db-bd126f05671d'
    },
    {
      id: 'e18e4eeb-9405-4508-9844-ef80876021d1',
      answer: 'Uma Tag HTML',
      is_right: false,
      hint: 'O fireEvent simula interações da pessoa usuária como o clique de um botão, por exemplo.',
      link: 'https://testing-library.com/docs/dom-testing-library/api-events/',
      question_id: 'd3ddfc04-ba7a-4171-b9db-bd126f05671d'
    },
    {
      id: 'cab1c9d8-ca29-4cc2-bd47-a1a2ae142de7',
      answer: 'Permite simular os comportamentos de navegação da pessoa usuária.',
      is_right: true,
      hint: 'A biblioteca history é uma ferramenta que permite acessar a sessão de histórico do navegador e também a localização atual (URL), onde quer que o JavaScript execute.',
      link: 'https://reactrouter.com/web/api/history',
      question_id: '22685e56-05a0-4503-98da-19c5407faa35'
    },
    {
      id: '49f6e874-316b-4cc0-b6a2-fc5263080797',
      answer: 'Permite simular a URL de um site da internet.',
      is_right: false,
      hint: 'A biblioteca history é uma ferramenta que permite acessar a sessão de histórico do navegador e também a localização atual (URL), onde quer que o JavaScript execute.',
      link: 'https://reactrouter.com/web/api/history',
      question_id: '22685e56-05a0-4503-98da-19c5407faa35'
    },
    {
      id: '2ee2664d-e538-4e1d-8348-6fb58c52a75f',
      answer: 'Cria as rotas da aplicação.',
      is_right: false,
      hint: 'A biblioteca history é uma ferramenta que permite acessar a sessão de histórico do navegador e também a localização atual (URL), onde quer que o JavaScript execute.',
      link: 'https://reactrouter.com/web/api/history',
      question_id: '22685e56-05a0-4503-98da-19c5407faa35'
    },
    {
      id: '7b03fe0b-99d7-4169-8246-7c4ae6722aa3',
      answer: 'Edita as rotas da aplicação.',
      is_right: false,
      hint: 'A biblioteca history é uma ferramenta que permite acessar a sessão de histórico do navegador e também a localização atual (URL), onde quer que o JavaScript execute.',
      link: 'https://reactrouter.com/web/api/history',
      question_id: '22685e56-05a0-4503-98da-19c5407faa35'
    },
    {
      id: '12d23493-9c19-41a8-84e8-99f486c63753',
      answer: 'É a simulação do comportamento de uma API para com o nosso código.',
      is_right: true,
      hint: 'Funções Mock, ou de simulação, também são conhecidos como "espiões", porque elas permitem você espionar o comportamento de uma função que é chamada indiretamente por algum outro código, ao invés de apenas testando a saída.',
      link: 'https://deltice.github.io/jest/docs/pt-BR/mock-function-api.html#:~:text=Fun%C3%A7%C3%B5es%20Mock%2C%20ou%20de%20simula%C3%A7%C3%A3o,fn()%20.',
      question_id: 'e5bc9c6c-6c5b-4f2c-abc1-02abb1e8512c'
    },
    {
      id: '25bcd5b6-cddc-4d2c-a341-7cd15f358b5d',
      answer: 'Uma função de criação de componentes React.',
      is_right: false,
      hint: 'Funções Mock, ou de simulação, também são conhecidos como "espiões", porque elas permitem você espionar o comportamento de uma função que é chamada indiretamente por algum outro código, ao invés de apenas testando a saída.',
      link: 'https://deltice.github.io/jest/docs/pt-BR/mock-function-api.html#:~:text=Fun%C3%A7%C3%B5es%20Mock%2C%20ou%20de%20simula%C3%A7%C3%A3o,fn()%20.',
      question_id: 'e5bc9c6c-6c5b-4f2c-abc1-02abb1e8512c'
    },
    {
      id: 'c207d2c0-b0ee-4fd4-96b5-60ac58dd0065',
      answer: 'Uma função do Javascript',
      is_right: false,
      hint: 'Funções Mock, ou de simulação, também são conhecidos como "espiões", porque elas permitem você espionar o comportamento de uma função que é chamada indiretamente por algum outro código, ao invés de apenas testando a saída.',
      link: 'https://deltice.github.io/jest/docs/pt-BR/mock-function-api.html#:~:text=Fun%C3%A7%C3%B5es%20Mock%2C%20ou%20de%20simula%C3%A7%C3%A3o,fn()%20.',
      question_id: 'e5bc9c6c-6c5b-4f2c-abc1-02abb1e8512c'
    },
    {
      id: 'a68051a5-e926-4e82-a3ff-9645446a64c1',
      answer: 'É a função do React que compila as funções para o HTML',
      is_right: false,
      hint: 'Funções Mock, ou de simulação, também são conhecidos como "espiões", porque elas permitem você espionar o comportamento de uma função que é chamada indiretamente por algum outro código, ao invés de apenas testando a saída.',
      link: 'https://deltice.github.io/jest/docs/pt-BR/mock-function-api.html#:~:text=Fun%C3%A7%C3%B5es%20Mock%2C%20ou%20de%20simula%C3%A7%C3%A3o,fn()%20.',
      question_id: 'e5bc9c6c-6c5b-4f2c-abc1-02abb1e8512c'
    },
    {
      id: '2c9b0bff-470d-40c2-a346-80420d6ad17c',
      answer: 'Evita que erros na API ou internet  impactem o teste do código, além de reduzir o tempo de execução.',
      is_right: true,
      hint: 'Os mocks evitam chamadas reais a APIs, que além de demorarem podem quebrar os testes em caso de erro de internet ou indisponibilidade da API, por isso, simulamos esse comportamento com o mock.',
      link: 'https://app.betrybe.com/course/front-end/testes-automatizados-com-react-testing-library/rtl-mocks-e-inputs/e05ca38f-9d9a-445d-98b3-8d600908411b/por-que-isso-e-importante/3be1198e-7311-42d8-9265-627a69ce2222?use_case=side_bar',
      question_id: '86b6a3fd-992d-45d9-96dd-75598ca937fc'
    },
    {
      id: '4dba2798-3569-42ca-b7a7-81b0f68daf89',
      answer: 'Para tornar as funções da aplicação mais rápidas.',
      is_right: false,
      hint: 'Os mocks evitam chamadas reais a APIs, que além de demorarem podem quebrar os testes em caso de erro de internet ou indisponibilidade da API, por isso, simulamos esse comportamento com o mock.',
      link: 'https://app.betrybe.com/course/front-end/testes-automatizados-com-react-testing-library/rtl-mocks-e-inputs/e05ca38f-9d9a-445d-98b3-8d600908411b/por-que-isso-e-importante/3be1198e-7311-42d8-9265-627a69ce2222?use_case=side_bar',
      question_id: '86b6a3fd-992d-45d9-96dd-75598ca937fc'
    },
    {
      id: '0013e01e-4384-436c-af64-4fcced22f1de',
      answer: 'Evitar erros de desatualização de versão do React.',
      is_right: false,
      hint: 'Os mocks evitam chamadas reais a APIs, que além de demorarem podem quebrar os testes em caso de erro de internet ou indisponibilidade da API, por isso, simulamos esse comportamento com o mock.',
      link: 'https://app.betrybe.com/course/front-end/testes-automatizados-com-react-testing-library/rtl-mocks-e-inputs/e05ca38f-9d9a-445d-98b3-8d600908411b/por-que-isso-e-importante/3be1198e-7311-42d8-9265-627a69ce2222?use_case=side_bar',
      question_id: '86b6a3fd-992d-45d9-96dd-75598ca937fc'
    },
    {
      id: '1b1429f6-f055-4e7e-8b5a-bf69b4b114db',
      answer: 'Para acessar a função em diferentes partes do código.',
      is_right: false,
      hint: 'Os mocks evitam chamadas reais a APIs, que além de demorarem podem quebrar os testes em caso de erro de internet ou indisponibilidade da API, por isso, simulamos esse comportamento com o mock.',
      link: 'https://app.betrybe.com/course/front-end/testes-automatizados-com-react-testing-library/rtl-mocks-e-inputs/e05ca38f-9d9a-445d-98b3-8d600908411b/por-que-isso-e-importante/3be1198e-7311-42d8-9265-627a69ce2222?use_case=side_bar',
      question_id: '86b6a3fd-992d-45d9-96dd-75598ca937fc'
    },
    {
      id: 'ae6c6e01-9645-49e6-9307-03b54f812bae',
      answer: 'É um hook que permite a utilização do state e outros recursos do React sem escrever uma classe.',
      is_right: true,
      hint: 'O useState é o hook mais comum e ele permite que você utilize o state e outros recursos do React sem escrever uma classe.',
      link: 'https://app.betrybe.com/course/front-end/context-api-e-react-hooks/react-hooks-usestate-e-usecontext/9b6be40f-241a-4d7b-9edf-b145d87bcadb/conteudos/003b2bbc-5085-49ca-bbac-760b669158b9/usestate/154f19fa-2fe4-4272-8dea-3b6971216ed0?use_case=side_bar',
      question_id: '4d85e5e9-2904-4e0f-8213-34289a5ff2cc'
    },
    {
      id: '4ab7476b-76f8-48f1-88ff-5d1ac5ab81ad',
      answer: 'É um interruptor que liga e desliga elementos da nossa aplicação.',
      is_right: false,
      hint: 'O useState é o hook mais comum e ele permite que você utilize o state e outros recursos do React sem escrever uma classe.',
      link: 'https://app.betrybe.com/course/front-end/context-api-e-react-hooks/react-hooks-usestate-e-usecontext/9b6be40f-241a-4d7b-9edf-b145d87bcadb/conteudos/003b2bbc-5085-49ca-bbac-760b669158b9/usestate/154f19fa-2fe4-4272-8dea-3b6971216ed0?use_case=side_bar',
      question_id: '4d85e5e9-2904-4e0f-8213-34289a5ff2cc'
    },
    {
      id: '3e82e1ed-9869-4802-8073-7def3e814482',
      answer: 'É uma função que nos permite importar estados de outras aplicações.',
      is_right: false,
      hint: 'O useState é o hook mais comum e ele permite que você utilize o state e outros recursos do React sem escrever uma classe.',
      link: 'https://app.betrybe.com/course/front-end/context-api-e-react-hooks/react-hooks-usestate-e-usecontext/9b6be40f-241a-4d7b-9edf-b145d87bcadb/conteudos/003b2bbc-5085-49ca-bbac-760b669158b9/usestate/154f19fa-2fe4-4272-8dea-3b6971216ed0?use_case=side_bar',
      question_id: '4d85e5e9-2904-4e0f-8213-34289a5ff2cc'
    },
    {
      id: 'a0e22b91-6f22-4b7a-9fa3-631f72e64141',
      answer: 'Indica para nosso código que é para usar o estado atual.',
      is_right: false,
      hint: 'O useState é o hook mais comum e ele permite que você utilize o state e outros recursos do React sem escrever uma classe.',
      link: 'https://app.betrybe.com/course/front-end/context-api-e-react-hooks/react-hooks-usestate-e-usecontext/9b6be40f-241a-4d7b-9edf-b145d87bcadb/conteudos/003b2bbc-5085-49ca-bbac-760b669158b9/usestate/154f19fa-2fe4-4272-8dea-3b6971216ed0?use_case=side_bar',
      question_id: '4d85e5e9-2904-4e0f-8213-34289a5ff2cc'
    },
    {
      id: '3e7238cb-2b63-4484-8367-0df6dd034fbf',
      answer: 'Todas anteriores',
      is_right: true,
      hint: 'O hook useEffect foi criado para ter os mesmos comportamento que as funções de ciclo de vida dos componentes de Classe.',
      link: 'https://app.betrybe.com/course/front-end/context-api-e-react-hooks/react-hooks-useeffect-e-hooks-customizados/a59a891e-40b0-4638-8f44-c08d777c764b/o-que-vamos-aprender/12a157b9-f50c-4d7a-b29c-b6f32a1d2c7c?use_case=side_bar',
      question_id: '29eb5a3a-597c-4257-86c4-18929a2f38e5'
    },
    {
      id: '7531d048-20e2-4cbe-90f1-4cef173ae710',
      answer: 'componentDidMount',
      is_right: false,
      hint: 'O hook useEffect foi criado para ter os mesmos comportamento que as funções de ciclo de vida dos componentes de Classe.',
      link: 'https://app.betrybe.com/course/front-end/context-api-e-react-hooks/react-hooks-useeffect-e-hooks-customizados/a59a891e-40b0-4638-8f44-c08d777c764b/o-que-vamos-aprender/12a157b9-f50c-4d7a-b29c-b6f32a1d2c7c?use_case=side_bar',
      question_id: '29eb5a3a-597c-4257-86c4-18929a2f38e5'
    },
    {
      id: '5e9193c7-0c0e-4d4d-a3da-cc5f1c05da11',
      answer: 'componentWillUnmount',
      is_right: false,
      hint: 'O hook useEffect foi criado para ter os mesmos comportamento que as funções de ciclo de vida dos componentes de Classe.',
      link: 'https://app.betrybe.com/course/front-end/context-api-e-react-hooks/react-hooks-useeffect-e-hooks-customizados/a59a891e-40b0-4638-8f44-c08d777c764b/o-que-vamos-aprender/12a157b9-f50c-4d7a-b29c-b6f32a1d2c7c?use_case=side_bar',
      question_id: '29eb5a3a-597c-4257-86c4-18929a2f38e5'
    },
    {
      id: '883aa25d-c5b6-43d1-aa8b-3a5fcb30c11c',
      answer: 'componentDidUpdate',
      is_right: false,
      hint: 'O hook useEffect foi criado para ter os mesmos comportamento que as funções de ciclo de vida dos componentes de Classe.',
      link: 'https://app.betrybe.com/course/front-end/context-api-e-react-hooks/react-hooks-useeffect-e-hooks-customizados/a59a891e-40b0-4638-8f44-c08d777c764b/o-que-vamos-aprender/12a157b9-f50c-4d7a-b29c-b6f32a1d2c7c?use_case=side_bar',
      question_id: '29eb5a3a-597c-4257-86c4-18929a2f38e5'
    },
    {
      id: 'a604d133-3d8e-4d70-9a5a-32d1ade88c5a',
      answer: 'Permite o compartilhamento de estados entre os componentes de uma aplicação.',
      is_right: true,
      hint: 'A Context API é um recurso do React que permite compartilhar estado entre diversos componentes em uma árvore de componentes sem a necessidade de se passar props e callbacks manualmente entre eles.',
      link: 'https://app.betrybe.com/course/front-end/context-api-e-react-hooks/context-api-do-react/0cb0f74b-7d53-429d-8fb3-84edb046136f/por-que-isso-e-importante/ec51acc3-0aac-47fe-8f57-b6e64eb25a11?use_case=side_bar',
      question_id: 'f7969b01-3df9-4334-ae07-6c42ff0b7112'
    },
    {
      id: 'ed0ebe49-3960-4f5d-a6dd-7c82389ec485',
      answer: 'Realiza o arquivamento dos retornos de uma API',
      is_right: false,
      hint: 'A Context API é um recurso do React que permite compartilhar estado entre diversos componentes em uma árvore de componentes sem a necessidade de se passar props e callbacks manualmente entre eles.',
      link: 'https://app.betrybe.com/course/front-end/context-api-e-react-hooks/context-api-do-react/0cb0f74b-7d53-429d-8fb3-84edb046136f/por-que-isso-e-importante/ec51acc3-0aac-47fe-8f57-b6e64eb25a11?use_case=side_bar',
      question_id: 'f7969b01-3df9-4334-ae07-6c42ff0b7112'
    },
    {
      id: '3775c054-cca3-411b-bdf9-3730d571bad8',
      answer: 'Permite a realização de requisições para API',
      is_right: false,
      hint: 'A Context API é um recurso do React que permite compartilhar estado entre diversos componentes em uma árvore de componentes sem a necessidade de se passar props e callbacks manualmente entre eles.',
      link: 'https://app.betrybe.com/course/front-end/context-api-e-react-hooks/context-api-do-react/0cb0f74b-7d53-429d-8fb3-84edb046136f/por-que-isso-e-importante/ec51acc3-0aac-47fe-8f57-b6e64eb25a11?use_case=side_bar',
      question_id: 'f7969b01-3df9-4334-ae07-6c42ff0b7112'
    },
    {
      id: 'ad3cf005-29d0-4460-b452-8b12d41c08dd',
      answer: 'Gerencia os estados de uma API',
      is_right: false,
      hint: 'A Context API é um recurso do React que permite compartilhar estado entre diversos componentes em uma árvore de componentes sem a necessidade de se passar props e callbacks manualmente entre eles.',
      link: 'https://app.betrybe.com/course/front-end/context-api-e-react-hooks/context-api-do-react/0cb0f74b-7d53-429d-8fb3-84edb046136f/por-que-isso-e-importante/ec51acc3-0aac-47fe-8f57-b6e64eb25a11?use_case=side_bar',
      question_id: 'f7969b01-3df9-4334-ae07-6c42ff0b7112'
    },
    {
      id: 'e08fbf08-e0ad-479b-9c6a-316f5e83e7e0',
      answer: 'São funções que permitem a utilização de estados e outros recursos sem a necessidade de criar uma classe.',
      is_right: true,
      hint: 'Hooks são uma nova adição ao React 16.8. Eles permitem que você use o state e outros recursos do React sem escrever uma classe',
      link: 'https://pt-br.reactjs.org/docs/hooks-reference.html#useeffect',
      question_id: '7404f1fe-1b6d-42a3-a2c5-cb3d71aad03e'
    },
    {
      id: '3f8e6f99-fd87-448c-9fd2-e13f5f8a6ed7',
      answer: 'São funções de teste utilizadas em React.',
      is_right: false,
      hint: 'Hooks são uma nova adição ao React 16.8. Eles permitem que você use o state e outros recursos do React sem escrever uma classe',
      link: 'https://pt-br.reactjs.org/docs/hooks-reference.html#useeffect',
      question_id: '7404f1fe-1b6d-42a3-a2c5-cb3d71aad03e'
    },
    {
      id: 'a37dcadb-4802-4c83-91cc-6308962f568d',
      answer: 'Uma biblioteca React que permite a realização de testes em uma aplicação.',
      is_right: false,
      hint: 'Hooks são uma nova adição ao React 16.8. Eles permitem que você use o state e outros recursos do React sem escrever uma classe',
      link: 'https://pt-br.reactjs.org/docs/hooks-reference.html#useeffect',
      question_id: '7404f1fe-1b6d-42a3-a2c5-cb3d71aad03e'
    },
    {
      id: '7b0666e5-dca8-42e7-9f46-f0b815584dec',
      answer: 'São funções que criam links entre classes React.',
      is_right: false,
      hint: 'Hooks são uma nova adição ao React 16.8. Eles permitem que você use o state e outros recursos do React sem escrever uma classe',
      link: 'https://pt-br.reactjs.org/docs/hooks-reference.html#useeffect',
      question_id: '7404f1fe-1b6d-42a3-a2c5-cb3d71aad03e'
    },
    {
      id: 'fbe3c509-6845-45ab-aabd-42d840a5a5da',
      answer: 'React Redux',
      is_right: true,
      hint: 'O context API e o Redux são gerenciadores de estado.',
      link: 'https://app.betrybe.com/course/front-end/context-api-e-react-hooks/context-api-do-react/0cb0f74b-7d53-429d-8fb3-84edb046136f/conteudos/e6b66ef8-e624-4aa6-8919-d7b17d767a91/a-solucao/69b6c76c-10c7-4bb1-81f5-ddeaf584fa66?use_case=side_bar',
      question_id: '3993b66c-b0a2-4862-9f96-7ba0cfc1412c'
    },
    {
      id: 'c795b9ad-1cc3-4553-8edb-2dce880660b6',
      answer: 'RTL',
      is_right: false,
      hint: 'O context API e o Redux são gerenciadores de estado.',
      link: 'https://app.betrybe.com/course/front-end/context-api-e-react-hooks/context-api-do-react/0cb0f74b-7d53-429d-8fb3-84edb046136f/conteudos/e6b66ef8-e624-4aa6-8919-d7b17d767a91/a-solucao/69b6c76c-10c7-4bb1-81f5-ddeaf584fa66?use_case=side_bar',
      question_id: '3993b66c-b0a2-4862-9f96-7ba0cfc1412c'
    },
    {
      id: '8286a514-0ac2-450a-9b48-238d81163b3b',
      answer: 'Eslint',
      is_right: false,
      hint: 'O context API e o Redux são gerenciadores de estado.',
      link: 'https://app.betrybe.com/course/front-end/context-api-e-react-hooks/context-api-do-react/0cb0f74b-7d53-429d-8fb3-84edb046136f/conteudos/e6b66ef8-e624-4aa6-8919-d7b17d767a91/a-solucao/69b6c76c-10c7-4bb1-81f5-ddeaf584fa66?use_case=side_bar',
      question_id: '3993b66c-b0a2-4862-9f96-7ba0cfc1412c'
    },
    {
      id: '592c8462-21b6-4321-acac-f7053bf52d62',
      answer: 'NPM',
      is_right: false,
      hint: 'O context API e o Redux são gerenciadores de estado.',
      link: 'https://app.betrybe.com/course/front-end/context-api-e-react-hooks/context-api-do-react/0cb0f74b-7d53-429d-8fb3-84edb046136f/conteudos/e6b66ef8-e624-4aa6-8919-d7b17d767a91/a-solucao/69b6c76c-10c7-4bb1-81f5-ddeaf584fa66?use_case=side_bar',
      question_id: '3993b66c-b0a2-4862-9f96-7ba0cfc1412c'
    },
    {
      id: '32314d37-1f27-48ea-88d1-e6e799fd5d42',
      answer: '<link href="style.css">',
      is_right: false,
      hint: 'Parece que você esqueceu um detalhe: precisamos indicar que o documento é uma folha de estilo com a propriedade rel="stylesheet". Sem isso os estilos não serão carregados. Confira o link para entender melhor!',
      link: 'https://developer.mozilla.org/pt-BR/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#aplicando_css_e_javascript_ao_html',
      question_id: '0cfc03d5-ae40-46f0-be59-362369ccf94a'
    },
    {
      id: 'd6ce95e2-c50a-4b0a-8a46-b6c068ad5e05',
      answer: '<style href="style.css"></style>',
      is_right: false,
      hint: 'Eita! Você se confundiu. A tag "style" serve para definirmos os estilos "inline", isso é, dentro do próprio documento HTML. Confira como utilizar a sintaxe correta no link a seguir.',
      link: 'https://developer.mozilla.org/pt-BR/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#aplicando_css_e_javascript_ao_html',
      question_id: '0cfc03d5-ae40-46f0-be59-362369ccf94a'
    },
    {
      id: '750a38dd-539d-4716-8fb9-885305d8108e',
      answer: '<link rel="stylesheet" src="style.css">',
      is_right: false,
      hint: 'Uh! Por pouco você não acertou! Acabou confundindo a propriedade "src", que utilizamos ao importar um arquivo JavaScript, com "href", que é a correta. Confira o link a seguir e tire suas dúvidas.',
      link: 'https://developer.mozilla.org/pt-BR/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#aplicando_css_e_javascript_ao_html',
      question_id: '0cfc03d5-ae40-46f0-be59-362369ccf94a'
    },
    {
      id: '9337585b-ed77-4409-8328-0f960e3122f5',
      answer: '<link rel="stylesheet" href="style.css">',
      is_right: true,
      hint: 'Na mosca! Mas talvez você tenha sentido falta da propriedade "type", certo? Pois bem, a verdade é que ela está praticamente depreciada e era obrigatória antes da versão 5 do HTML. Confira a respeito no link a seguir.',
      link: 'https://stackoverflow.com/questions/5409114/is-type-text-css-necessary-in-a-link-tag',
      question_id: '0cfc03d5-ae40-46f0-be59-362369ccf94a'
    },
    {
      id: '47eafa16-1407-4649-bfbd-9954760affa2',
      answer: 'É uma função nativa do JavaScript utilizada para manipulação de arrays',
      is_right: false,
      hint: 'Apesar de existirem alguns métodos exclusivos para a manipulação de arrays, elas não representam a definição de callbacks',
      link: 'https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Asynchronous/Introducing',
      question_id: 'dfa5f1f0-18ac-48bc-855a-7c48a904f3f9'
    },
    {
      id: '79a686a4-4ad3-4ca2-8e80-9ba41dafe68f',
      answer: 'São funções para imprimir mensagens ao usuário como "console.log()" e "alert()"',
      is_right: false,
      hint: 'Você pode usar "console.log()" como uma função callback, porém callbacks não são funções para comunicar eventos ao usuário',
      link: '',
      question_id: 'dfa5f1f0-18ac-48bc-855a-7c48a904f3f9'
    },
    {
      id: '8ec81203-97e6-43ef-b575-8718b0a3023e',
      answer: 'São funções que realizam requisições HTTP como "fetch()"',
      is_right: false,
      hint: 'Requisições HTTP geralmente são assíncronas mas não são a definição de callbacks',
      link: 'https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Asynchronous/Introducing',
      question_id: 'dfa5f1f0-18ac-48bc-855a-7c48a904f3f9'
    },
    {
      id: 'fc6b555d-dccf-4894-af13-24ba481722b3',
      answer: 'São funções passadas como parâmetro para outras funções',
      is_right: true,
      hint: 'Isso aí! Callbacks são funções passadas como parâmetro para outras funções. Quando o código por trás panos é concluído a callback é chamada para informar o usuário ou dar continuidade ao fluxo de execução',
      link: 'https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Asynchronous/Introducing',
      question_id: 'dfa5f1f0-18ac-48bc-855a-7c48a904f3f9'
    },
    {
      id: '2cea9157-0e76-4850-b7f8-60d88628286b',
      answer: 'Verdadeiro',
      is_right: false,
      hint: 'A definição básica de uma API é uma Interface de Comunicação entre Aplicações. A API "gerencia" a comunicação entre o cliente e o servidor através de requisições e respostas, servindo como uma ponte, mas não armazena nenhuma informação',
      link: 'https://www.techtudo.com.br/listas/2020/06/o-que-e-api-e-para-que-serve-cinco-perguntas-e-respostas.ghtml',
      question_id: '0bdc2d3a-3734-490a-bd22-5a68bbe42cf1'
    },
    {
      id: '21a9dc6d-2b5a-4402-bbc9-5a7d4aa6c530',
      answer: 'Falso',
      is_right: true,
      hint: 'A definição básica de uma API é uma Interface de Comunicação entre Aplicações. A API "gerencia" a comunicação entre o cliente e o servidor através de requisições e respostas, servindo como uma ponte, mas não armazena nenhuma informação',
      link: 'https://www.techtudo.com.br/listas/2020/06/o-que-e-api-e-para-que-serve-cinco-perguntas-e-respostas.ghtml',
      question_id: '0bdc2d3a-3734-490a-bd22-5a68bbe42cf1'
    },
    {
      id: 'a0769317-cc89-4e9d-afa1-43107743e5bb',
      answer: 'sudo apt run jest',
      is_right: false,
      hint: 'A propriedade "test" é reservada e pode ser executada de forma direta através de "npm test".',
      link: 'https://docs.npmjs.com/cli/v7/commands/npm-test',
      question_id: '0762ced6-9861-4521-8db3-36d0932606d3'
    },
    {
      id: '9672aada-fd78-4706-ae31-7c300997dbe1',
      answer: 'npm run jest',
      is_right: false,
      hint: 'A concatenação "npm" + "run" + "alguma propriedade" vai executar algum comando personalizado que incluirmos no nosso arquivo package.json. Para executar a propriedade "test" podemos rodar na CLI "npm run test" de forma mais direta.',
      link: 'https://docs.npmjs.com/cli/v7/commands/npm-test',
      question_id: '0762ced6-9861-4521-8db3-36d0932606d3'
    },
    {
      id: '7a7dbdb9-4128-4fe2-9cc9-79b8b2852e5e',
      answer: 'npm test',
      is_right: true,
      hint: 'Correto! A propriedade "test" do arquivo package.json irá executar o comando que estiver especificado, nesse caso, todos os testes em Jest que estiverem no nosso projeto.',
      link: 'https://docs.npmjs.com/cli/v7/commands/npm-test',
      question_id: '0762ced6-9861-4521-8db3-36d0932606d3'
    },
    {
      id: 'fed208ae-9bda-4c90-8be0-873a4fd1c673',
      answer: 'npx run --jest test',
      is_right: false,
      hint: 'O npx é utilizado para executar bibliotecas que podem ser baixadas via npm. O jest não requer execução via npx',
      link: 'https://docs.npmjs.com/cli/v7/commands/npm-test',
      question_id: '0762ced6-9861-4521-8db3-36d0932606d3'
    },
    {
      id: '82e18a1c-cad9-4742-923c-1234c53b8357',
      answer: 'A última letra',
      is_right: false,
      hint: 'npx é um  package runner do NPM, um executor. Já o NPM é um gerenciador de pacotes, que possibilita instalar e desinstalar bibliotecas',
      link: 'https://blog.rocketseat.com.br/conhecendo-o-npx-executor-de-pacote-do-npm/',
      question_id: '712e928a-9eb1-442b-923a-cb0ad109282d'
    },
    {
      id: '132310db-d78c-4f13-9df8-70efdf8c5f00',
      answer: 'Nenhuma, os dois fazem a mesma coisa! Você escolhe o que usar',
      is_right: false,
      hint: 'NPM é o "gerente" que é responsável por instalar as bibliotecas e o NPX executa as bibliotecas sem precisar instalar.',
      link: 'https://app.betrybe.com/course/front-end/introducao-a-react/hello-world-no-react/19e8c3e8-cc51-4a52-a917-00e333ce11ac/conteudos/bd56a1df-6308-431f-a937-b7ff59e440c7/gerenciador-de-pacotes/3aad8c52-9953-41ff-94f2-27689aa47e6c?use_case=side_bar',
      question_id: '712e928a-9eb1-442b-923a-cb0ad109282d'
    },
    {
      id: '48b17965-643f-4f0f-b32c-fca7216787eb',
      answer: 'O NPX tem mais funções',
      is_right: false,
      hint: 'O NPX executa os pacotes sem precisar instalar todos na sua máquina.',
      link: 'https://blog.rocketseat.com.br/conhecendo-o-npx-executor-de-pacote-do-npm/',
      question_id: '712e928a-9eb1-442b-923a-cb0ad109282d'
    },
    {
      id: 'bcf77197-2d72-40c7-9c2f-9c0dba72e934',
      answer: 'NPM instala os pacotes e o NPX executa sem instalar',
      is_right: true,
      hint: 'Isso mesmo! O NPM gerencia os pacotes e o NPM executa ( por isso o x no fim da sigla)',
      link: 'https://blog.rocketseat.com.br/conhecendo-o-npx-executor-de-pacote-do-npm/',
      question_id: '712e928a-9eb1-442b-923a-cb0ad109282d'
    }
  ], {}),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('answer', null, {})
};

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
      link: undefined,
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
      question_id: '7db960c8-23a6-4e79-8dbb-5e809d7b96b3'
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
    }
  ], {}),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('answer', null, {})
};

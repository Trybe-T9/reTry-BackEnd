const exercises = [
  {
    id: 0,
    modulo: 'fundamentos',
    bloco: 8,
    question: 'Quais das opções abaixo não são consideradas HOF’S (Higher Order Functions)?',
    image: '',
    options: [
      {
        answer: 'forEach',
        rightAnswer: false,
        hint: 'forEach, apesar de não retornar nenhum valor, recebe uma função como parâmetro - por isso, é considerada uma HOF - que vai ser aplicada a cada elemento do array. Saiba mais sobre ela no link.',
        link: 'https://blog.betrybe.com/javascript/javascript-foreach/',
      },
      {
        answer: 'filter',
        rightAnswer: false,
        hint: 'filter, recebe uma função como parâmetro - por isso, é considerada uma HOF - que vai ser aplicada a cada elemento do array e retornará um novo array com aqueles elementos para os quais esta função retorne true. Saiba mais sobre ela no link.',
        link: 'https://bognarjunior.wordpress.com/2018/02/08/array-javascript-o-metodo-filter/',
      },
      {
        answer: 'map',
        rightAnswer: false,
        hint: 'map, recebe uma função como parâmetro - por isso, é considerada uma HOF - que vai ser aplicada a cada elemento do array e retornará um novo array com os valores retornados por esta função. Saiba mais sobre ela no link.',
        link: 'https://bognarjunior.wordpress.com/2018/02/06/array-javascript-o-metodo-map/',
      },
      {
        answer: 'reverse',
        rightAnswer: true,
        hint: 'Higher Order Functions são funções que recebem como parâmetro outras funções ou retornam uma função como resultado. reverse não se encaixa em nenhuma dessas categorias, pois apenas retorna um novo array contendo os elementos do array atual em ordem inversa.',
        link: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse',
      },
    ],
  },
  {
    id: 1,
    modulo: 'front-end',
    bloco: 11,
    question: 'O componente do código da imagem seria renderizado sem problemas.',
    image: 'images/questao1.png',
    options: [
      {
        answer: 'Verdadeiro',
        rightAnswer: false,
        hint: 'Na verdade, não. Pois, no React, o retorno de um componente que possui mais de um "elemento filho" deve estar encapsulado dentro de um único elemento, como uma div ou fragmentos (<> e </>).Saiba mais sobre fragmentos neste link.',
        link: 'https://pt-br.reactjs.org/docs/fragments.html',
      },
      {
        answer: 'Falso',
        rightAnswer: true,
        hint: 'Isso mesmo! No React, o retorno de um componente que possui mais de um "elemento filho" deve estar encapsulado dentro de um único elemento. Por isso, o código vai levantar um erro.',
      },
    ],
  },
  {
    id: 2,
    modulo: 'front-end',
    bloco: 16,
    question: 'Como o reducer altera o estado geral da aplicação?',
    image: '',
    options: [
      {
        answer: 'Através de uma action',
        rightAnswer: true,
        hint: 'Isso mesmo! Para saber quais e como as informações devem ser alteradas, o reducer deve receber uma action, um objeto que tem como propriedades o tipo da ação e os valores que devem ser alterados no estado da store. De acordo com o seu tipo, o reducer retornará o objeto que será atribuído à sua propriedade na store.',
      },
      {
        answer: 'Através de um componente',
        rightAnswer: false,
        hint: 'Componentes não fazem parte do redux. A resposta correta é uma action, que é um objeto que tem como propriedades o tipo da ação e os valores que devem ser alterados no estado da store pelo reducer. De acordo com o seu tipo, o reducer retornará o objeto que será atribuído à sua propriedade na store.',
      },
      {
        answer: 'Através de um provider',
        rightAnswer: false,
        hint: 'Provider não faz parte do redux. A resposta correta é uma action, que é um objeto que tem como propriedades o tipo da ação e os valores que devem ser alterados no estado da store pelo reducer. De acordo com o seu tipo, o reducer retornará o objeto que será atribuído à sua propriedade na store.',
      },
      {
        answer: 'Não precisa de nada. É responsabilidade do próprio reducer alterar o estado da aplicação',
        rightAnswer: false,
        hint: 'Reducers não conseguem ser chamados sem uma action, que é um objeto que tem como propriedades o tipo da ação e os valores que devem ser alterados no estado da store pelo reducer. De acordo com o seu tipo, o reducer retornará o objeto que será atribuído à sua propriedade na store.',
      },
    ],
  },
  {
    id: 3,
    modulo: 'front-end',
    bloco: 13,
    question: 'Em React Router, qual o nome do componente que renderiza um "href" mudando a rota da minha aplicação?',
    image: '',
    options: [
      {
        answer: 'Uma tag <a href={ path } />',
        rightAnswer: false,
        hint: 'O comportamento é o mesmo, mas, no React Router, é o componente Link que utilizamos para apontar para um caminho que estará associado a um componente através de um Route.',
      },
      {
        answer: '<Redirect to={ path } /> ',
        rightAnswer: false,
        hint: 'Cuidado! Quando o Redirect é renderizado, a pessoa usuária é redirecionada para outra rota sem qualquer tipo de interação, não sendo possível atribuí-lo a um botão ou link, por exemplo. Quem faz isso é o <Link to={ path } />, o qual aponta para um caminho que estará associado a um componente através de um Route.',
      },
      {
        answer: '<Link to={ path } />',
        rightAnswer: true,
        hint: 'Boa! Ao passarmos esse componente como pai de um botão, por exemplo, será renderizada uma tag <a> com a propriedade href do caminho, mudando a rota da nossa aplicação quando clicado e renderizando o componente associado a ela através de um Route.',
      },
      {
        answer: '<Switch />',
        rightAnswer: false,
        hint: 'O componente Switch é usado para encapsular um conjunto de componentes <Route />. Este associará um caminho (path) que, quando acessado, renderizará um componente específico. E será o <Link to={ path } /> que permitirá termos um elemento href renderizado apontando para esse caminho quando precisarmos disso em qualquer lugar da nossa aplicação.',
      },
    ],
  },
  {
    id: 4,
    modulo: 'fundamentos',
    bloco: 9,
    question: 'Toda função assíncrona retorna uma Promise',
    image: '',
    options: [
      {
        answer: 'Verdadeiro',
        rightAnswer: true,
        hint: 'De acordo com a documentação do MDN Web Docs, Promise é um objeto que representa a eventual conclusão ou falha de uma operação assincrona. Isso significa que a execução do resto do código não dependerá da conclusão dessa operação. Saiba mais no link.',
        link: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise',
      },
      {
        answer: 'Falso',
        rightAnswer: false,
        hint: 'De acordo com a documentação do MDN Web Docs, Promise é um objeto que representa a eventual conclusão ou falha de uma operação assincrona. Isso significa que a execução do resto do código não dependerá da conclusão dessa operação. Saiba mais no link.',
        link: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise',
      },
    ],
  },
  {
    id: 5,
    modulo: 'front-end',
    bloco: 11,
    question: 'Quanto ao ciclo de vida de um componente React, a gente pode dizer que o método componentDidMount...',
    image: '',
    options: [
      {
        answer: 'Renderiza a página toda vez que o estado ou prop de um componente é alterado.',
        rightAnswer: false,
        hint: 'Na verdade, este ciclo de vida é executado apenas uma única vez, após o componente ser renderizado pela primeira vez - que é a tal da sua "montagem". Se você está procurando algo de acordo com esta alternativa, seria melhor usar o componentDidUpdate ou até o próprio render - dependendo do resultado que deseja atingir. Saiba mais no link a seguir.',
        link: 'https://pt-br.reactjs.org/docs/react-component.html#componentdidmount',
      },
      {
        answer: 'É executado toda vez que o componente "desmonta", preparando-o para montar quando for chamado novamente.',
        rightAnswer: false,
        hint: 'Mmmmm... Na verdade, não podemos dizer que exista algum método do ciclo de vida do React que faça isso. Já o componentDidMount, ele é executado apenas uma só vez, após o componente ser renderizado pela primeira vez - que é a tal da sua "montagem". Saiba mais no link a seguir.',
        link: 'https://pt-br.reactjs.org/docs/react-component.html#componentdidmount',
      },
      {
        answer: 'É executado apenas uma vez, quando o componente é criado e inserido no DOM.',
        rightAnswer: true,
        hint: 'Boa! Para mais detalhes em relação a ciclos de vida consulte a documentação do React no link a seguir.',
        link: 'https://pt-br.reactjs.org/docs/react-component.html#componentdidmount',
      },
      {
        answer: 'É equivalente à função useState de um componente funcional.',
        rightAnswer: false,
        hint: 'Na verdade, a tal função é a useEffect. Mas isso apenas quando passamos como segundo parâmetro um array vazio. Saiba mais sobre o componentDidMount no link a seguir.',
        link: 'https://pt-br.reactjs.org/docs/react-component.html#componentdidmount',
      }
    ],
  },
  {
    id: 6,
    bloco: 13,
    question: 'O ______ é executado antes de um componente ser desmontado.',
    image: '',
    options: [
      {
        answer: 'componentDidMount',
        rightAnswer: false,
        hint: 'Na verdade, a resposta é componentWillUnmount. componentDidMount é acionado assim que o componente é montado. Saiba mais lendo a documentação do React no seguinte link.',
        link: 'https://pt-br.reactjs.org/docs/state-and-lifecycle.html',
      },
      {
        answer: 'componentDidUpdate',
        rightAnswer: false,
        hint: 'Na verdade, a resposta é componentWillUnmount. componentDidUpdate é acionado quando há uma atualização no componente, isso é, através da alteração de um estado ou prop. Saiba mais lendo a documentação do React no seguinte link.',
        link: 'https://pt-br.reactjs.org/docs/state-and-lifecycle.html',
      },
      {
        answer: 'componentDidReset',
        rightAnswer: false,
        hint: 'Será que esse ciclo de vida existe? Na verdade, a resposta é componentWillUnmount. Saiba mais sobre os ciclos de vida lendo a documentação do React neste link.',
        link: 'https://pt-br.reactjs.org/docs/state-and-lifecycle.html',
      },
      {
        answer: 'componentWillUnmount',
        rightAnswer: true,
        hint: 'Corretíssimo! Mas você conhece direitinho os outros métodos que compõem o ciclo de vida do React? Confira a documentação do React no link a seguir.',
        link: 'https://pt-br.reactjs.org/docs/state-and-lifecycle.html',
      }
    ],
  },
  {
    id: 7,
    modulo: 'fundamentos',
    bloco: 8,
    question: 'O que a Higher Order Function "forEach" retorna?',
    image: '',
    options: [
      {
        answer: 'Um novo array com valores definidos por uma callback para cada item do array na qual é chamada.',
        rightAnswer: false,
        hint: 'A forEach percorre um array e, para cada item dele, executa uma função callback passada como primeiro parâmetro dela. Mas não retorna nada além de "undefined", o valor padrão que toda função que não tem um retorno devolve no JavaScript. A HOF que faz algo mais parecido com esta alternativa é a "map".',
      },
      {
        answer: 'Um valor booleano.',
        rightAnswer: false,
        hint: 'A forEach percorre um array e, para cada item dele, executa uma função callback passada como primeiro parâmetro dela. Mas não retorna nada além de "undefined", o valor padrão que toda função que não tem um retorno devolve no JavaScript. As HOFs que fazem algo mais parecido com esta alternativa são a "some" e a "every". Saiba mais sobre elas no link a seguir.',
        link: 'https://desenvolvimentoparaweb.com/javascript/every-some-find-includes-javascript/'
      },
      {
        answer: 'Nada. Nadinha!',
        rightAnswer: true,
        hint: 'Isso mesmo! A forEach percorre um array e, para cada item dele, executa uma função callback passada como primeiro parâmetro dela. Mas não retorna nada além de "undefined", o valor padrão que toda função que não tem um retorno devolve no JavaScript.',
      },
      {
        answer: 'Os elementos do array para a qual a callback retornar "true".',
        rightAnswer: false,
        hint: 'A forEach percorre um array e, para cada item dele, executa uma função callback passada como primeiro parâmetro dela. Mas não retorna nada além de "undefined", o valor padrão que toda função que não tem um retorno devolve no JavaScript. A HOF que faz algo mais parecido com esta alternativa é a "filter".',
      },
    ],
  },
  {
    id: 8,
    modulo: 'front-end',
    bloco: 13,
    question: 'CRUD é um conceito no Desenvolvimento de Sistemas?',
    image: '',
    options: [
      {
        answer: 'Verdadeiro',
        rightAnswer: true,
        hint: 'Isso! E remete a: Create (C), Read (R), Updade (U) e Delete (D). Isso é, ações comuns a uma boa parte das aplicações (web ou não) que criam, leem, atualizam e removem entradas de dados. Saiba mais escutando o podcast do link a seguir.',
        link: 'https://podprogramar.com.br/podprogramar-39-crud/',
      },
      {
        answer: 'Falso',
        rightAnswer: false,
        hint: 'É um conceito, sim. E significa: Create (C), Read (R), Updade (U) e Delete (D). Isso é, ações comuns a uma boa parte das aplicações (web ou não) que criam, leem, atualizam e removem entradas de dados. Saiba mais escutando o podcast do link a seguir.',
        link: 'https://podprogramar.com.br/podprogramar-39-crud/',
      },
    ],
  },
  {
    id: 9,
    modulo: 'fundamentos', //*
    bloco: 5,
    question: 'Qual(is) dos seguintes comandos podem ser usados para acessar um valor guardado no Local Storage?',
    image: '',
    options: [
      {
        answer: 'localStorage.setItem("NOME_DA_CHAVE", "VALOR_DA_CHAVE")',
        rightAnswer: false,
        hint: 'As formas localStorage.getItem("NOME_DA_CHAVE"), localStorage.NOME_DA_CHAVE funcionam para acessar uma chave guardada no Local Storage. A diferença entre elas é que a primeira retornará "null" a segunda "undefined" se a chave não existir. Já localStorage.setItem("NOME_DA_CHAVE", "VALOR_DA_CHAVE") é usada para associar um valor a uma chave do Local Storage.',
      },
      {
        answer: 'localStorage.getItem("NOME_DA_CHAVE", "VALOR_DA_CHAVE") ou localStorage.NOME_DA_CHAVE',
        rightAnswer: false,
        hint: 'As formas localStorage.getItem("NOME_DA_CHAVE"), localStorage.NOME_DA_CHAVE funcionam para acessar uma chave guardada no Local Storage. A diferença entre elas é que a primeira retornará "null" a segunda "undefined" se a chave não existir. Já localStorage.setItem("NOME_DA_CHAVE", "VALOR_DA_CHAVE") é usada para associar um valor a uma chave do Local Storage.',
      },
      {
        answer: 'localStorage.getItem("NOME_DA_CHAVE") ou localStorage.NOME_DA_CHAVE',
        rightAnswer: true,
        hint: 'As formas localStorage.getItem("NOME_DA_CHAVE"), localStorage.NOME_DA_CHAVE funcionam para acessar uma chave guardada no Local Storage. A diferença entre elas é que a primeira retornará "null" a segunda "undefined" se a chave não existir. Já localStorage.setItem("NOME_DA_CHAVE", "VALOR_DA_CHAVE") é usada para associar um valor a uma chave do Local Storage.',
      },
      {
        answer: 'APENAS localStorage.NOME_DA_CHAVE',
        rightAnswer: false,
        hint: 'As formas localStorage.getItem("NOME_DA_CHAVE"), localStorage.NOME_DA_CHAVE funcionam para acessar uma chave guardada no Local Storage. A diferença entre elas é que a primeira retornará "null" a segunda "undefined" se a chave não existir. Já localStorage.setItem("NOME_DA_CHAVE", "VALOR_DA_CHAVE") é usada para associar um valor a uma chave do Local Storage.',
      },
    ],
  },
  {
    id: 10,
    modulo: 'fundamentos',
    bloco: 5,
    question: 'O código mais comum para criar um escutador de eventos é através de uma função nativa do JavaScript, chamada addEventListener. A respeito dela, podemos dizer que...',
    image: '',
    options: [
      {
        answer: 'Esta função pode ser utilizada apenas em botões.',
        rightAnswer: false,
        hint: 'Na verdade, qualquer tipo de elemento pode ter um escutador de eventos associado a ele. Saiba mais no link a seguir.',
        link: 'https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener',
      },
      {
        answer: 'Esta função pode ser utilizada apenas em botões e inputs.',
        rightAnswer: false,
        hint: 'Na verdade, qualquer tipo de elemento pode ter um escutador de eventos associado a ele. Saiba mais no link a seguir.',
        link: 'https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener',
      },
      {
        answer: 'Esta função pode ser utilizada em qualquer elemento do DOM.',
        rightAnswer: true,
        hint: 'Isso mesmo! Agora, você sabe como colocar mais de uma espera de evento no mesmo elemento? A documentação do MDN explica direitinho. Saiba mais no link a seguir.',
        link: 'https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener',
      },
      {
        answer: 'Nenhuma das alternativas',
        rightAnswer: false,
        hint: 'Na verdade, qualquer tipo de elemento pode ter um escutador de eventos associado a ele. Saiba mais no link a seguir.',
        link: 'https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener',
      },
    ],
  },
  {
    id: 11,
    modulo: 'front-end',
    bloco: 13,
    question: 'Para criar uma nova aplicação em React é necessário executar o comando:',
    image: '',
    options: [
      {
        answer: 'npx create-react-app nome-da-aplicação',
        rightAnswer: true,
        hint: 'Isso mesmo! Mas você sabe, afinal, qual é a diferença do NPX para o NPM? Saiba mais no link a seguir.',
        link: 'https://blog.rocketseat.com.br/conhecendo-o-npx-executor-de-pacote-do-npm/',
      },
      {
        answer: 'npm create-react-app nome-da-aplicação ',
        rightAnswer: false,
        hint: 'O NPM é um gerenciador de pacotes para a linguagem de programação JavaScript, mas ele não cria uma aplicação React. O comando que faz isso é o "npx create-react-app nome-da-aplicação". Você sabe qual é a diferença do NPX para o NPM? Saiba mais no link a seguir.',
        link: 'https://blog.rocketseat.com.br/conhecendo-o-npx-executor-de-pacote-do-npm/',
      },
      {
        answer: 'npx create-app nome-da-aplicação ',
        rightAnswer: false,
        hint: 'Está faltando alguma coisa neste comando... O que será? Descubra no link a seguir.',
        link: 'https://pt-br.reactjs.org/docs/create-a-new-react-app.html#create-react-app',
      },
      {
        answer: 'npx create-react-app',
        rightAnswer: false,
        hint: 'Está faltando alguma coisa neste comando... O que será? Descubra no link a seguir.',
        link: 'https://pt-br.reactjs.org/docs/create-a-new-react-app.html#create-react-app',
      },
    ],
  },
  {
    id: 12,
    modulo: 'front-end',
    bloco: 12,
    question: 'No React, quais propriedades utilizamos, respectivamente, em um elemento "input" e um elemento "label" para associar um ao outro?',
    image: '',
    options: [
      {
        answer: '"name" e "for"',
        rightAnswer: false,
        hint: 'Mmm... Acho que você se confundiu. Descubra a resposta e saiba mais no link a seguir!',
        link: 'https://www.codeproject.com/Tips/1248317/Creating-Labels-for-Input-Elements-in-React',
      },
      {
        answer: '"value" e "id"',
        rightAnswer: false,
        hint: 'Mmm... Acho que você se confundiu. Descubra a resposta e saiba mais no link a seguir!',
        link: 'https://www.codeproject.com/Tips/1248317/Creating-Labels-for-Input-Elements-in-React',
      },
      {
        answer: '"id" e "for"',
        rightAnswer: false,
        hint: 'Quase! Lembre-se que, em JSX, algumas sintaxes são diferentes das do HTML. Descubra a resposta e saiba mais no link a seguir!',
        link: 'https://www.codeproject.com/Tips/1248317/Creating-Labels-for-Input-Elements-in-React',
      },
      {
        answer: '"id" e "htmlFor"',
        rightAnswer: true,
        hint: 'É isso aí! Quer saber mais? Confira no link a seguir!',
        link: 'https://www.codeproject.com/Tips/1248317/Creating-Labels-for-Input-Elements-in-React',
      },
    ]
  },
  {
    id: 13,
    modulo: 'fundamentos',
    bloco: 8,
    question: 'Utilizamos a Higher Order Function ______ para retornar um booleano que indica se todos os elementos do array retornam "true" quando passados para uma callback.',
    image: '',
    options: [
      {
        answer: '.map()',
        rightAnswer: false,
        hint: 'Mmm... Acho que você se confundiu. Descubra a resposta e saiba mais no link a seguir!',
        link: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every',
      },
      {
        answer: '.filter()',
        rightAnswer: false,
        hint: 'Mmm... Acho que você se confundiu. Descubra a resposta e saiba mais no link a seguir!',
        link: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every',
      },
      {
        answer: '.find()',
        rightAnswer: false,
        hint: 'Mmm... Acho que você se confundiu. Descubra a resposta e saiba mais no link a seguir!',
        link: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every',
      },
      {
        answer: '.every()',
        rightAnswer: true,
        hint: 'Corretísssimo! Saiba mais sobre o .every() no link a seguir.',
        link: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every',
      },
    ],
  },
  {
    id: 14,
    modulo: 'fundamentos',
    bloco: 2,
    question: 'O Git é um versionador de arquivos que nos permite guardar nossos arquivos online e alternar entre as diversas versões commitadas',
    image: '',
    options: [
      {
        answer: 'Verdadeiro',
        rightAnswer: false,
        hint: 'Você se confundiu. O Git é um versionador de arquivos local (offline) que nos permite alternar entre as diferentes versões de um repositório. Para trabalhar com versionamentos do git online precisamos de ferramentas externas como o GitHub, o GitLab, o BitBucket ou - até mesmo - um servidor próprio. Quer saber as diferenças entre eles? Confira o vídeo do link a seguir.',
        link: 'https://www.youtube.com/watch?v=E6fK7-O8Ow0',
      },
      {
        answer: 'Falso',
        rightAnswer: true,
        hint: 'Isso mesmo! O Git é um versionador de arquivos local (offline) que nos permite alternar entre as diferentes versões de um repositório. Para trabalhar com versionamentos do git online precisamos de ferramentas externas como o GitHub, o GitLab, o BitBucket ou - até mesmo - um servidor próprio. Quer saber as diferenças entre eles? Confira o vídeo do link a seguir.',
        link: 'https://www.youtube.com/watch?v=E6fK7-O8Ow0',
      },
    ],
  },
  {
    id: 15,
    modulo: 'fundamentos',
    bloco: 9,
    question: 'Você está está programando e, para utilizar o resultado de uma Promise, resolve usar a expressão "await" fora de uma função assíncrona...',
    image: '',
    options: [
      {
        answer: 'Vai dar ruim!',
        rightAnswer: true,
        hint: 'Exatamente! Apesar da "await" servir para experar o resultado de uma Promise, ela apenas atingirá o resultado esperado se utilizada dentro de uma função assíncrona. O vídeo do link a seguir traz uns bons exemplos de como ela funciona.',
        link: 'https://www.youtube.com/watch?v=h0sNAXE1ozo',
      },
      {
        answer: 'Vai dar certo!',
        rightAnswer: false,
        hint: 'Pois é... O nome da expressão confunde a gente mesmo. O código do exemplo retornaria uma Promise, pois a "await" apenas funciona dessa maneira dentro de uma função assíncrona. Assista ao vídeo do link que você irá entender melhor.',
        link: 'https://www.youtube.com/watch?v=h0sNAXE1ozo',
      },
    ],
  },
  {
    id: 16,
    modulo: 'fundamentos',
    bloco: 6,
    question: 'Quanto à propriedade "order" do Flexbox, podemos afirmar que é uma propriedade particular de cada item que - quando atribuída - exibe os itens em ordem crescente. Por padrão, cada item recebe o valor 1 e o item que tiver o valor de -1 é exibido no final',
    image: '',
    options: [
      {
        answer: 'Verdadeiro',
        rightAnswer: false,
        hint: 'O valor padrão de cada item é 0 e aquele que tiver valor -1 tem prioridade sobre os demais. No course da Trybe, tem um vídeo que vai te ajudar a entender isso melhor. Assista-o no link a seguir!',
        link: 'https://app.betrybe.com/course/fundamentals/html-e-css-forms-flexbox-e-responsivo/css-flexbox-parte-2/3d4d2f0a-82a5-4ab1-9257-0a895f78ad22/conteudos/de0e594b-251a-47a7-a641-1c998b71ec38/propriedade-order/d77b1f60-8629-4355-b9a4-54f57b8a995b?use_case=side_bar',
      },
      {
        answer: 'Falso',
        rightAnswer: true,
        hint: 'Mandou bem! Se quiser saber mais detalhes sobre essa propriedade, no course da Trybe tem um vídeo bem bacana sobre isso. Assista-o no link a seguir!',
        link: 'https://app.betrybe.com/course/fundamentals/html-e-css-forms-flexbox-e-responsivo/css-flexbox-parte-2/3d4d2f0a-82a5-4ab1-9257-0a895f78ad22/conteudos/de0e594b-251a-47a7-a641-1c998b71ec38/propriedade-order/d77b1f60-8629-4355-b9a4-54f57b8a995b?use_case=side_bar',
      },
    ],
  },
  {
    id: 17,
    modulo: 'front-end',
    bloco: 5,
    question: 'Sobre localStorage é correto afirmar que:',
    image: '',
    options: [
      {
        answer: 'Possui um tamanho disponível de 10 MB.',
        rightAnswer: false,
        hint: 'Na verdade o localStorage possue um tamanho disponível de 5 MB. Saiba mais em https://medium.com/@desenvolvedormateusbarbosa/qual-%C3%A9-a-diferen%C3%A7a-entre-sessionstorage-localstorage-e-cookies-93b49eea747c',
      },
      {
        answer: 'Possui um tamanho disponível de 5 MB.',
        rightAnswer: true,
        hint: 'Isso mesmo. Saiba mais em https://medium.com/@desenvolvedormateusbarbosa/qual-%C3%A9-a-diferen%C3%A7a-entre-sessionstorage-localstorage-e-cookies-93b49eea747c',
      },
      {
        answer: 'Os dados ficam armazenados até a página ser fechada.',
        rightAnswer: false,
        hint: 'Os dados armazenados no localStorage persistem até serem excluídos explicitamente. Saiba mais em https://medium.com/@desenvolvedormateusbarbosa/qual-%C3%A9-a-diferen%C3%A7a-entre-sessionstorage-localstorage-e-cookies-93b49eea747c',
      },
      {
        answer: 'Os dados são salvos em JSON',
        rightAnswer: false,
        hint: 'Na verdade é preciso converter os dados em uma string antes de serem salvos. Saiba mais em https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage',
      },
    ],
  },
  {
    id: 18,
    modulo: 'front-end',
    bloco: 12,
    question: 'Em um componente de classe do React, se eu quiser utilizar o seu estado num método que eu criei, não preciso "fazer o bind" no "constructor".',
    options: [
      {
        answer: 'É isso aí! O "this" vai estar sempre disponível para fazer referência ao estado.',
        rightAnswer: false,
        hint: 'Opa! Você se enganou. Isso só acontece em métodos herdados do "React.Component", como o "render" e aqueles que pertencem ao seu ciclo de vida. Em um método criado, temos que "bindar"! Tire suas dúvidas de uma vez lendo o texto do link a seguir.',
        link: 'https://medium.com/tableless/https-medium-com-tableless-react-this-bind-so-sei-que-e-assim-73e75f2adbd3',
      },
      {
        answer: 'Nada disso! O React não passa a instância para qualquer método.',
        rightAnswer: true,
        hint: 'É isso aí! Isso só acontece em métodos herdados do "React.Component", como o "render" e aqueles que pertencem ao seu ciclo de vida. Em um método criado, temos que "bindar"! Saiba mais a respeito lendo o texto do link a seguir.',
        link: 'https://medium.com/tableless/https-medium-com-tableless-react-this-bind-so-sei-que-e-assim-73e75f2adbd3',
      },
    ],
  },
  {
    id: 19,
    modulo: 'fundamentos',
    bloco: 1,
    question: 'Qual comando utilizamos para renomear um arquivo através do terminal no Linux?',
    image: '',
    options: [
      {
        answer: 'mv nome_do_arquivo',
        rightAnswer: false,
        hint: 'Opa! Faltou o novo nome. O correto é "mv nome_do_arquivo novo_nome".',
      },
      {
        answer: 'rm nome_do_arquivo novo_nome',
        rightAnswer: false,
        hint: 'O comando rm é usado para ReMover um arquivo. O correto é "mv nome_do_arquivo novo_nome". Este comando também pode ser utilizado para MoVer o arquivo para outro diretório.',
      },
      {
        answer: 'cp nome_do_arquivo',
        rightAnswer: false,
        hint: 'O comando cp é usado para CoPiar um arquivo. O correto é "mv nome_do_arquivo novo_nome". Este comando também pode ser utilizado para MoVer o arquivo para outro diretório.',
      },
      {
        answer: 'mv nome_do_arquivo novo_nome',
        rightAnswer: true,
        hint: 'Correto! Este comando também pode ser utilizado para MoVer o arquivo para outro diretório.',
      },
    ],
  },
  {
    id: 20,
    modulo: 'front-end',
    bloco: 5,
    question: 'Sobre sessionStorage é incorreto afirmar que:',
    image: '',
    options: [
      {
        answer: 'Possui os mesmos métodos que o localStorage.',
        rightAnswer: false,
        hint: 'Opa! Esta alternativa está correta, sim! Confira o link a seguir e saiba mais a respeito.',
        link: 'https://developer.mozilla.org/pt-BR/docs/Web/API/Storage',
      },
      {
        answer: 'Podemos armazenar até 5 MB de dados.',
        rightAnswer: false,
        hint: 'Esta alternativa está correta, sim! Confira o link a seguir e saiba mais a respeito.',
        link: 'https://www.geeksforgeeks.org/localstorage-and-sessionstorage-web-storage-apis/',
      },
      {
        answer: 'Os dados ficam disponíveis se a página for aberta numa nova aba.',
        rightAnswer: true,
        hint: 'Isso mesmo! Esta é a alternativa incorreta. Os dados do sessionStorage ficam disponíveis apenas para a sessão atual. Quando abrimos uma nova aba, criamos uma nova sessão. Confira o link a seguir e saiba mais.',
        link: 'https://developer.mozilla.org/pt-BR/docs/Web/API/Window/sessionStorage',
      },
      {
        answer: 'Os dados são salvos no formato de string.',
        rightAnswer: false,
        hint: 'Esta alternativa está correta, sim! Confira o link a seguir e saiba mais a respeito.',
        link: 'https://developer.mozilla.org/pt-BR/docs/Web/API/Window/sessionStorage',
      },
    ],
  },
  {
    id: 21,
    modulo: 'fundamentos',
    bloco: 5,
    question: 'Imagine que você esta trabalhando em um projeto e, logo após commitar, percebe que escreveu uma mensagem errada ou adicionou algo que não devia. Qual comando utilizaria para remover esse commit?',
    image: '',
    options: [
      {
        answer: 'git undo --last-commit',
        rightAnswer: false,
        hint: 'Este comando não existe. Confira o comando correto no link a seguir.',
        link: 'https://git-scm.com/docs/git-reset/pt_BR',
      },
      {
        answer: 'git reset --soft HEAD^',
        rightAnswer: true,
        hint: 'Isso aí! Com este comando, removemos o último commit da branch atual, mas não descartamos as mudanças no arquivo. Confira outros comandos no link a seguir.',
        link: 'https://git-scm.com/docs/git-reset/pt_BR',
      },
      {
        answer: 'git rm --cached [código-do-lastcommit]',
        rightAnswer: false,
        hint: 'Este comando serve para remover arquivos do repositório sem removê-los do sistema. Confira o comando correto no link a seguir.',
        link: 'https://git-scm.com/docs/git-reset/pt_BR',
      },
      {
        answer: 'git commit --undo-last',
        rightAnswer: false,
        hint: 'Este comando não existe. Confira o comando correto no link a seguir.',
        link: 'https://git-scm.com/docs/git-reset/pt_BR',
      },
    ],
  },
  {
    id: 22,
    modulo: 'front-end',
    bloco: 13,
    question: 'O ______ é o componente que relaciona o caminho de uma URL com a renderização de um componente.',
    image: '',
    options: [
      {
        answer: 'React.Component',
        rightAnswer: false,
        hint: 'React.Component é utilizado para a estruturação de um componente de classe. Saiba mais sobre a resposta correta no seguinte link.',
        link: 'https://reactrouter.com/web/example/route-config',
      },
      {
        answer: 'this.setState()',
        rightAnswer: false,
        hint: 'A função this.setState() é utilizada para atualizar o estado de componente de classe. Saiba mais sobre a resposta correta no seguinte link.',
        link: 'https://reactrouter.com/web/example/route-config',
      },
      {
        answer: 'React.Router',
        rightAnswer: false,
        hint: 'Esse objeto não existe. Talvez você tenha se confundido com o nome da biblioteca React Router, que contém o componente a que estamos nos referindo. Saiba mais sobre a resposta correta no seguinte link.',
        link: 'https://reactrouter.com/web/example/route-config',
      },
      {
        answer: 'Route',
        rightAnswer: true,
        hint: 'Corretíssimo! Confira mais a respeito na documentação do link a seguir.',
        link: 'https://reactrouter.com/web/example/route-config',
      },
    ],
  },
  {
    id: 23,
    modulo: 'fundamentos',
    bloco: 8,
    question: 'Toda HOF recebe ou retornam funções como parâmetros.',
    image: '',
    options: [
      {
        answer: 'Verdadeiro',
        rightAnswer: true,
        hint: 'Isso mesmo! Esta é a definição de uma HOF.',
        link: 'https://devpleno.com/high-order-functions/',
      },
      {
        answer: 'Falso',
        rightAnswer: false,
        hint: 'A definição está certa, sim. Saiba mais no link a seguir.',
        link: 'https://devpleno.com/high-order-functions/',
      },
    ],
  },
  // {
  //   id: 24,
  //   modulo: 'front-end',
  //   bloco: 12,
  //   question: 'O que podemos fazer quando o Evaluator da Trybe no Github está rodando há mais de 40 minutos sem terminar o teste ou quebra inexplicavelmente?',
  //   image: '',
  //   options: [
  //     {
  //       answer: 'Rezar para os jedis da trybe solucionarem o nosso problema',
  //       rightAnswer: false,
  //       hint: 'Além de dar um novo commit para forçar o evaluator a rodar de novo, podemos clicar em "re-run jobs" para forçá-lo a rodar os testes novamente. Lembre-se que se o evaluator ainda estiver rodando e a opção "re-run jobs" não estiver aparecendo, será necessário clicar em "cancel workflow" pra encerrar os teste em andamento.',
  //     },
  //     {
  //       answer: 'Reclamar no Forms que o evaluator é um lixo',
  //       rightAnswer: false,
  //       hint: 'Além de dar um novo commit para forçar o evaluator a rodar de novo, podemos clicar em "re-run jobs" para forçá-lo a rodar os testes novamente. Lembre-se que se o evaluator ainda estiver rodando e a opção "re-run jobs" não estiver aparecendo, será necessário clicar em "cancel workflow" pra encerrar os teste em andamento.',
  //     },
  //     {
  //       answer: 'Na tela do evaluator, clicar em re-run jobs pra forçar o evaluator a rodar as tarefas novamente',
  //       rightAnswer: true,
  //       hint: 'Genial! Lembre-se de que se o evaluator ainda estiver rodando e a opção "re-run jobs" não estiver aparecendo, será necessário clicar em "cancel workflow" pra encerrar os teste em andamento.',
  //     },
  //     {
  //       answer: 'Abrir uma tread no Slack para reclamar que o evaluator está bugado',
  //       rightAnswer: false,
  //       hint: 'Além de dar um novo commit para forçar o evaluator a rodar de novo, podemos clicar em "re-run jobs" para forçá-lo a rodar os testes novamente. Lembre-se que se o evaluator ainda estiver rodando e a opção "re-run jobs" não estiver aparecendo, será necessário clicar em "cancel workflow" pra encerrar os teste em andamento.',
  //     },
  //   ],
  // },
  {
    id: 25,
    modulo: 'front-end',
    bloco: 5,
    question: 'Com relação as Metodologias Ágeis, em uma Daily Meeting os integrantes do time devem basicamente responder quais perguntas?',
    image: '',
    options: [
      {
        answer: 'Como esta seu desenvolvimento? Tem alguma reclamação? Vai poder participar do dia?',
        rightAnswer: false,
        hint: 'Confira mais sobre a resposta correta no link a seguir.',
        link: 'https://app.betrybe.com/course/front-end/metodologias-ageis/metodologias-ageis/6a54cb80-ec79-419d-a6e5-7f9e4aec79da/conteudos/34843158-2685-416e-850a-0952c6ec129b/scrum/d504f8ef-bb7f-450a-a5a2-7793b7e559ab?use_case=side_bar/git-reset/pt_BR',
      },
      {
        answer: 'O que voce fez ontem? Como foi seu dia? O que sera desenvolvido durante a Sprint?',
        rightAnswer: false,
        hint: 'Confira mais sobre a resposta correta no link a seguir.',
        link: 'https://app.betrybe.com/course/front-end/metodologias-ageis/metodologias-ageis/6a54cb80-ec79-419d-a6e5-7f9e4aec79da/conteudos/34843158-2685-416e-850a-0952c6ec129b/scrum/d504f8ef-bb7f-450a-a5a2-7793b7e559ab?use_case=side_bar/git-reset/pt_BR',
      },
      {
        answer: 'Há algum impedimento no seu caminho? Há algum bug para ser resolvido? Como será seu dia hoje?',
        rightAnswer: false,
        hint: 'Confira mais sobre a resposta correta no link a seguir.',
        link: 'https://app.betrybe.com/course/front-end/metodologias-ageis/metodologias-ageis/6a54cb80-ec79-419d-a6e5-7f9e4aec79da/conteudos/34843158-2685-416e-850a-0952c6ec129b/scrum/d504f8ef-bb7f-450a-a5a2-7793b7e559ab?use_case=side_bar/git-reset/pt_BR',
      },
      {
        answer: 'O que você fez ontem? O que fará hoje? Há algum impedimento no seu caminho?',
        rightAnswer: true,
        hint: 'Foi "ágil" na resposta, hein? Mas há sempre mais o que aprender no nosso link maroto com dicas para ter DMs mais eficientes. Ah! Lembre-se: não é necessário esperá-las para reportar impedimentos.',
        link: 'https://blog.adaptworks.com.br/2016/03/6-dicas-para-uma-daily-scrum-meeting-efetiva-parte-i/',
      },
    ],
  },
  {
    id: 26,
    modulo: 'front-end',
    bloco: 14,
    question: 'Sobre as metodologias ágeis e Scrum podemos afirmar que:',
    image: '',
    options: [
      {
        answer: 'São executados reuniões para acompanhamento do projeto uma vez por semana - week meating (WM)',
        rightAnswer: false,
        hint: 'Na verdade são executados reuniões todos os dias - daily meeting (DM). Saiba mais no link a seguir.',
        link: 'https://www.desenvolvimentoagil.com.br/scrum/daily_scrum',
      },
      {
        answer: 'Sprint é o nome dado para o ciclo total do projeto',
        rightAnswer: false,
        hint: 'Sprint é o nome dado para cada ciclo do projeto. Saiba mais no link a seguir.',
        link: 'https://www.treasy.com.br/blog/scrum/',
      },
      {
        answer: 'O Scrum Master é responsável por ajudar a todos os envolvidos a entender e abraçar os valores, princípios e práticas do Scrum.',
        rightAnswer: true,
        hint: 'Isso mesmo! Mas há vários outros detalhes que você pode conhecer melhor no link a seguir.',
        link: 'https://www.treasy.com.br/blog/scrum/',
      },
      {
        answer: 'Kanban é que é uma metodologia ágil, não o Scrum.',
        rightAnswer: false,
        hint: 'Às vezes, a gente se confunde. Mas Scrum é o framework/metodologia e Kanban é uma ferramenta para controlar fluxos de trabalho. Ambos podem ser utilizados em conjunto. Saiba mais no seguinte link.',
        link: 'https://artia.com/blog/scrum-vs-kanban-vs-lean/',
      },
    ],
  },
];

module.exports = exercises;

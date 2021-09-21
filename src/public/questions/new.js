const selectType = document.querySelector('#type');

const newAnswer = (index) => {
  const label = document.createElement('label');
  label.innerText = 'Resposta: ';

  const answer = document.createElement('input');
  answer.name = `answers[${index}][answer]`;
  answer.type = 'text';

  label.appendChild(answer);

  return label;
}

const newRight = (index) => {
  const label = document.createElement('label');
  label.innerText = 'Resposta: ';

  const select = document.createElement('select');
  select.name = `answers[${index}][isRight]`;

  const optionTrue = document.createElement('option');
  optionTrue.value = 'true';
  optionTrue.innerText = 'Correta';

  const optionFalse = document.createElement('option');
  optionFalse.value = 'false';
  optionFalse.innerText = 'Errada';

  select.appendChild(optionTrue);
  select.appendChild(optionFalse);

  label.appendChild(select);

  return label;
}

const newHint = (index) => {
  const label = document.createElement('label');
  label.innerText = 'Dica: ';

  const hint = document.createElement('textarea');
  hint.name = `answers[${index}][hint]`;

  label.appendChild(hint);

  return label;
}

const newLink = (index) => {
  const label = document.createElement('label');
  label.innerText = 'Link: ';

  const link = document.createElement('input');
  link.name = `answers[${index}][link]`;
  link.type = 'text';

  label.appendChild(link);

  return label;
}

const createAnswers = (qtt) => {
  const field = document.querySelector('#answers');

  field.innerHTML = '';

  for(let index = 0; index < qtt; index += 1) {
    const label = document.createElement('label');
    label.innerText = `Resposta - ${index + 1}`;
    label.className = 'answer-field';

    label.appendChild(newAnswer(index));
    label.appendChild(newRight(index));
    label.appendChild(newHint(index));
    label.appendChild(newLink(index));

    field.appendChild(label);
  }
};

selectType.addEventListener('change', () => {
  const type = document.querySelector('#type').value;

  if(type === 'multi-choice') createAnswers(4);
  else createAnswers(2);

});

createAnswers(4);
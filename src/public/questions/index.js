const filterOptions = {
  typeOptions: [
    { value: '', text: 'Escolha um tipo' },
    { value: 'multi-choice', text: 'Multipla escolha' },
    { value: 'boolean', text: 'Verdadeiro ou falso' },
  ],
  moduleOptions: [
    { value: '', text: 'Escolha um modulo' },
    { value: 'efff8570-5cb7-4090-bd58-46f4b5a335a6', text: 'Fundamentos' },
    { value: 'a5df9455-4d7f-4f52-94cb-eb830b416cad', text: 'Front-end' },
    { value: 'afdd5680-b811-4aeb-b229-6e7f3351bd01', text: 'Back-end' },
    { value: 'f3ec9930-d2e3-4423-88e8-a28c6aa0265a', text: 'Ciência da computação' },
  ],
  difficultyOptions: [
    { value: '', text: 'Selecione uma dificuldade' },
    { value: '1', text: 'Fácil' },
    { value: '2', text: 'Médio' },
    { value: '3', text: 'Difícil' },
  ],
}

const filtersButtons = document.querySelector('#filtersButton');
const optionalFilters = document.querySelector('#optionalFilters');
const url = window.location.href;
let filtersIsOpen = false;


const createAndAppendOptions = (select, values) => {
  const options = values.map((option) => {
    const newOption = document.createElement('option');
    newOption.value = option.value;
    newOption.innerText = option.text;
    return newOption;
  })

  options.forEach((option) => select.appendChild(option));

  return select;
}


const newIdFilter = () => {
  const label = document.createElement('label');
  label.innerText = 'Id: ';

  const input = document.createElement('input');
  input.name = 'id';

  label.appendChild(input);

  return label;
}

const newTypeFilter = () => {
  const label = document.createElement('label');
  label.innerText = 'Tipo: ';

  let select = document.createElement('select');
  select.name = 'type'

  select = createAndAppendOptions(select, filterOptions.typeOptions);

  label.appendChild(select);
  
  return label;
}

const newModuleFilter = () => {
  const label = document.createElement('label');
  label.innerText = 'Modulo: ';

  let select = document.createElement('select');
  select.name = 'module_id'

  select = createAndAppendOptions(select, filterOptions.moduleOptions);

  label.appendChild(select);
  
  return label;
}

const newBlockFilter = () => {
  const label = document.createElement('label');
  label.innerText = 'Bloco: ';

  const input = document.createElement('input');
  input.name = 'block';
  input.type = 'number';

  label.appendChild(input);
  
  return label;
}

const newDifficultyFilter = () => {
  const label = document.createElement('label');
  label.innerText = 'Dificuldade: ';

  let select = document.createElement('select');
  select.name = 'difficulty'

  select = createAndAppendOptions(select, filterOptions.difficultyOptions);

  label.appendChild(select);
  
  return label;
}



const createFilters = () => {
  const idFilter = newIdFilter();
  const typeFilter = newTypeFilter();
  const blockFilter = newBlockFilter();
  const moduleFilter = newModuleFilter();
  const difficultyFilter = newDifficultyFilter();

  optionalFilters.appendChild(idFilter);
  optionalFilters.appendChild(typeFilter);
  optionalFilters.appendChild(blockFilter);
  optionalFilters.appendChild(moduleFilter);
  optionalFilters.appendChild(difficultyFilter);
};


filtersButtons.addEventListener('click', () => {
  if (!filtersIsOpen) {
    createFilters();
    filtersIsOpen = true;
  } else {
    optionalFilters.innerHTML = '';
    filtersIsOpen = false;
  }
});

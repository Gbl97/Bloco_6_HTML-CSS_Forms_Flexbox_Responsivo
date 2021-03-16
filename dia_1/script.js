function createStates(){
    const states = ['AC - Acre',
    'AL - Alagoas',
    'AP - Amapá',
    'AM - Amazonas',
    'BA - Bahia',
    'CE - Ceará',
    'DF - Distrito Federal',
    'ES - Espírito Santo',
    'GO - Goías',
    'MA - Maranhão',
    'MT - Mato Grosso',
    'MS - Mato Grosso do Sul',
    'MG - Minas Gerais',
    'PA - Pará',
    'PB - Paraíba',
    'PR - Paraná',
    'PE - Pernambuco',
    'PI - Piauí',
    'RJ - Rio de Janeiro',
    'RN - Rio Grande do Norte',
    'RS - Rio Grande do Sul',
    'RO - Rondônia',
    'RR - Roraíma',
    'SC - Santa Catarina',
    'SP - São Paulo',
    'SE - Sergipe',
    'TO - Tocantins'
    ];
    const getSelect = document.querySelector('#estados');

    for (let index = 0; index < states.length; index += 1) {
        const statesArray = states[index];
        const optionItem = document.createElement('option');
        optionItem.innerHTML = statesArray;
        optionItem.originalText = statesArray;

        getSelect.appendChild(optionItem);
    };
};
createStates();

function AnalyzingDate() {
  const getData = document.getElementById('data');
  let data = getData.value;
  const userData = ValidatingDate(data);

  if (!userData && data.length) {
      getData.value = '';
      alert('data invalida');
      return false;
  }
  return userData;
};

function ValidatingDate(data) {
    let arrayData = data.split('/');
    let dia = parseInt(arrayData[0]);
    let mes = parseInt(arrayData[1]);
    let ano = parseInt(arrayData[2]);

    if ((dia > 0 && dia <= 31) && (mes > 0 && mes <= 12) && (ano > 0 && ano.length === 4)) {
       return true;
    }
    return false;
};

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

function ValidatingDate(data) {
    if (data.indexOf('/') === 2 || data.indexOf('/') === 5) {
     const dia = data.substr(0, 2);
     console.log(dia);
     const mes = data.substr(3, 2);
     console.log(mes);
     const ano = data.substr(6);
     console.log(ano);

     if ((dia > 0 && dia <= 31) && (mes > 0 && mes <= 12) && (ano > 0 && ano.length === 4)) {
        return true;
     }
     return false;
    }
};

function AnalyzingDate() {
    const getData = document.querySelector('#data-text');
    let data = getData.value;
    const userData = ValidatingDate(data);
  
    if (!userData && data.length) {
        getData.value = '';
        alert('data invalida');
        return false;
    }
    return userData;
  };

// Requisito 3 - Interropendo o fluxo automático do Form
function checkingForms(event) {
  event.preventDefault();
  const getForms = document.querySelectorAll('input');

  for (let index = 0; index < getForms.length; index += 1) {
    if (getForms[index].type === 'radio' && !getForms[index].checked) {
        continue;
    }
    const userForms = getForms[index].value;
    const userData = document.querySelector('.formulario');
    if (AnalyzingDate()) {
        const div = document.createElement('div');
        div.className = 'div-forms';
        div.innerHTML = userForms;
        userData.appendChild(div);
    }
  }
}
const btnSubmit = document.querySelector('.btn-envio');
btnSubmit.addEventListener('click',checkingForms);

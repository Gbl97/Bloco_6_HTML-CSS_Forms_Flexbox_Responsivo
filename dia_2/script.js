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
    const getData = document.querySelector('#data-text');
    let data = getData.value;
    let userData = moment(data, "DD/MM/YYYY", true);
    if (!userData.isValid() && data.length) {
        getData.value = '';
        alert('data invalida');
        return false;
    }

  };

// Requisito 3 - Interropendo o fluxo automático do For

// Exemplo de JavaScript inicial para desativar o envio de formulários se houver campos inválidos
(function () {
  'use strict'

  // Busque todos os formulários aos quais queremos aplicar estilos de validação de Bootstrap personalizados
  var forms = document.querySelectorAll('.needs-validation')

  // Faça um loop sobre eles e evite o envio
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
          AnalyzingDate()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

//Requisito 4
const btnClear = document.querySelector('.btn-limpar');
function clearForms() {
    const userForms = document.querySelectorAll('input');
    const textArea = document.querySelector('#curriculo');

    for (let index = 0; index < userForms.length; index += 1) {
       const inputForms = userForms[index];
       inputForms.value = '';
       textArea.value = '';
    }
}
btnClear.addEventListener('click', clearForms);



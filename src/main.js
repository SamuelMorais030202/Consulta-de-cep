import Swal from 'sweetalert2'

const btnCep = document.querySelector('button');
const cep = document.querySelector('#cepNumber');
const city = document.querySelector('#result');

btnCep.addEventListener('click', async () => {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`);
    const data = await response.json();
    console.log(data)
    city.innerHTML = `${data.localidade} - ${data.uf}`;
  } catch (error) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Insira um cep válido',
      })
  }
})
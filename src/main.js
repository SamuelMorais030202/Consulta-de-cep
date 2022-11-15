import Swal from 'sweetalert2'
import './style.css';

const btnCep = document.querySelector('button');
const cep = document.querySelector('#cepNumber');
const city = document.querySelector('#result');

const ERROR = () => {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Insira um cep válido!',
  })
}

btnCep.addEventListener('click', async () => {
  try {
    const cityValue = cep.value;
    const API_CITY = await fetch(`https://viacep.com.br/ws/${cityValue}/json/`);
    const city_cep = await API_CITY.json();
    if (city_cep.localidade === undefined) {
      ERROR()
    } else {
      city.innerHTML = `${city_cep.localidade} - ${city_cep.uf}`;
    }
  } catch (error) {
    ERROR();
  }
});
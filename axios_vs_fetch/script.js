//usando fetch  
// Exemplo de requisição GET usando fetch
// Certifique-se de que o fetch está disponível no ambiente onde você está executando este código
// Você pode usar este código em um navegador moderno ou em um ambiente Node.js com suporte a fetch

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => (response.json()))
//     .then((data) => {
//         console.log(data);
//     })

//usando axios

import axios from 'axios';
// Certifique-se de instalar o axios antes de usar este código
// Você pode usar via cdn ou instalar via npm/yarn
// Via CDN:
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// Via npm ou yarn:
// npm install axios
// ou
// yarn add axios
// Exemplo de requisição GET usando axios

axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.error('Erro ao buscar usuários:', error);
    });
- Fundamentos de programação assíncrona

Programação assíncrona é o ato de executar uma tarefa em "segundo plano", sem nosso controle direto disso. 
Sem explicitamente trabalhar com threads e coordená-las, o assíncrono no JavaScript vai separar seu código em duas partes: coisas que rodam agora, coisas que vão rodar depois de algo acontecer
- Como usar em Javascript

```javascript
function getUser(userId) {
 const userData = fetch(`https://api.com/api/user/${userId}`)
   .then(response => response.json())
   .then(data => console.log(data.name))
   .catch(error => console.log(error))
   .finally(() => /*{ aviso de fim de carregamento }*/)
}

getUser(1); // "Nome Sobrenome"
```

1 - Async: Essa palavra pode ser usada ao criar uma função convencional. 
Quando adicionamos esse identificador na criação desta função, nós definimos que ela será uma função assíncrona,
e o melhor, retornará uma promise! Quando usarmos a expressão return estaremos, na realidade, resolvendo uma promise.

2 - Await: Essa palavra será usada com o objetivo de esperar a resolução de uma função assíncrona.
Se houver uma série de funções assíncronas, a expressão await definirá que o código só terá sequência quando 
a função anterior for resolvida, só poderemos utilizar a expressão await em uma função que já for assíncrona, ou seja, que possuir o identificador async em seu início.

Temos um exemplo abaixo do uso e async e await:

```javascript
async function getUser(userId) {
 let response = await fetch(`https://api.com/api/user/${userId}`);
 let userData = await response.json();
 return userData.name; // nas linhas de return não é necessário usar await
}
```

- Qual a importância do assunto para o desenvolvimento do seu projeto em React Native
O React Native possui uma API nativa para escrever módulos de ponte que exportam funções para JavaScript. Se essas funções retornassem promessas, poderíamos usá-las como se fossem funções assíncronas!

Acontece que o React Native é arquitetonicamente adequado para promessas. Sua ponte nativa de JavaScript é assíncrona, então os desenvolvedores já estão usando APIs assíncronas; eles não precisam converter código síncrono em código assíncrono ao alternar para promessas. E os autores de módulos nativos já estão usando callbacks para enviar valores de retorno do nativo para o JavaScript; isso é muito semelhante aos retornos de chamada que resolvem e rejeitam promessas.
E no nosso projeto será para realizar chamadas para a API e pegar dados da tabela sem bloquear e travar o usuário.

Bibliografia:

https://youtu.be/q28lfkBd9F4

https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar

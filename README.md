# Chuck "Joke" Norris #

[![Netlify Status](https://api.netlify.com/api/v1/badges/edef742c-047a-47f4-878f-6ec6d4247262/deploy-status)](https://app.netlify.com/sites/chuck-joke-norris/deploys)

Selecione uma categoria e veja de forma randômica piadas sobre o Chuck Norris.

Clique em [Chuck "Joke" Norris](https://chuck-joke-norris.netlify.com) para acessar o projeto hospedado.

## 🧰 Ferramentas e Tecnologias

O projeto foi construído com as seguintes tecnologioas:

* [React](https://pt-br.reactjs.org/) -  É o core da aplicação;
* [Redux](https://redux.js.org/) - Para gerenciamento de estado;
* [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) - Para estruturação de componentes
* [Styled Components](https://www.styled-components.com/docs) - Para estilização de componentes
* [Jest and Enzyme](https://medium.com/@rossbulat/testing-in-react-with-jest-and-enzyme-an-introduction-99ce047dfcf8) - Para testar a aplicação
* [Storybook](https://storybook.js.org/) - Para gerenciar biblioteca de compomentes
* [Ducks Pattern](https://blog.rocketseat.com.br/estrutura-redux-escalavel-com-ducks/) - Para estruturação do Redux
* [Eslint](https://eslint.org/), [Prettier](https://prettier.io/), [Stylelint](https://stylelint.io/), [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react) - Para padronização de código

## ⚙️ Instalação

Rode o comando `yarn` ou `npm install` para instalar as dependências do projeto.

## 🔨Rodar projeto

Use os comandos abaixo para rodar o projeto.


| command              | description                                                                                                                                  |
| -------------------- | ------------------------------------------------|
| `yarn start` ou `npm run start`        | Abre o servidor na porta `localhost:4000`                                                                                                    |
| `yarn buld:dev` ou `npm run build:dev`    | Gera build com arquivos em modo de desenvolvimento                                                                                 |
| `yar build:prod` ou `npm run build:prod`   | Gera build para produção com arquivos minificatos e otimizados                                                                               |                                                                        |

## 🎨 Storybook

O [Storybook](https://storybook.js.org/) é uma biblioteca dos componentes que podem ser usados para o desenvolvimento.


| command              | description                                                                                                                                  |
| -------------------- | ------------------------------------------------|
| `yarn storybook` ou `npm run storybook`        | Abre o servidor na porta `localhost:9001`                                                                                                    |

## ✅ Testes

Os testes são realizados com [Jest](https://jestjs.io/) e [Enzime](https://airbnb.io/enzyme/) e podem ser realizados da seguinte forma:


| command              | description                                                                                                                                  |
| -------------------- | ------------------------------------------------|
| `yarn test` ou `npm run test`        | Rodas os testes configurados                                                                                                    |
| `yarn test:watch` ou `npm run test:watch`        | Rodas os testes em modo assistido                                                                                                    |

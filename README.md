# Sobre

<h1 aling="center">Dotlib Test Front end</h1

<p>Teste técnico para vaga de front-end jr</p>
<p>A tarefa é desenvolver uma aplicação em React para um Guia de Bulário Eletrônico, que se conecta a uma FakeAPI utilizando o json-server, com o objetivo de exibir uma lista e permitir consultas sobre bulas de medicamentos.</p>

<p>
A aplicação possui uma consulta por nome do medicamento ou laboratório farmacêutico e apresentar os resultados em uma listagem </br>
É ordenado por data de publicação do medicamento </br>
Possui uma paginação de dez em dez itens para cada página </br>
E foi lido por meio de uma api REST disponibilizada</p>

# Desktop

<p aling="center">
    
  <img alt="Cover" src=".github/desktop.png">
</p>

# Mobile

<p aling="center">
  <img alt="Cover" src=".github/mobile.png">
</p>

## 🧪 Technologies

Este Projeto foi desenvolvido usando seguintes tecnolias:

- [ReactJS](https://reactjs.org)
- [Vite](https://vitejs.dev/)
- [Tailwind Css](https://tailwindcss.com)
- [phosphor icon](https://phosphoricons.com/)
- [date-fns](https://date-fns.org/)
- [Prettier](https://prettier.io/)

## 🚀 Getting started

Clone o projeto pare ter acessos dos arquivos.

```bash
git clone

cd dotlib-test-front
```

Execute este comando para instalar as dependências.

```bash
npm install

npm run dev

npm run backend
```

### Docker

Para criar a imagem do Docker

```bash
docker build -t dotlib-test-frontend .

docker build -t dotlib-backend .
```

Para executar a imagem local

```bash
docker run -dp 127.0.0.1:8080:8080 dotlib-test-frontend

docker run -dp 127.0.0.1:3000:3000 dotlib-backend
```

## 🔖 Layout

Você pode visualiza os projetos pelos links abaixo:

- [Live Preview](https://dotlib-bula.vercel.app/)

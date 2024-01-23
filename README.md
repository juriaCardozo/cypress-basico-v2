# Testes automatizados com Cypress - Básico

## O que foi aprendido

Durante o curso de testes automatizados com Cypress (básico), foi ensinado:

- Como configurar um projeto Cypress do zero
- Como visitar páginas locais e remotas
- Como lidar com os elementos mais comuns encontrados em aplicações web
- Como testar _upload_ de arquivos
- Como realizar as mais diversas verificações de resultados esperados
- Como criar comandos customizados
- Como lidar com links que abrem em outra aba do navegador
- Como rodar testes simulando as dimensões de um dispositivo móvel
- Como resolver os mesmos problemas de diferentes formas, conhecendo a [API do Cypress](https://docs.cypress.io/api/table-of-contents)
- Como executar os testes em um _pipeline_ de integração contínua sempre que mudanças ocorrerem no código da aplicação (ou dos testes)
- Como criar uma documentação mínima para seu projeto de testes automatizados

## Pré-Requisitos

Para rodar este projeto, é preciso:
 * git
 * npm

 ## Instalando as dependências

Para instalar e executar o projeto deve-se: 
* Clone o repositório
* Abra o terminal na pasta do projeto
* Na raiz do projeto, execute o comando "npm install cypress@9.5.1 --save-dev" (ou npm i cypress@9.5.1 -D para a versão curta)


 ## Passos para rodar os testes

Para rodar os testes: 

* Execute o comando "npm run cy:open" no terminal para abrir o projeto no Cypress
* Execute o comando "npm run cy:run" no terminal para abrir o projeto em modo *headless*
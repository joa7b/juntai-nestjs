# juntai-nestjs

## Descrição

A Juntai API é uma aplicação robusta construída com Node.js, utilizando o framework NestJS. O banco de dados é gerenciado por MySQL, com Sequelize atuando como ORM. A arquitetura segue os princípios da Clean Architecture, proporcionando escalabilidade e organização modular do código. Testes automatizados, implementados com Jest, garantem a estabilidade e confiabilidade do sistema. A autenticação JWT (JSON Web Token) é adotada para controlar o acesso às rotas privadas da API.

## Tecnologias Utilizadas

- **Node.js 18.x.x**
- **NestJS**
- **MySQL**
- **Sequelize**

## Princípios de Clean Architecture

A estrutura da Juntai API adere aos princípios da Clean Architecture, promovendo uma organização clara e modular do código. Essa abordagem facilita a manutenção e evolução do sistema ao longo do tempo, contribuindo para um desenvolvimento mais sustentável.

## Testes Automatizados com Jest

A estabilidade da aplicação é mantida através de testes automatizados implementados com Jest. Essa prática auxilia na detecção precoce de problemas e assegura que alterações no código não resultem em regressões indesejadas. Os testes são uma parte essencial do processo de desenvolvimento, garantindo um código confiável e de alta qualidade.

## Autenticação JWT

A API RESTful utiliza autenticação JWT para controlar o acesso às suas rotas privadas. A implementação do JWT oferece uma solução segura e eficiente para gerenciar a autenticação e autorização de usuários na aplicação, garantindo a integridade e segurança das informações.

## Como Iniciar

1. **Clone o repositório:** `git clone https://github.com/joa7b/juntai-nestjs.git`.
2. **Instale as dependências:** `npm install`.
3. **Configure as variáveis de ambiente, se necessário.**
4. **Iniciando serviços definidos no docker-compose**  `docker-compose up -d`.
5. **Execute as migrações do banco de dados:** `npm run db:setup` e `npm run db:setup:test`.
6. **Execute as seeds para popular o banco de dados** `npm run db:seed:all`.
7. **Execute os testes automatizados** `npm run test`.
8. **Inicie o servidor:** `npm run start`.

## Contato

Para mais informações ou suporte, entre em contato:

- Email: joa7@protonmail.com

# Projeto Backend Simples

Este projeto é uma aplicação backend simples construída com TypeScript, Express, Prisma e PostgreSQL. Ele fornece funcionalidades básicas de CRUD (Criar, Ler, Atualizar, Deletar) para gerenciar uma lista de usuários.

## Modelo de Dados

O modelo de usuário possui os seguintes campos:

```prisma
model User {
   id          Int      @id @default(autoincrement())
   username    String
   email       String   @unique
   dateOfBirth DateTime
}
```

## Rotas Disponíveis

- `POST /users` - Criar um novo usuário
- `GET /users/:id` - Buscar um usuário pelo ID
- `PUT /users/:id` - Atualizar um usuário pelo ID
- `DELETE /users/:id` - Deletar um usuário pelo ID

## Tecnologias Utilizadas

- TypeScript
- Express
- Prisma
- PostgreSQL

## Tutorial: Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 14 ou superior)
- PostgreSQL (versão 12 ou superior)

### Passos para rodar o projeto

1. Clone o repositório:
    ```bash
    git clone <repository-url>
    cd simple-backend
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Configure o banco de dados PostgreSQL e atualize a string de conexão no arquivo `.env`.

4. Execute as migrações do Prisma para criar as tabelas:
    ```bash
    npx prisma migrate dev --name init
    ```

5. (Opcional) Gere o cliente Prisma:
    ```bash
    npx prisma generate
    ```

6. Rode o seed para popular o banco de dados:
    ```bash
    npm run seed
    ```

7. Inicie a aplicação:
    ```bash
    npm start
    ```

A API estará disponível em `http://localhost:3000`.

## Licença

Este projeto está licenciado sob a Licença MIT.

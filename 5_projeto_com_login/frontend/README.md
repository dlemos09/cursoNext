# Sistema de Tarefas com Login via GitHub

Este projeto é uma aplicação frontend para gerenciamento de tarefas, onde o acesso é realizado através de autenticação com o GitHub. O objetivo é oferecer uma solução prática para criar, visualizar e gerenciar tarefas pessoais de forma segura.

## Funcionalidades

- Login utilizando a conta do GitHub (OAuth)
- Criação, edição e exclusão de tarefas
- Listagem de tarefas do usuário autenticado
- Interface responsiva e intuitiva

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/)
- [NextAuth.js](https://next-auth.js.org/) (para autenticação com GitHub)

## Como rodar o projeto

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```
2. Instale as dependências:
    ```bash
    npm install
    ```
3. Configure as variáveis de ambiente para o OAuth do GitHub (consulte o arquivo `.env.example`).
4. Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

## Estrutura de Pastas

- `/pages` - Páginas da aplicação
- `/components` - Componentes reutilizáveis
- `/services` - Serviços de API
- `/lib` - Configurações e utilitários de autenticação

## Contribuição

Contribuições são bem-vindas! Abra uma issue ou envie um pull request.

## Licença

Este projeto está licenciado sob a licença MIT.
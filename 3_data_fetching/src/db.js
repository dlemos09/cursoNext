import { PrismaClient } from "@/generated/prisma"; // ou relativo: "../../generated/prisma"
// Importa o Prisma Client gerado pelo Prisma, que é usado para interagir com o banco de dados.
// O caminho pode variar dependendo da estrutura do seu projeto e onde o Prisma Client foi gerado.
// Certifique-se de que o Prisma Client foi gerado corretamente com o comando `npx prisma generate` antes de usar este arquivo.
export const db = new PrismaClient();
// O Prisma Client é uma biblioteca de acesso a banco de dados que permite interagir com o banco de dados usando uma API segura e tipada.
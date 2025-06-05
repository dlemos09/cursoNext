import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

export async function createUser(data: Omit<User, "id">): Promise<User> {
  return prisma.user.create({ data });
}

export async function getUser(id: number): Promise<User | null> {
  return prisma.user.findUnique({ where: { id } });
}

export async function updateUser(id: number, data: Partial<Omit<User, "id">>): Promise<User> {
  return prisma.user.update({ where: { id }, data });
}

export async function deleteUser(id: number): Promise<User> {
  return prisma.user.delete({ where: { id } });
}

export async function getAllUsers(): Promise<User[]> {
  return prisma.user.findMany();
}

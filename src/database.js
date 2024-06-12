/* Importa, cria um cliente do prisma e exporta esse cliente para que possamos utiliza-lo  */
import pkg from '@prisma/client';

const { PrismaClient } = pkg;

export const prisma = new PrismaClient();
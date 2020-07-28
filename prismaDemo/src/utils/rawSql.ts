import { PrismaClient } from '@prisma/client';

export const rawSQLQuery = (prisma: PrismaClient) => {
  return prisma.queryRaw('SELECT * FROM "Company";');
};

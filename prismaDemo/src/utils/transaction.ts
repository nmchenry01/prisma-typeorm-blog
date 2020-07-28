import { PrismaClient } from '@prisma/client';

export const experimentalTransaction = async (prisma: PrismaClient) => {
  const createCompany = prisma.company.create({ data: { name: 'Umbrella' } });

  const createUser = prisma.customer.create({
    data: { username: 'User5', email: 'User5@gmail.com' },
  });

  return prisma.transaction([createCompany, createUser]);
};

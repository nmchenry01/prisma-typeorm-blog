import { PrismaClient } from '@prisma/client';

// Use experimental bulk transaction (as opposed to nested writes)
export const experimentalTransaction = async (prisma: PrismaClient) => {
  const createCompany = prisma.company.create({ data: { name: 'Umbrella' } });

  const createUser = prisma.customer.create({
    data: { username: 'User5', email: 'User5@gmail.com' },
  });

  return prisma.transaction([createCompany, createUser]);
};

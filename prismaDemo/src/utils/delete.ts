import { PrismaClient } from '@prisma/client';

export const deleteCustomer = async (prisma: PrismaClient) => {
  return prisma.customer.delete({
    where: {
      username: 'User4',
    },
  });
};

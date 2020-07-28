import { PrismaClient } from '@prisma/client';

// Delete customer
export const deleteCustomer = async (prisma: PrismaClient) => {
  return prisma.customer.delete({
    where: {
      username: 'User4',
    },
  });
};

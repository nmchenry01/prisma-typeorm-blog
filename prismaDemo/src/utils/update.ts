import { PrismaClient } from '@prisma/client';

// Update the product description for printers
export const updateProductDescription = async (prisma: PrismaClient) => {
  return prisma.product.update({
    where: {
      name: 'Printer',
    },
    data: {
      description: 'It works sometimes',
    },
  });
};

import { PrismaClient } from '@prisma/client';

export const findAllCustomers = async (prisma: PrismaClient) => {
  return prisma.customer.findMany({
    include: {
      products: true,
    },
  });
};

export const findCompanyByName = async (prisma: PrismaClient) => {
  return prisma.company.findOne({
    where: {
      name: 'Globex',
    },
  });
};

export const findCustomerUsernamesForCompany = async (prisma: PrismaClient) => {
  return prisma.customer.findMany({
    select: {
      username: true,
    },
    where: {
      products: {
        some: {
          company: { name: 'Acme' },
        },
      },
    },
  });
};

export const findCompaniesThatMakeCarsOrPrinters = async (
  prisma: PrismaClient,
) => {
  return prisma.company.findMany({
    where: {
      OR: [
        {
          products: {
            some: {
              name: 'Car',
            },
          },
        },
        {
          products: {
            some: {
              name: 'Printer',
            },
          },
        },
      ],
    },
  });
};

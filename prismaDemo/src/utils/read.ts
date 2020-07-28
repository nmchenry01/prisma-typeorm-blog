import { PrismaClient } from '@prisma/client';

// Simple find all statement
export const findAllCustomers = async (prisma: PrismaClient) => {
  return prisma.customer.findMany({
    include: {
      products: true,
    },
  });
};

// Find company by name
export const findCompanyByName = async (prisma: PrismaClient) => {
  return prisma.company.findOne({
    where: {
      name: 'Globex',
    },
  });
};

// Find customers for each company, limit output to just username
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

// Find companies that make cars or printers
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

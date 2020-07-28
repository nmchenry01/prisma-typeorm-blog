import { PrismaClient } from '@prisma/client';

export const createCompanies = async (prisma: PrismaClient) => {
  await prisma.company.create({
    data: {
      name: 'Acme',
    },
  });

  await prisma.company.create({
    data: {
      name: 'Globex',
    },
  });

  await prisma.company.create({
    data: {
      name: 'Initech',
    },
  });
};

export const createProducts = async (prisma: PrismaClient) => {
  await prisma.product.create({
    data: {
      name: 'Dynamite',
      description: 'It goes "boom"',
      company: {
        connect: {
          name: 'Acme',
        },
      },
    },
  });

  await prisma.product.create({
    data: {
      name: 'Car',
      description: 'A fine automobile',
      company: {
        connect: {
          name: 'Globex',
        },
      },
    },
  });

  await prisma.product.create({
    data: {
      name: 'Printer',
      description: 'It prints things',
      company: {
        connect: {
          name: 'Initech',
        },
      },
    },
  });
};

export const createCustomers = async (prisma: PrismaClient) => {
  await prisma.customer.create({
    data: {
      username: 'User1',
      email: 'User1@gmail.com',
      products: {
        connect: [
          {
            name: 'Car',
          },
          {
            name: 'Dynamite',
          },
        ],
      },
    },
  });

  await prisma.customer.create({
    data: {
      username: 'User2',
      email: 'User2@gmail.com',
      products: {
        connect: { name: 'Printer' },
      },
    },
  });

  await prisma.customer.create({
    data: {
      username: 'User3',
      email: 'User3@gmail.com',
      products: {
        connect: [
          {
            name: 'Dynamite',
          },
          {
            name: 'Car',
          },
          {
            name: 'Printer',
          },
        ],
      },
    },
  });

  await prisma.customer.create({
    data: {
      username: 'User4',
      email: 'user4@gmail.com',
    },
  });
};

export const createAll = async (prisma: PrismaClient) => {
  await prisma.company.create({
    data: {
      name: 'Acme',
      products: {
        create: {
          name: 'Dynamite',
          description: 'It goes "boom"',
          customers: {
            create: [
              { username: 'User2', email: 'User2@gmail.com' },
              { username: 'User3', email: 'User3@gmail.com' },
            ],
          },
        },
      },
    },
  });

  await prisma.company.create({
    data: {
      name: 'Globex',
      products: {
        create: {
          name: 'Car',
          description: 'A fine automobile',
          customers: {
            create: { username: 'User1', email: 'User1@gmail.com' },
            connect: { username: 'User3' },
          },
        },
      },
    },
  });

  await prisma.company.create({
    data: {
      name: 'Initech',
      products: {
        create: {
          name: 'Printer',
          description: 'It prints things',
          customers: {
            connect: { username: 'User2' },
          },
        },
      },
    },
  });

  await prisma.customer.create({
    data: {
      username: 'User4',
      email: 'User4@gmail.com',
    },
  });
};

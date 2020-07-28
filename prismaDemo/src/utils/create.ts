import { PrismaClient } from '@prisma/client';

export const createCompanies = async (prisma: PrismaClient): Promise<void> => {
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

export const createProducts = async (prisma: PrismaClient): Promise<void> => {
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

export const createCustomers = async (prisma: PrismaClient): Promise<void> => {
  await prisma.customer.create({
    data: {
      username: 'user1',
      email: 'user1@gmail.com',
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
      username: 'user2',
      email: 'user2@gmail.com',
      products: {
        connect: { name: 'Printer' },
      },
    },
  });

  await prisma.customer.create({
    data: {
      username: 'user2',
      email: 'user2@gmail.com',
      products: {
        connect: { name: 'Dynamite' },
      },
    },
  });

  await prisma.customer.create({
    data: {
      username: 'user3',
      email: 'user3@gmail.com',
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
};

export const createAll = async (prisma: PrismaClient): Promise<void> => {
  await prisma.company.create({
    data: {
      name: 'Acme',
      products: {
        create: {
          name: 'Dynamite',
          description: 'It goes "boom"',
          customers: {
            create: [
              { username: 'user2', email: 'user2@gmail.com' },
              { username: 'user3', email: 'user3@gmail.com' },
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
            create: { username: 'user1', email: 'user1@gmail.com' },
            connect: { username: 'user3' },
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
            connect: { username: 'user2' },
          },
        },
      },
    },
  });
};

import {
  PrismaClient,
  CompanyCreateInput,
  CustomerCreateInput,
} from '@prisma/client';

const prisma = new PrismaClient();

const createCompany = async (input: CompanyCreateInput) => {
  await prisma.company.create({ data: input });
};

const findAllCompanies = async () => {
  return prisma.company.findMany({
    // Include relations
    include: {
      products: true,
    },
  });
};

const findAllProducts = async () => {
  return prisma.product.findMany({
    include: {
      customers: true,
    },
  });
};

const findAllCustomers = async () => {
  return prisma.customer.findMany({
    include: {
      products: true,
    },
  });
};

const createCustomer = async (input: CustomerCreateInput) => {
  return prisma.customer.create({
    data: input,
  });
};

const main = async (): Promise<void> => {
  // Create company without products
  const companyCreateInput: CompanyCreateInput = {
    name: 'Acme',
    products: {
      create: {
        name: 'Widget',
        description: 'A type of product',
      },
    },
  };
  await createCompany(companyCreateInput);
  // Get all companies
  const companies = await findAllCompanies();
  console.dir(companies, { depth: null });

  // Get all products
  const products = await findAllProducts();
  console.dir(products, { depth: null });

  // Create a customer and link to product
  const customerCreateInput: CustomerCreateInput = {
    username: 'admin',
    email: 'admin@gmail.com',
    products: {
      connect: {
        name: 'Widget',
      },
    },
  };
  await createCustomer(customerCreateInput);

  const customers = await findAllCustomers();
  console.dir(customers, { depth: null });
};

main()
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.error(error.stack);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.disconnect();
  });

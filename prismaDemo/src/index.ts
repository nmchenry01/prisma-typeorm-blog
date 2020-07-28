import { PrismaClient } from '@prisma/client';
import { createAll } from './utils/create';
import {
  findAllCustomers,
  findCustomerUsernamesForCompany,
  findCompaniesThatMakeCarsOrPrinters,
} from './utils/read';
import { updateProductDescription } from './utils/update';
import { deleteCustomer } from './utils/delete';
import { experimentalTransaction } from './utils/transaction';
import { rawSQLQuery } from './utils/rawSql';

const prisma = new PrismaClient();

const main = async (): Promise<void> => {
  // Seed data
  await createAll(prisma);

  // Find all customers and their products
  const customers = await findAllCustomers(prisma);
  console.dir(customers, { depth: null });

  // Find all customer usernames for a specific company (Acme)
  const usernames = await findCustomerUsernamesForCompany(prisma);
  console.dir(usernames, { depth: null });

  // Find companies that make cars or printers
  const companies = await findCompaniesThatMakeCarsOrPrinters(prisma);
  console.dir(companies, { depth: null });

  // Update product description
  const updatedProduct = await updateProductDescription(prisma);
  console.dir(updatedProduct, { depth: null });

  // Delete a customer (assumes there is a cascade relationship on fk)
  const deletedCustomer = await deleteCustomer(prisma);
  console.dir(deletedCustomer, { depth: null });

  // Experimental transaction API
  const results = await experimentalTransaction(prisma);
  console.dir(results, { depth: null });

  // Run a raw SQL query
  const rawSQLResult = await rawSQLQuery(prisma);
  console.dir(rawSQLResult, { depth: null });
};

main()
  .catch((error) => {
    console.error(error.stack);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.disconnect();
  });

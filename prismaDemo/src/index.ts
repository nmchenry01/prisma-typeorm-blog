import { PrismaClient } from '@prisma/client';
import { createAll } from './utils/create';
import {
  findAllCustomers,
  findCustomerUsernamesForCompany,
  findCompaniesThatMakeCarsOrPrinters,
} from './utils/read';
import { updateProductDescription } from './utils/update';
import { deleteCustomer } from './utils/delete';

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

  // Delete a company (assumes there is a cascade relationship on fk)
  const deletedCompany = await deleteCustomer(prisma);
  console.dir(deletedCompany, { depth: null });
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

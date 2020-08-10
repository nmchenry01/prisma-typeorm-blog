import { createConnection, Connection } from 'typeorm';
import { createAll } from './utils/create';
import {
  findAllCustomers,
  findCompanyByName,
  findCustomerUsernamesForCompany,
  findCompaniesThatMakeCarsOrPrinters,
} from './utils/read';
import { updateProductDescription } from './utils/update';
import { deleteCustomer } from './utils/delete';

let connection: Connection;

const main = async () => {
  // Create connection to DB using settings in ormconfig.json
  connection = await createConnection();

  // // Seed data
  // await createAll();

  // // Find all customers
  // const customers = await findAllCustomers();
  // console.dir(customers, { depth: null });

  // // Find company by name (Globex)
  // const company = await findCompanyByName();
  // console.dir(company, { depth: null });

  // // Find Customer usernames that are consumers of specific companies
  // const usernames = await findCustomerUsernamesForCompany();
  // console.dir(usernames, { depth: null });

  // // Find companies that make cars or printers
  // const companies = await findCompaniesThatMakeCarsOrPrinters();
  // console.dir(companies, { depth: null });

  // Update product description
  const updatedProduct = await updateProductDescription();
  console.dir(updatedProduct, { depth: null });

  // Delete a customer (assumes there is a cascade relationship on fk)
  const deletedCustomer = await deleteCustomer();
  console.dir(deletedCustomer, { depth: null });
};

main()
  .catch((error) => {
    console.error(error.stack);
    process.exit(1);
  })
  .finally(async () => {
    await connection.close();
  });

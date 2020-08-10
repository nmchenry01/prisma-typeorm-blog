import { createConnection, Connection } from 'typeorm';
import { createAll } from './utils/create';

let connection: Connection;

const main = async () => {
  // Create connection to DB using settings in ormconfig.json
  connection = await createConnection();

  // Seed data
  await createAll();
};

main()
  .catch((error) => {
    console.error(error.stack);
    process.exit(1);
  })
  .finally(async () => {
    await connection.close();
  });

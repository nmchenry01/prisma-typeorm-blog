# Prisma Demo

A basic demo of [Prisma 2](https://www.prisma.io/docs/) functionality including CRUD, migrations, transactions, and raw SQL queries.

## Running Locally

The following steps assume the docker-compose setup in the root of the repository is running:

1. Add a .env file to the `prisma/` folder with the environment variable `DATABASE_URL="postgresql://admin:password@localhost:5432/postgres?schema=public"`

2. Run `npm install` to install dependencies

3. Run `npm run generate` to generate a Prisma client

4. Run `npm run migrate` to apply the prisma schema to the local Postgres database  
 
5. Run `npm run build` and `npm start`. You should see console output indicating the demo was successful

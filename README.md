# Prisma vs TypeORM

The purpose of this repository is to demo some basic functionality using [Prisma 2](https://www.prisma.io/docs/) and [TypeORM](https://typeorm.io/#/).

The `prismaDemo` folder contains the Prisma 2 example, and the `typeormDemo` folder contains the TypeORM demo.

## Running Locally

A `docker-compose.yml` file is included in the root of this repository. Run `docker-compose up --build` (assuming the Docker daemon is installed/running) and a local version of Postgres and PGAdmin will be spun up. The username for PGAdmin is `pgadmin4@pgadmin.org` and the password is `password`. 

Once logged in to PGAdmin, you can connect to the database on port 5432 using the hostname `postgres` (the container/service name) with username `admin` and password `password`.

You can use the combination of Postgres/PGAdmin to run database queries/inspected the results if needed.
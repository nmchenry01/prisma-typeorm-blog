CREATE TABLE "Company" (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL UNIQUE,
  "createdAt" TIMESTAMP NOT NULL DEFAULT now()
);
CREATE TABLE "Product" (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL UNIQUE,
  description VARCHAR(255),
  "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
  "companyId" INTEGER NOT NULL,
  FOREIGN KEY ("companyId") REFERENCES "Company"(id)
);
CREATE TABLE "Customer" (
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(255) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  "createdAt" TIMESTAMP NOT NULL DEFAULT now()
);
CREATE TABLE "ProductToCustomer" (
  "productId" INTEGER NOT NULL,
  "customerId" INTEGER NOT NULL,
  PRIMARY KEY ("productId", "customerId"),
  FOREIGN KEY ("productId") REFERENCES "Product"(id) ON UPDATE CASCADE,
  FOREIGN KEY ("customerId") REFERENCES "Customer"(id) ON UPDATE CASCADE
);
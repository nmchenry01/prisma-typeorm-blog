CREATE TABLE "public"."Company" (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  "createdAt" TIMESTAMP NOT NULL DEFAULT now()
);
CREATE TABLE "public"."Product" (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  description VARCHAR(255),
  "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
  "productId" INTEGER NOT NULL,
  FOREIGN KEY ("productId") REFERENCES "public"."Company"(id)
);
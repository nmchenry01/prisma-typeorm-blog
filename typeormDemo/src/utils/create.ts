import { getRepository } from 'typeorm';
import { Company } from '../entity/company.entity';
import { Product } from '../entity/product.entity';
import { Customer } from '../entity/customer.entity';

export const createCompanies = async () => {
  const companyRepository = getRepository(Company);

  const acme = companyRepository.create({ name: 'Acme' });
  const globex = companyRepository.create({ name: 'Globex' });
  const initech = companyRepository.create({ name: 'Initech' });

  await companyRepository.save([acme, globex, initech]);
};

export const createProducts = async () => {
  const productRepository = getRepository(Product);
  const companyRepository = getRepository(Company);

  const acme = await companyRepository.findOne({ where: { name: 'Acme' } });
  const dynamite = productRepository.create({
    name: 'Dynamite',
    description: 'It goes "boom"',
  });
  dynamite.company = acme;

  const globex = await companyRepository.findOne({ where: { name: 'Globex' } });
  const car = productRepository.create({
    name: 'Car',
    description: 'A fine automobile',
  });
  car.company = globex;

  const initech = await companyRepository.findOne({
    where: { name: 'Initech' },
  });
  const printer = productRepository.create({
    name: 'Printer',
    description: 'It prints things',
  });
  printer.company = initech;

  await productRepository.save([dynamite, car, printer]);
};

export const createCustomers = async () => {
  const customerRepository = getRepository(Customer);
  const productRepository = getRepository(Product);

  const dynamite = await productRepository.findOne({
    where: { name: 'Dynamite' },
  });
  const car = await productRepository.findOne({
    where: {
      name: 'Car',
    },
  });
  const printer = await productRepository.findOne({
    where: {
      name: 'Printer',
    },
  });

  const user1 = customerRepository.create({
    username: 'User1',
    email: 'User1@gmail.com',
  });
  user1.products = [car, dynamite];

  const user2 = customerRepository.create({
    username: 'User2',
    email: 'User2@gmail.com',
  });
  user2.products = [printer];

  const user3 = customerRepository.create({
    username: 'User3',
    email: 'User3@gmail.com',
  });
  user3.products = [dynamite, car, printer];

  const user4 = customerRepository.create({
    username: 'User4',
    email: 'User4@gmail.com',
  });

  await customerRepository.save([user1, user2, user3, user4]);
};

export const createAll = async () => {
  const companyRepository = getRepository(Company);
  const customerRepository = getRepository(Customer);
  const productRepository = getRepository(Product);

  // Create all companies
  const acme = companyRepository.create({ name: 'Acme' });
  const globex = companyRepository.create({ name: 'Globex' });
  const initech = companyRepository.create({ name: 'Initech' });

  // Create all products
  const dynamite = productRepository.create({
    name: 'Dynamite',
    description: 'It goes "boom"',
  });
  dynamite.company = acme;

  const car = productRepository.create({
    name: 'Car',
    description: 'A fine automobile',
  });
  car.company = globex;

  const printer = productRepository.create({
    name: 'Printer',
    description: 'It prints things',
  });
  printer.company = initech;

  // Create all customers
  const user1 = customerRepository.create({
    username: 'User1',
    email: 'User1@gmail.com',
  });
  user1.products = [car, dynamite];

  const user2 = customerRepository.create({
    username: 'User2',
    email: 'User2@gmail.com',
  });
  user2.products = [printer];

  const user3 = customerRepository.create({
    username: 'User3',
    email: 'User3@gmail.com',
  });
  user3.products = [dynamite, car, printer];

  const user4 = customerRepository.create({
    username: 'User4',
    email: 'User4@gmail.com',
  });

  await companyRepository.save([acme, globex, initech]);
  await productRepository.save([dynamite, car, printer]);
  await customerRepository.save([user1, user2, user3, user4]);
};

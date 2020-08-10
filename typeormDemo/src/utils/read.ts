import { getRepository } from 'typeorm';
import { Customer } from '../entity/customer.entity';
import { Company } from '../entity/company.entity';

export const findAllCustomers = async () => {
  const customerRepository = getRepository(Customer);

  return customerRepository.find();
};

export const findCompanyByName = async () => {
  const companyRepository = getRepository(Company);

  return companyRepository.findOne({ where: { name: 'Globex' } });
};

export const findCustomerUsernamesForCompany = () => {
  const customerRepository = getRepository(Customer);

  return customerRepository
    .createQueryBuilder('customer')
    .innerJoinAndSelect('customer.products', 'products')
    .innerJoinAndSelect('products.company', 'company')
    .andWhere('company.name = :name', { name: 'Acme' })
    .select('customer.username')
    .getMany();
};

export const findCompaniesThatMakeCarsOrPrinters = async () => {
  const companyRepository = getRepository(Company);

  return companyRepository
    .createQueryBuilder('company')
    .innerJoinAndSelect('company.products', 'product')
    .andWhere('product.name IN (:...names)', { names: ['Car', 'Printer'] })
    .getMany();
};

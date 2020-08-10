import { getManager } from 'typeorm';
import { Product } from '../entity/product.entity';
import { Customer } from '../entity/customer.entity';
import { Company } from '../entity/company.entity';

export const executeTransaction = async () => {
  await getManager().transaction(async (transactionalEntityManager) => {
    const customerRepository = transactionalEntityManager.getRepository(
      Customer,
    );
    const companyRepository = transactionalEntityManager.getRepository(Company);

    const umbrella = companyRepository.create({ name: 'Umbrella' });
    await companyRepository.save(umbrella);

    const user5 = customerRepository.create({
      username: 'User5',
      email: 'User5@gmail.com',
    });
    await customerRepository.save(user5);
  });
};

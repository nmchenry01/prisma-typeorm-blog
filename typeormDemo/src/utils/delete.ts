import { getRepository } from 'typeorm';
import { Customer } from '../entity/customer.entity';

export const deleteCustomer = async () => {
  const customerRepository = getRepository(Customer);

  return customerRepository.delete({ username: 'User4' });
};

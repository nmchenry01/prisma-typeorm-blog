import { getRepository } from 'typeorm';
import { Company } from '../entity/company.entity';

export const rawSQLQuery = async () => {
  const companyRepository = getRepository(Company);

  return companyRepository.query('SELECT * FROM "company"');
};

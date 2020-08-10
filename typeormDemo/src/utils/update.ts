import { getRepository } from 'typeorm';
import { Product } from '../entity/product.entity';

export const updateProductDescription = async () => {
  const productRepository = getRepository(Product);

  return productRepository.update(
    { name: 'Printer' },
    { description: 'It works sometimes' },
  );
};

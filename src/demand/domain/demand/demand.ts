import { Customer } from '../customer/customer';
import { Property } from '../property/property';
import { Product } from '../product/product';
import { randomUUID } from 'crypto';

export class Demand {
  constructor(id?: string) {
    this.demandId = id === undefined ? randomUUID() : id;
  }

  demandId: string;
  customer: Customer;
  reason: string;
  property: Property;
  product: Product;
}

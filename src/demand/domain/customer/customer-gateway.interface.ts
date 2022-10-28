import { Customer } from './customer';

export interface CustomerGateway {
  getCustomerById(customerId: string): Promise<Customer>;
}

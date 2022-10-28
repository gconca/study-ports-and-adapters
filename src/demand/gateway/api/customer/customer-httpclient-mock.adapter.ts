import { Injectable } from '@nestjs/common';
import { Customer, CustomerProfile } from '../../../domain/customer/customer';
import { CustomerGateway } from '../../../domain/customer/customer-gateway.interface';
import { CustomerHttpclientResponse } from './customer-httpclient-response';

const CUSTOMER_TYPE_RESPONSE_BROKER = 0;
const CUSTOMER_TYPE_RESPONSE_BUYER = 1;
const CUSTOMER_TYPE_RESPONSE_SELLER = 2;

@Injectable()
export class CustomerHttpclienteMock implements CustomerGateway {
  async getCustomerById(customerId: string): Promise<Customer> {
    const customerResponse = await this.getCustomerFromRepository(customerId);
    return this.customerResponseToCustomer(customerResponse);
  }

  private customerResponseToCustomer(
    customerResponse: CustomerHttpclientResponse,
  ): Customer {
    return new Customer(
      customerResponse.customerId,
      customerResponse.customerName,
      this.convertCustomerTypeResponseToCustomerProfile(
        customerResponse.customerType,
      ),
    );
  }

  private convertCustomerTypeResponseToCustomerProfile(
    customerTypeResponse: number,
  ): CustomerProfile {
    switch (customerTypeResponse) {
      case CUSTOMER_TYPE_RESPONSE_BROKER:
        return CustomerProfile.BROKER;
      case CUSTOMER_TYPE_RESPONSE_BUYER:
        return CustomerProfile.BUYER;
      case CUSTOMER_TYPE_RESPONSE_SELLER:
        return CustomerProfile.SELLER;
      default:
        return CustomerProfile.BUYER;
    }
  }

  private async getCustomerFromRepository(
    customerId: string,
  ): Promise<CustomerHttpclientResponse> {
    const response = new CustomerHttpclientResponse();
    response.customerId = customerId;
    response.customerName = 'Mark Gates Jobs';
    response.customerType = 0;
    return response;
  }
}

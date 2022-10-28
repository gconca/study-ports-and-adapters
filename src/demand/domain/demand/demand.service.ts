import { Inject, Injectable } from '@nestjs/common';
import { Customer } from '../customer/customer';
import { CustomerGateway as CustomerApi } from '../customer/customer-gateway.interface';
import { Property } from '../property/property';
import { PropertyGateway as PropertyGateway } from '../property/property-gateway.interface';
import { Demand } from './demand';

@Injectable()
export class DemandService {
  constructor(
    @Inject('PROPERTY_REPOSITORY')
    private readonly propertyRepository: PropertyGateway,
    @Inject('CUSTOMER_REPOSITORY')
    private readonly customerRepository: CustomerApi,
  ) {}
  async requestDemand(demand: Demand) {
    demand.property = await this.getPropertyFromPropertyApi(demand.property.id);
    demand.customer = await this.getCustomerFromCustomerApi(demand.customer.id);
    console.log(demand);
  }

  private async getPropertyFromPropertyApi(propertyId: string): Promise<Property> {
    return this.propertyRepository.getPropertyById(propertyId);
  }

  private async getCustomerFromCustomerApi(
    customerId: string,
  ): Promise<Customer> {
    return this.customerRepository.getCustomerById(customerId);
  }
}

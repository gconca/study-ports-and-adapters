import { Body, Controller, Post } from '@nestjs/common';
import { Customer } from '../../domain/customer/customer';
import { Demand } from '../../domain/demand/demand';
import { DemandService } from '../../domain/demand/demand.service';
import { Property } from '../../domain/property/property';
import { CreateDemandDto } from './create-demand-dto';
import { ProductAdapter } from './product.adapter';

@Controller('demand')
export class DemandController {
  constructor(private readonly demandService: DemandService) {}

  @Post()
  create(@Body() create: CreateDemandDto) {
    const demand = new Demand();
    demand.customer = new Customer(create.customerId);
    demand.reason = create.reason;
    demand.property = new Property(create.propertyId);
    demand.product = ProductAdapter.fromOrigin(create.origin);
    this.demandService.requestDemand(demand);
  }
}

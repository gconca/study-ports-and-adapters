import { Module } from '@nestjs/common';
import { DemandController } from './gateway/controller/demand.controller';
import { CustomerHttpclienteMock } from './gateway/api/customer/customer-httpclient-mock.adapter';
import { DemandService } from './domain/demand/demand.service';
import { PropertyHttpclientMock } from './gateway/api/property/property-httpclient-mock.adapter';

@Module({
  controllers: [DemandController],
  providers: [
    DemandService,
    {
      provide: 'PROPERTY_REPOSITORY',
      useClass: PropertyHttpclientMock,
    },
    {
      provide: 'CUSTOMER_REPOSITORY',
      useClass: CustomerHttpclienteMock,
    },
  ],
})
export class DemandModule {}

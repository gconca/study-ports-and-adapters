import { Injectable } from '@nestjs/common';
import { Property, PropertyPortfolio } from '../../../domain/property/property';
import { PropertyGateway } from '../../../domain/property/property-gateway.interface';
import { PropertyHttpclientResponse as PropertyHttpclientResponse } from './property-httpclient-response';

@Injectable()
export class PropertyHttpclientMock implements PropertyGateway {
  async getPropertyById(propertyId: string): Promise<Property> {
    const response = await this.getMockProperty(propertyId);
    return this.propertyReponseToProperty(response);
  }

  private propertyReponseToProperty(
    propertyResponse: PropertyHttpclientResponse,
  ): Property {
    return new Property(
      propertyResponse.propertyId,
      propertyResponse.propertyName,
      propertyResponse.isRealStateProperty
        ? PropertyPortfolio.REAL_ESTATE
        : PropertyPortfolio.LOFT,
      propertyResponse.propertyUrl,
    );
  }

  private async getMockProperty(
    propertyId: string,
  ): Promise<PropertyHttpclientResponse> {
    const response = new PropertyHttpclientResponse();
    response.propertyId = propertyId;
    response.propertyName = 'Guanabara Ecoliving';
    response.propertyUrl = `https://somewebsite.com/${response.propertyId}`;
    response.isRealStateProperty = false;
    response.anotherRandomPropertyThatWeDontNeed = Math.random();
    return Promise.resolve(response);
  }
}

import { Property } from './property';

export interface PropertyGateway {
  getPropertyById(propertyId: string): Promise<Property>;
}

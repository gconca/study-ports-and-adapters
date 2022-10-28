export enum CustomerProfile {
  BUYER = 'buyer',
  SELLER = 'seller',
  BROKER = 'broker',
}

export class Customer {
  constructor(id: string, name?: string, profile?: CustomerProfile) {
    this.id = id;
    this.name = name;
    this.profile = profile;
  }

  id: string;
  name: string;
  profile: CustomerProfile;
}

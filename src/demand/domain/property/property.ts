export enum PropertyPortfolio {
  LOFT = 'loft',
  REAL_ESTATE = 'real_estate',
}

export class Property {
  constructor(
    id: string,
    name?: string,
    portfolio?: PropertyPortfolio,
    url?: string,
  ) {
    this.id = id;
    this.name = name;
    this.portfolio = portfolio;
    this.url = url;
  }

  id: string;
  name: string;
  portfolio: PropertyPortfolio;
  url: string;
}

import { Product } from '../../domain/product/product';

export class ProductAdapter {
  static fromOrigin(origin: string): Product {
    switch (origin) {
      case 'KNOW_MORE_DETAILS':
        return { name: 'KNOW MORE', feature: 'DETAILS' };
      case 'KNOW_MORE_APP':
        return { name: 'KNOW MORE', feature: 'APP' };
      case '123i':
        return { name: '123i', feature: 'PORTAL' };
      default:
        return { name: 'KNOW MORE', feature: 'DETAILS' };
    }
  }
}

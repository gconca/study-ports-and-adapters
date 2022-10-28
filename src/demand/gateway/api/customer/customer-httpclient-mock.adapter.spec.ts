import { CustomerHttpclienteMock } from './customer-httpclient-mock.adapter';

describe('CustomerAdapter', () => {
  it('should be defined', () => {
    expect(new CustomerHttpclienteMock()).toBeDefined();
  });
});

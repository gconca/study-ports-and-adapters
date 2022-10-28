import { PropertyHttpclientMock } from './property-httpclient-mock.adapter';

describe('PropertyAdapter', () => {
  it('should be defined', () => {
    expect(new PropertyHttpclientMock()).toBeDefined();
  });
});

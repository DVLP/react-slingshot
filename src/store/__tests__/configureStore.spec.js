const proxyquire = require('proxyquire').noPreserveCache();

const stubStoreDev = {};
const stubStoreProd = {};

const prevEnv = process.env.NODE_ENV;

process.env.NODE_ENV = 'development';
const configureStoreLoadDevelopment = proxyquire('../configureStore', { './configureStore.dev': stubStoreDev });

process.env.NODE_ENV = 'production';
const configureStoreLoadProduction = proxyquire('../configureStore', { './configureStore.prod': stubStoreProd });

process.env.NODE_ENV = '';
const configureStoreLoadUnknown = proxyquire('../configureStore', { './configureStore.dev': stubStoreDev });


process.env.NODE_ENV = prevEnv;
describe('store configurator', () => {
  it('should require a store for production environment', () => {
    configureStoreLoadProduction.should.equal(stubStoreProd);
  });

  it('should require a store for dev environment', () => {
    configureStoreLoadDevelopment.should.equal(stubStoreDev);
  });

  it('should require development version of store for unknown environment', () => {
    configureStoreLoadUnknown.should.equal(stubStoreDev);
  });
});

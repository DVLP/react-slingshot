import proxyquire from 'proxyquire';
import sinon from 'sinon';

const FAKE_STORE = { fake: 'store', dispatch: sinon.spy() };
const FAKE_INITIAL_STATE = { fake: 'initialState' };
const FAKE_ROOT_REDUCER = () => {};

const fakeStoreCreator = sinon.stub().returns(FAKE_STORE);
const fakeMiddleware = sinon.stub().returns(fakeStoreCreator);
const fakeApplyMiddleware = sinon.stub().returns(fakeMiddleware);
const fakeCreateStore = sinon.spy();

const stubRedux = {
  applyMiddleware: fakeApplyMiddleware,
  createStore: fakeCreateStore
};

const fakeSagaMiddleware = { run: sinon.spy() };

const stubReduxSaga = {
  END: sinon.spy(),
  default: sinon.stub().returns(fakeSagaMiddleware)
};

const configureStore = proxyquire('../configureStore.dev', {
  'redux': stubRedux,
  'redux-saga': stubReduxSaga,
  '../reducers': { default: FAKE_ROOT_REDUCER }
}).default;

describe('configureStore.dev default export', () => {
  it('returns a correctly configured store', () => {
    const prevWindow = global.window;
    global.window = {};

    const expectedStore = Object.assign({}, FAKE_STORE, {
      runSaga: fakeSagaMiddleware.run,
      close: sinon.match.func
    });

    const matcherSpy = sinon.spy();
    const store = configureStore(FAKE_INITIAL_STATE);
    matcherSpy(store);
    matcherSpy.should.have.been.calledWith(expectedStore);

    fakeApplyMiddleware.should.have.been.calledWith(fakeSagaMiddleware);
    fakeMiddleware.should.have.been.calledWith(fakeCreateStore);
    fakeStoreCreator.should.have.been.calledWith(FAKE_ROOT_REDUCER, FAKE_INITIAL_STATE);

    store.close();
    store.dispatch.should.have.been.calledWith(stubReduxSaga.END);

    global.window = prevWindow;
  });
});

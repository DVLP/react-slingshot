import proxyquire from 'proxyquire';
import sinon from 'sinon';
import { routerReducer } from 'react-router-redux';

const FAKE_COMBINED_REDUCER = 'I am a fake combined reducer';

const stubRedux = {
  combineReducers: sinon.stub().returns(FAKE_COMBINED_REDUCER)
};

const rootReducer = proxyquire('../index', { redux: stubRedux }).default;

describe('rootReducer', () => {
  it('is a combined router comprised of a routerReducer', () => {
    rootReducer.should.equal(FAKE_COMBINED_REDUCER);
    stubRedux.combineReducers.should.have.been.calledOnce;
    stubRedux.combineReducers.should.have.been.calledWith({
      routing: routerReducer
    });
  });
});

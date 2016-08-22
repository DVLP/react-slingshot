import { call, fork } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import * as types from '../../constants/actionTypes';

import rootSaga, { searchInGoogleExample, watchSearchInGoogleExample } from '../index';

describe('sagas', () => {
  describe('searchInGoogleExample', () => {
    it('navigates to the parameter query results', () => {
      const prevWindow = global.window;
      global.window = { location: null };

      const exampleParameter = 123;
      const expectedUrl = `https://www.google.co.uk/search?q=${exampleParameter}&oq=search+something&aqs=chrome..69i57.2111j0j4&sourceid=chrome&ie=UTF-8`;

      const iterator = searchInGoogleExample({ exampleParameter });

      iterator.next().value.should.equal(expectedUrl);
      window.location.should.equal(expectedUrl);

      iterator.next().done.should.be.true;

      global.window = prevWindow;
    });
  });

  describe('watchSearchInGoogleExample', () => {
    it('triggers searchInGoogleExample on EXAMPLE_NAMESPACE.PLACEHOLDER_ACTION action', () => {
      const iterator = watchSearchInGoogleExample();
      const expectedYield = call(takeEvery, types.EXAMPLE_NAMESPACE.PLACEHOLDER_ACTION, searchInGoogleExample);

      iterator.next().value.should.deep.equal(expectedYield);
      iterator.next().done.should.be.true;
    });
  });

  describe('root saga', () => {
    it('forks watchSearchInGoogleExample', () => {
      const iterator = rootSaga();
      const expectedYield = [fork(watchSearchInGoogleExample)];

      iterator.next().value.should.deep.equal(expectedYield);
      iterator.next().done.should.be.true;
    });
  });
});

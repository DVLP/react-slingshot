import {EXAMPLE_NAMESPACE} from '../actionTypes';

describe('action type constants', () => {
  it('should be correctly defined', () => {
    EXAMPLE_NAMESPACE.should.deep.equal({
      ERROR: 'ERROR',
      LOAD: 'LOAD',
      PLACEHOLDER_ACTION: 'PLACEHOLDER_ACTION',
      UPDATE: 'UPDATE'
    });
  });
});

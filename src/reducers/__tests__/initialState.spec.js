import initialState from '../initialState';

describe('initial state', () => {
  it('should be an empty object', () => {
    initialState.should.deep.equal({});
  });
});

import * as actions from '../placeholderActions';
import * as types from '../../constants/actionTypes';

describe('actions', () => {
  it('should create a placeholder action', () => {
    const exampleParameter = '123abc';
    const expectedAction = {
      type: types.EXAMPLE_NAMESPACE.PLACEHOLDER_ACTION,
      exampleParameter: exampleParameter
    };
    actions.exampleAction(exampleParameter).should.deep.equal(expectedAction);
  });
});

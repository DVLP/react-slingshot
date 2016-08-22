import * as types from '../constants/actionTypes';

export function exampleAction(exampleParameter) {
  return {type: types.EXAMPLE_NAMESPACE.PLACEHOLDER_ACTION, exampleParameter};
}

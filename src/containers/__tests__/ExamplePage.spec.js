import React from 'react';
import {shallow} from 'enzyme';
import ExampleSearchForm from '../../components/ExampleSearchForm';
import ExamplePage from '../ExamplePage';

describe('<ExamplePage />', () => {
  it('should contain the correct markup', () => {
    const wrapper = shallow( <ExamplePage /> );

    wrapper.node.should.deep.equal( <ExampleSearchForm /> );
  });
});

import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {exampleAction} from '../actions/placeholderActions';

export class ExampleFormComponent extends React.Component {
  constructor(props, context) {
    super(props, context);

    // bind this where necessary
    this.submit = this.submit.bind(this);
  }

  submit(event) {
    event.preventDefault();

    const exampleParameterInput = event.nativeEvent.target.elements['example-parameter'];
    const phrase = exampleParameterInput.value;

    this.props.exampleAction(phrase);
  }

  render() {
    return (
      <div>
        <h1 className="placeholder-title">Title</h1>
        <form className="placeholder-form" onSubmit={this.submit}>
          <div className="nwt-form-field" >
            <label htmlFor="exampleParameter"><p>Enter a value</p></label>
            <input id="exampleParameter" name="example-parameter" className="nwt-input" />
          </div>
          <input type="submit" className="nwt-button-primary" value="Submit" />
        </form>
      </div>
    );
  }
}

ExampleFormComponent.propTypes = {
  exampleAction: PropTypes.func.isRequired
};

const ExampleSearchForm = connect(null, { exampleAction })(ExampleFormComponent);
export default ExampleSearchForm;

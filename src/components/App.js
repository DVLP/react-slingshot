import React, { PropTypes } from 'react';
import { IndexLink } from 'react-router';

const App = (props) => {
  return (
    <div>
      <div className="placeholder-header">
        <IndexLink to="/">Home</IndexLink>
        <hr />
      </div>
      <article>
        {props.children}
      </article>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;

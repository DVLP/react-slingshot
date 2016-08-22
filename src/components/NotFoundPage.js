import React from 'react';
import { Link } from 'react-router';

const NotFoundPage = () => {
  return (
    <div>
      <h4 className="placeholder-title">404 Page Not Found</h4>
      <Link to="/"> Go back to homepage </Link>
      <br /><br />
      <div>
        <img className="placeholder-lost" src="https://ncjl.files.wordpress.com/2008/08/124-locke-02.jpg" />
      </div>
    </div>
  );
};

export default NotFoundPage;

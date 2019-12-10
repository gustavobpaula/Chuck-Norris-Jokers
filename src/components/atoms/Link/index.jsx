import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LinkTo = ({ className, title, to, children }) => (
  <Link className={className} to={to} title={title}>
    {children}
  </Link>
);

LinkTo.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

LinkTo.defaultProps = {
  className: 'link',
};

export default LinkTo;

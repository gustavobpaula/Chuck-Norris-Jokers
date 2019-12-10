import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LinkTo = ({ title, to, children }) => (
  <Link to={to} title={title}>
    {children}
  </Link>
);

LinkTo.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default LinkTo;

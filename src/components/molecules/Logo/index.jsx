import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../../assets/images/chuck-norris.svg';
import { Image, Link } from '../../atoms';

const Logo = ({ height, width, maxHeight, maxWidth }) => (
  <Link title="Home" to="/">
    <Image
      height={height}
      maxHeight={maxHeight}
      maxWidth={maxWidth}
      width={width}
      src={logo}
      alt="Chuck Norris Logo"
    />
  </Link>
);

Logo.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  maxHeight: PropTypes.string,
  maxWidth: PropTypes.string,
};

Logo.defaultProps = {
  maxHeight: '100px',
  maxWidth: '100%',
  height: 'auto',
  width: 'auto',
};

export default Logo;

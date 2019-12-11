import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../../assets/images/chuck-norris.svg';
import { Image, Typography } from '../../atoms';
import * as Styled from './style';

const Logo = ({ className, height, width, maxHeight, maxWidth }) => (
  <Styled.Link className={className} title="Home" to="/">
    <Image
      height={height}
      maxHeight={maxHeight}
      maxWidth={maxWidth}
      width={width}
      src={logo}
      alt="Chuck Norris Logo"
    />
    <Typography variant="logo">Chuck &quot;Joke&quot; Norris</Typography>
  </Styled.Link>
);

Logo.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  maxHeight: PropTypes.string,
  maxWidth: PropTypes.string,
};

Logo.defaultProps = {
  className: 'logo',
  maxHeight: '100px',
  maxWidth: '100%',
  height: 'auto',
  width: 'auto',
};

export default Logo;

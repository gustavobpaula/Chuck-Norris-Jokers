import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styled';

const Image = ({ src, alt, height, width, maxHeight, maxWidth, ...rest }) => (
  <Styled.Image
    src={src}
    alt={alt}
    height={height}
    maxHeight={maxHeight}
    maxWidth={maxWidth}
    width={width}
    {...rest}
  />
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
  maxHeight: PropTypes.string,
  maxWidth: PropTypes.string,
};

Image.defaultProps = {
  maxHeight: '100%',
  maxWidth: '100%',
  height: 'auto',
  width: 'auto',
};

export default Image;

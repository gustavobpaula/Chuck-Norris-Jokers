import React from 'react';
import PropTypes from 'prop-types';
import loading from '../../../assets/images/loading.gif';
import { Image } from '../../atoms';

const Loading = ({ className, width, height, maxWidth, maxHeight }) => (
  <Image
    className={className}
    src={loading}
    alt="Loading"
    height={height}
    maxHeight={maxHeight}
    maxWidth={maxWidth}
    width={width}
  />
);

Loading.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  maxHeight: PropTypes.string,
  maxWidth: PropTypes.string,
};

Loading.defaultProps = {
  className: 'logo',
  maxHeight: '100px',
  maxWidth: '100%',
  height: 'auto',
  width: 'auto',
};

export default Loading;

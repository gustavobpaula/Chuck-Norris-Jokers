import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style';

const CenterMiddle = ({ children }) => (
  <Styled.Center>{children}</Styled.Center>
);

CenterMiddle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CenterMiddle;

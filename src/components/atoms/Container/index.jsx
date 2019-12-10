import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style';

const Container = ({ children }) => (
  <Styled.Container>{children}</Styled.Container>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;

import React from 'react';
import PropTypes from 'prop-types';
import { Header } from '../../organisms';
import { Container } from '../../atoms';

const Default = ({ children }) => (
  <>
    <Header />
    <Container>{children}</Container>
  </>
);

Default.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Default;

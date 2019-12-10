import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style';

const Card = ({ children }) => <Styled.Card>{children}</Styled.Card>;

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;

import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '../../atoms';
import * as Styled from './style';

const ContentJoke = ({ children }) => (
  <Styled.Joke>
    <Typography variant="joke" component="h1">
      {children}
    </Typography>
  </Styled.Joke>
);

ContentJoke.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContentJoke;

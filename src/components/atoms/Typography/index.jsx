import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style';

const Typography = ({ component, variant, children, ...rest }) => (
  <Styled.Typography as={component} variant={variant} {...rest}>
    {children}
  </Styled.Typography>
);

Typography.defaultProps = {
  variant: 'paragraph',
  component: 'span',
};

Typography.propTypes = {
  component: PropTypes.string,
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
};

export default Typography;

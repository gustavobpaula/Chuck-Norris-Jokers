import React from 'react';
import PropTypes from 'prop-types';
import { Card, Typography, Link } from '../../atoms';
import * as Styled from './style';

const Shelf = ({ items, gridLg, gridMd, gridSm }) => (
  <Styled.Shelf gridLg={gridLg} gridMd={gridMd} gridSm={gridSm}>
    {items.map(item => (
      <Link key={item} to="/teste">
        <Card>
          <Typography variant="category">{item}</Typography>
        </Card>
      </Link>
    ))}
  </Styled.Shelf>
);

Shelf.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  gridLg: PropTypes.number,
  gridMd: PropTypes.number,
  gridSm: PropTypes.number,
};

Shelf.defaultProps = {
  gridLg: 4,
  gridMd: 3,
  gridSm: 2,
};

export default Shelf;

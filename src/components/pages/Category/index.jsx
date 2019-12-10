import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Creators as RandomActions } from 'store/ducks/random';
import PropTypes from 'prop-types';
import { Header } from '../../organisms';
import { Container, Card, Typography } from '../../atoms';
import { ContentJoke } from '../../molecules';
import * as Styled from './style';

function Category({ match }) {
  const dispatch = useDispatch();
  const joke = useSelector(state => state.random);

  const category = match?.params?.id;

  useEffect(() => {
    RandomActions.fetchRandomByCategory(dispatch, category);
  }, []);

  const handleClick = () => {
    RandomActions.fetchRandomByCategory(dispatch, category);
  };

  return (
    <>
      <Header />
      <Container>
        <ContentJoke>
          {joke.loading || !joke.payload.value
            ? 'Loading...'
            : joke.payload.value}
        </ContentJoke>
        <Styled.Button onClick={handleClick}>
          <Card>
            <Typography variant="button">See another joke</Typography>
          </Card>
        </Styled.Button>
        <Styled.Link to="/" title="Home">
          <Card>
            <Typography variant="button">Choose another category</Typography>
          </Card>
        </Styled.Link>
      </Container>
    </>
  );
}

Category.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Category;

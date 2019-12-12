import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Creators as RandomActions } from 'store/ducks/random';
import PropTypes from 'prop-types';
import { Card, Typography } from '../../atoms';
import { ContentJoke, Loading } from '../../molecules';
import { NotFound } from '../../organisms';
import { Default as Template } from '../../templates';
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
    <Template>
      {joke.loading && (
        <ContentJoke>
          <Loading height="60" />
        </ContentJoke>
      )}

      {joke.error && <NotFound />}

      {!joke.loading && joke.payload?.value && (
        <ContentJoke>{joke.payload.value}</ContentJoke>
      )}

      {!joke.error && (
        <Styled.Actions>
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
        </Styled.Actions>
      )}
    </Template>
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

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Creators as RandomActions } from 'store/ducks/random';
import PropTypes from 'prop-types';
import { Card, Typography } from '../../atoms';
import { ContentJoke, Loading } from '../../molecules';
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
      <ContentJoke>
        {joke.loading || !joke.payload.value ? (
          <Loading height="60px" />
        ) : (
          joke.payload.value
        )}
      </ContentJoke>
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

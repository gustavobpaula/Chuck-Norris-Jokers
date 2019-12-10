import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Creators as RandomActions } from 'redux-flow/ducks/random';

import * as Styled from './style';

function Home() {
  const dispatch = useDispatch();
  const random = useSelector(state => state.random);

  useEffect(() => {
    RandomActions.fetchRandom(dispatch);
  }, []);

  console.log(random);

  return (
    <Styled.Componet>
      <h1>Hello World</h1>
    </Styled.Componet>
  );
}

export default Home;

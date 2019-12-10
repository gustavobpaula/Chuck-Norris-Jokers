import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Creators as CategoriesActions } from 'store/ducks/categories';

import * as Styled from './style';
import { Header } from '../../organisms';

function Home() {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);

  useEffect(() => {
    CategoriesActions.fetchCategories(dispatch);
  }, []);

  return (
    <>
      <Header />
      <Styled.Componet>
        <h1>Hello World</h1>
        {categories.payload.map(category => (
          <p key={category}>{category}</p>
        ))}
      </Styled.Componet>
    </>
  );
}

export default Home;

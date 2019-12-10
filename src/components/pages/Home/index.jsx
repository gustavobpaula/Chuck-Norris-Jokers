import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Creators as CategoriesActions } from 'store/ducks/categories';
import { Header } from '../../organisms';
import { Container } from '../../atoms';

function Home() {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);

  useEffect(() => {
    CategoriesActions.fetchCategories(dispatch);
  }, []);

  return (
    <>
      <Header />
      <Container>
        {categories.payload.map(category => (
          <p key={category}>{category}</p>
        ))}
      </Container>
    </>
  );
}

export default Home;

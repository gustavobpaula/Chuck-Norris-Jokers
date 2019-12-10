import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Creators as CategoriesActions } from 'store/ducks/categories';
import { Header, Shelf } from '../../organisms';
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
        <Shelf items={categories.payload} />
      </Container>
    </>
  );
}

export default Home;

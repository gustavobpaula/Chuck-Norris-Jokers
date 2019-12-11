import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Creators as CategoriesActions } from 'store/ducks/categories';
import { Shelf } from '../../organisms';
import { Default as Template } from '../../templates';

function Home() {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);

  useEffect(() => {
    CategoriesActions.fetchCategories(dispatch);
  }, []);

  return (
    <Template>
      <Shelf items={categories.payload} />
    </Template>
  );
}

export default Home;

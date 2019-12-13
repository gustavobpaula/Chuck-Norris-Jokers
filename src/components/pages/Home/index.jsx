import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Creators as CategoriesActions } from 'store/ducks/categories';
import { Shelf, NotFound } from '../../organisms';
import { Default as Template } from '../../templates';
import { Loading } from '../../molecules';
import { CenterMiddle } from '../../atoms';

function Home() {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);

  useEffect(() => {
    CategoriesActions.fetchCategories(dispatch);
  }, []);

  return (
    <Template>
      {categories.loading && (
        <CenterMiddle>
          <Loading height="200" />
        </CenterMiddle>
      )}

      {categories.error && <NotFound />}

      {categories.payload && !categories.loading && (
        <Shelf items={categories.payload} />
      )}
    </Template>
  );
}

export default Home;

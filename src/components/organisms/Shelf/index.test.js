import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Shelf from './index';
import categories from '../../../../__mocks__/categories';

describe('<Shelf />', () => {
  it('should mount properly', async () => {
    const wrapper = mount(
      <BrowserRouter>
        <Shelf items={categories} />
      </BrowserRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });
});

import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Header from './index';

describe('<Header />', () => {
  it('should mount properly', async () => {
    const wrapper = mount(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });
});

import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Logo from './index';

describe('<Logo />', () => {
  it('should mount properly', async () => {
    const wrapper = mount(
      <BrowserRouter>
        <Logo />
      </BrowserRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });
});

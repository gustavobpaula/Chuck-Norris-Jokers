import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Link from './index';

describe('<Link />', () => {
  it('should mount properly', async () => {
    const wrapper = mount(
      <BrowserRouter>
        <Link title="Link Component" to="/">
          Component Link
        </Link>
      </BrowserRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });
});

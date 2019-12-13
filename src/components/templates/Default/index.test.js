import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Default from './index';

describe('<Default />', () => {
  it('should mount properly', async () => {
    const wrapper = mount(
      <BrowserRouter>
        <Default>Component</Default>
      </BrowserRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should has a h1 child', async () => {
    const wrapper = mount(
      <BrowserRouter>
        <Default>
          <h1>Component</h1>
        </Default>
      </BrowserRouter>
    );

    expect(wrapper.find('h1')).toMatchSnapshot();
  });
});

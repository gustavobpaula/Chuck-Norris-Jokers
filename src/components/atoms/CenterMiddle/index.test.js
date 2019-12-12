import React from 'react';
import { mount } from 'enzyme';

import CenterMiddle from './index';

describe('<CenterMiddle />', () => {
  it('should mount properly', async () => {
    const wrapper = mount(
      <CenterMiddle>
        <h1>Centered Content</h1>
      </CenterMiddle>
    );

    expect(wrapper).toMatchSnapshot();
  });
});

import React from 'react';
import { mount } from 'enzyme';

import Card from './index';

describe('<Card />', () => {
  it('should mount properly', async () => {
    const wrapper = mount(<Card>Card Component</Card>);

    expect(wrapper).toMatchSnapshot();
  });
});

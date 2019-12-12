import React from 'react';
import { mount } from 'enzyme';
import Typography from './index';

describe('<Typography />', () => {
  it('should mount properly', async () => {
    const wrapper = mount(<Typography>Component Typography</Typography>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should has a h1 tag', async () => {
    const wrapper = mount(
      <Typography component="h1">Component Typography</Typography>
    );

    expect(wrapper.find('h1')).toMatchSnapshot();
  });
});

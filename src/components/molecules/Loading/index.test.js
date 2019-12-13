import React from 'react';
import { mount } from 'enzyme';
import Loading from './index';

describe('<Loading />', () => {
  it('should mount properly', async () => {
    const wrapper = mount(<Loading />);

    expect(wrapper).toMatchSnapshot();
  });
});

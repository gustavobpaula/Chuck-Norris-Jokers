import React from 'react';
import { mount } from 'enzyme';
import ContentJoke from './index';

describe('<ContentJoke />', () => {
  it('should mount properly', async () => {
    const wrapper = mount(
      <ContentJoke>
        A Handicapped parking sign does not signify that this spot is for
        handicapped people. It is actually in fact a warning, that the spot
        belongs to Chuck Norris and that you will be handicapped if you park
        there
      </ContentJoke>
    );

    expect(wrapper).toMatchSnapshot();
  });
});

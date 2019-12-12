import React from 'react';
import { mount } from 'enzyme';
import chuckNorris from '../../../assets/images/chuck-norris.svg';
import Image from './index';

describe('<Image />', () => {
  it('should mount properly', async () => {
    const wrapper = mount(<Image alt="Chuck Norris" src={chuckNorris} />);

    expect(wrapper).toMatchSnapshot();
  });
});

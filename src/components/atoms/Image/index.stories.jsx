import React from 'react';
import Image from './index';
import chuckNorris from '../../../assets/images/chuck-norris.svg';

export default {
  component: Image,
  title: 'Atoms/Image',
};

export const element = () => <Image alt="Chuck Norris" src={chuckNorris} />;

element.story = {
  name: 'Default',
};

export const customSizes = () => (
  <Image alt="Chuck Norris" src={chuckNorris} height="200px" />
);

customSizes.story = {
  name: 'Custom Sizes',
};

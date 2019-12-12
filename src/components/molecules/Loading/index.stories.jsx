import React from 'react';
import Loading from './index';

export default {
  component: Loading,
  title: 'Molecules/Loading',
};

export const element = () => <Loading />;

element.story = {
  name: 'Default',
};

export const customSizes = () => <Loading width="50px" />;

customSizes.story = {
  name: 'Custom Sizes',
};

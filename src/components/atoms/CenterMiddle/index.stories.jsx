import React from 'react';
import CenterMiddle from './index';

export default {
  component: CenterMiddle,
  title: 'Atoms/CenterMiddle',
};

export const element = () => (
  <CenterMiddle>
    <h1>Centered Content</h1>
  </CenterMiddle>
);
element.story = {
  name: 'Default',
};

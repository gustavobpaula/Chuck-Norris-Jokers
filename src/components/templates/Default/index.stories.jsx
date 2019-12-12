import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Default from './index';

export default {
  component: Default,
  title: 'Organisms/Template',
};

export const element = () => (
  <BrowserRouter>
    <Default>
      <h1>Component Template</h1>
    </Default>
  </BrowserRouter>
);

element.story = {
  name: 'Default',
};

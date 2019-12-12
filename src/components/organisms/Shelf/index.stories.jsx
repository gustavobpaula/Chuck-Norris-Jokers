import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Shelf from './index';

export default {
  component: Shelf,
  title: 'Organisms/Shelf',
};

const items = [
  'animal',
  'career',
  'celebrity',
  'dev',
  'explicit',
  'fashion',
  'food',
  'history',
  'money',
  'movie',
  'music',
  'political',
  'religion',
  'science',
  'sport',
  'travel',
];

export const element = () => (
  <BrowserRouter>
    <Shelf items={items} />
  </BrowserRouter>
);

element.story = {
  name: 'Default',
};

export const customGrid = () => (
  <BrowserRouter>
    <Shelf items={items} gridLg={3} gridMd={2} gridSm={1} />
  </BrowserRouter>
);

customGrid.story = {
  name: 'Custom Grid',
};

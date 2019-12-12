import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Logo from './index';

export default {
  component: Logo,
  title: 'Molecules/Logo',
};

export const element = () => (
  <BrowserRouter>
    <Logo />
  </BrowserRouter>
);

element.story = {
  name: 'Default',
};

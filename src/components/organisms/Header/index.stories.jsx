import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './index';

export default {
  component: Header,
  title: 'Organisms/Header',
};

export const element = () => (
  <BrowserRouter>
    <Header />
  </BrowserRouter>
);

element.story = {
  name: 'Default',
};

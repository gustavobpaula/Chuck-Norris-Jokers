import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Link from './index';

export default {
  component: Link,
  title: 'Atoms/Link',
};

export const element = () => (
  <BrowserRouter>
    <Link title="Link Component" to="/">
      Component Link
    </Link>
  </BrowserRouter>
);

element.story = {
  name: 'Default',
};

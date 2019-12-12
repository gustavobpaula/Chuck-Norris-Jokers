import React from 'react';
import Card from './index';

export default {
  component: Card,
  title: 'Atoms/Card',
};

export const element = () => <Card>Card Component</Card>;
element.story = {
  name: 'Default',
};

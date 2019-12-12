import React from 'react';
import Typography from './index';

export default {
  component: Typography,
  title: 'Atoms/Typography',
};

export const element = () => (
  <Typography component="h1">Component Typography</Typography>
);
element.story = {
  name: 'Default',
};

export const logo = () => (
  <Typography variant="logo" component="h2">
    Logo Variant
  </Typography>
);
logo.story = {
  name: 'Logo Variant',
};

export const joke = () => (
  <Typography variant="joke" component="h2">
    Joke Variant
  </Typography>
);
joke.story = {
  name: 'Joke Variant',
};

export const category = () => (
  <Typography variant="category" component="h2">
    Category Variant
  </Typography>
);
category.story = {
  name: 'Category Variant',
};

export const button = () => (
  <Typography variant="button" component="h2">
    Button Variant
  </Typography>
);
button.story = {
  name: 'Button Variant',
};

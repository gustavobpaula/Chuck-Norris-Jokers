import React from 'react';
import ContentJoke from './index';

export default {
  component: ContentJoke,
  title: 'Molecules/ContentJoke',
};

export const element = () => (
  <ContentJoke>
    A Handicapped parking sign does not signify that this spot is for
    handicapped people. It is actually in fact a warning, that the spot belongs
    to Chuck Norris and that you will be handicapped if you park there
  </ContentJoke>
);

element.story = {
  name: 'Default',
};

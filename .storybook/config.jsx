import { addDecorator, configure } from '@storybook/react';
import * as React from 'react';
import GlobalStyle from '../src/globalStyle';
import * as Styled from './style'

const req = require.context('../src/components', true, /\.stories\.(mdx|jsx)$/);

const withGlobal = (cb) => (
  <>
    <GlobalStyle />
    <Styled.Content>
      {cb()}
    </Styled.Content>
  </>
);

addDecorator(withGlobal);
configure(req, module);

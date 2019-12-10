import { addDecorator, configure } from '@storybook/react';
import * as React from 'react';
import GlobalStyle from '../src/globalStyle';

const req = require.context('../src/components', true, /\.stories\.(mdx|jsx)$/);

const withGlobal = (cb) => (
	<>
		<GlobalStyle />
		{cb()}
	</>
);

addDecorator(withGlobal);
configure(req, module);

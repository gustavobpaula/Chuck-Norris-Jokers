import React from 'react';
import { Loading } from '../../molecules';
import { Default as Template } from '../../templates';
import * as Styled from './style';

const Load = () => (
  <Template>
    <Styled.ContentLoader>
      <Loading height="200px" />
    </Styled.ContentLoader>
  </Template>
);

export default Load;

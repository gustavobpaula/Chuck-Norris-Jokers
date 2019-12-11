import React from 'react';
import { Loading } from '../../molecules';
import { CenterMiddle } from '../../atoms';
import { Default as Template } from '../../templates';

const Load = () => (
  <Template>
    <CenterMiddle>
      <Loading height="200px" />
    </CenterMiddle>
  </Template>
);

export default Load;

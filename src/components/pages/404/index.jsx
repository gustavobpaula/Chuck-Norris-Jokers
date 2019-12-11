import React from 'react';
import { Default as Template } from '../../templates';
import notFound from '../../../assets/images/404.gif';
import { Image, CenterMiddle } from '../../atoms';

const NotFound = () => (
  <Template>
    <CenterMiddle>
      <Image src={notFound} alt="404 - Not Found" />
    </CenterMiddle>
  </Template>
);

export default NotFound;

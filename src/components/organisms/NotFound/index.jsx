import React from 'react';
import notFound from '../../../assets/images/404.gif';
import { Image, CenterMiddle } from '../../atoms';

const NotFound = () => (
  <CenterMiddle>
    <Image src={notFound} alt="404 - Not Found" />
  </CenterMiddle>
);

export default NotFound;

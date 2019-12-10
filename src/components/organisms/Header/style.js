import styled from 'styled-components';
import designSystem from '../../../designSystem';
import { Logo as ComponentLogo } from '../../molecules';

export const Header = styled.header`
  background-color: ${designSystem.get('colors.color1')};
  min-height: 100px;
  padding: 20px 0 0 0;
  text-align: center;
  width: 100%;
`;

export const Logo = styled(ComponentLogo)`
  display: block;
  line-height: 0;
`;

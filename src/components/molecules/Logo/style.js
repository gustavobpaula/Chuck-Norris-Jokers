import styled from 'styled-components';
import designSystem from '../../../designSystem';
import { Link as LinkComponent } from '../../atoms';

export const Link = styled(LinkComponent)`
  align-items: center;
  color: ${designSystem.get('colors.color4')};
  display: flex;
  justify-content: center;
  text-decoration: none;
`;

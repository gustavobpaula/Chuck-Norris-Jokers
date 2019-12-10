import styled from 'styled-components';
import designSystem from '../../../designSystem';

export const Card = styled.div`
  background-color: ${designSystem.get('colors.color3')};
  border-radius: 15px;
  cursor: pointer;
  padding: 20px;
  text-align: center;
  transition: background-color 0.3s ease, transform 0.3s ease;
  z-index: 1;

  &:hover {
    background-color: ${designSystem.get('colors.color2')};
    transform: scale(1.05);
    z-index: 2;
  }
`;

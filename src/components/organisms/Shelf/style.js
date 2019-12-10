import styled from 'styled-components';
import designSystem from '../../../designSystem';

export const Shelf = styled.article`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(${props => props.gridSm}, 1fr);
  margin: 50px 0;

  @media (min-width: ${designSystem.get('display.sizes.tablet')}) {
    grid-template-columns: repeat(${props => props.gridMd}, 1fr);
  }

  @media (min-width: ${designSystem.get('display.sizes.desktop')}) {
    grid-template-columns: repeat(${props => props.gridLg}, 1fr);
  }
`;

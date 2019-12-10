import styled from 'styled-components';

export const Image = styled.img`
  height: ${props => props.height};
  max-height: ${props => props.maxHeight};
  max-width: ${props => props.maxWidth};
  width: ${props => props.width};
`;

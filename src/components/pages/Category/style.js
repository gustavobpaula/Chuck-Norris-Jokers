import styled from 'styled-components';
import { Link as LinkComponent } from '../../atoms';

export const Actions = styled.div`
  display: flex;
  margin: 40px 0;
`;

export const Link = styled(LinkComponent)`
  color: inherit;
  margin-left: 20px;
  text-decoration: none;
`;

export const Button = styled.button`
  background-color: transparent;
  border: 0;
  color: inherit;
  font-family: inherit;
  outline: none;
`;

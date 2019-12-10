import styled from 'styled-components';
import designSystem from '../../../designSystem';

export const Container = styled.div`
  margin: 0 auto;
  max-width: ${designSystem.get('display.sizes.monitor')};
  width: calc(100% - 30px);
`;

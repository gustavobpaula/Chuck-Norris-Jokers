import styled, { css } from 'styled-components';
import { pxToRem } from '../../../utils';
import designSystem from '../../../designSystem';

const variants = {
  title: () => css`
    display: block;
    font-size: ${pxToRem(26)};
    font-weight: 500;
    margin-bottom: 20px;
    margin-top: 80px;
    text-align: center;

    @media (min-width: ${designSystem.get('display.sizes.desktop')}) {
      font-size: ${pxToRem(32)};
    }
  `,

  joke: () => css`
    font-size: ${pxToRem(18)};
    line-height: ${pxToRem(26)};
    margin-bottom: 15px;
    text-align: center;
  `,

  paragraph: () => css`
    font-size: ${pxToRem(16)};
  `,
};

export const Typography = styled.span`
  ${props => variants[props.variant]}
`;

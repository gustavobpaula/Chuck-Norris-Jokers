import styled, { css } from 'styled-components';
import { pxToRem } from '../../../utils';
import designSystem from '../../../designSystem';

const variants = {
  logo: () => css`
    font-size: ${pxToRem(50)};

    @media (max-width: ${designSystem.get('display.sizes.phone')}) {
      font-size: ${pxToRem(25)};
    }
  `,

  joke: () => css`
    font-size: ${pxToRem(60)};
    text-shadow: -1px 0 ${designSystem.get('colors.color3')},
      0 1px ${designSystem.get('colors.color3')},
      1px 0 ${designSystem.get('colors.color3')},
      0 -1px ${designSystem.get('colors.color3')};

    @media (max-width: ${designSystem.get('display.sizes.phone')}) {
      font-size: ${pxToRem(30)};
    }
  `,

  category: () => css`
    font-size: ${pxToRem(40)};

    @media (max-width: ${designSystem.get('display.sizes.phone')}) {
      font-size: ${pxToRem(22)};
    }
  `,

  button: () => css`
    font-size: ${pxToRem(30)};

    @media (max-width: ${designSystem.get('display.sizes.phone')}) {
      font-size: ${pxToRem(22)};
    }
  `,
};

export const Typography = styled.span`
  ${props => variants[props.variant]}
`;

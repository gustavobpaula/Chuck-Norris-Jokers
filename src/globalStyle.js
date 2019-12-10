import { createGlobalStyle } from 'styled-components';
import designSystem from './designSystem';

export default createGlobalStyle`
  body {
    color: ${designSystem.get('colors.txtPrimary')};
    font-family: ${designSystem.get('type.fontFamily.ubuntu')};
    font-size: ${designSystem.get('type.baseFontSize')};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  * {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  #app { /* stylelint-disable-line */
    display: flex;
    flex-direction: column;

    &.modal-blur { /* stylelint-disable-line */
      filter: blur(2px);
    }
  }
`;

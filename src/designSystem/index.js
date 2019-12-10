import DesignSystem from 'design-system-utils';

const designTokens = {
  type: {
    baseFontSize: '16px',

    sizes: {
      xs: '16px',
      s: '20px',
      base: '30px',
      m: '36px',
      l: '42px',
      xl: '50px',
      xxl: '58px',
    },

    fontFamily: {
      system:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans"',
      sans: '"Open Sans", sans-serif',
      serif: 'Georgia, "Times New Roman", Times, serif',
      mono: 'Menlo, Monaco, "Courier New", monospace',
      bangers: '"Bangers", cursive',
    },

    lineHeight: {
      headings: 1.1,
    },

    fontWeight: {
      normal: 300, // Useful to set here if using anything other than `normal`
      bold: 'bold', // Useful to set here when bold webfonts come as 400 font-weight.
      headings: 'bold', // instead of browser default, bold
    },
  },

  display: {
    sizes: {
      monitor: '1200px', // xl
      desktop: '992px', // lg
      tablet: '768px', // md
      phone: '576px', // sm
    },
  },

  colors: {
    color1: '#e8e8e8',
    color2: '#5588a3',
    color3: '#145374',
    color4: '#00334e',
  },
};

export default new DesignSystem(designTokens);

import designSystem from '../designSystem';

/**
 * Convert px to Rem.
 *
 * @param {number} px - px value.
 * @returns {string} - rem value.
 */
const pxToRem = px => {
  const baseFontSize = designSystem
    .get('type.baseFontSize')
    .match(/([0-9])\d+/)[0];

  return `${px / baseFontSize}rem`;
};

export default pxToRem;

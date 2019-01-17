import { css } from "styled-components";

const sizes = {
  xs: 480,
  sm: 736,
  md: 980,
  lg: 1280,
  xl: 1690
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media only screen and (max-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export default media;

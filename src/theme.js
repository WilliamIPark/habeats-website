import { css } from 'styled-components';

export default {
  colors: {
    mainPink: "#FF327B",
    mainPurple: "#272838",
  },
};

const sizes = {
  desktop: 992,
  tablet: 1400,
  phone: 576,
}

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `

  return acc
}, {})
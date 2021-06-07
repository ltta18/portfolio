import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
html {
  scroll-behavior: smooth;
  background: gray;
 }

  h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  font-family: 'Open Sans';
}
`;

export default GlobalStyles;

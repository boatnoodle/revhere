import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@font-face {
font-family:"anuphan";
src: url("fonts/Anuphan-Bold.otf");
src: url("fonts/Anuphan-Light.otf");
src: url("fonts/Anuphan-Medium.otf");
src: url("fonts/Anuphan-Regular.otf");
font-display:swap;font-style:normal;font-weight:400;
}

body {
  font-family: anuphan, sans-serif;
  font-weight: 400;
  font-style: normal;
  margin: 0;
}
`;

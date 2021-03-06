import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

html,
body {
  width: 100%; 

height:100%;

  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}
body {
  background-color: ${({ theme }) => theme?.colors?.body}; 
  color: ${({ theme }) => theme.colors.text};   

  overflow: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`;

export default GlobalStyle;

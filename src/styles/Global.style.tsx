import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after{
   margin: 0;
   padding: 0;
   box-sizing : border-box ;
}
    body {
  margin: 0;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${theme.colors.font}
}
a{
    text-decoration: none;
    color: ${theme.colors.font};
}
ul{
    list-style: none;
}
button{
   border-color : unset ;
   border: none;
}
section{
    background-color: #1a1a29;
    padding: 100px 0;
}
`

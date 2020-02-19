import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: #f1f1f1;
    -webkit-font-smooothing: antialiased !important;
  }

  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: Roboto, Arial, Helvetica, sans-serif;
  }

  a{
    text-decoration: none;
    color: #222;
  }

  .navSuperior {
    background: #0f1f56;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: left;
  }
`;

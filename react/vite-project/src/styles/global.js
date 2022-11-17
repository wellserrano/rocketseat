import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${ ({theme}) => theme.COLORS.BACKGROUND_800 };
    color: ${ ({theme}) => theme.COLORS.WHITE };

    -webkit-font-smoothing: antialiased;
  }

  body, button, input, textarea {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }



`


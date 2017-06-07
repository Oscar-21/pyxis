import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0; 
  }

  body {
    font-family: 'Crimson Text', serif;
  }

 

  body.fontLoaded {
    font-family: Lato, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }  
  
  input, button, submit { 
    border:none; 
  } 
  
  p,
  label {
    font-family: Lato, sans-serif;
    line-height: 1.5em;
  }
`;

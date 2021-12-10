import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root{
    --background-black:#000000;
    --background-grey: #121212;
    --background-footer:#181818;

    --text: #ffffff;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{ 
    @media(max-width: 1080px){
      font-size:93,75%;
    }

    @media(max-width:720px){
      font-size: 87,5%;
    }
  }

  body{
    background: var(--background-grey);
    -webkit-font-smoothing: antialiased;
    
    color:var(--text);
    font-family: 'Montserrat', sans-serif;
  }
 
`

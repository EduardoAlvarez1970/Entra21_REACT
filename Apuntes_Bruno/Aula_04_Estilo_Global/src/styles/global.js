import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

* {
    box-sizing: border-box;
}


body {
    border: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;

    font-family: 'Open Sans', sans-serif;
    text-align: center;
    
    /*background: #ffffff;*/

    background-color: ${({ theme }) => theme.COLORS.VERDECITO};
    color: ${({ theme }) => theme.COLORS.WHITE};
}

#root {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    padding: 64px, 0px, 0px, 0px;
    background: #FFFFFF; 
}

`




import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --red: #E52E4D;
        --blue: #5429cc;

        --blue-light: #6933ff;

        --text-title: #363f5f;
        --text-body: #969cb3;

        --background: #f0f2f5;
        --shape: #FFFFFF;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    //  font-size: 16px PADRÃO (Desktop)
    html {
        @media(max-width: 1080px){
            font-size: 93.75%; // 15px
        }

        //Usar porcentagem por questões de acessibilidade

        @media(max-width: 720px){
            font-size: 87.5%; // 14px
        }
    }

    //REM = 1rem = font-size -> (Por padrao - 16px)

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;
    }

    [disable] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    
`
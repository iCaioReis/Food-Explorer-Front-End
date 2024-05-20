import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${({ theme }) => theme.COLORS.DARK_400};
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        -webkit-font-smoothing: antialiased;
    }
    
    body, input, button, textarea {
        font-family: 'Roboto Slab', serif;
        font-size: 16px;
        outline: none;
    }
    
    a {
        text-decoration: none;
    }

    button, a{
        cursor: pointer;
        transition: filter 0.2s;
    }
    button:hover, a:hover{
        filter: brightness(0.9);
    }

    .poppins_100_medium{
        font-family: 'poppins', serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 170%;
    }
    .poppins_200_medium{
        font-family: 'poppins', serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 160%;
    }
    .poppins_300_regular{
        font-family: 'poppins', serif;
        font-weight: 700;
        font-size: 24px;
        line-height: 140%;
    }
    .poppins_300_bold{
        font-family: 'poppins', serif;
        font-weight: 700;
        font-size: 24px;
        line-height: 140%;
    }
`
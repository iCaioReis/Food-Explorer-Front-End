import { createGlobalStyle } from "styled-components";
import { DEVICE_BREACKPOINTS } from "./deviceBreackPoints";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        font-size: 16px;

        @media (max-width: ${DEVICE_BREACKPOINTS.MD}){
            font-size: 12px;
        } 
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
        font-size: .875rem;
        line-height: 170%;
    }
    .poppins_200_medium{
        font-family: 'poppins', serif;
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 160%;
    }
    .poppins_400_medium{
        font-family: 'poppins', serif;
        font-weight: 500;
        font-size: 2rem;
        line-height: 140%;
    }
    .poppins_500_medium{
        font-family: 'poppins', serif;
        font-weight: 400;
        font-size: 2.5rem;
        line-height: 140%;
    }
    .poppins_300_regular{
        font-family: 'poppins', serif;
        font-weight: 400;
        font-size: 1.5rem;
        line-height: 140%;
    }
    .poppins_300_bold{
        font-family: 'poppins', serif;
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 140%;
    }
    .roboto_smallest_regular{
        font-family: 'Roboto', serif;
        font-weight: 400;
        font-size: .75rem;
        line-height: 160%;
    }
    .roboto_smaller_regular{
        font-family: 'Roboto', serif;
        font-weight: 400;
        font-size: .875rem;
        line-height: 160%;
    }
    .roboto_smaller_regular{
        font-family: 'Roboto', serif;
        font-weight: 400;
        font-size: .875rem;
        line-height: 160%;
    }
    .roboto_smaller_bold{
        font-family: 'Roboto', serif;
        font-weight: 700;
        font-size: .875rem;
        line-height: 160%;
    }
    .roboto_small_spaced{
        font-family: 'Roboto', serif;
        font-weight: 400;
        font-size: 1rem;
        line-height: 160%;
    }
    .roboto_small_regular{
        font-family: 'Roboto', serif;
        font-weight: 400;
        font-size: 1rem;
        line-height: 100%;
    }
    .roboto_big_bold{
        font-family: 'Roboto', serif;
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 160%;
    }
    .roboto_bigger_bold{
        font-family: 'Roboto', serif;
        font-weight: 700;
        font-size: 1.5rem;
    }
    .roboto_biggest_regular{
        font-family: 'Roboto', serif;
        font-weight: 700;
        font-size: 2rem;
        line-height: 160%;
    }
    .roboto_giant_bold{
        font-family: 'Roboto', serif;
        font-weight: 700;
        font-size: 2.625rem;
    }
`
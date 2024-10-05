import styled from "styled-components";

import { DEVICE_BREACKPOINTS } from "../../styles/deviceBreackPoints";

export const Container = styled.div`
    height: 100vh;
    max-width: 1024px;

    margin: 0 auto;
    padding: 1rem;

    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: ${DEVICE_BREACKPOINTS.SM}){
        flex-direction: column;
        justify-content: center;
    }
`;

export const Logo = styled.div`
    display: flex;
    gap: 1.25rem;
    align-items: center;

    > h1 {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    @media (max-width: ${DEVICE_BREACKPOINTS.SM}){
       > h1 {
            font-size: 3rem;
       } 
    }
`;

export const Form = styled.form`
    width: 29.75rem;

    padding: 4rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    border-radius: 1rem;

    background-color: ${({theme}) => theme.COLORS.DARK_700};

    > h1 {
        text-align: center;
    }

    > div {
        display: flex;
        flex-direction: column;
        gap: .5rem;
        
        span{
            color: ${({ theme }) => theme.COLORS.LIGHT_400};
        }
    }

    > a {
        margin: 0 auto;

        border-style: none;
        
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    @media (max-width: ${DEVICE_BREACKPOINTS.SM}){
        background: none;

        > h1 {
            display: none;
        }
    }
`;

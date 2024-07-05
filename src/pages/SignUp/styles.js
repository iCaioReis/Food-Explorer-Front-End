import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    max-width: 1024px;

    margin: 0 auto;

    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const Logo = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`;

export const Form = styled.form`
    width: 476px;

    padding: 64px;

    display: flex;
    flex-direction: column;
    gap: 32px;

    border-radius: 16px;

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

`;

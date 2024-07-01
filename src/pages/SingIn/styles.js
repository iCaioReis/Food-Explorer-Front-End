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
    gap: 1.25rem;
    align-items: center;

    > h1 {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
`;

export const Form = styled.form`
    width: 29.75rem;

    padding: 4rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    border-radius: 1rem;

    > h1 {
        text-align: center;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
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
`;

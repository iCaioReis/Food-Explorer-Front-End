import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    min-height: 100vh;

    padding-bottom: 77px;
`;

export const Content = styled.div`
    max-width: 1122px;
    margin: 24px auto;
    
    > a {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        align-items: center;
        display: flex;
        gap: 6px;
    }

    > h1 {
        margin-top: 24px;
    }
`;

export const Form = styled.form`
    margin-top: 32px;

    gap: 32px;
    display: flex;
    flex-direction: column;

    > div {
        display: flex;
        gap: 32px;
    }

    > button {
        margin-left: auto;
        
        width: fit-content;

        background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
    }
`;

export const Ingredients = styled.div`
    width: 100%;

    display: flex;
    gap: 1rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_900};

    border-radius: 8px;
    
    > span {
        height: 2rem;
        padding: .5rem 1rem;

        border-radius: 8px;

        background-color: ${({ theme }) => theme.COLORS.LIGHT_600};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
`;
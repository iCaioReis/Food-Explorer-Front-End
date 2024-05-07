import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Logo = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;

    > h1 {
        font-family: "Roboto", sans-serif;
        font-weight: 700;
        font-style: normal;
        font-size: 42px;
    }
`;

export const Form = styled.form`
    padding: 64px;
    background-color: ${({theme}) => theme.COLORS.DARK_700};

    >span{
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 16px;
        color: ${({theme}) => theme.COLORS.LIGHT_400};
    }
`;

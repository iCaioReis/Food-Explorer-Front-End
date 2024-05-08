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

    border-radius: 16px;

    height: 540px;
    width: 476px;

    > h1 {
        font-family: "Roboto", sans-serif;
        font-weight: 700;
        font-style: normal;
        font-size: 42px;

        text-align: center;

        margin-bottom: 32px;
    }

    > span{
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 16px;
        color: ${({theme}) => theme.COLORS.LIGHT_400};
    }

    input {
        margin-top: 8px;
        margin-bottom: 32px;
    }

    button{
        margin-bottom: 32px;
    }
`;

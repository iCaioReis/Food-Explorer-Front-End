import styled from "styled-components";

export const Container = styled.div`

`;

export const Content = styled.div`
    max-width: 1122px;
    margin: 24px auto 0;

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
    }
`;
import styled from "styled-components";

export const Container = styled.header`
    background-color: ${({ theme }) => theme.COLORS.DARK_600};
`;

export const Content = styled.div`
    max-width: 1122px;
    display: flex;
    justify-content: space-between;

    > input {
        max-width: 580px;
    }

    > button {
        width: 216px;
    }
`;

export const Logo = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;

    > h1 {
        font-family: "Roboto", sans-serif;
        font-weight: 700;
        font-style: normal;
        font-size: 28px;
    }
`;
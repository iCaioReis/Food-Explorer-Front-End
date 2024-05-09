import styled from "styled-components";

export const Container = styled.header`
    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    display: flex;
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
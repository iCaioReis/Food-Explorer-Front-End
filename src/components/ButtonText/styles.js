import styled from "styled-components"

export const Container = styled.button`
    width: 100%;

    border-style: none;
    background: none;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
`;
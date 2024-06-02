import styled from "styled-components";

export const Container = styled.div`
    display: flex; 
    align-items: center;
    gap: 14px;

> button {
    background: none;
    border: none;

    width: 24px;
    height: 24px;

    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
`;
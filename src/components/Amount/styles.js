import styled from "styled-components";

export const Container = styled.div`
    display: flex; 
    align-items: center;
    gap: 0.875rem;

> button {
    background: none;
    border: none;

    width: 1.5rem;
    height: 1.5rem;

    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
`;
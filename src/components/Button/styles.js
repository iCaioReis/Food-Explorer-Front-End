import styled from "styled-components"

export const Container = styled.button`
    width: 100%;
    padding: 12px 24px;

    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

    border-style: none;
    border-radius: 5px;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
`;
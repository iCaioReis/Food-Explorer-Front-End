import styled from "styled-components";

export const Container = styled.div`
    width: 305px;
    height: 462px;

    background-color: ${({ theme }) => theme.COLORS.DARK_200};

    border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};;
    border-radius: 8px;
`;
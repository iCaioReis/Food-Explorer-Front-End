import styled from "styled-components";

export const Container = styled.footer`
    height: 77px;

    display: flex;
    justify-content: center;
    
    background-color: ${({ theme }) => theme.COLORS.DARK_600};
`;

export const Content = styled.div`
    width: 100%;
    max-width: 1122px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
        display: flex;
        align-items: center;
        gap: 10px;

        h1 {
            color: ${({ theme }) => theme.COLORS.LIGHT_700};
        }
    }

    > p {
        color: ${({ theme }) => theme.COLORS.LIGHT_200};
    }
`;